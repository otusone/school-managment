const mongoose = require('mongoose');
const Teacher = require('../models/teacher');
const AdminSchool = require('../models/adminSchool');
const Timetable = require('../models/timeTable');

const { generateSchoolTeacherId } = require('../utils/adminSchool');
const bcrypt = require("bcryptjs");

exports.onboardTeacher = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { _id: schoolId, role, schoolCode, adminSchoolId } = req.user;
        const { firstName, middleName, lastName, email, password, phone, address, specializations } = req.body;

        if (role !== 'school_admin') {
            return res.status(403).json({ message: 'Only School Admin can onboard new Teacher' });
        }

        const existingTeacher = await Teacher.findOne({ email }).session(session);
        if (existingTeacher) {
            return res.status(400).json({ message: 'Teacher with this email already exists' });
        }

        let processedSpecializations = Array.isArray(specializations) ? specializations : [specializations];
        if (typeof specializations === 'string') {
            try {
                processedSpecializations = JSON.parse(specializations);
            } catch (err) {
                console.error("Error parsing specializations:", err);
                return res.status(400).json({ message: 'Invalid format for specializations' });
            }
        }
        const teacherId = await generateSchoolTeacherId(schoolCode, session);
        const avatar_url = "";
        const newTeacher = new Teacher({
            teacherId: teacherId,
            name: {
                firstName,
                middleName,
                lastName,
            },
            email,
            password,
            contactInfo: {
                phone,
                address,
            },
            school: schoolId,
            adminSchoolId,
            schoolCode,
            specializations: processedSpecializations,
            avatar: avatar_url || ""
        });

        await newTeacher.save({ session });

        await session.commitTransaction();
        session.endSession();

        const token = await newTeacher.generateAuthToken();

        return res.status(201).json({
            message: 'Teacher onboarded successfully',
            teacher: {
                _id: newTeacher._id,
                teacherId: newTeacher.teacherId,
                name: newTeacher.name,
                email: newTeacher.email,
                contactInfo: newTeacher.contactInfo,
                specializations: newTeacher.specializations,
                token,
            },
        });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};


exports.loginTeacher = async (req, res) => {
    try {
        const { email, password, schoolCode } = req.body;

        const teacher = await Teacher.findOne({ email, schoolCode });
        if (!teacher) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, teacher.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = await teacher.generateAuthToken();

        return res.status(200).json({
            message: 'Login successful',
            teacher: {
                _id: teacher._id,
                teacherId: teacher.teacherId,
                name: teacher.name,
                email: teacher.email,
                contactInfo: teacher.contactInfo,
                specializations: teacher.specializations,
                token,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

exports.getTeacherProfile = async (req, res) => {
    try {
        const teacherId = req.user._id;

        const teacher = await Teacher.findById(teacherId)
            .select('-token -updatedAt')
        // .populate('subjects.subjectId', 'name')
        // .populate('subjects.classId', 'name');

        if (!teacher) {
            return res.status(404).json({ message: 'Teacher not found' });
        }

        return res.status(200).json({
            message: 'Teacher profile retrieved successfully',
            teacher: teacher,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};


exports.getTimetableByTeacher = async (req, res) => {
    try {
        const { _id: teacherId } = req.user;
        const timetables = await Timetable.find({ teacher: teacherId })
            .select('-isDeleted -createdAt -updatedAt')
            .populate('class subject  school', '-_id -createdAt -updatedAt -isDeleted -schoolDetails -permissions -desc -email -mobile -address -alternateMobile -role -lastLogin -registrationDate -token -active')

        if (timetables.length === 0) {
            return res.status(404).json({ message: 'No timetables found for this teacher.' });
        }

        return res.status(200).json({
            message: 'Timetables retrieved successfully.',
            timetables
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};



const mongoose = require('mongoose');
const Parent = require('../models/parent');
const Student = require('../models/student');
const bcrypt = require("bcryptjs");
const { generateStudentParentId } = require('../utils/adminSchool');
const cloudinary = require("../config/cloudinary");
const { generatePassword } = require("../utils/common")


exports.onboardParent = async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { _id: schoolId, role, schoolCode } = req.user;
        if (role !== 'school_admin') {
            return res.status(403).send({ error: 'Access denied. Only school admins can onboard students.' });
        }

        const { father, mother, guardian, students } = req.body;
        const { email, firstName } = guardian;
        const existingParent = await Parent.findOne({ "guardian.email": email }).session(session);
        if (existingParent) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({ message: 'Parent with this guardian email already exists.' });
        }

        // console.log("students",students);
        // const studentObjectIds = students.map(studentId => new mongoose.Types.ObjectId(studentId));

        const parentId = await generateStudentParentId(schoolCode, session);
        const password = generatePassword(firstName);

        const parent = new Parent({
            parentId: parentId,
            school: schoolId,
            father,
            mother,
            guardian,
            students,
            password,
        });

        const studentUpdates = students.map(studentId => {
            return Student.findByIdAndUpdate(
                studentId,
                { parent: parent._id },
                { new: true, session }
            );
        });

        await Promise.all(studentUpdates);
        await parent.save({ session });

        const token = await parent.generateAuthToken();

        await session.commitTransaction();
        session.endSession();

        const loginCredentials = {
            email,
            password,
            parentId
        }
        res.status(201).json({
            message: 'Parent onboarded successfully',
            parent,
            token,
            loginCredentials
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        console.error('Error onboarding parent:', error);
        res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

exports.loginParent = async (req, res) => {
    try {
        const { email, password, parentId } = req.body;

        const parent = await Parent.findOne({ "guardian.email": email, parentId });
        if (!parent) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, parent.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = await parent.generateAuthToken();
        parent.lastLogin = new Date();
        await parent.save();
        
        return res.status(200).json({
            message: 'Login successful',
            parent: {
                _id: parent._id,
                parentId: parent.parentId,
                relations: parent?.guardian.relations,
                firstName: parent?.guardian.firstName,
                lastName: parent?.guardian.lastName,
                email: parent?.guardian.email,
                mobile: parent?.guardian.mobile,
                token,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

exports.viewParentDetails = async (req, res) => {
    try {
        const { parentId } = req.params;
        const parent = await Parent.findOne({ parentId }).select("-tokens -isDeleted")
            .populate({
                path: 'students',
                select: 'studentId name email class dateOfBirth gender contactInfo avatar',
                populate: {
                    path: 'class',
                    select: 'className classSection classTeacher'
                }
            })
            .exec();

        if (!parent) {
            return res.status(404).json({ message: 'Parent not found.' });
        }

        res.status(200).json({
            message: 'Parent details fetched successfully',
            parent
        });
    } catch (error) {
        res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

exports.parentProfile = async (req, res) => {
    try {
        const { _id: parentId } = req.user;
        const parent = await Parent.findById(parentId).select("-tokens")
            .populate({
                path: 'students',
                select: 'studentId name email class dateOfBirth gender contactInfo avatar',
                populate: {
                    path: 'class',
                    select: 'className classSection'
                }
            })
            .exec();

        if (!parent) {
            return res.status(404).json({ message: 'Parent profile not found' });
        }

        res.status(200).json({
            message: 'Parent profile retrieved successfully',
            parent
        });

    } catch (error) {
        res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};
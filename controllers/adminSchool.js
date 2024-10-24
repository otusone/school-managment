const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const AdminSchool = require('../models/adminSchool');
const Teacher = require('../models/teacher');
const Student = require('../models/student');
const Class = require('../models/class');
const Parent = require('../models/parent');

const { generateSchoolAdminId } = require('../utils/adminSchool');
const cloudinary = require("../config/cloudinary");

exports.createAdminSchool = async (req, res) => {
    try {
        const { email, password, mobile, address, schoolName, alternateMobile, desc } = req.body;
        if (req.user.role !== 'super_admin') {
            return res.status(403).json({ message: 'Only Super Admin can onboard new School Admins' });
        }

        const existingAdmin = await AdminSchool.findOne({ email, schoolName });
        if (existingAdmin) {
            return res.status(400).json({ message: 'A School Admin with this email and school name already exists' });
        }

        let logo_url = "";
        if (req.file) {
            try {
                const imageName = "PLANET_EDU_" + Math.floor(Math.random() * 10) + req.file.originalname.split('.')[0];
                console.log("imageName", imageName);
                console.log("imageName", imageName);
                const result = await cloudinary.uploader.upload(req.file.path, {
                    public_id: imageName,
                });
                logo_url = result.secure_url || "";
            } catch (uploadError) {
                return res.status(500).json({ message: 'Logo upload failed. Please try again.', error: uploadError.message });
            }
        }
        const normalizeSchoolName = (schoolName) => {
            return schoolName.replace(/\s+/g, '').toUpperCase();
        };
        const adminSchoolId = await generateSchoolAdminId();
        const randomDigits = Math.floor(100 + Math.random() * 900);
        const schoolCode = normalizeSchoolName.slice(0, 4)+ randomDigits + adminSchoolId.slice(-3);

        const newAdminSchool = new AdminSchool({
            adminSchoolId,
            schoolName,
            schoolCode,
            email,
            mobile,
            password,
            address,
            alternateMobile,
            logo: logo_url,
            desc,
            role: 'school_admin',
            permissions: ['manage_students', 'manage_teachers', 'manage_parents', 'manage_classes', 'manage_subjects', 'manage_notifications'],
        });

        await newAdminSchool.save();

        const token = await newAdminSchool.generateAuthToken();

        return res.status(201).json({
            message: 'School Admin created successfully',
            adminSchool: {
                _id: newAdminSchool._id,
                adminSchoolId: newAdminSchool.adminSchoolId,
                schoolName: newAdminSchool.schoolName,
                schoolCode: newAdminSchool.schoolCode,
                email: newAdminSchool.email,
                mobile: newAdminSchool.mobile,
                address: newAdminSchool.address,
                role: newAdminSchool.role,
                logo:newAdminSchool.logo,
                token,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later' });
    }
};

exports.updateAdminSchoolLogo = async (req, res) => {
    try {
        const { adminSchoolId } = req.params;

        const adminSchool = await AdminSchool.findOne({ adminSchoolId });
        if (!adminSchool) {
            return res.status(404).json({ message: 'School Admin not found' });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No logo file provided' });
        }

        if (adminSchool.logo) {
            const publicId = adminSchool.logo.split('/').pop().split('.')[0];
            try {
                await cloudinary.uploader.destroy(publicId);
            } catch (error) {
                return res.status(500).json({ message: 'Failed to delete old logo', error: error.message });
            }
        }

        let newLogoUrl;
        try {
            const imageName = "PLANET_EDU_" + Math.floor(Math.random() * 10) + req.file.originalname.split('.')[0];
            const result = await cloudinary.uploader.upload(req.file.path, {
                public_id: imageName,
            });
            newLogoUrl = result.secure_url || "";
        } catch (uploadError) {
            return res.status(500).json({ message: 'New logo upload failed', error: uploadError.message });
        }

        adminSchool.logo = newLogoUrl;
        await adminSchool.save();

        return res.status(200).json({ message: 'Logo updated successfully', newLogoUrl });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error' });
    }
};

exports.loginAdminSchool = async (req, res) => {
    try {
        const { email, password, schoolCode } = req.body;

        if (!email || !password || !schoolCode) {
            return res.status(400).json({ message: 'Please provide email, password, and school code' });
        }

        const adminSchool = await AdminSchool.findOne({ email, schoolCode });
        if (!adminSchool) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, adminSchool.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = await adminSchool.generateAuthToken();
        adminSchool.lastLogin = new Date();
        await adminSchool.save();

        return res.status(200).json({
            message: 'Login successful',
            adminSchool: {
                _id: adminSchool._id,
                adminSchoolId: adminSchool.adminSchoolId,
                schoolName: adminSchool.schoolName,
                schoolCode: adminSchool.schoolCode,
                email: adminSchool.email,
                mobile: adminSchool.mobile,
                role: adminSchool.role,
                token,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

exports.getAllTeacher = async (req, res) => {
    try {
        const { _id: schoolId, role, adminSchoolId } = req.user;

        if (role !== 'school_admin') {
            return res.status(403).json({ message: 'Access denied. Only School Admin can access the teacher list.' });
        }

        const teachers = await Teacher.find({ adminSchoolId, school: schoolId })
            .select('-token -specializations -school -schoolCode -adminSchoolId -subjects -updatedAt -isDeleted -lastLogin -createdAt');

        if (teachers.length === 0) {
            return res.status(404).json({ message: 'No teachers found for this school.' });
        }

        return res.status(200).json({
            message: 'Teacher list retrieved successfully.',
            teachers,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};





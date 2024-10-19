const bcrypt = require("bcryptjs");
const AdminSchool = require('../models/adminSchool');
const { generateSchoolAdminId } = require('../utils/adminSchool');
const cloudinary = require("../config/cloudinary");

exports.createAdminSchool = async (req, res) => {
    try {
        const { email, password, mobile, address, schoolName, alternateMobile, desc } = req.body;
        console.log("data", email, password, mobile, address, schoolName, alternateMobile, desc);
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
                const result = await cloudinary.uploader.upload(req.file.path, {
                    public_id: imageName,
                });
                logo_url = result.secure_url || "";
            } catch (uploadError) {
                return res.status(500).json({ message: 'Logo upload failed. Please try again.', error: uploadError.message });
            }
        }

        const adminSchoolId = await generateSchoolAdminId();
        console.log("adminSchoolId",adminSchoolId)
        const randomDigits = Math.floor(100 + Math.random() * 900);
        const schoolCode = schoolName.slice(0, 4).toUpperCase() + randomDigits + adminSchoolId.slice(-3);

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

        //   await newAdminSchool.save();

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

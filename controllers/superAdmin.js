const SuperAdmin = require('../models/superAdmin');
const bcrypt = require("bcryptjs");

const { generateSuperAdminId } = require('../utils/superAdminId');

exports.createSuperAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Name, email, and password are required' });
        }

        const existingSuperAdmin = await SuperAdmin.findOne({ email });
        if (existingSuperAdmin) {
            return res.status(400).json({ message: 'Super admin with this email already exists' });
        }

        const superAdminId = await generateSuperAdminId();

        const newSuperAdmin = new SuperAdmin({
            superAdminId,
            name,
            email,
            password,
            role: 'super_admin',
            permissions: ['manage_schools', 'view_reports', 'manage_system_settings'],
        });

        await newSuperAdmin.save();

        return res.status(201).json({
            message: 'Super Admin created successfully',
            superAdmin: {
                _id:newSuperAdmin._id,
                superAdminId: newSuperAdmin.superAdminId,
                name: newSuperAdmin.name,
                email: newSuperAdmin.email,
                role: newSuperAdmin.role,
                permissions: newSuperAdmin.permissions
            }
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later' });
    }
};

exports.loginSuperAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const superAdmin = await SuperAdmin.findOne({ email });
        if (!superAdmin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, superAdmin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = await superAdmin.generateAuthToken();
        superAdmin.lastLogin = new Date(); 
        await superAdmin.save();

        return res.status(200).json({
            message: 'Logged in successfully',
            token,
            superAdmin: {
                _id:superAdmin._id,
                superAdminId: superAdmin.superAdminId,
                name: superAdmin.name,
                email: superAdmin.email,
                role: superAdmin.role,
                permissions: superAdmin.permissions
            }
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later' });
    }
};

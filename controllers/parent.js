const mongoose = require('mongoose');
const Parent = require('../models/parent');
const bcrypt = require('bcrypt');
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

        const studentObjectIds = students.map(studentId => mongoose.Types.ObjectId(studentId));

        console.log("studentObjectIds",studentObjectIds);
        const parentId = await generateStudentParentId(schoolCode,session);
        const password = generatePassword(firstName);

        const parent = new Parent({
            parentId: parentId,
            school: schoolId,
            father,
            mother,
            guardian,
            students: studentObjectIds,
            password,
        });

        // Save the parent document within the transaction
        await parent.save({ session });

        // Generate auth token
        const token = await parent.generateAuthToken();

        // Commit the transaction
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            message: 'Parent onboarded successfully',
            parent,
            token
        });

    } catch (error) {
        // Rollback the transaction in case of an error
        await session.abortTransaction();
        session.endSession();

        console.error('Error onboarding parent:', error);
        res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};




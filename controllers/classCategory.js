const ClassCategory = require('../models/classCategory');

exports.addClassCategory = async (req, res) => {
    try {
        const { className} = req.body;
        const existingClass = await ClassCategory.findOne({ className });
        if (existingClass) {
            return res.status(400).json({ message: 'Class with this name  already exists.' });
        }

        const newClass = new ClassCategory({
            className,
        });

        await newClass.save();

        return res.status(201).json({
            message: 'Class Category added successfully.',
            class: {
                _id: newClass._id,
                className: newClass.className,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

exports.getAllClassCategories = async (req, res) => {
    try {
        const classCategories = await ClassCategory.find().select("-isDeleted -updatedAt -createdAt");
        
        if (classCategories.length === 0) {
            return res.status(404).json({ message: 'No Class categories found.' });
        }

        return res.status(200).json({
            message: 'Class categories  found successfully.',
            classCategories
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

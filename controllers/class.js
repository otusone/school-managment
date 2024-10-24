const Class = require('../models/class');

exports.addClass = async (req, res) => {
    try {
        const { className, classSection ,classTeacher,school} = req.body;
        const existingClass = await Class.findOne({ className, classSection,school });
        if (existingClass) {
            return res.status(400).json({ message: 'Class with this name and section already exists.' });
        }

        const newClass = new Class({
            className,
            classSection,
            classTeacher,
            school
        });

        await newClass.save();

        return res.status(201).json({
            message: 'Class added successfully.',
            class: {
                _id: newClass._id,
                className: newClass.className,
                classSection: newClass.classSection,
                classTeacher: newClass.classTeacher,
                school: newClass.school,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

exports.getAllClasses = async (req, res) => {
    try {
        const {_id:schoolId}=req.user
        const classes = await Class.find({school:schoolId}).select("-isDeleted -updatedAt -createdAt");
        
        if (classes.length === 0) {
            return res.status(404).json({ message: 'No classes found.' });
        }

        return res.status(200).json({
            message: 'classes  found successfully.',
            classes
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

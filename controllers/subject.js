const Subject = require('../models/subject');

exports.addNewSubject = async (req, res) => {
    try {
        const {subjectName } = req.body;
        const normilazeSubjectName = subjectName.toUpperCase();
        const existingSubject = await Subject.findOne({subjectName:normilazeSubjectName });
        if (existingSubject) {
            return res.status(400).json({ message: 'Subject with this name already exists.' });
        }

        const newSubject= new Subject({
            subjectName
        });

        await newSubject.save();

        return res.status(201).json({
            message: 'Subject added successfully.',
            subject: {
                _id: newSubject._id,
                subjectName: newSubject.subjectName,
            },
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

exports.getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().select("-isDeleted -updatedAt -createdAt");
        
        if (subjects.length === 0) {
            return res.status(404).json({ message: 'No subjects found.' });
        }

        return res.status(200).json({
            message: 'subjects  found successfully.',
            subjects
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

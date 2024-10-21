const Class = require('../models/class');


exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find().select("-isDeleted -updatedAt -createdAt");
        
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

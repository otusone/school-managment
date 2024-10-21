const Section = require('../models/section');


exports.getAllSection = async (req, res) => {
    try {
        const sections = await Section.find().select("-isDeleted -updatedAt -createdAt");
        
        if (sections.length === 0) {
            return res.status(404).json({ message: 'No sections found.' });
        }

        return res.status(200).json({
            message: 'Section list found successfully.',
            sections
        });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Internal server error. Please try again later.' });
    }
};

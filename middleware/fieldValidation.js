const Joi = require('joi');

const adminSchoolSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Email must be a valid email address',
  }),
  password: Joi.string().min(6).required().messages({
    'any.required': 'Password is required',
    'string.min': 'Password must be at least 6 characters long',
  }),
  mobile: Joi.string().required().messages({
    'any.required': 'Mobile number is required',
    'string.pattern.base': 'Mobile number must be a valid 10-digit number',
  }),
  address: Joi.string().trim().required().messages({
    'any.required': 'Address is required',
    'string.empty': 'Address cannot be empty',
  }),
  schoolName: Joi.string().trim().required().messages({
    'any.required': 'School name is required',
    'string.empty': 'School name cannot be empty',
  }),
  schoolCode: Joi.string().trim().required().messages({
    'any.required': 'School code is required',
    'string.empty': 'School code cannot be empty',
  }),
  alternateMobile: Joi.string().required().messages({
    'any.required': 'Alternate mobile number is required',
    'string.pattern.base': 'Alternate mobile number must be a valid 10-digit number',
  }),
});

const validateAdminSchool = (req, res, next) => {
  console.log("data",req.body)
    const { error } = adminSchoolSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const errorMessage = error.details.map((detail) => detail.message).join(', ');
        return res.status(400).json({ message: errorMessage });
    }

    next();
};



module.exports = { validateAdminSchool };

const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const AdminSchool = require('../models/adminSchool');
const Teacher = require('../models/teacher');
const Student = require('../models/student');
const Class = require('../models/class');
const Parent = require('../models/parent');
const { generateSchoolStudentId } = require('../utils/adminSchool');
const cloudinary = require("../config/cloudinary");
const {generatePassword}=require("../utils/common")


exports.onboardStudent = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { _id: schoolId, role,schoolCode } = req.user;
    if (role !== 'school_admin') {
      return res.status(403).send({ error: 'Access denied. Only school admins can onboard students.' });
    }

    const { firstName, middleName, lastName, email,
      classId,dateOfBirth, gender, mobile, address, } = req.body;

    const classData = await Class.findById(classId);
    if (!classData) {
      throw new Error('Class not found');
    }

    const schoolData = await AdminSchool.findById(schoolId);
    if (!schoolData) {
      throw new Error('School not found');
    }

    const studentId = await generateSchoolStudentId(schoolCode, session);
    let avatar_url = "";
    // if (req.file) {
    //   try {
    //     const imageName = "PLANET_EDU_" + Math.floor(Math.random() * 10) + req.file.originalname.split('.')[0];
    //     const result = await cloudinary.uploader.upload(req.file.path, {
    //       public_id: imageName,
    //     });
    //     avatar_url = result.secure_url || "";
    //   } catch (uploadError) {
    //     return res.status(500).json({ message: uploadError.message || 'Student profile upload failed. Please try again.'});
    //   }
    // }

    const password = generatePassword(firstName);
    const newStudent = new Student({
      studentId,
      name: { firstName, middleName, lastName },
      email,
      password,
      class: classId,
      school: schoolId,
      dateOfBirth,
      gender,
      contactInfo: { mobile, address },
      avatar: avatar_url || ""
    });

    await newStudent.save({ session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).send({ message: 'Student onboarded successfully', student: newStudent });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res.status(500).send({ message: error.message || "Internal Server Error. Please Try Again Later." });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const { _id: schoolId, role } = req.user;
    
    if (role !== 'school_admin') {
      return res.status(403).send({ error: 'Access denied. Only school admins can access student data.' });
    }

    const students = await Student.find({ school: schoolId }).populate('class parent', 'name email');

    if (!students.length) {
      return res.status(404).send({ message: 'No students found for this school.' });
    }

    res.status(200).send({ students });
  } catch (error) {
    res.status(500).send({ message: error.message || 'Internal Server Error. Please try again later.' });
  }
};
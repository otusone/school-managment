const mongoose = require('mongoose');
const teacherSchema = new mongoose.Schema({
  teacherId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  subjects: [{
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' } 
  }],
  school: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AdminSchool',
    required: true,
  },
  contactInfo: {
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;

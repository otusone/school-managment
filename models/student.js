const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  studentId: {type: String,required: true,unique: true,},
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  email: {type: String,required: true,unique: true,},
  password: {type: String,required: true,},
  class: {type: mongoose.Schema.Types.ObjectId,ref: 'Class', required: true,},
  subjects: [{
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }, 
    teacherId: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }
  }],
  school: {type: mongoose.Schema.Types.ObjectId,ref: 'AdminSchool',required: true,},
  parent: {type: mongoose.Schema.Types.ObjectId,ref: 'Parent',},
  dateOfBirth: {type: Date,required: true,},
  gender: {type: String,enum: ['Male', 'Female', 'Other'],required: true,},
  contactInfo: {
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, {
    versionKey: false,
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

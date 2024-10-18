const mongoose = require('mongoose');
const adminSchoolSchema = new mongoose.Schema({
  adminId: {type: String,required: true,unique: true,},
  schoolName: {type: String,required: true,},
  schoolCode: {type: String, required: true, unique: true},
  email: {type: String,required: true,unique: true, },
  password: {type: String,required: true,},
  address: {type: String,required: true,},
  phone: {type: String,required: true,},
  registrationDate: {type: Date,default: Date.now,},
  role: {type: String,default: 'school_admin'},
  permissions: {type: [String],default: ['manage_students','manage_teachers','manage_parents','manage_classes',
      'manage_subjects','manage_notifications',
    ],
  },
  schoolDetails: {
    numberOfStudents: { type: Number, default: 0 },
    numberOfTeachers: { type: Number, default: 0 },
    numberOfClasses: { type: Number, default: 0 },
  },
  active: {type: Boolean,default: true,}
},{
  versionKey: false,
  timestamps: true
});

const AdminSchool = mongoose.model('AdminSchool', adminSchoolSchema);
module.exports = AdminSchool;

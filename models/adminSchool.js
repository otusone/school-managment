const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminSchoolSchema = new mongoose.Schema({
  adminSchoolId: { type: String, required: true, unique: true, },
  schoolName: { type: String, required: true,trim: true },
  schoolCode: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true,trim: true },
  mobile: { type: String, required: true, trim: true },
  password: { type: String, required: true, },
  address: { type: String, required: true, },
  alternateMobile: { type: String, required: true,trim: true },
  registrationDate: { type: Date, default: Date.now, },
  role: { type: String, default: 'school_admin' },
  desc: { type: String, default: '' },
  permissions: {
    type: [String], default: ['manage_students', 'manage_teachers', 'manage_parents', 'manage_classes',
      'manage_subjects', 'manage_notifications',
    ],
  },
  schoolDetails: {
    numberOfStudents: { type: Number, default: 0 },
    numberOfTeachers: { type: Number, default: 0 },
    numberOfClasses: { type: Number, default: 0 },
  },
  active: { type: Boolean, default: true, },
  deviceToken: { type: String,trim: true },
  token: { type: String },
  logo: { type: String,required:true,trim: true },
  lastLogin: { type: Date, default: null },
  isDeleted: { type: Boolean, default: false },

}, {
  versionKey: false,
  timestamps: true
});


adminSchoolSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()
  delete userObject.password
  return userObject
}


adminSchoolSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString(),
    adminSchoolId:user.adminSchoolId,
    email: user.email,
    role: user.role,
   }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRE
  })
  user.token = token
  await user.save()
  return token
}

adminSchoolSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10)
  }

  next();
})

const AdminSchool = mongoose.model('AdminSchool', adminSchoolSchema);
module.exports = AdminSchool;

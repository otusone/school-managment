const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const teacherSchema = new mongoose.Schema({
  teacherId: {type: String,required: true,unique: true,},
  name: {
    firstName: { type: String, required: true,trim: true },
    middleName: { type: String,trim: true },
    lastName: { type: String, required: true,trim: true },
  },
  email: {type: String,required: true,unique: true,},
  password: {type: String,required: true,},
  specializations: { type: [String], default: [] },
  school: {type: mongoose.Schema.Types.ObjectId,ref: 'AdminSchool',required: true,},
  schoolCode: { type: String, required: true, },
  adminSchoolId: { type: String, required: true},
  contactInfo: {
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  active: { type: Boolean, default: true, },
  deviceToken: { type: String,trim: true },
  token: { type: String },
  avatar: { type: String,trim: true},
  lastLogin: { type: Date, default: null },
  isDeleted: { type: Boolean, default: false },
  
}, {
  versionKey: false,
  timestamps: true
});


teacherSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()
  delete userObject.password
  return userObject
}
teacherSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString(), }, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRE
  })
  user.token=token
  await user.save()
  return token
}

teacherSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 10)
  }

  next();
})
const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;

const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  studentId: {type: String,required: true,unique: true,},
  name: {
    firstName: { type: String, required: true,trim: true },
    middleName: { type: String,trim: true},
    lastName: { type: String, required: true,trim: true },
  },
  email: {type: String,required: true,},
  password: {type: String,required: true,},
  class: {type: mongoose.Schema.Types.ObjectId,ref: 'Class', required: true,},
  school: {type: mongoose.Schema.Types.ObjectId,ref: 'AdminSchool',required: true,},
  parent: {type: mongoose.Schema.Types.ObjectId,ref: 'Parent',default:null},
  dateOfBirth: {type: Date,required: true,},
  gender: {type: String,enum: ['Male', 'Female', 'Other'],required: true,},
  contactInfo: {
    mobile: { type: String, required: true },
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

studentSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()
  delete userObject.password
  return userObject
}
studentSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString(), }, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRE
  })
  user.token=token
  await user.save()
  return token
}

studentSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
      user.password = await bcrypt.hash(user.password, 10)
  }

  next();
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;

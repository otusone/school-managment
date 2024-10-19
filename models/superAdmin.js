const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const superAdminSchema = new mongoose.Schema({
  superAdminId: { type: String, required: true, unique: true, },
  name: { type: String, required: true,trim: true},
  email: { type: String, required: true, unique: true,trim: true },
  password: { type: String, required: true, },
  mobile: { type: String, trim: true,trim: true },
  role: { type: String, enum: ["super_admin"], default: 'super_admin', },
  permissions: { type: [String], default: ['manage_schools', 'view_reports', 'manage_system_settings'], },
  isActive: { type: Boolean, default: true },
  deviceToken: { type: String,trim: true },
  token: { type: String },
  avatar: { type: String,trim: true},
  lastLogin: { type: Date, default: null },
}, {
  versionKey: false,
  timestamps: true
});

superAdminSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()
  delete userObject.password
  return userObject 
}
superAdminSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString(),
    superAdminId:user.superAdminId,
    email: user.email,
    role: user.role,
   }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRE
  })
  user.token = token
  await user.save()
  return token
}

superAdminSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10)
  }

  next();
})

const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);
module.exports = SuperAdmin;

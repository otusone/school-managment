const mongoose = require('mongoose');
const superAdminSchema = new mongoose.Schema({
  superAdminId: {type: String,required: true,unique: true,},
  name: {type: String,required: true, },
  email: {type: String,required: true,unique: true,},
  password: {type: String,required: true,},
  role: {type: String,enum:["super_admin"],default: 'super_admin',},
  permissions: {type: [String],default: ['manage_schools', 'view_reports', 'manage_system_settings'],},
  createdAt: {type: Date,default: Date.now,}
},{
    versionKey: false,
    timestamps: true
});

const SuperAdmin = mongoose.model('SuperAdmin', superAdminSchema);
module.exports = SuperAdmin;

const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
  school: {type: mongoose.Schema.Types.ObjectId,ref: 'AdminSchool',required: true,},
  className: {type: String,required: true,},
  classSection: {type: String,required: true,},
  classTeacher: {type: mongoose.Schema.Types.ObjectId,ref: 'Teacher',default:null},
  isDeleted: { type: Boolean, default: false },
},{
  versionKey: false,
  timestamps: true
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;

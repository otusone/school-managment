const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
  classId: {type: String,required: true,unique: true,},
  className: {type: String,required: true,},
  school: {type: mongoose.Schema.Types.ObjectId,ref: 'AdminSchool',required: true,},
  students: [{type: mongoose.Schema.Types.ObjectId,ref: 'Student'}],
  subjects: [{type: mongoose.Schema.Types.ObjectId,ref: 'Subject' }]
},{
  versionKey: false,
  timestamps: true
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;

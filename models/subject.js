const mongoose = require('mongoose');
const subjectSchema = new mongoose.Schema({
  subjectId: {type: String,required: true,unique: true,},
  subjectName: {type: String,required: true,},
  classId: {type: mongoose.Schema.Types.ObjectId,ref: 'Class',required: true,},
  teacherId: {type: mongoose.Schema.Types.ObjectId,ref: 'Teacher', required: true,}
},{
  versionKey: false,
  timestamps: true
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;

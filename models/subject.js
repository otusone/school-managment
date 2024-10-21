const mongoose = require('mongoose');
const subjectSchema = new mongoose.Schema({
  subjectName: {type: String,required: true,},
  isDeleted: { type: Boolean, default: false },
},{
  versionKey: false,
  timestamps: true
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;

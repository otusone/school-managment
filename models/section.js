const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
  classSection: {type: String,required: true,trim:true},
  isDeleted: { type: Boolean, default: false },
},{
  versionKey: false,
  timestamps: true
});

const Class = mongoose.model('Section', classSchema);
module.exports = Class;

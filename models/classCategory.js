const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
  className: {type: String,required: true,},
  isDeleted: { type: Boolean, default: false },
},{
  versionKey: false,
  timestamps: true
});

const Class = mongoose.model('ClassCategory', classSchema);
module.exports = Class;

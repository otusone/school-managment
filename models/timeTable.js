const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  school: {type: mongoose.Schema.Types.ObjectId,ref: 'AdminSchool',required: true,},
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  timeSlot: {
    start: { type: String, required: true },
    end: { type: String, required: true }
  }, 
  exceptions: [{
    date: { type: Date, required: true },
    tempTeacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    reason: { type: String }
  }],
  day: {type: [String], required: true,enum:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],default:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
  isDeleted: { type: Boolean, default: false },
}, {
  versionKey: false,
  timestamps: true
});

const Timetable = mongoose.model('Timetable', timetableSchema);
module.exports = Timetable;

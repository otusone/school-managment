const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  section: {
    type: [String],
    enum: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'All'],
    required: true,
  },
  school: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminSchool', required: true },
  subject: { type:String, required: true },
  examDate: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  duration: { type: Number, required: true },
  notes: { type: String },
  isDeleted: { type: Boolean, default: false },
}, {
  versionKey: false,
  timestamps: true,
});

const Timetable = mongoose.model('ExamTimetable', timetableSchema);
module.exports = Timetable;

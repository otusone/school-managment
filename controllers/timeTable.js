const Timetable = require('../models/timeTable');
const Class = require('../models/class');
const Subject = require('../models/subject');
const Teacher = require('../models/teacher');
const School = require('../models/adminSchool');

exports.createTimetable = async (req, res) => {
    const { _id: schoolId } = req.user;
    const { classId, subjectId, teacherId,timeSlot, day } = req.body;
  
    try {
      const classExists = await Class.findById(classId);
      const subjectExists = await Subject.findById(subjectId);
      const teacherExists = await Teacher.findById(teacherId);

      if (!subjectExists || !teacherExists || !classExists) {
        return res.status(400).json({ message: 'Invalid subject, class or teacher ID.' });
      }
  
      const newTimetable = new Timetable({
        class: classId,
        school:schoolId,
        subject: subjectId,
        teacher: teacherId,
        timeSlot:timeSlot,
        day
      });
  
      await newTimetable.save();
  
      return res.status(201).json({ 
        message: 'Timetable created successfully', 
        timetable: newTimetable 
      });
  
    } catch (error) {
      return res.status(500).json({ 
        message: error.message || 'Internal server error. Please try again later.' 
      });
    }
  };
  





  exports.getTimetable = async (req, res) => {
    const { classId, date } = req.query;
    const requestedDate = new Date(date);
  
    try {
      const dayOfWeek = requestedDate.toLocaleDateString('en-US', { weekday: 'long' });
      const timetable = await Timetable.findOne({
        class: classId,
        day: dayOfWeek
      }).populate('subject teacher exceptions.tempTeacher');
  
      if (!timetable) {
        return res.status(404).json({ message: 'Timetable not found for this class on the specified date.' });
      }
  
      const exception = timetable.exceptions.find(
        (ex) => ex.date.toDateString() === requestedDate.toDateString()
      );
  
      if (exception) {
        return res.status(200).json({
          message: `Timetable for ${requestedDate.toDateString()} with exception`,
          timetable: {
            class: timetable.class,
            subject: timetable.subject,
            teacher: exception.tempTeacher,
            timeSlot: timetable.timeSlot,
            reason: exception.reason
          }
        });
      }
  
      return res.status(200).json({
        message: `Timetable for ${requestedDate.toDateString()}`,
        timetable
      });
    } catch (error) {
      return res.status(500).json({ message: error.message || 'Internal server error.' });
    }
  };
  
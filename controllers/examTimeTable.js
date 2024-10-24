const mongoose = require('mongoose');
const ExamTimetable = require('../models/examTimeTable');
const Student = require('../models/student'); 

exports.createExamTimetable = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const {_id:schoolId}=req.user
    const { className, exams } = req.body;

    if (!classId || !Array.isArray(exams) || exams.length === 0) {
      return res.status(400).send({ message: 'Class ID and exam details are required.' });
    }

    // Process each exam detail
    const timetableEntries = exams.map((exam) => {
      const { subject, section, examDate, startTime, endTime, duration, notes } = exam;

      // Further validation for each exam entry
      if (!subject || !section || !examDate || !startTime || !endTime || !duration) {
        throw new Error('All exam fields are required for each exam entry.');
      }

      return {
        className,
        school:schoolId,
        subject,
        section,
        examDate,
        startTime,
        endTime,
        duration,
        notes,
      };
    });

    
    await Timetable.ExamTimetable(timetableEntries, { session });

    await session.commitTransaction();
    session.endSession();

    res.status(201).send({ message: 'Exam timetable created successfully', timetable: timetableEntries });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    res.status(500).send({ message: error.message || 'Internal Server Error. Please Try Again Later.' });
  }
};


exports.getStudentUpcomingExams = async (req, res) => {
  try {
    const { _id: studentId } = req.user;
    const student = await Student.findById(studentId)
      .populate('class')

    if (!student) {
      return res.status(404).send({ message: 'Student not found.' });
    }

    const { class: studentClass, section: studentSection } = student;

    const upcomingExams = await ExamTimetable.find({
      class: studentClass,
      $or: [
        { section: studentSection },
        { section: ['All'] } 
      ],
      examDate: { $gte: new Date() },
      isDeleted: false 
    }).sort({ examDate: 1 });

    res.status(200).send({ message: 'Upcoming exams retrieved successfully', exams: upcomingExams });
  } catch (error) {
    res.status(500).send({ message: error.message || "Internal Server Error. Please Try Again Later." });
  }
};

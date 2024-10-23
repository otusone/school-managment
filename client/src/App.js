import Login from './Pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  TeacherDashboard, Dashboard, ClassSection, TimeTable, HolidayList, ManageLesson, CreateLesson, StudentList, Attendance,
  AddAttendance, AssignmentList, CreateAssignment
} from "./Component/Core/TeacherDashboard/index"
import {
  StudentDashboard, StudentDashboardPage, StudentSubjectsList
  , StudentDetailSubjects,
  StudentAllAssignment,
  StudentSubmitAssignment,
  StudentTimeTable,
  StudentNotice,
  StudentResultList,
  StudentExamResult,
  StudentParents,
  AttendancePage,
  AcademicCalender

} from './Component/Core/StudentDashboard';

import { ParentDashboardPage, ParentDashboard } from "./Component/Core/ParentDashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} >
          <Route index element={<Dashboard />} />
          <Route path='section' element={<ClassSection />} />
          <Route path='timetable' element={<TimeTable />} />
          <Route path='holiday' element={<HolidayList />} />
          <Route path='subject' element={<ManageLesson />} />
          <Route path='create/subject' element={<CreateLesson />} />
          <Route path='students' element={<StudentList />} />
          {/* <Route path='/student' element={<StudentList />} /> */}
          <Route path='attendance' element={<Attendance />} />
          <Route path='add/attendance' element={<AddAttendance />} />
          <Route path='assignment' element={<AssignmentList />} />
          <Route path='create/assignment' element={<CreateAssignment />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboardPage />} >
          <Route index element={<StudentDashboard />} />
          <Route path='timetable' element={<StudentTimeTable />} />
          <Route path='subject' element={<StudentSubjectsList />} />
          <Route path='detail/subject' element={<StudentDetailSubjects />} />
          <Route path='assignment' element={<StudentAllAssignment />} />
          <Route path='submitted/Assignment' element={<StudentSubmitAssignment />} />
          <Route path='announcment' element={<StudentNotice />} />
          <Route path='attendance' element={<AttendancePage />} />
          <Route path='academic-calender' element={<AcademicCalender />} />
          <Route path='Result' element={<StudentResultList />} />
          <Route path='detail/ExamResult' element={<StudentExamResult />} />
          <Route path='parents' element={<StudentParents />} />
        </Route>
        <Route path="/parent/dashboard" element={<ParentDashboardPage />} >
          <Route index element={<ParentDashboard />} />
          <Route path='attendance' element={<AttendancePage />} />
          <Route path='transport' element={<p>oo</p>} />
          <Route path='detail/transportRoute' element={<p>oo</p>} />
          <Route path='timetable' element={<StudentTimeTable />} />
          <Route path='announcment' element={<StudentNotice />} />
          <Route path='academic-calender' element={<AcademicCalender />} />
          <Route path='Result' element={<StudentResultList />} />
          <Route path='detail/ExamResult' element={<StudentExamResult />} />
          <Route path='parents' element={<StudentParents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

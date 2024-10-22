import AdminLogin from './Pages/AdminLoginPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
TeacherDashboard,  Dashboard, ClassSection, TimeTable, HolidayList, ManageLesson, CreateLesson, StudentList, Attendance,
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
  StudentParents

} from './Component/Core/StudentDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
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
          <Route path='Result' element={<StudentResultList />} />
          <Route path='detail/ExamResult' element={<StudentExamResult />} />
          <Route path='parents' element={<StudentParents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

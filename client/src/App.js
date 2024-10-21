import AdminLogin from './Pages/AdminLoginPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from './Pages/AdminDashboardPage';
import Dashboard from './Component/Core/AdminDashboard/Dashboard';
import ClassSection from './Component/Core/AdminDashboard/section';
import StudentList from './Component/Core/AdminDashboard/StudentsList';
import TimeTable from './Component/Core/AdminDashboard/TimeTable';
import HolidayList from './Component/Core/AdminDashboard/HolidayList';
import Attantdance from './Component/Core/AdminDashboard/Attendance';
import ManageLesson from './Component/Core/AdminDashboard/ManageLesson';
import AddAttendance from './Component/Core/AdminDashboard/AddAttendance';
import CreateLesson from './Component/Core/AdminDashboard/CreateLesson';
import AssignmentList from './Component/Core/AdminDashboard/AssignmentList';
import CreateAssignment from './Component/Core/AdminDashboard/CreateAssignment';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} >
          <Route index element={<Dashboard />} />
          <Route path='section' element={<ClassSection />} />
          <Route path='timetable' element={<TimeTable />} />
          <Route path='holiday' element={<HolidayList />} />
          <Route path='subject' element={<ManageLesson />} />
          <Route path='create/subject' element={<CreateLesson/>} />


          <Route path='students' element={<StudentList />} />
          {/* <Route path='/student' element={<StudentList />} /> */}

          <Route path='attendance' element={<Attantdance />} />
          <Route path='add/attendance' element={<AddAttendance />} />
         
          <Route path='assignment' element={<AssignmentList />} />
          <Route path='create/assignment' element={<CreateAssignment/>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;

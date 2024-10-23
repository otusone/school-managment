

export const TeachersidebarItems = [
    {
        title: "Dashboard",
        path: "teacher/dashboard ",
        icon: <i className="fas fa-tachometer-alt"></i>, // Replace with your icon component
        subtitle: null,
        subpath: null,
    },
    {
        title: "Class Section",
        path: "teacher/dashboard/section",
        icon: <i className="fas fa-users"></i>,
        subtitle: "Manage Section",
        subpath: null
    },
    {
        title: "Students",
        path: "teacher/dashboard/students",
        icon: <i className="fas fa-chart-line"></i>,
        subtitle: "View Reports",
        subpath: "students/all",
    },
    {
        title: "Timetable",
        path: "teacher/dashboard/timetable",
        icon: <i className="fas fa-cog"></i>,
        subtitle: null,
        subpath: null,
    },
    {
        title: "Holiday List",
        path: "teacher/dashboard/holiday",
        icon: <i className="fas fa-bell"></i>,
        subtitle: null,
        subpath: null,
    },
    {
        title: "Subject Lesson",
        path: "teacher/dashboard/Subject",
        icon: <i className="fas fa-question-circle"></i>,
        Links: [{
            title: "Subject",
            path: "/teacher/dashboard/subject",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "View Attendance",
        },
        {
            title: "Create Lesson",
            path: "/teacher/dashboard/create/subject",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "Add a new attendance record",
        },]
    },
    {
        title: "Student Assignment ",
        path: "teacher/dashboard/assignment",
        icon: <i className="fas fa-chart-pie"></i>,
        Links: [{
            title: "Assignment List",
            path: "/teacher/dashboard/assignment",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "View Attendance",
        },
        {
            title: "Create Assignment",
            path: "/teacher/dashboard/create/Assignment",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "Add a new attendance record",
        },],
    },
    {
        title: "Attendance ",
        path: "teacher/dashboard/attendance",
        icon: <i className="fas fa-credit-card"></i>,
        // subtitle: "Add Attendance",
        // subpath: "teacher/dashboard/attendance/add",
        Links: [{
            title: "Attendance",
            path: "/teacher/dashboard/attendance",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "View Attendance",
        },
        {
            title: "Add Attendance",
            path: "/teacher/dashboard/add/attendance",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "Add a new attendance record",
        },]
    },

    {
        title: "Announcement ",
        path: "teacher/dashboard/announcment",
        icon: <i className="fas fa-comments"></i>,
        subtitle: null,
        subpath: null,
    },

    {
        title: "Logout ",
        path: "",
        icon: <i className="fas fa-life-ring"></i>,
        subtitle: null,
        subpath: null,
    },
];

export const StudentSidebarItems = [
    {
        title: "Dashboard",
        path: "student/dashboard ",
        icon: <i className="fas fa-tachometer-alt"></i>, // Replace with your icon component
        subtitle: null,
        subpath: null,
    },
    {
        title: "Class Section",
        path: "student/dashboard/section",
        icon: <i className="fas fa-users"></i>,
        subtitle: "Manage Section",
        subpath: null
    },
    {
        title: "Students",
        path: "student/dashboard/students",
        icon: <i className="fas fa-chart-line"></i>,
        Links: [{
            title: "Subject",
            path: "/student/dashboard/subject",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "View Attendance",
        },
        {
            title: "Create Students",
            path: "/student/dashboard/create/student",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "Add a new attendance record",
        },]
    },
    {
        title: "Timetable",
        path: "student/dashboard/timetable",
        icon: <i className="fas fa-cog"></i>,
        subtitle: null,
        subpath: null,
    },
    {
        title: "Holiday List",
        path: "student/dashboard/holiday",
        icon: <i className="fas fa-bell"></i>,
        subtitle: null,
        subpath: null,
    },
    {
        title: "Subject Lesson",
        path: "student/dashboard/Subject",
        icon: <i className="fas fa-question-circle"></i>,
        Links: [{
            title: "Subject",
            path: "/student/dashboard/subject",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "View Attendance",
        },
        {
            title: "Detail Subject",
            path: "/student/dashboard/detail/subject",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "all record",
        },]
    },
    {
        title: "Student Assignment ",
        path: "student/dashboard/assignment",
        icon: <i className="fas fa-chart-pie"></i>,
        Links: [{
            title: "Assignment ",
            path: "/student/dashboard/assignment",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "View Attendance",
        },
        {
            title: "Submitted Assignment",
            path: "/student/dashboard/submitted/Assignment",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "Add a new attendance record",
        },],
    },
    {
        title: "Attendance ",
        path: "student/dashboard/attendance",
        icon: <i className="fas fa-credit-card"></i>,
        // subtitle: "Add Attendance",
        // subpath: "admin/dashboard/attendance/add",

    },
    {
        title: "Academic Calender",
        path: "student/dashboard/academic-calender"
    },
    {
        title: "Announcement ",
        path: "student/dashboard/announcment",
        icon: <i className="fas fa-comments"></i>,
        subtitle: null,
        subpath: null,
    },
    {
        title: "Parents ",
        path: "student/dashboard/parents",
        icon: <i className="fas fa-comments"></i>,
        subtitle: null,
        subpath: null,
    },
    {
        title: "Result",
        path: "student/dashboard/Result",
        icon: <i className="fas fa-question-circle"></i>,
        Links: [{
            title: "All Exam Results",
            path: "/student/dashboard/Result",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "Exam Result",
        },
        {
            title: "Exam Result Detail",
            path: "/student/dashboard/detail/ExamResult",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "Exam Detail",
        },]
    },


];


export const ParentSidebarItems = [
    {
        title: "Dashboard",
        path: "parent/dashboard ",
        icon: <i className="fas fa-tachometer-alt"></i>, // Replace with your icon component
        subtitle: null,
        subpath: null,
    },
    {
        title: "Attendance ",
        path: "parent/dashboard/attendance",
        icon: <i className="fas fa-credit-card"></i>,
        // subtitle: "Add Attendance",
        // subpath: "admin/dashboard/attendance/add",

    },
    {
        title: "TransPort ",
        path: "parent/dashboard/transport",
        icon: <i className="fas fa-credit-card"></i>,
        Links: [{
            title: "Transport List",
            path: "/parent/dashboard/transport",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "Transport List",
        },
        {
            title: "Detail Transport Routes",
            path: "/parent/dashboard/detail/transportRoute",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "all record",
        },]

    },
    {
        title: "Timetable",
        path: "parent/dashboard/timetable",
        icon: <i className="fas fa-cog"></i>,
        subtitle: null,
        subpath: null,
    },
    {
        title: "Announcement ",
        path: "parent/dashboard/announcment",
        icon: <i className="fas fa-comments"></i>,
        subtitle: null,
        subpath: null,
    },

    {
        title: "Result",
        path: "parent/dashboard/Result",
        icon: <i className="fas fa-question-circle"></i>,
        Links: [{
            title: "All Exam Results",
            path: "/parent/dashboard/Result",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "Exam Result",
        },
        {
            title: "Exam Result Detail",
            path: "/parent/dashboard/detail/ExamResult",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "Exam Detail",
        },]
    },

    {
        title: "Academic Calender",
        path: "parent/dashboard/academic-calender"
    },

    {
        title: "Parents ",
        path: "parent/dashboard/parents",
        icon: <i className="fas fa-comments"></i>,
        subtitle: null,
        subpath: null,
    },
];


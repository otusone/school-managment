export const sidebarItems = [
    {
        title: "Dashboard",
        path: "admin/dashboard ",
        icon: <i className="fas fa-tachometer-alt"></i>, // Replace with your icon component
        subtitle: null,
        subpath: null,
    },
    {
        title: "Class Section",
        path: "admin/dashboard/section",
        icon: <i className="fas fa-users"></i>,
        subtitle: "Manage Section",
        subpath: null
    },
    {
        title: "Students",
        path: "admin/dashboard/students",
        icon: <i className="fas fa-chart-line"></i>,
        subtitle: "View Reports",
        subpath: "students/all",
    },
    {
        title: "Timetable",
        path: "admin/dashboard/timetable",
        icon: <i className="fas fa-cog"></i>,
        subtitle: null,
        subpath: null,
    },
    {
        title: "Holiday List",
        path: "admin/dashboard/holiday",
        icon: <i className="fas fa-bell"></i>,
        subtitle: null,
        subpath: null,
    },
    {
        title: "Subject Lesson",
        path: "admin/dashboard/Subject",
        icon: <i className="fas fa-question-circle"></i>,
        Links: [{
            title: "Subject",
            path: "/admin/dashboard/subject",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "View Attendance",
        },
        {
            title: "Create Lesson",
            path: "/admin/dashboard/create/subject",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "Add a new attendance record",
        },]
    },
    {
        title: "Student Assignment ",
        path: "admin/dashboard/assignment",
        icon: <i className="fas fa-chart-pie"></i>,
        Links: [{
            title: "Assignment List",
            path: "/admin/dashboard/assignment",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "View Attendance",
        },
        {
            title: "Create Assignment",
            path: "/admin/dashboard/create/Assignment",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "Add a new attendance record",
        },],
    },
    {
        title: "Attendance ",
        path: "admin/dashboard/attendance",
        icon: <i className="fas fa-credit-card"></i>,
        // subtitle: "Add Attendance",
        // subpath: "admin/dashboard/attendance/add",
        Links: [{
            title: "Attendance",
            path: "/admin/dashboard/attendance",
            icon: <i className="fas fa-credit-card"></i>,
            subtitle: "View Attendance",
        },
        {
            title: "Add Attendance",
            path: "/admin/dashboard/add/attendance",
            icon: <i className="fas fa-plus"></i>,
            subtitle: "Add a new attendance record",
        },]
    },
    {
        title: "Announcement ",
        path: "admin/dashboard/announcment",
        icon: <i className="fas fa-comments"></i>,
        subtitle: null,
        subpath: null,
    },
   
    {
        title: " Examin section  ",
        path: "admin/dashboard/Exam",
        icon: <i className="fas fa-life-ring"></i>,
        subtitle: null,
        subpath: "OnlineExam/all",
    }, {
        title: "Leave  ",
        path: "admin/dashboard/Leaves",
        icon: <i className="fas fa-life-ring"></i>,
        subtitle: null,
        subpath: "",
    }, {
        title: "Certificate & ID ",
        path: "/admin/dashboard/certificates",
        icon: <i className="fas fa-life-ring"></i>,
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


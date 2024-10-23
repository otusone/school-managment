import React from "react";
import Headingtitle from "../../Common/Headingtitle";
import "./scrollbar.css";
import { Link, useNavigate } from "react-router-dom";

const StudentResultList = () => {
    const navigate = useNavigate();

    // Array containing IT domain subjects and their details, along with student subjects and marks
    const itCourses = [
        {
            examName: 'Data Structures and Algorithms',
            chapter: 'Trees and Graphs',
            date: '22-08-2023',
            grade: 'A',
            percentage: '92.5%',
            results: [
                { subject: 'Science', marks: 80, total: 100, grade: 'A' },
                { subject: 'Maths', marks: 70, total: 100, grade: 'B' },
                { subject: 'English', marks: 75, total: 100, grade: 'B+' }
            ]
        },
        {
            examName: 'Operating Systems',
            chapter: 'Memory Management',
            date: '15-08-2023',
            grade: 'A-',
            percentage: '88.0%',
            results: [
                { subject: 'Science', marks: 82, total: 100, grade: 'A' },
                { subject: 'Maths', marks: 85, total: 100, grade: 'A-' },
                { subject: 'English', marks: 10, total: 100, grade: 'B+' }
            ]
        },
        {
            examName: 'Database Systems',
            chapter: 'Normalization and Transactions',
            date: '10-08-2023',
            grade: 'B+',
            percentage: '85.0%',
            results: [
                { subject: 'Science', marks: 75, total: 100, grade: 'B+' },
                { subject: 'Maths', marks: 80, total: 100, grade: 'A-' },
                { subject: 'English', marks: 78, total: 100, grade: 'B+' }
            ]
        },
        {
            examName: 'Computer Networks',
            chapter: 'Network Layer and Routing',
            date: '05-08-2023',
            grade: 'A',
            percentage: '90.0%',
            results: [
                { subject: 'Science', marks: 90, total: 100, grade: 'A' },
                { subject: 'Maths', marks: 85, total: 100, grade: 'A' },
                { subject: 'English', marks: 82, total: 100, grade: 'B+' }
            ]
        },
        {
            examName: 'Artificial Intelligence',
            chapter: 'Search Algorithms and Heuristics',
            date: '01-08-2023',
            grade: 'A+',
            percentage: '95.0%',
            results: [
                { subject: 'Science', marks: 95, total: 100, grade: 'A+' },
                { subject: 'Maths', marks: 93, total: 100, grade: 'A' },
                { subject: 'English', marks: 88, total: 100, grade: 'A-' }
            ]
        },
        {
            examName: 'Machine Learning',
            chapter: 'Supervised and Unsupervised Learning',
            date: '25-07-2023',
            grade: 'A',
            percentage: '93.0%',
            results: [
                { subject: 'Science', marks: 90, total: 100, grade: 'A' },
                { subject: 'Maths', marks: 92, total: 100, grade: 'A+' },
                { subject: 'English', marks: 87, total: 100, grade: 'A-' }
            ]
        }
    ];

    // Function to handle storing the exam result in localStorage and navigation
    const handleExamClick = (course) => {
        // Store the selected course result in localStorage
        localStorage.setItem('examResult', JSON.stringify(course));
        
        // Navigate to the exam result detail page
        navigate("/student/dashboard/detail/ExamResult");
    };

    return (
        <section>
            <Headingtitle title="Notice " />
            <div className="overflow-x-auto p-3 text-[0.77rem] relative min-h-[78vh]">

                <section className="p-4 flex flex-col items-center custom-scroll overflow-y-scroll gap-4 bg-white text-[0.86rem] rounded-lg h-[79vh]">
                    {
                        itCourses.map((course, index) => (
                            <div
                                key={index}
                                className="w-[90%] flex flex-col space-y-2 font-poppins border-[1px] border-border-100 rounded-lg h-[143px] p-6">
                                <div className="flex w-full justify-between">
                                    <div className="w-[60%]">
                                        {/* When the user clicks on the exam name, call handleExamClick */}
                                        <p className="font-semibold cursor-pointer text-[#000000]"
                                           onClick={() => handleExamClick(course)}>
                                           {course.examName}
                                        </p>
                                        <p className="leading-[17px] w-[80%]">{course.chapter}</p>
                                    </div>
                                    <p className="text-[0.75rem]">{course.date}</p>
                                </div>
                                <div className="w-[95%] h-[2px] bg-border-100 border-border-50"></div>
                                <div className="flex w-full justify-between">
                                    <p>Grade - <span className="font-semibold">{course.grade}</span></p>
                                    <p>Percentage: <span className="font-semibold">{course.percentage}</span></p>
                                </div>

                                {/* Display Subject Results */}
                                
                            </div>
                        ))
                    }
                </section>
            </div>
        </section>
    );
};

export default StudentResultList;

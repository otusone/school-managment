import React, { useState } from "react";
import Headingtitle from "../../Common/Headingtitle";
import "./scrollbar.css"
import assignmentlogo from "../../../Assests/Logos/assignmentlogo.png"; // Replace with correct image path

const StudentAllAssignment = () => {
    const SubjectArray = ['All Subjects', 'Math(practical)', 'Science', 'Physics', 'Chemistry', 'Biology'];
    const [selectedSubject, setSelectedSubject] = useState('All Subjects');

    // Sample assignments data based on the provided image
    const assignments = [
        { id: 1, title: 'Assignment 1', subject: 'Math(practical)', date: '22-08-2023', dueDate: '23 February 2024, 01 : 25 pm', description: 'account' },
        { id: 2, title: 'Assignment 1', subject: 'Science', date: '22-08-2023', dueDate: '23 February 2024, 01 : 25 pm', description: 'account' },
        { id: 3, title: 'Assignment 1', subject: 'Physics', date: '22-08-2023', dueDate: '23 February 2024, 01 : 25 pm', description: 'account' },
        { id: 4, title: 'Assignment 1', subject: 'Chemistry', date: '22-08-2023', dueDate: '23 February 2024, 01 : 25 pm', description: 'account' },
        { id: 5, title: 'Assignment 1', subject: 'Biology', date: '22-08-2023', dueDate: '23 February 2024, 01 : 25 pm', description: 'account' },
        { id: 6, title: 'Assignment 2', subject: 'Math(practical)', date: '25-08-2023', dueDate: '01 March 2024, 02 : 15 pm', description: 'account' },
        { id: 7, title: 'Assignment 2', subject: 'Science', date: '25-08-2023', dueDate: '01 March 2024, 02 : 15 pm', description: 'account' },
        { id: 8, title: 'Assignment 2', subject: 'Physics', date: '25-08-2023', dueDate: '01 March 2024, 02 : 15 pm', description: 'account' },
        { id: 9, title: 'Assignment 2', subject: 'Chemistry', date: '25-08-2023', dueDate: '01 March 2024, 02 : 15 pm', description: 'account' },
        { id: 10, title: 'Assignment 2', subject: 'Biology', date: '25-08-2023', dueDate: '01 March 2024, 02 : 15 pm', description: 'account' },
        { id: 11, title: 'Assignment 3', subject: 'Math(practical)', date: '01-09-2023', dueDate: '15 March 2024, 12 : 45 pm', description: 'account' },
        { id: 12, title: 'Assignment 3', subject: 'Science', date: '01-09-2023', dueDate: '15 March 2024, 12 : 45 pm', description: 'account' },
        { id: 13, title: 'Assignment 3', subject: 'Physics', date: '01-09-2023', dueDate: '15 March 2024, 12 : 45 pm', description: 'account' },
        { id: 14, title: 'Assignment 3', subject: 'Chemistry', date: '01-09-2023', dueDate: '15 March 2024, 12 : 45 pm', description: 'account' },
        { id: 15, title: 'Assignment 3', subject: 'Biology', date: '01-09-2023', dueDate: '15 March 2024, 12 : 45 pm', description: 'account' },
        { id: 16, title: 'Assignment 4', subject: 'Math(practical)', date: '05-09-2023', dueDate: '25 March 2024, 10 : 30 am', description: 'account' },
        { id: 17, title: 'Assignment 4', subject: 'Science', date: '05-09-2023', dueDate: '25 March 2024, 10 : 30 am', description: 'account' },
        { id: 18, title: 'Assignment 4', subject: 'Physics', date: '05-09-2023', dueDate: '25 March 2024, 10 : 30 am', description: 'account' },
        { id: 19, title: 'Assignment 4', subject: 'Chemistry', date: '05-09-2023', dueDate: '25 March 2024, 10 : 30 am', description: 'account' },
        { id: 20, title: 'Assignment 4', subject: 'Biology', date: '05-09-2023', dueDate: '25 March 2024, 10 : 30 am', description: 'account' }
    ];


    // Filter assignments based on selected subject
    const filteredAssignments = selectedSubject === 'All Subjects'
        ? assignments
        : assignments.filter((assignment) => assignment.subject === selectedSubject);

    return (
        <section>
            <Headingtitle title="Assignment " />
            <div className="overflow-x-auto p-3 text-[0.77rem] relative min-h-[80vh]">
                <section className="min-w-full bg-white rounded-lg min-h-[80vh] font-poppins p-3">
                    <div className="w-[90%] mx-auto h-[60px] rounded-lg flex items-center justify-evenly px-10 py-3">
                        {SubjectArray.map((sub) => (
                            <button
                                key={sub}
                                className={`px-4 py-2 w-[150px] text-[1rem] font-sans leading-[20px] rounded-lg 
                  ${selectedSubject === sub ? 'bg-blue-900 text-white shadow-lg' : 'text-black bg-border-100'}
                `}
                                onClick={() => setSelectedSubject(sub)}
                            >
                                {sub}
                            </button>
                        ))}
                    </div>
                    {/* Render filtered assignment cards */}
                    <div className="grid grid-cols-2 gap-4 p-5 w-[50vw] mx-auto custom-scroll overflow-y-scroll  max-h-[70vh]">
                        {filteredAssignments.map((assignment) => (
                            <div
                                key={assignment.id}
                                className="col-span-1  flex border items-center rounded-lg p-4 h-[100px] shadow-md bg-white"
                            >
                                <img src={assignmentlogo} className="w-[50px] h-[50px] mr-4" alt="Assignment" />
                                <div className="flex flex-col  h-full space-y-5 w-full">
                                    <div className="w-full flex justify-between">
                                        <div>
                                            <p className="font-semibold font-poppins">{assignment.title}</p>
                                            <p className="leading-[17px] text-[#000000]">{assignment.subject}</p>
                                        </div>

                                        <p className="text-gray-500 text-sm">{assignment.date}</p>

                                    </div>
                                    <p className="text-left font-normal text-[14px] leading-[17.5px] text-gray-500">
                                        {assignment.dueDate}
                                    </p>

                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default StudentAllAssignment;

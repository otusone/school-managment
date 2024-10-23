import React, { useEffect, useState } from "react";
import Headingtitle from "../../Common/Headingtitle";
import "./scrollbar.css";

const StudentExamResult = () => {
    // State to store the exam result data from localStorage
    const [examResult, setExamResult] = useState(null);

    // Fetching the data from localStorage when the component mounts
    useEffect(() => {
        const storedExamResult = localStorage.getItem("examResult");
        if (storedExamResult) {
            setExamResult(JSON.parse(storedExamResult));
        }
    }, []);

    // Mock data for results if examResult is not found in localStorage
    const results = examResult?.results || [
        { subject: 'Science', marks: 80, total: 100 },
        { subject: 'Maths(p)', marks: 80, total: 100 },
        { subject: 'English(T)', marks: 80, total: 100 },
        { subject: 'Science', marks: 80, total: 100 },
        { subject: 'Science', marks: 10, total: 100 } // Fail example
    ];

    // Obtained and Total Marks (example data if no localStorage data exists)
    const obtainedMarks = examResult?.obtainedMarks || 10;
    const totalMarks = examResult?.totalMarks || 100;

    // Function to calculate grade based on marks
    const getGrade = (marks, total) => {
        const percentage = (marks / total) * 100;

        if (percentage >= 90) {
            return "A++";
        } else if (percentage >= 80) {
            return "A+";
        } else if (percentage >= 70) {
            return "A";
        } else if (percentage >= 60) {
            return "B";
        } else if (percentage >= 50) {
            return "C";
        } else {
            return "Fail";
        }
    };

    return (
        <section>
            <Headingtitle title="Exam Result" />
            <div className="overflow-x-auto p-3 text-[0.77rem] relative min-h-[78vh]">
                {/* IT Courses Section */}
                <section className="p-4 flex flex-col items-center custom-scroll overflow-y-scroll gap-4 bg-white text-[0.86rem] rounded-lg h-[79vh]">
                    {/* If exam result is found, display it */}
                    {examResult ? (
                        <div className="w-[90%] flex flex-col space-y-2 font-poppins border-[1px] border-border-100 rounded-lg h-[430px] p-6">
                            <div className="flex w-full justify-between">
                                <div className="w-[60%]">
                                    <p className="font-semibold">{examResult.examName}</p>
                                    <p className="leading-[17px] w-[80%]">{examResult.chapter}</p>
                                </div>
                                <p className="text-[0.75rem]">{examResult.date}</p>
                            </div>
                            <div className="w-[95%] h-[2px] bg-border-100 border-border-50"></div>
                            <div className="flex w-full justify-between">
                                <p>Grade - <span className="font-semibold">{examResult.grade}</span></p>
                                <p>Percentage: <span className="font-semibold">{examResult.percentage}</span></p>
                            </div>

                            <div className="w-[100%] p-8 ">
                                <table className="w-full text-left border-separate border-spacing-2">
                                    <thead>
                                        <tr className="text-[#000000]">
                                            <th className="font-semibold">Subject</th>
                                            <th className="font-semibold">Marks</th>
                                            <th className="font-semibold">Total</th>
                                            <th className="font-semibold">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {results.map((result, index) => (
                                            <tr key={index} className="text-black">
                                                <td>{result.subject}</td>
                                                <td>{result.marks}</td>
                                                <td>{result.total}</td>
                                                {/* Display grade based on marks */}
                                                <td className={result.marks < 33 ? 'text-red-500 font-bold' : 'font-semibold'}>
                                                    {getGrade(result.marks, result.total)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                {/* Obtained Marks Section */}
                                <div className="flex justify-end mt-4 mr-10 w-[90%]">
                                    <div className="border rounded-lg p-4 shadow-md">
                                        <p className="text-gray-600">
                                            Obtained Marks: <span className="font-semibold text-black">{obtainedMarks} / {totalMarks}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>No exam result found in localStorage.</p>
                    )}
                </section>
            </div>
        </section>
    );
};

export default StudentExamResult;

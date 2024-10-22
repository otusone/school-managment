import React from "react";
import Headingtitle from "../../Common/Headingtitle";
import { Link } from "react-router-dom";

const StudentSubjectsList = () => {
    const subjects = [
        { id: 1, subject: "Maths", code: "0987", type: "Theory", teacher: "Shiva" },
        { id: 2, subject: "Hindi", code: "098", type: "Practical", teacher: "Pramnod" },
        { id: 3, subject: "English", code: "1234", type: "Theory", teacher: "Piapal" },
        { id: 4, subject: "Maths", code: "5543", type: "Theory", teacher: "Jay Kumar" },
        { id: 5, subject: "Maths", code: "45677", type: "Theory", teacher: "Sruti" },
        { id: 6, subject: "Maths", code: "232334", type: "Theory", teacher: "Sia" },
        { id: 7, subject: "Maths", code: "33444", type: "Theory", teacher: "Udhya Kuamar" },
        { id: 8, subject: "Maths", code: "23445", type: "Practical", teacher: "Joyti" },
    ];

    return (
        <section>
            <Headingtitle title="Subject List" />
            <div className="overflow-x-auto  p-3 text-[0.77rem] relative min-h-[80vh]">
                <table className="min-w-full  bg-white   rounded-lg border-collapse">
                    <thead className="rounded-lg ">
                        <tr className="bg-bg_blue-25 text-[1.1rem] text-left text-text_blue-500 rounded-t-lg">
                            <th className="p-4 border-b-2">No</th>
                            <th className="p-4 border-b-2">Subject Name</th>
                            <th className="p-4 border-b-2">Code</th>
                            <th className="p-4 border-b-2">Type</th>
                            <th className="p-4 border-b-2">Teacher</th>
                        </tr>
                    </thead>
                    <tbody className="border-b-[1px] border-border-50 text-text_Black-75 font-poppins">
                        {subjects.map((subject, index) => (
                            <tr key={subject.id} className=" font-semibold text-text_Black-75">
                                <td className="p-4  border-r border-l">{index + 1}</td>
                                <td className="p-4  border-r">
                                    {
                                        <Link to={"/student/dashboard/detail/subject"}>
                                            <span className="bg-green-100 text-text_Black-75 text-center py-1 px-4 rounded-full inline-block">
                                                {subject.subject}
                                            </span>

                                        </Link>
                                    }
                                </td>
                                <td className="p-4 border-r">{subject.code}</td>
                                <td className="p-4 border-r">{subject.type}</td>
                                <td className="p-4 border-r ">{subject.teacher}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default StudentSubjectsList;

import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Headingtitle from "../../Common/Headingtitle";

const ManageLesson = () => {
    const navigate=useNavigate();
    const studentData = [
        { rollNo: 1, name: "John Doe", status: "Present" },
        { rollNo: 2, name: "Jane Smith", status: "Absent" },
        { rollNo: 3, name: "Michael Johnson", status: "Present" },
        { rollNo: 4, name: "Emily Davis", status: "Present" },
        { rollNo: 5, name: "David Brown", status: "Absent" },
    ];

    return (
        <div className="font-poppins ">
          <Headingtitle title="Manage Lesson"/>
            <main className="bg-white rounded-md px-10 py-5 text-[0.77rem] relative min-h-[80vh]">
                <p className="font-semibold text-[1.1rem] pb-2 ">Manage Lesson</p>

                {/* Grid Layout */}
                <div className="grid grid-cols-12 gap-5 mb-5 font-poppins">
                    {/* Left Spacer (Empty) */}
                    <div className="col-span-8 flex row-span-2 flex-wrap gap-2 text-[0.88rem] font-semibold">

                    </div>


                    {/* Class Dropdown */}
                    <div className="col-span-2 flex border-2 border-border-100 rounded-md p-2 justify-between items-center">
                        <p className="text-[1rem]">2-A English</p>
                        <BiSolidDownArrow />
                    </div>

                    {/* Date Dropdown */}
                    <div className="col-span-2 flex border-2 border-border-100 rounded-md p-2 justify-between items-center">
                        <p className="text-[1rem]">Dance

                        </p>
                        <BiSolidDownArrow />
                    </div>
                </div>

                {/* Student Attendance Table */}
                <p
                onClick={()=>navigate("/admin/dashboard/create/subject")}
                className="absolute rounded-md cursor-pointer font-semibold bg-text_blue-500 w-[350px] bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white py-3">
                    Create Lesson
                </p>
            </main>
        </div>
    );
};

export default ManageLesson;

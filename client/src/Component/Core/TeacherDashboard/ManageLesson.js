import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Headingtitle from "../../Common/Headingtitle";
import SelectOption from "../../Common/SelectOption";

const ManageLesson = () => {
    const navigate = useNavigate();
    const studentData = [
        { rollNo: 1, name: "John Doe", status: "Present" },
        { rollNo: 2, name: "Jane Smith", status: "Absent" },
        { rollNo: 3, name: "Michael Johnson", status: "Present" },
        { rollNo: 4, name: "Emily Davis", status: "Present" },
        { rollNo: 5, name: "David Brown", status: "Absent" },
    ];


    const ALL = ["2-A English", "2-C English", "3-E Maths", "1-C Hindi"];

    const other = ["Dance", "Home Science", "Pysical"]
    return (
        <div className="font-poppins ">
            <Headingtitle title="Manage Lesson" />
            <main className="bg-white rounded-md px-10 py-5 text-[0.77rem] relative min-h-[80vh]">
                <p className="font-semibold text-[1.1rem] pb-2 ">Manage Lesson</p>

                {/* Grid Layout */}
                <div className="grid grid-cols-12 gap-5 mb-5 font-poppins">
                    {/* Left Spacer (Empty) */}
                    <div className="col-span-8 flex row-span-2 flex-wrap gap-2 text-[0.88rem] font-semibold">

                    </div>


                    {/* Class Dropdown */}
                 <SelectOption width={2} options={ALL}/>

                    {/* Date Dropdown */}
                 <SelectOption width={2} options={other}/>
                    
                </div>

                {/* Student Attendance Table */}
                <p
                    onClick={() => navigate("/teacher/dashboard/create/subject")}
                    className="absolute rounded-md cursor-pointer font-semibold bg-text_blue-500 w-[350px] bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white py-3">
                    Create Lesson
                </p>
            </main>
        </div>
    );
};

export default ManageLesson;

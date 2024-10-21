import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import Headingtitle from "../../Common/Headingtitle";

const Attendance = () => {
    const studentData = [
        { rollNo: 1, name: "John Doe", status: "Present" },
        { rollNo: 2, name: "Jane Smith", status: "Absent" },
        { rollNo: 3, name: "Michael Johnson", status: "Present" },
        { rollNo: 4, name: "Emily Davis", status: "Present" },
        { rollNo: 5, name: "David Brown", status: "Absent" },
    ];

    return (
        <div className="font-poppins ">
           <Headingtitle title="Attendance"/>
            <main className="bg-white rounded-md p-5 ">
                <p className="font-bold mb-5 text-[1rem]">View Attendance</p>

                {/* Grid Layout */}
                <div className="grid grid-cols-12 gap-5 mb-5 font-poppins text-[0.77rem]">
                    {/* Left Spacer (Empty) */}
                    <div className="col-span-8 flex row-span-2 flex-wrap gap-2 text-[0.88rem] font-semibold">
                        <div className="w-[25%] h-20 border-[1px] border-border-100 rounded-md bg-[#E5FFE7] flex flex-col justify-center items-center">
                            <p>29</p>
                            <p>Present</p>
                        </div>
                        <div className="w-[25%] h-20 bg-[#FED5D5] border-[1px] border-border-100 rounded-md flex flex-col justify-center items-center">
                            <p>2</p>
                            <p>Absent</p>
                        </div>
                        <div className="w-[25%] h-20 rounded-md flex flex-col justify-center items-center">
                            {/* Placeholder content */}
                        </div>
                        <div className="w-[25%] h-20 rounded-md flex flex-col justify-center items-center">
                            {/* Placeholder content */}
                        </div>
                        <div className="w-[25%] h-20 rounded-md flex flex-col justify-center items-center">
                            {/* Placeholder content */}
                        </div>
                        <div className="w-[25%] h-20 rounded-md flex flex-col justify-center items-center">
                            {/* Placeholder content */}
                        </div>
                    </div>


                    {/* Class Dropdown */}
                    <div className="col-span-2 flex border-2 border-border-100 rounded-md p-2 justify-between items-center">
                        <p className="text-[1rem]">2-A English</p>
                        <BiSolidDownArrow />
                    </div>

                    {/* Date Dropdown */}
                    <div className="col-span-2 flex border-2 border-border-100 rounded-md p-2 justify-between items-center">
                        <p className="text-[1rem]">15-OCT-24</p>
                        <BiSolidDownArrow />
                    </div>

                    {/* Checkbox Section */}
                    <div className="col-span-4 p-2 font-poppins text-[14px] font-semibold">
                        <div className="flex items-center gap-2 py-1">
                            <input type="checkbox" id="notify-guardian" />
                            <label htmlFor="notify-guardian">
                                Send a notification to the guardian if the student is absent.
                            </label>
                        </div>
                        <div className="flex items-center gap-2 py-1">
                            <input type="checkbox" id="holiday" />
                            <label htmlFor="holiday">Holiday</label>
                        </div>
                    </div>
                </div>

                {/* Student Attendance Table */}
                <div className="overflow-x-auto shadow-md border-border-100 border-2 font-semibold font-poppins rounded-md">
                    <div className="grid grid-cols-10 gap-3 bg-gray-200 py-4 px-2 text-[0.77rem]">
                        <div className="col-span-1 font-bold">Roll No</div>
                        <div className="col-span-6 font-bold">Name</div>
                        <div className="col-span-3 font-bold">Status</div>
                    </div>
                    {studentData.map((student, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-10 gap-3 border-b p-2 items-center text-[0.88rem]"
                        >
                            {/* Roll No */}
                            <div className="col-span-1">{student.rollNo}</div>

                            {/* Name */}
                            <div className="col-span-6">{student.name}</div>

                            {/* Status */}
                            <div
                                className={`col-span-3 text-white px-3 py-1 rounded-lg w-fit font-semibold ${student.status === "Present"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                    }`}
                            >
                                {student.status}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Attendance;

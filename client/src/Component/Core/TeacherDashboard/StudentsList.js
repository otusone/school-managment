import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa6";
import Headingtitle from "../../Common/Headingtitle";
import SelectOption from "../../Common/SelectOption";

const StudentList = () => {
    // State to manage visibility of centered cards for each student
    const [expandedIndex, setExpandedIndex] = useState(null);

    // Function to toggle the visibility
    const toggleCardVisibility = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };


    const ALL = ["ALL", "Option 1", "Option 2", "Option 3"]; // Add more options as needed

    const Date=["23-4-2023","23-4-13","03-12-21"]


    return (
        <div className="font-poppins">
            <Headingtitle title="Students" />
            <main className="bg-white min-h-[80vh]   rounded-md p-5 ">
                <p className="font-semibold text-[1rem] pb-2 ">Student List</p>

                {/* Filters Section */}
                <div className="grid w-full text-[0.77rem] grid-cols-12 gap-5 grid-rows-2 mb-5">
                    {/* All Filter */}
                    <SelectOption width={5} options={ALL} />

                    
                    <SelectOption width={3} options={Date}/>

                    {/* Search Input */}
                    <div className="col-span-4 flex gap-2 items-center pl-2 rounded-md border-2 border-border-100">
                        <CiSearch />
                        <input
                            className="flex-1 focus:outline-none"
                            type="search"
                            placeholder="Search"
                        />
                    </div>
                </div>

                {/* Student List */}
                {Array(5)
                    .fill()
                    .map((_, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex flex-col border rounded-lg shadow-md w-full p-4 justify-between items-center">
                                {/* Left Side: Profile Info */}
                                <div className="flex w-full items-start gap-1 flex-col space-x-4 h-[130px]">
                                    {/* Student No. */}
                                    <div className="flex justify-between items-center  w-full px-1">
                                        <div className="flex gap-3 items-center">
                                            <div className="text-lg relative font-bold top-1 left-1 items-center">{index + 1}</div>

                                            {/* Profile Image */}
                                            <img
                                                src="https://via.placeholder.com/50"
                                                alt="Profile"
                                                className="w-[60px] h-[60px] rounded-full"
                                            />
                                            <p className="font-poppins text-[18px] font-semibold leading-[22.5px] text-left">Marisa Bansal</p>
                                        </div>

                                        <div className="text-[0.88rem]">
                                            <span className="text-text_Black-75 mx-3 font-semibold">Status:</span>
                                            <span className="text-green-400 font-semibold">Active</span>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-[2px] mx-10 w-[90%] px-10 bg-gray-400 grid place-content-center"></div>

                                    {/* Info and Arrow */}
                                    <div className="flex w-full justify-between px-10">
                                        <div className="flex space-x-10 text-[0.8rem] text-gray-500">
                                            <div>
                                                <p className="font-semibold text-black">2 A - English</p>
                                                <p>Class</p>
                                            </div>
                                            <div className="h-full border-l-2 border-border-50 " />
                                            <div>
                                                <p className="font-semibold text-black">85% (32 leaves)</p>
                                                <p>Attendance</p>
                                            </div>
                                            <div className="h-full border-l-2 border-border-50 " />
                                            <div>
                                                <p className="font-semibold text-black">27th July 2006</p>
                                                <p>Birth Date</p>
                                            </div>
                                            <div className="h-full border-l-2 border-border-50 " />
                                            <div>
                                                <p className="font-semibold text-black">11</p>
                                                <p>Roll Number</p>
                                            </div>
                                            <div className="h-full border-l-2 border-border-50 " />
                                            <div>
                                                <p className="font-semibold text-black">Ms. Julie Pendakra</p>
                                                <p>Class Teacher</p>
                                            </div>
                                        </div>
                                        <div
                                            className="p-4 h-fit w-fit bg-border-100 shadow-lg rounded-full cursor-pointer"
                                            onClick={() => toggleCardVisibility(index)}
                                        >
                                            <FaArrowDown />
                                        </div>
                                    </div>

                                    {/* Right Side: Status and Dropdown */}
                                </div>

                                {/* Centered Cards (Conditionally Rendered) */}
                                {expandedIndex === index && (
                                    <div className="grid grid-cols-5 justify-center gap-6 items-center text-[10px]">
                                        {/* Personal Information Card */}
                                        <div className="bg-white shadow-md rounded-lg p-4 w-[180px] h-[170px] space-y-2 flex flex-col justify-between">
                                            <h2 className="font-semibold text-center text-[0.77rem]">Personal Information</h2>
                                            <p><strong>Gender:</strong> Female</p>
                                            <p><strong>Age:</strong> 15</p>
                                            <p><strong>Contact:</strong> 8383339444</p>
                                            <p><strong>Address:</strong> 9, street 8 pebble store, Uttar Pradesh 230010</p>
                                        </div>

                                        {/* Parents Information Card */}
                                        <div className="bg-white shadow-md rounded-lg p-4 w-[170px] h-[170px] space-y-2 flex flex-col justify-between">
                                            <h2 className="font-semibold text-center text-[0.77rem]">Parents Information</h2>
                                            <p><strong>Father/Mother name:</strong> Suresh Kumar</p>
                                            <p><strong>Contact Details:</strong> 09876544332</p>
                                            <p><strong>Email Id:</strong> sureshkumar@gmail.com</p>
                                        </div>

                                        {/* Academic Information Card */}
                                        <div className="bg-white shadow-md rounded-lg p-4 w-[170px] h-[170px] space-y-2 flex flex-col justify-between">
                                            <h2 className="font-semibold text-center text-[0.77rem]">Academic Information</h2>
                                            <p><strong>Previous Term Grades:</strong> B+ / 69 percent</p>
                                            <p><strong>Best performed Subject:</strong> Mathematics</p>
                                            <p><strong>Weak Subject:</strong> Geometry</p>
                                        </div>

                                        {/* Extra Curriculum Card */}
                                        <div className="bg-white shadow-md rounded-lg p-4 w-[170px] h-[170px] space-y-2 flex flex-col justify-between">
                                            <h2 className="font-semibold text-center text-[0.77rem]">Extra Curriculum</h2>
                                            <p><strong>Sport:</strong> Badminton</p>
                                            <p><strong>Arts:</strong> No participation</p>
                                            <p><strong>Music:</strong> Flute player</p>
                                        </div>

                                        {/* Emergency Number and Call Button */}
                                        <div className="bg-white rounded-lg p-4 w-[170px] h-[170px] space-y-2 flex flex-col justify-between">
                                            <p className="font-semibold text-center">Emergency Number</p>
                                            <p>0987654321</p>
                                            <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md">
                                                Call now
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
            </main>
        </div>
    );
};

export default StudentList;

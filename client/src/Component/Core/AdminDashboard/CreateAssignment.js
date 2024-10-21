import React, { useState, useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import CreateLessonModel from "../../Common/CreateLessonModel";
import Headingtitle from "../../Common/Headingtitle";
const CreateAssignment = () => {
    const fileInputRef = useRef(null); // Create a ref for the file input

    const handleSelectFileClick = () => {
        fileInputRef.current.click();
    };
    return (
        <div className="font-poppins">
            <Headingtitle title="Students" />
            <main className="bg-white relative w-full  rounded-md p-3 min-h-[600px]">
                <p className="font-bold text-[1rem] py-2 ">Student List</p>

                {/* Filters Section */}
                <div className=" mx-auto flex flex-col  gap-3 max-w-[1050px] py-3 ">
                    {/* All Filter */}
                    <div className="w-full  grid   text-[0.77rem] grid-cols-10 container  gap-5">
                        <div className="col-span-5 flex items-center h-[55px] border-2 border-border-100 rounded-md p-2 justify-between">
                            <select


                                className="appearance-none w-full text-[1rem] text-black bg-transparent focus:outline-none"
                            >
                                <option value="" disabled>Select Subject</option>
                                <option value="2 A-English">2 A-English</option>
                                <option value="2 B-Math">2 B-Math</option>
                                <option value="2 C-Science">2 C-Science</option>
                                {/* Add more subjects as needed */}
                            </select>
                            <BiSolidDownArrow />
                        </div>

                        {/* Date Filter */}
                        <div className="col-span-5 flex h-[55px] justify-between px-2  items-center  rounded-md border-2 border-border-100">
                            <select
                                className="  text-black appearance-none w-full text-[1rem]  bg-transparent focus:outline-none"
                            >
                                <option value="" disabled>Select Subject</option>
                                <option value="2 A-English">2 A-English</option>
                                <option value="2 B-Math">2 B-Math</option>
                                <option value="2 C-Science">2 C-Science</option>
                                {/* Add more subjects as needed */}
                            </select>
                            <BiSolidDownArrow />
                        </div>
                    </div>
                    <div className="col-span-10 h-[55px] flex justify-between items-center border-2 px-3 border-border-50 rounded-md">
                        <input type="text"
                            placeholder="Assignment Name"
                            className="text-text_gray-100 font-semibold text-[0.77rem] "
                        />
                        <BiSolidDownArrow />
                    </div>
                    <textarea type="area"
                        placeholder="Description"
                        className="text-text_gray-100 font-semibold text-[0.77rem] col-span-10 h-[70px]  border-2 px-3 border-border-50 rounded-md "
                    />

                    <div className="grid w-full text-[0.77rem] grid-cols-10 gap-5 grid-rows-2 mb-5">
                        {/* All Filter */}
                        <div className="col-span-2 flex border-2 border-border-100 rounded-md p-2 justify-between">
                            <p className="text-[0.77rem] font-semibold">ALL</p>
                            <BiSolidDownArrow />
                        </div>

                        {/* Date Filter */}
                        <div className="col-span-2 flex justify-between px-2 text-[1.5rem] items-center font-bold rounded-md border-2 border-border-100">
                            <p className="text-[0.9rem] font-semibold">2024-03-04</p>
                            <BiSolidDownArrow />
                        </div>

                        <input
                            className="flex-1 focus:outline-none col-span-3 flex gap-2 items-center pl-2 rounded-md border-2 border-border-100"
                            type="text"
                            placeholder="Points"
                        />
                        {/* Search Input */}
                        <div className="col-span-3 justify-between px-4 flex gap-2 items-center  rounded-md border-2 border-border-100">
                            <p className="text-[#979797]">Re-submission Allowed</p>
                            <input
                          
                                type="checkbox"
                               
                            />
                        </div>
                    </div>

                    <button
                        // onClick={handleSelectFileClick} // Trigger file input click
                        className="text-[1rem] rounded-md cursor-pointer font-semibold bg-[#009929] w-[350px] text-center mx-auto text-white py-3"
                    >
                        + Upload Files
                    </button>

                    {/* Hidden File Input */}
                    <input
                        type="file"
                        ref={fileInputRef} // Assign ref to the file input
                        // onChange={handleFileChange}
                        className="hidden" // Hide the input
                        accept="image/*,application/pdf" // Limit accepted file types as needed
                    />
                    <button

                        className="absolute text-[1rem] rounded-md cursor-pointer font-semibold bg-text_blue-500 w-[97%] bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white py-3">
                        Create Assignment
                    </button>
                </div>
            </main>

        </div>
    )
}
export default CreateAssignment
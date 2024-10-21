import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import CreateLessonModel from "../../Common/CreateLessonModel";
import Headingtitle from "../../Common/Headingtitle";
const CreateLesson = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="font-poppins">
            <Headingtitle title="Students"/>

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
                            placeholder="Lesson Name"
                            className="text-text_gray-100 font-semibold text-[0.77rem] "
                        />
                        <BiSolidDownArrow />
                    </div>
                    <textarea type="area"
                        placeholder="Description"
                        className="text-text_gray-100 font-semibold text-[0.77rem] col-span-10 h-[150px]  border-2 px-3 border-border-50 rounded-md "
                    />
                    <button
                        onClick={handleOpenModal}
                        className="absolute text-[1rem] rounded-md cursor-pointer font-semibold bg-[#009929] w-[350px] bottom-40 left-1/2 transform -translate-x-1/2 text-center text-white py-3">
                        + Add Study Material
                    </button>
                    <button
                        className="absolute text-[1rem] rounded-md cursor-pointer font-semibold bg-text_blue-500 w-[97%] bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white py-3">
                        Create Lesson
                    </button>
                </div>
            </main>
            {isModalOpen && <CreateLessonModel onClose={handleCloseModal} />}

        </div>
    )
}
export default CreateLesson
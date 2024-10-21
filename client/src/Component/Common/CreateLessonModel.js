import React, { useState, useRef } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

const CreateLessonModel = ({ onClose }) => {
    const [lessonName, setLessonName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState("");
    const fileInputRef = useRef(null); // Create a ref for the file input

    const handleLessonNameChange = (e) => {
        setLessonName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value);
    };

    const handleCreateLesson = () => {
        console.log("Lesson Created:", { lessonName, selectedSubject, selectedFile });

        // Optionally clear the inputs after creating the lesson
        setLessonName("");
        setDescription("");
        setSelectedFile(null);
        setSelectedSubject("");

        // Close the modal or parent component if needed
        if (onClose) {
            onClose(); // Call the parent close function
        }
    };

    // Function to trigger the file input click
    const handleSelectFileClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div
            className="font-poppins fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="bg-white relative rounded-md p-6 w-[1050px] h-[400px]"
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
            >
                <h2 className="text-lg font-semibold text-center mb-4">Add Study Material</h2>
                <div className="w-[75%] mx-auto mt-10">
                    <div className="w-full gap-10 text-[0.77rem] flex flex-col justify-center items-center">
                        <section className="w-full flex justify-evenly">
                            <div className="w-[45%] relative h-[55px] border-[1px] border-border-100 rounded-md p-2 flex items-center">
                                <select
                                    value={selectedSubject}
                                    onChange={handleSubjectChange}
                                    className="appearance-none w-full text-[1rem] text-text_gray-100 bg-transparent focus:outline-none"
                                >
                                    <option value="" disabled>Select Subject</option>
                                    <option value="2 A-English">2 A-English</option>
                                    <option value="2 B-Math">2 B-Math</option>
                                    <option value="2 C-Science">2 C-Science</option>
                                    {/* Add more subjects as needed */}
                                </select>
                                <BiSolidDownArrow className="absolute right-3" />
                            </div>


                            <input
                                type="text"
                                placeholder="Study Material Name"
                                value={lessonName}
                                onChange={handleLessonNameChange}
                                className="text-text_gray-100 text-[1rem]  focus:border-none w-[45%] flex h-[55px] px-2 rounded-md border-[1px] border-border-100 "
                            />

                        </section>

                        <button
                            onClick={handleSelectFileClick} // Trigger file input click
                            className="text-[1rem] rounded-md cursor-pointer font-semibold bg-[#009929] w-[350px] text-center text-white py-3"
                        >
                            + Select File
                        </button>

                        {/* Hidden File Input */}
                        <input
                            type="file"
                            ref={fileInputRef} // Assign ref to the file input
                            onChange={handleFileChange}
                            className="hidden" // Hide the input
                            accept="image/*,application/pdf" // Limit accepted file types as needed
                        />

                        <button
                            onClick={handleCreateLesson}
                            className="text-[1rem] rounded-md cursor-pointer font-semibold bg-text_blue-500 w-[350px] text-center text-white py-3"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateLessonModel;

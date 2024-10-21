import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Headingtitle from "../../Common/Headingtitle";

const AssignmentList = () => {
    const navigate = useNavigate();


    return (
        <div className="font-poppins ">
            <Headingtitle title="Manage Assignment" />
            <main className="bg-white rounded-md p-3 text-[0.77rem] relative min-h-[80vh]">
                <p className="font-bold text-[1.1rem] ">Assignment List</p>

                {/* Grid Layout */}
                <section className="px-10 w-full font-poppins">
                    <div className="grid grid-cols-12 gap-5 mb-5 font-poppins mx-5">

                        <div className="col-span-8 flex row-span-2 flex-wrap gap-2 text-[0.88rem] font-semibold">
                        </div>

                        <div className="col-span-2 flex border-2 border-border-100 rounded-md p-2 justify-between items-center">
                            <p className="text-[1rem]">2-A English</p>
                            <BiSolidDownArrow />
                        </div>


                        <div className="col-span-2 flex border-2 border-border-100 rounded-md p-2 justify-between items-center">
                            <p className="text-[1rem]">Dance

                            </p>
                            <BiSolidDownArrow />
                        </div>
                    </div>

                    <section
                        style={{ boxShadow: "2px 16px 19px 0px #00000017" }}
                        className="border-[1px] flex flex-col border-border-50 rounded-lg p-4">
                        <div className="flex w-full justify-between ">
                            <p className="text-[0.88rem] font-semibold">Test</p>
                            <p className="text-[#3F8CF4] font-[0.88rem]">Submissions</p>
                        </div>
                        <div className="w-[95%] border-[1px] border-border-50">
                        </div>

                        <div className=" flex justify-between my-4">
                            <div className="w-[400px] font-semibold grid grid-cols-2 grid-rows-1">
                                <div className=" flex flex-col gap-3">
                                    <div className="flex flex-col">
                                        <span className="text-text_gray-100 text-[0.63rem]">Due Date</span>
                                        <span >16-10-23, 14:00</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-text_gray-100 text-[0.63rem]">Points</span>
                                        <span className=" text-[0.75rem]">16</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className=" flex flex-col">
                                        <span className="text-text_gray-100 text-[0.63rem]">Extra Days for Resurbmission</span>
                                        <span className=" text-[0.75rem]">2</span>
                                    </div>
                                    <div className=" flex flex-col">
                                        <span className="text-text_gray-100 text-[0.63rem]">Instructions</span>
                                        <span className=" text-[0.75rem]"> Test</span>
                                    </div>

                                </div>
                            </div>
                            <div className="w-[300px] flex flex-col space-y-3">
                                <span className=" text-[0.75rem] text-text_gray-100">File</span>
                                <div className="bg-[#009929] flex items-centee px-10 justify-between rounded-md py-3  w-full">
                                    <p className="text-white font-semibold">IMG_98978.jpg</p>
                                    <span>logo</span>

                                </div>
                                <div className="w-full flex justify-end">
                                    <div className="float-right flex gap-3 ">
                                        <button className="py-2 px-4 text-[0.88rem] border-[1px] border-border-100 rounded-lg">Edit</button>
                                        <button className="py-2 px-4 text-[0.88rem] bg-[#E64646] border-[1px] border-border-100 rounded-lg  text-white">Delete</button>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </section>
                    <p
                        // onClick={() => navigate("/admin/dashboard/create/subject")}
                        className="absolute rounded-md cursor-pointer font-semibold bg-text_blue-500 w-[350px] bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white py-3">
                        Create Assignment
                    </p>
                </section>
            </main>
        </div>
    );
};

export default AssignmentList;

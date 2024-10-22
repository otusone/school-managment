import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import Headingtitle from "../../Common/Headingtitle";

const Dashboard = () => {
    return (
        <div className="font-poppins">
            <Headingtitle title="Dashboard"/>
            <main>
                <section className="grid w-full grid-cols-12 gap-5 grid-rows-2 ">
                    <div className="col-span-4 bg-[#FFFF] text-text_blue-500 rounded shadow-md">
                        <p className="text-[1.1rem] text-text_blue-500 font-semibold p-3">Holiday</p>
                        <div className="p-3">
                            {Array(7).fill(0).map((_, index) => (
                                <div key={index} className="mb-4 text-[0.77rem] flex justify-between p-2 rounded-lg bg-text_gray-75">
                                    <p className="font-semibold">Diwali</p>
                                    <p className="text-text_gray-100">30-10-24</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-4 bg-[#FFFF] text-text_blue-500 rounded shadow-md">
                        <div className="flex w-full justify-between p-3">
                            <p className="text-[1.1rem] text-text_blue-500 font-semibold">Leaves</p>
                            <div className="flex border-2 border-border-100 rounded-md items-center py-3 px-3 w-[150px]">
                                <p>Today</p>
                                <BiSolidDownArrow />
                            </div>
                        </div>
                        <div className="text-[0.8rem] text-text_blue-500 font-semibold text-center">
                            All are Present
                        </div>
                    </div>

                    <div className="col-span-4 bg-[#FFFF] text-text_blue-500 rounded shadow-md">
                        <p className="text-[1.1rem] p-3 text-text_blue-500 font-semibold">Student Gender</p>
                    </div>

                    <div className="col-span-4 bg-[#FFFF] text-text_blue-500 rounded shadow-md w-full">
                        <p className="text-[1.1rem] text-text_blue-500 font-semibold p-3">TimeTable</p>
                        {
                            Array(3).fill(0).map((_, index) => (
                                <div key={index} className="p-3 font-semibold my-4 border-t-2 border-border-50">
                                    <div className="flex justify-between py-2  ">
                                        <p className="text-[0.85rem]" >08:30 - 09:00</p>
                                        <p className="text-[0.85rem] text-text_gray-100">1 B - English</p>
                                    </div>
                                    <p className="text-text_gray-100 text-[0.85rem]">Environmental Studies (EVS) - Theory</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="col-span-4 bg-[#FFFF] text-text_blue-500 rounded shadow-md">
                        <p className="text-[1.1rem] text-text_blue-500 font-semibold p-3">Holiday</p>
                    </div>
                    <div className="col-span-4 bg-[#FFFF] text-text_blue-500 rounded shadow-md">
                        <p className="text-[1.1rem] text-text_blue-500 font-semibold p-3">Exam result</p>
                    </div>

                    <div className="col-span-12 bg-[#FFFF] text-text_blue-500 rounded shadow-md font-poppins text-[0.77rem]">
                        <p className="text-[1.1rem] text-text_blue-500 font-semibold p-3">Announcement</p>
                        <table className="w-full">
                            <thead className="px-2">
                                <tr className="grid grid-cols-12 px-2">
                                    <th className="col-span-1 text-left">No</th>
                                    <th className="col-span-4 text-left">Title</th>
                                    <th className="col-span-7 text-left">Description</th>
                                </tr>
                            </thead>
                            <hr />
                            <tbody >
                                {Array(3).fill().map((_, index) => {
                                    return (
                                        <tr className="grid grid-cols-12 p-2" key={index}>
                                            <td className="col-span-1">{index + 1}</td>
                                            <td className="col-span-4">
                                                <p className="text-text_blue-500 font-semibold p-3">Mascot Music Festival</p>
                                            </td>
                                            <td className="col-span-7">
                                                Have a bunch of talented musicians at your school? You probably do, whether you know it or not. Get everyone excited by launching your own school-based music festival, named after the mascot of your high school.
                                            </td>
                                        </tr>
                                    );
                                })
                                }
                            </tbody>
                        </table>


                    </div>


                </section>
            </main>
        </div>
    );
};

export default Dashboard;

import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import Headingtitle from "../../Common/Headingtitle";
import Count_Icon from "../../../Assests/Logos/Count_Icon.png"
import Student_Img from "../../../Assests/Logos/Student_Img.png"

const StudentDashboard = () => {
    const DashboardData = [{
        title: "Class",
        count: 12
    },

    {
        title: "Student",
        count: 129
    },
    {
        title: "Teachers",
        count: 13
    }, {
        title: "Event",
        count: 36
    }]
    return (
        <div className="font-poppins">
            {/* Heading section */}
            <Headingtitle title="Dashboard" />

            {/* Main content section */}
            <main className="px-6 py-2">
                <section className="grid w-full grid-cols-12 gap-5">

                    {/* Generating 4 empty cards */}
                    {
                        DashboardData.map((item, index) => (
                            <div key={index}
                                style={{ boxShadow: "6px 6px 54px 0px #0000000D" }}
                                className="col-span-3 font-nunito flex flex-col justify-between h-[8rem] rounded-2xl p-4 bg-white text-text_blue-500  shadow-md">
                                <div className="flex justify-between ">
                                    <p className="text-[1.4rem] text-[#979797]  ">{item.title}</p>
                                    <div style={{ backgroundColor: 'rgba(0, 123, 201, 0.21)' }} className="p-3 rounded-xl">
                                        <img src={Count_Icon} className="w-[1.75rem] h-[2.5rem]" />
                                    </div>

                                </div>
                                <p className="text-[1.5rem] text-text_gray-125 font-semibold">{item.count}</p>
                            </div>
                        ))
                    }

                    <div className="col-span-6 h-[410px] justify-between flex flex-col font-poppins bg-white text-text_blue-500 px-5 py-3  rounded-xl shadow-md">
                        <p className="text-[1.5rem]  font-semibold h-[100px] border-b-[1px] pl-5 border-border-100">Student Info</p>
                        <div className="flex justify-between w-full my-1 h-[250px]  mb-5 pl-5">
                            <div className="w-[50%]">
                                <div className="flex gap-[4px] flex-col">
                                    <img src={Student_Img} className="w-[100px] h-[100px]" />
                                    <p className="font-poppins text-[1.1rem] font-semibold leading-[27px] text-left">
                                        Student Name
                                    </p>

                                    <p className="font-poppins text-[0.88rem] text-text_gray-100  ">Mohit</p>
                                </div>
                                <div>
                                    <p className="font-poppins text-[1.1rem] font-semibold leading-[27px] text-left">Admission Number </p>
                                    <p className="font-poppins text-[0.88rem] text-text_gray-100 ">1918380752</p>
                                </div>

                            </div>
                            <div className="w-[50%] flex flex-col justify-between">
                                <div>
                                    <p className="font-poppins text-[1.1rem] font-semibold leading-[27px] text-left">Class ( section ) </p>
                                    <p className="font-poppins text-[0.88rem] text-text_gray-100 ">B-Tech</p>
                                </div>
                                <div>
                                    <p className="font-poppins text-[1.1rem] font-semibold leading-[27px] text-left">Roll No </p>
                                    <p className="font-poppins text-[0.88rem] text-text_gray-100 ">1918</p>
                                </div>
                                <div>
                                    <p className="font-poppins text-[1.1rem] font-semibold leading-[27px] text-left">Guardian Name  </p>
                                    <p className="font-poppins text-[0.88rem] text-text_gray-100 ">Mr.Brijesh Kumar</p>
                                </div>
                                <div>
                                    <p className="font-poppins text-[1.1rem] font-semibold leading-[27px] text-left">Mobile Number </p>
                                    <p className="font-poppins text-[0.88rem] text-text_gray-100 ">8278567889</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leaves section */}
                    <div className="col-span-6 bg-white h-[410px] px-5 py-3 text-text_blue-500 rounded-xl shadow-md">
                        <div className="flex justify-between h-[100px] border-b-[1px] border-border-100 ">
                            <p className="text-[1.5rem] font-semibold ">Upcoming Events </p>
                            <div className="flex items-center border-2 h-fit justify-between border-border-100 rounded-md py-3 px-3 w-[150px]">
                                <p>Today</p>
                                <BiSolidDownArrow />
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
};

export default StudentDashboard;


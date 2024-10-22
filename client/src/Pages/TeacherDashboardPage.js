import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Common/Sidebar";
import { TeachersidebarItems } from "../data/SidebarItem";
import worldLogo from "../Assests/Logos/world.png"
import { IoMenuOutline } from "react-icons/io5";
import avtar from "../Assests/Logos/avtar.png"

const TeacherDashboard = () => {
    return (
        <div className="w-[100vw] h-[100vh] grid grid-cols-12">
            <aside className="col-span-12 md:col-span-3 lg:col-span-2 max-w-[330px] bg-[#FFFF] ">
                <div className="w-full h-[50px]  flex justify-center items-center my-2">
                    <img src={worldLogo} className="w-[80px] h-[50px]" />
                </div>
                <Sidebar Sidebar={TeachersidebarItems} />
            </aside>
            <main className="col-span-12 md:col-span-9 lg:col-span-10 flex flex-col">
                <nav className="h-[70px] w-full bg-[#FFFF]   flex justify-between px-10 font-poppins">
                    <div className="h-full w-[120px] flex items-center justify-between ">
                        <IoMenuOutline className="w-[30px] h-[40px]" />
                        <p className="text-text_Black-100 font-poppins text-[1.1rem]">PlantEdu</p>
                    </div>
                    <div className="w-[480px] flex flex-row justify-between items-center">
                        <p className="text-text_gray-100 text-[0.9rem] font-semibold">Session Years : 2023-24, Second Semester</p>
                        <div className="flex gap-3 ">
                            <img src={avtar} />
                            <div>
                                <p className="text-[0.79rem] text-[#000] font-semibold">John Wick</p>
                                <p className="text-[0.6rem] text-[#000]">Class: AiroSpace Engineer </p>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="bg-text_gray-75 w-full h-[90vh] p-5 overflow-y-scroll">
                    <Outlet />
                </section>
            </main>
        </div>

    )
}

export default TeacherDashboard
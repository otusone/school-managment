import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import Table from "../../Common/Table";
import Headingtitle from "../../Common/Headingtitle";
const ClassSection = () => {
    const data = [
        {
            no: 1,
            class: "2 C - English",
            teacher: "Ishaku Singh",
            subjects: ["Hindi Theory - Pyal"],
        },
        {
            no: 2,
            class: "2 C - English",
            teacher: "Ishaku Singh",
            subjects: ["Hindi Theory - Shipli Pratap"],
        },
        {
            no: 3,
            class: "2 C - English",
            teacher: "Ishaku Singh",
            subjects: ["Hindi Theory - Promod Singh"],
        },
        {
            no: 4,
            class: "2 C - English",
            teacher: "Ishaku Singh",
            subjects: [
                "Hindi Theory - Pyal Singh",
                "English",
                "Math",
                "Physics",
                "Hindi Theory",
                "Hindi Theory",
            ],
        },
    ];
    return (
        <div>
            <div className="font-poppins">
                <Headingtitle title="Manage"/>
                <main className="bg-white min-h-[80vh] rounded-md p-2  ">
                    <p className="text-[1rem] font-semibold py-2 "> Class Section</p>
                     <div className="grid w-full grid-cols-12 gap-5 grid-rows-2 text-[0.77rem]">
                        <div className="col-span-8 flex  border-2 border-border-100 rounded-md p-2 justify-between ">
                            <p className="text-[0.77rem] font-semibold">ALL</p>
                            <BiSolidDownArrow />
                        </div>
                        <input className=" col-span-2  pl-2 rounded-md border-2 border-border-100  "
                            type="search"
                            placeholder="Search"

                        />
                        <div className=" col-span-2  flex  justify-evenly text-[1.5rem] items-center font-bold text-text_gray-50 rounded-md border-2 border-border-100">
                            <VscDebugRestart />
                            <IoMenu />
                            <AiOutlineDownload />
                        </div>
                    </div> 

                    <Table data={data} />
                </main>
            </div>
        </div>
    )
}

export default ClassSection
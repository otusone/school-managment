import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import Avtar from "../../../Assests/Logos/avtar.png"
import Headingtitle from "../../Common/Headingtitle";

const HolidayList = () => {
    const days = ['Today', 'Tommorw', 'Upcoming'];
    const [selectedDay, setSelectedDay] = useState('Today');

    const scheduleData = [
        { timeStart: '8:30 am', timeEnd: '9:30 am', subject: 'English', class: '8 A' },
        { timeStart: '8:30 am', timeEnd: '9:30 am', subject: 'Environmental Studies (Evs)', class: '8 A' },
        { timeStart: '8:30 am', timeEnd: '9:30 am', subject: 'Environmental Studies (Evs)', class: '8 A' },
        { timeStart: '8:30 am', timeEnd: '9:30 am', subject: 'Environmental Studies (Evs)', class: '8 A' },
        { timeStart: '8:30 am', timeEnd: '9:30 am', subject: 'Environmental Studies (Evs)', class: '8 A' },
        { timeStart: '8:30 am', timeEnd: '9:30 am', subject: 'Environmental Studies (Evs)', class: '8 A' }
    ];

    return (
        <div>
            <div className="font-poppins">
               <Headingtitle title="Leaves"/>
                <main className="bg-white shadow-md rounded-md p-2  ">
                    <p className="font-bold text-[1rem] "> Leaves List</p>
                    <div className="grid w-full grid-cols-12 gap-5 text-[0.77rem] mb-5">
                        <div className="col-span-10 space-x-10 mx-auto flex justify-evenly">
                            {days.map((day) => (
                                <button
                                    key={day}
                                    className={`px-5 text-[0.65rem] py-2  font-semibold rounded  
            ${selectedDay === day ? 'bg-blue-900 text-white shadow-lg ' : 'text-black border-border-50 rounded-md border-2'}
          `}
                                    onClick={() => setSelectedDay(day)}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                        {/* All Filter */}

                    </div>
                    <section className="grid grid-cols-10 font-poppins mx-auto grid-rows-2 place-content-center gap-3 justify-center items-center">
                        {scheduleData.map((item, index) => (
                            <div key={index} className="flex col-span-3 space-x-4 items-center justify-center">
                                <div className="bg-gray-100 rounded-lg p-4 w-64 shadow-md flex gap-2 items-center justify-between">
                                    <img src={Avtar} className="rounded-full" />
                                    <div className="w-[50%]">
                                        <p className="text-[10px] text-black  font-bold">Subject</p>
                                        <p className="text-[0.77rem] ">Role:<span>Teacher</span></p>

                                    </div>
                                    <p className="text-[0.85rem] text-black">27-8</p>
                                </div>
                            </div>
                        ))}
                    </section>

                </main>
            </div>
        </div>
    )
}

export default HolidayList
import React, { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import Headingtitle from "../../Common/Headingtitle";

const TimeTable = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [selectedDay, setSelectedDay] = useState('Mon');

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
               <Headingtitle title=" TimeTable"/>
                <main className="bg-white shadow-md rounded-md p-5 text-[0.77rem] ">
                    <p className="font-semibold text-[1rem] pb-2"> My TimeTable</p>
                    <div className="grid w-full grid-cols-12 gap-5  mb-5">
                        <div className="col-span-10 space-x-10 mx-auto flex justify-evenly">
                            {days.map((day) => (
                                <button
                                    key={day}
                                    className={`p-4  font-semibold rounded  
            ${selectedDay === day ? 'bg-blue-900 text-white shadow-lg' : 'text-black'}
          `}
                                    onClick={() => setSelectedDay(day)}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                        {/* All Filter */}

                    </div>
                    <section className="grid grid-cols-10 mx-auto grid-rows-2 gap-3 justify-center items-center">
                        {scheduleData.map((item, index) => (
                            <div key={index} className="flex col-span-3 space-x-4 items-center justify-center">
                                {/* Time Section */}
                                <div className="text-right text-[0.77rem] flex flex-col justify-between items-center">
                                    <p>{item.timeStart}</p>
                                    <div className="h-10 w-[1px] bg-gray-400 mx-4"></div> {/* Vertical line */}
                                    <p>{item.timeEnd}</p>
                                </div>

                                {/* Class Information Section */}
                                <div className="bg-gray-100 rounded-lg p-4 w-64 shadow-md">
                                    <p className="text-[10px] text-gray-500 ">Subject</p>
                                    <p className="text-[0.77rem] font-semibold">{item.subject}</p>
                                    <p className="text-[10px] text-gray-500">Class</p>
                                    <p className="text-[0.77rem] font-semibold">{item.class}</p>
                                </div>
                            </div>
                        ))}
                    </section>

                </main>
            </div>
        </div>
    )
}

export default TimeTable
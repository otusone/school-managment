import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AttendendancePage.css';
import Headingtitle from '../../Common/Headingtitle';
import fair1 from "../../../Assests/AcademicPic/fair1.png"
import fair2 from "../../../Assests/AcademicPic/fair2.png"

const AcademicCalender = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [totalPresent, setTotalPresent] = useState(19); // Example data
    const [totalAbsent, setTotalAbsent] = useState(0); // Example data

    // Handle manual date changes
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // Handle the 'Previous Month' button click
    const handlePrevMonth = () => {
        const prevMonth = new Date(selectedDate);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        setSelectedDate(prevMonth);
    };

    // Handle the 'Next Month' button click
    const handleNextMonth = () => {
        const nextMonth = new Date(selectedDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setSelectedDate(nextMonth);
    };

    const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const Holiday = ['ALL', 'Holidays', 'Events', 'Exam'];
    const [selectedCalender, setSelectedCalender] = useState('ALL');

    return (
        <div className="font-poppins">
            <Headingtitle title="Attendance" />
            <main className="bg-white relative w-full rounded-md p-5 min-h-[80vh]">
                {/* Main Section */}
                <div className=" p-5 rounded-lg w-[100%] h-[80vh] overflow-y-scroll">
                    <div className="flex justify-between items-center w-[100%] p-5 mx-auto">
                        {/* Calendar Section */}
                        <div className='w-[60%] h-[420px] mx-auto flex justify-center items-center'>
                            <div className="flex flex-col w-[60%] h-[60%] justify-center  items-center">
                                <div className='flex text-center space-x-3'>
                                    {Days.map((D, index) => (
                                        <p key={index} className='text-[10px] font-semibold text-text_gray-100'>{D.toUpperCase()}</p>
                                    ))}
                                </div>
                                {/* DatePicker with updated selectedDate */}
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    inline
                                    className="text-center custom-datepicker"
                                    renderCustomHeader={() => null} // Removes month/year selector
                                    showPopperArrow={false}
                                    showMonthDropdown={false}
                                    showYearDropdown={false}
                                    dateFormat="dd"
                                />
                            </div>
                        </div>

                        <div className='w-[40%] h-[450px] flex flex-col space-y-32 py-5 items-center'>
                            {/* Month and Year Navigation */}
                            <div className="flex items-center w-[355px] space-x-2 border-[1px] border-border-100 rounded-lg px-3 py-2">
                                <button
                                    onClick={handlePrevMonth}
                                    className="bg-text_blue-500 text-white p-2 rounded-md"
                                >
                                    <FaArrowLeft />
                                </button>
                                <div className="text-[0.88rem] font-semibold w-[280px] text-center">
                                    {selectedDate.toLocaleString('default', { month: 'long' })}{' '}
                                    {selectedDate.getFullYear()}
                                </div>
                                <button
                                    onClick={handleNextMonth}
                                    className="bg-text_blue-500 text-white p-2 rounded-md"
                                >
                                    <FaArrowRight />
                                </button>
                            </div>

                            {/* Attendance Summary */}
                            <div className="flex space-x-10">
                                <div className="bg-green-500 flex flex-col items-center justify-center text-white p-5 w-[120px] aspect-square rounded-md text-center">
                                    <div className="text-center w-full">Total Present</div>
                                    <div className=" text-[0.77rem] rounded-full font-semibold bg-white p-3 w-fit  text-black">{totalPresent}</div>
                                </div>
                                <div className="bg-red-500 flex flex-col items-center  text-white p-5 rounded-md w-[120px] aspect-square">
                                    <div className="text-center">Total Absent</div>
                                    <div className="text-[0.77rem] rounded-full font-semibold bg-white p-3 w-fit  text-black">{totalAbsent}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-[100%] grid  grid-cols-4 mx-auto   gap-5 mb-5">
                        <div className="col-span-4  space-x-10 flex justify-around ">
                            {Holiday.map((day) => (
                                <button
                                    key={day}
                                    className={`px-4 py-2 font-semibold rounded  
                                    ${selectedCalender === day ? 'bg-blue-900 text-white shadow-xl' : 'text-black'}
                                            `}
                                    onClick={() => setSelectedCalender(day)}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    </div>

                    <section className='w-full p-2 '>
                        <div className='p-2 border-[1px] border-border-100 rounded-lg font-poppins'

                            style={{ boxShadow: "2px 16px 19px 0px #00000017" }}>
                            <img src={fair1} className='w-[100%] rounded-t-lg mx-auto' />
                            <div className='w-[60%] pl-2'>
                                <div className='flex w-full text-[0.65rem] py-3 leading-[10px] justify-between '>
                                    <p>08:00 am - 09:00 am</p>
                                    <span>To</span>
                                    <p>08:00 am - 09:00 am</p>

                                </div>
                                <p className='font-semibold text-[0.88rem] leading-[17px]'>School Science Fair Week </p>
                                <p className='text-[0.77rem] leading-[15px] w-[50%]'>Students showcase their scientific experience and
                                    projects, fostering curiosity and interest in science. </p>

                            </div>
                        </div>
                        <div className='p-2 border-[1px] border-border-100 rounded-lg font-poppins'

                            style={{ boxShadow: "2px 16px 19px 0px #00000017" }}>
                            <img src={fair2} className='w-[100%] rounded-t-lg mx-auto' />
                            <div className='w-[60%] pl-2'>
                                <div className='flex w-full text-[0.65rem] py-3 leading-[10px] justify-between '>
                                    <p>08:00 am - 09:00 am</p>
                                    <span>To</span>
                                    <p>08:00 am - 09:00 am</p>

                                </div>
                                <p className='font-semibold text-[0.88rem] leading-[17px]'>School Science Fair Week </p>
                                <p className='text-[0.77rem] leading-[15px] w-[50%]'>Students showcase their scientific experience and
                                    projects, fostering curiosity and interest in science. </p>

                            </div>
                        </div>

                    </section>

                </div>
            </main>
        </div>
    );
};

export default AcademicCalender;

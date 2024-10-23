import React from "react";
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { BiSolidDownArrow } from "react-icons/bi";
import Headingtitle from "../../Common/Headingtitle";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const holidays = [
        { name: "Diwali", date: "30-10-24" },
        { name: "Christmas", date: "25-12-24" },

        // Add more holiday objects
    ];

    const timetable = [
        { time: "08:30 - 09:00", class: "1 B - English", subject: "Environmental Studies (EVS) - Theory" },
        { time: "08:30 - 09:00", class: "1 B - English", subject: "Environmental Studies (EVS) - Theory" },
        { time: "08:30 - 09:00", class: "1 B - English", subject: "Environmental Studies (EVS) - Theory" },

        // Add more timetable objects
    ];

    const Genderdata = {
        labels: ['Female', 'Male'],
        datasets: [
            {
                label: 'Students',
                data: [200, 169], // Adjust with actual data
                backgroundColor: ['#FF4F9A', '#2ACB47'],
                hoverBackgroundColor: ['#FF8DBB', '#75E199'],
                borderWidth: 0,
            },
        ],
    };

    const Genderoptions = {
        cutout: '70%',
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    font: {
                        size: 12,
                        family: 'Montserrat',
                    },
                },
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    const barchartData = {
        labels: ['A', 'B'],
        datasets: [
            {
                label: 'Percentage',
                data: [95.5, 85.5], // Adjust the data values accordingly
                backgroundColor: '#3ABEFE', // Bar color
                borderRadius: 8,
            },
        ],
    };

    const barchartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: function (value) {
                        return value + '%'; // Add percentage symbol to y-axis labels
                    },
                },
            },
        },
    };

    return (
        <div className="font-poppins">
            <Headingtitle title="Dashboard" />
            <main>
                <section className="grid w-full grid-cols-12 gap-5 grid-rows-2 ">
                    {/* Holiday List */}
                    <div className="col-span-4 bg-[#FFFF] text-text_blue-500 rounded shadow-md">
                        <p className="text-[1.1rem] text-text_blue-500 font-semibold p-3">Holiday</p>
                        <div className="p-3">
                            {holidays.map((holiday, index) => (
                                <div key={index} className="mb-4 text-[0.77rem] flex justify-between p-2 rounded-lg bg-text_gray-75">
                                    <p className="font-semibold">{holiday.name}</p>
                                    <p className="text-text_gray-100">{holiday.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Leaves Section */}
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

                    {/* Gender Doughnut Chart */}
                    <div className="col-span-4 bg-[#FFFF] text-text_blue-500 rounded shadow-md">
                        <p className="text-[1.1rem] p-3 text-text_blue-500 font-semibold">Student Gender</p>
                        <div className="relative">
                            <Doughnut data={Genderdata} options={Genderoptions} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-xl font-semibold">Total</p>
                                <p className="text-3xl font-bold">369</p>
                            </div>
                        </div>
                    </div>

                    {/* TimeTable Section */}
                    <div className="col-span-4 bg-[#FFFF] text-text_blue-500 rounded shadow-md w-full">
                        <p className="text-[1.1rem] text-text_blue-500 font-semibold p-3">TimeTable</p>
                        {timetable.map((item, index) => (
                            <div key={index} className="p-3 font-semibold my-4 border-t-2 border-border-50">
                                <div className="flex justify-between py-2">
                                    <p className="text-[0.85rem]">{item.time}</p>
                                    <p className="text-[0.85rem] text-text_gray-100">{item.class}</p>
                                </div>
                                <p className="text-text_gray-100 text-[0.85rem]">{item.subject}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bar Chart */}
                    <div className="col-span-4 bg-[#FFFF] text-text_blue-500 rounded shadow-md">
                        <p className="text-[1.1rem] text-text_blue-500 font-semibold p-3">Holiday</p>
                        <div className="h-[300px]"> {/* Set the height here */}
                            <Bar
                                data={barchartData}
                                options={barchartOptions}
                            />
                        </div>
                    </div>


                    {/* Announcement Table */}
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
                            <tbody>
                                {Array(3).fill().map((_, index) => (
                                    <tr key={index} className="grid grid-cols-12 p-2">
                                        <td className="col-span-1">{index + 1}</td>
                                        <td className="col-span-4">
                                            <p className="text-text_blue-500 font-semibold p-3">Mascot Music Festival</p>
                                        </td>
                                        <td className="col-span-7">
                                            Have a bunch of talented musicians at your school? You probably do, whether you know it or not. Get everyone excited by launching your own school-based music festival, named after the mascot of your high school.
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;

import React from "react";
import Headingtitle from "../../Common/Headingtitle";
import avtar from "../../../Assests/Logos/avtar.png";
import { useNavigate } from "react-router-dom";

const driverData = [
    {
        id: 1,
        name: "Narendra",
        email: "Watashino@gmail.com",
        contact: "9999999",
        address: "Noida, Sector – 1 Uttar Pradesh 2001100",
        busNo: 22
    },
    {
        id: 2,
        name: "Ankita",
        email: "ankita@gmail.com",
        contact: "8888888",
        address: "Delhi, Sector – 18 Delhi 110000",
        busNo: 23
    },
    {
        id: 3,
        name: "Rahul",
        email: "rahul@example.com",
        contact: "7777777",
        address: "Gurgaon, Sector – 45 Haryana 122018",
        busNo: 24
    },
    // Add more driver data objects here
];

const TransPortVehicletList = () => {

    const navigate=useNavigate();
    const handleViewBusRoute = (driver) => {
        // Set driver data in localStorage
        localStorage.setItem('selectedDriver', JSON.stringify(driver));
        navigate("/parent/dashboard/detail/transportRoute")
        // alert(`${driver.name}'s route has been saved in localStorage.`);
    };

    return (
        <section>
            <Headingtitle title="Transport Vehicle List" />
            <div className="overflow-x-auto p-3 text-[0.77rem] relative min-h-[78vh]">
                {driverData.map((driver, index) => (
                    <section
                        key={driver.id}
                        className="p-4 flex flex-col bg-white text-[0.86rem] rounded-lg border-[1px] border-border-100 mb-4"
                    >
                        <div className="flex justify-between items-start p-5 ">
                            {/* Driver Info */}
                            <div className="flex gap-4 items-start">
                                {/* Profile Image */}
                                <img
                                    src={avtar}
                                    alt="Driver"
                                    className="w-[60px] h-[60px] rounded-full object-cover"
                                />
                                {/* Driver Details */}
                                <div className="flex flex-col text-[0.88rem]">
                                    <div className="flex flex-col space-y-2">
                                        <p>Driver name – <span className="font-semibold">{driver.name}</span></p>
                                        <p>Driver Email – <span className="font-semibold">{driver.email}</span></p>
                                        <p>Driver Contact no – <span className="font-semibold">{driver.contact}</span></p>
                                        <p>Driver Address – <span className="font-semibold">{driver.address}</span></p>
                                    </div>
                                    <div className="mt-4 flex">
                                        <button
                                            onClick={() => handleViewBusRoute(driver)}
                                            className="px-4 py-2 bg-text_blue-500 text-white font-semibold rounded-md">
                                            View Bus Route
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Bus Info */}
                            <div className="text-right">
                                <p className="font-semibold">Bus no: {driver.busNo}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
};

export default TransPortVehicletList;

import React, { useEffect, useState } from "react";
import Headingtitle from "../../Common/Headingtitle";
import avtar from "../../../Assests/Logos/avtar.png";

const VehicleRoute = () => {
    const [selectedDriver, setSelectedDriver] = useState(null);

    // Fetch driver data from localStorage on component mount
    useEffect(() => {
        const driverData = JSON.parse(localStorage.getItem("selectedDriver"));
        if (driverData) {
            setSelectedDriver(driverData);
        }
    }, []);

    // If no driver is selected, return a message
    if (!selectedDriver) {
        return <p>No driver data found. Please select a driver first.</p>;
    }

    return (
        <section>
            <Headingtitle title="Transport Vehicle Route" />
            <div className="overflow-x-auto p-3 text-[0.77rem] relative min-h-[78vh]">
                <section
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
                                    <p>Driver name – <span className="font-semibold">{selectedDriver.name}</span></p>
                                    <p>Driver Email – <span className="font-semibold">{selectedDriver.email}</span></p>
                                    <p>Driver Contact no – <span className="font-semibold">{selectedDriver.contact}</span></p>
                                    <p>Driver Address – <span className="font-semibold">{selectedDriver.address}</span></p>
                                </div>
                            </div>
                        </div>
                        {/* Bus Info */}
                        <div className="text-right">
                            <p className="font-semibold">Bus no: {selectedDriver.busNo}</p>
                        </div>
                    </div>
                    <div className="mt-4 flex">
                        {/* Replace button with iframe map */}
                        <iframe
                            title="Bus Route Map"
                            src={`https://www.google.com/maps?q=${encodeURIComponent(selectedDriver.address)}&output=embed`}
                            className="w-full h-[400px] rounded-lg border"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default VehicleRoute;

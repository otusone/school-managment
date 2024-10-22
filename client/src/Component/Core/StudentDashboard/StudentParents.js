import React from "react";
import Headingtitle from "../../Common/Headingtitle";
import Avtar from "../../../Assests/Logos/avtar.png";

const StudentParents = () => {
    // Array containing details for both mother and father
    const parentsDetails = [
        {
            relation: "Mother",
            name: "Kishna Gor",
            dob: "12-09-1968",
            email: "mother@example.com",
            occupation: "Housewife",
            phone: "099897977",
        },
        {
            relation: "Father",
            name: "Raj Gor",
            dob: "12-09-1965",
            email: "father@example.com",
            occupation: "IPS",
            phone: "099897999",
        },
    ];

    return (
        <section>
            <Headingtitle title="Parents Profile" />
            <div className="overflow-x-auto p-3 text-[0.77rem] relative min-h-[78vh]">
                <section className="p-4 flex flex-col items-center custom-scroll overflow-y-scroll gap-4 bg-white text-[0.86rem] rounded-lg h-[79vh]">
                    <div className="w-[90%] grid grid-cols-3 gap-6 p-4">
                        {parentsDetails.map((parent, index) => (
                            <div key={index} className="w-full px-5 border-[1px] h-[360px] border-border-50 rounded-lg shadow-md p-2">
                                <div className="flex justify-center mb-4">
                                    <img src={Avtar} alt={`${parent.relation} Avatar`} className="rounded-full shadow-lg w-[90px] aspect-square" />
                                </div>
                                <div className="font-poppins h-[70%]  flex flex-col justify-between">
                                    <div>
                                        <p className=" text-[0.75rem] leading-[17px]"> {parent.relation}</p>
                                        <p className="text-[1.1rem] leading-[22px] font-semibold"> {parent.name}</p>
                                    </div>
                                    <div>
                                        <p className=" text-[0.75rem] leading-[17px]">Date of Birth:</p>
                                        <p className="text-[1.1rem] leading-[22px] font-semibold"> {parent.dob}</p>
                                    </div>
                                    <div>
                                        <p className=" text-[0.75rem] leading-[17px]">Email:</p>
                                        <p className="text-[1.1rem] leading-[22px] font-semibold">{parent.email}</p>
                                    </div>
                                    <div>
                                        <p className=" text-[0.75rem] leading-[17px]">Occupation:</p>
                                        <p className="text-[1.1rem] leading-[22px] font-semibold"> {parent.occupation}</p>
                                    </div>
                                    <div>
                                        <p className=" text-[0.75rem] leading-[17px]">Phone Number:</p>
                                        <p className="text-[1.1rem] leading-[22px] font-semibold">{parent.phone}</p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default StudentParents;

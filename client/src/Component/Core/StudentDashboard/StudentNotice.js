import React, { useState } from "react";
import Headingtitle from "../../Common/Headingtitle";
import "./scrollbar.css"
const StudentNotice = () => {


    return (
        <section>
            <Headingtitle title="Notice " />
            <div className="overflow-x-auto p-3 text-[0.77rem] relative min-h-[78vh]">

                <section className="p-4 flex flex-col items-center custom-scroll overflow-y-scroll gap-4 bg-white text-[0.86rem] rounded-lg h-[79vh]">
                    {
                        Array(6).fill().map((_, index) => (
                            <div
                                key={index}
                                className="max-w-[1090px]  flex flex-col space-y-2 font-poppins border-[1px] border-border-100 rounded-lg h-[143px] p-6">
                                <p className="font-semibold">October</p>
                                <p className="text-[#979797]  leading-[17px] w-[80%] ">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>

                            </div>
                        ))
                    }


                </section>
            </div>
        </section>
    );
};

export default StudentNotice;

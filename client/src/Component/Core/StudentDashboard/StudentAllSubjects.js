import React from "react";
import Headingtitle from "../../Common/Headingtitle";
import campus from "../../../Assests/Logos/campus.png"

const StudentDetailSubjects = () => {


    return (
        <section>
            <Headingtitle title="Subject Details " />
            <div className="overflow-x-auto  p-3 text-[0.77rem] relative min-h-[80vh]">

                <section className="min-w-full   bg-white   rounded-lg min-h-[80vh] font-poppins ">
                    <div className="w-full bg-bg_blue-25 h-[60px] rounded-lg p-3">
                        <p className="text-text_blue-500 text-[1.1rem] font-semibold  ">Maths</p>
                    </div>
                    <div className=" grid grid-cols-12 grid-rows-2 gap-4 p-5">
                        {
                            Array(6).fill().map((_, index) => (
                                <div key={index} className="col-span-4 h-[100px] leading-[17px] p-3 gap-4  text-[#000000] text-[0.8rem] flex border-[1px]  border-border-100 rounded-lg items-center">
                                    <img src={campus} className="w-[38px] h-[36px] mx-4" />
                                    <div className="flex flex-col space-y-2">
                                        <div>
                                            <p className="font-semibold ">Chapter name</p>
                                            <p>Basic of equation</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Chapter Description</p>
                                            <p>Basic of Equation chapter 1 </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }


                    </div>
                </section>
            </div>
        </section>
    );
};

export default StudentDetailSubjects;

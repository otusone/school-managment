import React from "react";
import { FaHouseUser } from "react-icons/fa";

const Headingtitle = ({ title }) => {
    return (
        <section className="flex gap-3 h-[40px] items-center">
            <FaHouseUser />

            <p className="text-text_blue-500 text-[1.13rem] font-semibold ">{title}</p>
        </section>
    )
}
export default Headingtitle
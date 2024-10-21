import React, { useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { sidebarItems } from "../../../data/SidebarItem"; // Adjust path as necessary
import { FaHouseUser } from "react-icons/fa";

const Sidebar = () => {
    const [expanded, setExpanded] = useState(null); // Track which accordion is expanded

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index); // Toggle the accordion
    };

    return (
        <div className='px-4'>
            {sidebarItems.map((item, index) => (
                <div key={index} className="mb-2 py-2 font-semibold ">
                    {/* Check if item has sub-links */}
                    {item.Links ? (
                        <div>
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => handleToggle(index)}
                            >
                                <div className="flex gap-1 items-center">
                                    <FaHouseUser />
                                    <Link to={`/${item.path}`} className="font-poppins text-[12px] leading-[18px] text-left">
                                        {item.title}
                                    </Link>
                                </div>
                                <MdExpandMore
                                    className={`transform transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`}
                                />
                            </div>
                            {expanded === index && (
                                <div className="mt-2 pl-4 flex flex-col gap-1">
                                    {item.Links.map((sub, subIndex) => (
                                        <div key={subIndex} className="flex gap-2 py-1 items-center">
                                            <FaHouseUser />
                                            <Link to={sub.path} className="font-poppins text-[12px] leading-[18px] text-left">
                                                {sub.title}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="sidebar-item flex items-center space-x-2">
                            <FaHouseUser />
                            <Link to={`/${item.path}`} className="font-poppins text-[12px] leading-[18px] text-left text-text_blue-500">
                                {item.title}
                            </Link>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

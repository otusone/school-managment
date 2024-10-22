import React, { useState } from 'react';
import { MdExpandMore } from "react-icons/md";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import { FaHouseUser } from "react-icons/fa";

const Sidebar = ({ Sidebar }) => {
    
    const [expanded, setExpanded] = useState(null); // Track which accordion is expanded
    const location = useLocation(); // Get the current location
    const currentPath = location.pathname; // Current pathname

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index); // Toggle the accordion
    };

    return (
        <div className='px-4'>
            {Sidebar.map((item, index) => (
                <div key={index} className="mb-2 py-2 font-semibold">
                    {/* Check if item has sub-links */}
                    {item.Links ? (
                        <div>
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => handleToggle(index)}
                            >
                                <div className="flex gap-1 items-center">
                                    <FaHouseUser />
                                    <Link
                                        to={`/${item.path}`}
                                        className={`font-poppins text-[12px] leading-[18px] text-left ${currentPath.includes(item.path) ? 'bg-gray' : ''}`} // Highlight if active
                                    >
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
                                            <Link
                                                to={sub.path}
                                                className={`font-poppins text-[12px] leading-[18px] text-left ${currentPath === sub.path ? 'bg-gray' : ''}`} // Highlight if active
                                            >
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
                            <Link
                                to={`/${item.path}`}
                                className={`font-poppins text-[12px] leading-[18px] text-left ${currentPath === `/${item.path}` ? 'bg-gray' : ''}`} // Highlight if active
                            >
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

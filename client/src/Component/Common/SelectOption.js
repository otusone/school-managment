import React from "react";
import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

const SelectOption = ({width=8,options}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[2]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false); // Close dropdown after selection
    };
    return (
        <div className={`relative col-span-${width}`}>
            <div
                className={`col-span-${width} flex border-2 border-border-100 rounded-md p-2 justify-between cursor-pointer`}
                onClick={toggleDropdown}
            >
                <p className="text-[0.77rem] font-semibold">{selectedOption}</p>
                <BiSolidDownArrow />
            </div>
            {isOpen && (
                <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SelectOption
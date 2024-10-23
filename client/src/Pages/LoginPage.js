import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoginLogo from "../Assests/Logos/world.png"
import { useNavigate } from "react-router-dom";

// Validation schema with Yup
const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    schoolCode: yup
        .string()
        .min(4, "School Code must be at least 4 characters")
        .required("School Code is required"),
});

const Login = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        navigate("/student/dashboard")
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    };
    return (
        <section className="bg-border-50 w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="w-[50vw] mx-auto h-[90vh] bg-white px-10 py-5 text-start text-[0.81rem] shadow-lg rounded-md">
                <div className="w-full  flex justify-center mt-2 mb-10">
                    <img src={LoginLogo} className="w-[85px] h-[60px]" />
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col max-w-[100%] mx-auto p-2 mt-5  rounded-md "
                >
                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-text_Black-50 font-semibold mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email Or Mobile No."
                            className={`w-full p-2  placeholder:text-[0.8rem] placeholder:font-semibold  border ${errors.email ? "border-red-500" : "border-border-50"
                                } rounded-md focus:outline-none`}
                            {...register("email")}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>
                    {/* Password Field */}
                    <div className="mb-4 relative">
                        {/* Label */}
                        <label className="block text-text_Black-50 font-semibold mb-1" htmlFor="password">
                            Password
                        </label>
                        {/* Password Input Field */}
                        <input
                            id="password"
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Password"
                            className={`w-full p-2 placeholder:text-[0.8rem] placeholder:font-semibold border ${errors.password ? "border-red-500" : "border-border-50"
                                } rounded-md focus:outline-none`}
                            {...register("password")}
                        />

                        {/* Error Message */}
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}

                        {/* Eye Icon for toggling visibility */}
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute top-2/3 rounded-r-md h-[37px] right-0 transform -translate-y-1/2 bg-border-50 cursor-pointer p-2"
                        >
                            {isPasswordVisible ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.002.004-.003.008-.005.012-.002.004-.003.007-.005.011C20.268 16.057 16.477 19 12 19c-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.875 18.825l-1.712-1.711M9.875 15.825L4.158 10.1A4.992 4.992 0 014 12c0 1.142.278 2.222.773 3.2a9.966 9.966 0 008.103 4.8c4.03-.16 7.49-2.55 9.094-5.833"
                                    />
                                </svg>
                            )}
                        </span>
                    </div>

                    {/* School Code Field */}
                    <div className="mb-4">
                        <label
                            className="block text-text_Black-50  font-semibold mb-1"
                            htmlFor="schoolCode"
                        >
                            School Code
                        </label>
                        <input
                            id="schoolCode"
                            type="text"
                            placeholder="School Code"
                            className={`w-full p-2 placeholder:text-[0.8rem] placeholder:font-semibold border ${errors.schoolCode ? "border-red-500" : "border-border-50"
                                } rounded-md focus:outline-none`}
                            {...register("schoolCode")}
                        />
                        {errors.schoolCode && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.schoolCode.message}
                            </p>
                        )}
                    </div>
                    <div className="w-full text-end">
                        <p className="text-text_blue-50 float-end font-semibold">
                            Forget password ?
                        </p>

                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-[#22577A] font-semibold text-[0.9rem] text-[#FFFFFF] p-2 rounded-md mt-2 hover:bg-[#22577A]  border-2 border-t-[#22577A] transition"
                    >
                        Login as Student
                    </button>
                    <div className="w-full text-end py-1">
                        <p className="text-text_blue-50 float-end font-semibold">
                            New user? Sign up to manage your school activities seamlessly!
                        </p>
                    </div>
                    <hr className="h-[3px] bg-border-50 border-0 my-3" />
                    <p className="text-center text-[#00000080] font-semibold my-3 "> Login as</p>
                    <div className="grid grid-cols-2 gap-5 mt-5">

                        <button
                            onClick={() => navigate("/teacher/dashboard")}
                            className="text-center text-[#FFFFFF] bg-[#1BCFB4] py-2 font-semibold">Teacher</button>


                        <button
                            onClick={() => navigate("/parent/dashboard")}
                            className=" bg-[#198AE2] py-2 text-center text-[#FFFFFF] font-semibold">Parent</button>


                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;

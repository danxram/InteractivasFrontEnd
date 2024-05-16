import "../../index.css";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";


import React from 'react'; 
import { NavLink } from "react-router-dom";

export function Login() {
    return (
        <div className="bg-white">
            <Header />
            <div>
                <section className="flex justify-center h-40 top-16 relative">
                    <div className="flex items-center justify-center bg-[#0F345F] w-40 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.3" stroke="white"
                            className="w-[80%] h-[80%] p-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                </section>

                <div className="flex justify-center content-center z-10">
                    <div className="bg-[#7D9FC7] bg-opacity-[0.3] w-[90%] md:w-[60%] lg:w-[60%] pt-16 rounded-[2rem]">
                        <form className="flex flex-col items-center pt-8" action="#" method="post">
                            <div className="flex w-full mb-8 justify-center items-center">
                                <div className="bg-white h-full rounded-l-md border-[#969696] border-solid border-y-2 border-l-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#AEAEAE" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="#AEAEAE" className="w-16 h-[3.75rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>
                                <input type="text" id="user_id" name="user_id" placeholder="USER ID"
                                    className="text-xl ff-main w-[65%] md:w-[48%] px-4 py-4 rounded-r-md focus:outline-none bg-white border-[#969696] border-solid border-y-2 border-r-2 hover:w-[67%] hover:md:w-[52%] duration-700 text-black"
                                    required />
                            </div>
                            <div className="flex w-full mb-5 justify-center items-center">
                                <div className="bg-white h-full rounded-l-md border-solid border-y-2 border-l-2 border-[#969696]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#AEAEAE" viewBox="0 0 24 24" strokeWidth="1.5"
                                        stroke="white" className="w-16 h-[3.75rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                    </svg>
                                </div>
                                <input type="password" id="password" name="password" placeholder="PASSWORD"
                                    className="text-xl w-[65%] md:w-[48%] px-4 py-4  rounded-r-md focus:outline-none bg-white border-[#969696] border-solid border-y-2 border-r-2 hover:md:w-[52%] hover:w-[67%]  duration-700 text-black"
                                    required />
                            </div>

                            <button type="submit"
                                className="w-[48%] py-4 mt-3 bg-[#C94545] mb-10 text-white font-medium text-2xl rounded-md hover:bg-[#C94545]/90 transition duration-300">Log
                                In</button>

                            <div className="mb-6 flex justify-between text-center w-[60%]">
                                <NavLink to="/signUp"
                                    className="text-blue-500 hover:underline ff-main text-lg md:text-xl lg:text-2xl">Don’t have?
                                    Sign Up</NavLink>
                                <NavLink to="/"
                                    className="text-blue-500 hover:underline ff-main text-md md:text-lg lg:text-2xl">Forgot
                                    Password?</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
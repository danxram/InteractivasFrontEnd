import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useSignup } from '../hooks/useSignup';

import '../../index.css';

export function SignUpContainer(){

    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, loading } = useSignup();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(first_name, last_name, email, password);
    };

    return(

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

        <div className="flex justify-center content-center z-10 mb-10">
            <div className="bg-[#7D9FC7] bg-opacity-[0.3] w-[90%] md:w-[80%] lg:w-[60%] pt-16 rounded-[2rem]">
                <form className="grid lg:grid-rows-4 grid-cols-1 items-center pt-8" onSubmit={handleSubmit}>
                    <div className="flex w-full mb-8 justify-center items-center">
                        <div className="bg-white h-full rounded-l-md border-[#969696] border-solid border-y-2 border-l-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#AEAEAE" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-16 h-[3.75rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            placeholder="FIRST NAME"
                            className="text-xl ff-main w-[65%] md:w-[48%] px-4 py-4 rounded-r-md focus:outline-none bg-white border-[#969696] border-solid border-y-2 border-r-2 hover:w-[67%] hover:md:w-[52%] duration-700"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex w-full mb-8 justify-center items-center">
                        <div className="bg-white h-full rounded-l-md border-[#969696] border-solid border-y-2 border-l-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#AEAEAE" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-16 h-[3.75rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="LAST NAME"
                            className="text-xl ff-main w-[65%] md:w-[48%] px-4 py-4 rounded-r-md focus:outline-none bg-white border-[#969696] border-solid border-y-2 border-r-2 hover:w-[67%] hover:md:w-[52%] duration-700"
                            value={last_name}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex w-full mb-8 justify-center items-center">
                        <div className="bg-white h-full rounded-l-md border-[#969696] border-solid border-y-2 border-l-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#AEAEAE" className="w-16 h-[3.75rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                        </div>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            placeholder="EMAIL"
                            className="text-xl ff-main w-[65%] md:w-[48%] px-4 py-4 rounded-r-md focus:outline-none bg-white border-[#969696] border-solid border-y-2 border-r-2 hover:w-[67%] hover:md:w-[52%] duration-700"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex w-full mb-8 justify-center items-center">
                        <div className="bg-white h-full rounded-l-md border-[#969696] border-solid border-y-2 border-l-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#AEAEAE" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-16 h-[3.75rem]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="PASSWORD"
                            className="text-xl ff-main w-[65%] md:w-[48%] px-4 py-4 rounded-r-md focus:outline-none bg-white border-[#969696] border-solid border-y-2 border-r-2 hover:w-[67%] hover:md:w-[52%] duration-700"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    <div className='flex justify-center'>
                    <button
                        type="submit"
                        className="w-[48%] py-4 mt-3 bg-[#C94545] mb-10 text-white font-medium text-2xl rounded-md hover:bg-[#C94545]/90 hover:text-white transition duration-300"
                        disabled={loading}
                        >
                        Sign Up
                    </button>
                        </div>
                </form>
                <section className="flex flex-col items-center">
                    <div className="mb-6 flex justify-center text-center w-[80%]">
                        <a href="#" className="text-blue-500 hover:underline ff-main text-md md:text-lg lg:text-2xl">Forgot Password?</a>
                    </div>
                </section>
            </div>
        </div>
    </div>
    )

}
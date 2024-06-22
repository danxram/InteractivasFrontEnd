import '../../index.css';
import React, { useState } from 'react';
import { EventContainer } from './EventContainer';
import { NavLink } from 'react-router-dom';

export const CourseEventsContainer = ({ courseId, userId, fetchType }) => {
    const buttons = [
        { label: 'ALL' },
        { label: 'TASK' },
        { label: 'EVENT' },
        { label: 'NOTICE' },
    ];

    const [activeButton, setActiveButton] = useState('ALL');

    return (
        <>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-center text-[#0F345F] mt-16 mb-12 ff-main uppercase">
                Courses
            </h1>
            {/* Filters */}
            <div className="flex-row">
                <div className="flex justify-center gap-3">
                    {buttons.map((button, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveButton(button.label)}
                            className={`w-full h-full justify-center rounded-t-lg inline-flex ${
                                activeButton === button.label ? 'bg-[#7D9FC7]' : 'bg-[#0F345F]'
                            } hover:bg-[#7D9FC7]`}
                        >
                            <p className="text-[#ffffff] text-lg font-main pt-2 self-center font-semibold">
                                {button.label}
                            </p>
                        </button>
                    ))}
                </div>

                {/* Container */}
                <div className="w-full h-full p-6 bg-[#7D9FC7]">
                    <div className="flex w-auto justify-center mx-9">
                        <h3 className="text-[#0F345F] font-main font-bold text-4xl tracking-widest text-center">
                            EVENT OVERVIEW
                        </h3>
                    </div>
                    <EventContainer courseId={courseId} userId={userId} fetchType={fetchType} />
                    <div className="flex justify-center mb-6 sm:mb-14">
                        <a className="font-main text-4xl font-bold py-5 px-10 xl:px-24 bg-[#0F345F] rounded-lg text-[#ffffff]" href="">
                            Show More
                        </a>
                    </div>
                </div>
            </div>
            <NavLink to={"/statistics"} className="fixed bottom-4 right-4 bg-[#C94545] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
            </NavLink>
        </>
    );
};

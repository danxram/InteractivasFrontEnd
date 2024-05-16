import '../../index.css'
import logo from "../../assets/imgs/EVENT MATE.png";
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <nav className="flex bg-[#0F345F] w-full h-[10vh] lg:h-[12vh] pt-6 pb-6">
                <img className=" pl-9" src={logo} alt="Logo Event Mate" />
                <div className="hidden lg:flex flex-row-reverse w-full gap-7 pr-9">
                    <div className="flex bg-[#274F7E] rounded-full p-1.5 2xl:p-3">
                        {/* Cambiar este svg por foto de perfil? */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" classNameName="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                    <div className="flex">
                        <input type="search" placeholder="Search" className="bg-[#7D9FC7] text-[#ffffff] rounded-l-xl pl-4" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="bg-[#7D9FC7] rounded-r-xl" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" classNameName="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <NavLink className="text-[#ffffff] font-second pt-2 xl:pt-4 2xl:pt-7" href="">Calendar</NavLink>
                    <NavLink className="text-[#ffffff] font-second pt-2 xl:pt-4 2xl:pt-7" to={"/courses"}>Subjects</NavLink>
                    <NavLink className="text-[#ffffff] font-second pt-2 xl:pt-4 2xl:pt-7" href="">Settings</NavLink>
                </div>
            </nav>
        </header>
    )
}

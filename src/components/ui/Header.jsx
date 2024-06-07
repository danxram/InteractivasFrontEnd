import '../../index.css'
import logo from "../../assets/imgs/EVENT MATE.png";
import { NavLink } from 'react-router-dom';
import { Divider, Dropdown } from 'keep-react'
import { useState } from 'react'
import { Button, Drawer } from 'keep-react'

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [position, setPosition] = useState('bottom')

    return (
        <header>
            <nav className="flex bg-[#0F345F] w-full h-[10vh] lg:h-[12vh] pt-6 pb-6 justify-between items-center">
                <NavLink to={'/homePage'}><img className="pl-9 h-[4vh] lg:h-[6vh] object-contain" src={logo} alt="Logo Event Mate" /></NavLink>
                <div className="flex items-center gap-3 mr-9">
                    {['right'].map((position) => (
                        <Button
                            key={position}
                            onClick={() => {
                                setIsOpen(!isOpen);
                                setPosition(position);
                            }}
                            color="secondary"
                            className="bg-[#274F7E] text-white font-semibold text-sm md:text-base lg:text-xl capitalize px-6 py-3 md:px-10 md:py-5 lg:px-8 ">
                            Menu
                        </Button>
                    ))}
                </div>
                <Drawer position={position} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <Drawer.Content className="w-[80%] md:w-[60%] lg:w-[25%] flex ">
                        <div className="flex flex-col text-base md:text-lg lg:text-xl max-w-lg space-y-3 px-6 py-5 lg:px-8 gap-3">
                            <div className='flex justify-center'>
                                <h2 className='text-2xl lg:text-3xl'>Menu</h2>
                            </div>
                            <input type="search" placeholder="Search" className="bg-white text-black border border-gray-500 rounded-xl pl-4 py-2" />
                            <NavLink className="text-[#274F7E] font-second" to={"/courses"}>Subjects</NavLink>
                            <NavLink className="text-[#274F7E] font-second" to={"/homePage"}>Calendar</NavLink>
                            <NavLink className="text-[#274F7E] font-second" to={"/userprofile"}>User Profile</NavLink>
                            <NavLink className="text-[#274F7E] font-second" to={"/"}>Log Out</NavLink>
                            <Button onClick={() => setIsOpen(false)} className="bg-[#C94545] hover:bg-[#C94545]/90 text-white mt-4 py-2 px-4 lg:py-3 lg:px-6" color="secondary">
                                Go Back
                            </Button>
                        </div>
                    </Drawer.Content>
                </Drawer>
            </nav>
        </header>
    );
}
// import '../../index.css'
// import logo from "../../assets/imgs/EVENT MATE.png";
// import { NavLink } from 'react-router-dom';
// import { Divider, Dropdown, Button } from 'keep-react'

// export function Header() {
//     return (
//         <header>
//             <nav className="flex bg-[#0F345F] w-full h-[10vh] lg:h-[12vh] pt-6 pb-6">
//                 <img className="pl-9" src={logo} alt="Logo Event Mate" />
//                 <div className="hidden lg:flex flex-row-reverse w-full gap-7 pr-9">
//                     <div className="flex bg-[#274F7E] rounded-full p-1.5 2xl:p-3">
//                         {/* Cambiar este svg por foto de perfil? */}
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" classNameName="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
//                         </svg>
//                     </div>
//                     <div className="flex">
//                         <input type="search" placeholder="Search" className="bg-[#7D9FC7] text-[#ffffff] rounded-l-xl pl-4" />
//                         <svg xmlns="http://www.w3.org/2000/svg" className="bg-[#7D9FC7] rounded-r-xl" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" classNameName="w-6 h-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                         </svg>
//                     </div>
//                     <NavLink className="text-[#ffffff] font-second pt-2 xl:pt-4 2xl:pt-7" href="">Calendar</NavLink>
//                     <NavLink className="text-[#ffffff] font-second pt-2 xl:pt-4 2xl:pt-7" to={"/courses"}>Subjects</NavLink>
//                     <NavLink className="text-[#ffffff] font-second pt-2 xl:pt-4 2xl:pt-7" href="">Settings</NavLink>
//                 </div>
//                 <div className="flex sm:hidden pr-9 pt-1 flex-row-reverse">
//                     <Dropdown action={<Button size='sm' className='bg-[#7D9FC7]'>Menu </Button>} actionClassName="border-none bg-[#0F345F] flex order-last items-center object-right">
//                         <Dropdown.List>
//                             <Dropdown.Item>                    
//                                     <input type="search" placeholder="Search" className="bg-[#7D9FC7] text-[#ffffff] placeholder:text-[#ffffff] rounded-xl pl-4" />
//                             </Dropdown.Item>
//                             <Dropdown.Item><NavLink className="text-[#274F7E] font-second" to={"/courses"}>Subjects</NavLink></Dropdown.Item>
//                             <Dropdown.Item><NavLink className="text-[#274F7E] font-second" to={""}>Calendar</NavLink></Dropdown.Item>
//                             <Divider color="primary"/>
//                             <Dropdown.Item><NavLink className="text-[#274F7E] font-second" to={""}>User Porfile</NavLink></Dropdown.Item>
//                             <Dropdown.Item><NavLink className="text-[#274F7E] font-second" to={""}>Settings</NavLink></Dropdown.Item>
//                         </Dropdown.List>
//                     </Dropdown>
//                 </div>

//             </nav>
//         </header>
//     )
// }

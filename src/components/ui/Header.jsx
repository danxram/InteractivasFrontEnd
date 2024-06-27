import '../../index.css';
import logo from "../../assets/imgs/EVENT MATE.png";
import { NavLink } from 'react-router-dom';
import { Divider, Dropdown, Button, Drawer } from 'keep-react';
import { useState, useEffect } from 'react';
import { useLogout } from '../hooks/useLogout';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState('bottom');
    const [isAdmin, setIsAdmin] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user ? user.id : null;
    const { logout } = useLogout();
    
    useEffect(() => {
        if (user && user.privileges_id === 1) { // Asume que 'role' es la propiedad que contiene el tipo de usuario
            setIsAdmin(true);
        }
    }, [user]);

    return (
        <header>
            <nav className="flex bg-[#0F345F] w-full h-[10vh] lg:h-[12vh] pt-6 pb-6 justify-between items-center">
                <NavLink to={`/homePage/${userId}`}><img className="pl-9 h-[4vh] lg:h-[6vh] object-contain" src={logo} alt="Logo Event Mate" /></NavLink>
                <div className="flex items-center gap-3 mr-9">
                    {['right'].map((position) => (
                        <Button
                            key={position}
                            onClick={() => {
                                setIsOpen(!isOpen);
                                setPosition(position);
                            }}
                            color="secondary"
                            className="bg-[#274F7E] text-white font-semibold text-sm md:text-base lg:text-xl capitalize px-6 py-3 md:px-10 md:py-5 lg:px-8">
                            Menu
                        </Button>
                    ))}
                    {isAdmin && (
                        <NavLink to={"http://localhost/InteractivasBackEnd/resources/views/admin/index.blade.php"} id='admin' className="bg-[#274F7E] text-white font-semibold text-sm md:text-base lg:text-xl capitalize px-6 py-3 md:px-10 md:py-5 lg:px-8 rounded-lg">Admin</NavLink>
                    )}
                </div>

                <Drawer position={position} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <Drawer.Content className="w-[80%] md:w-[60%] lg:w-[25%] flex ">
                        <div className="flex flex-col text-base md:text-lg lg:text-xl max-w-lg space-y-3 px-6 py-5 lg:px-8 gap-3">
                            <div className='flex justify-center'>
                                <h2 className='text-2xl lg:text-3xl'>Menu</h2>
                            </div>
                            <input type="search" placeholder="Search" className="bg-white text-black border border-gray-500 rounded-xl pl-4 py-2" />
                            <NavLink className="text-[#274F7E] font-second" to={`/courses/${userId}`}>Subjects</NavLink>
                            <NavLink className="text-[#274F7E] font-second" to={`/homePage/${userId}`}>Calendar</NavLink>
                            <NavLink className="text-[#274F7E] font-second" to={`/userprofile/${userId}`}>User Profile</NavLink>
                            <NavLink className="text-[#274F7E] font-second" to={`/`} onClick={logout} >Log Out</NavLink>
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

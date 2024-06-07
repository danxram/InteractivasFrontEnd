import React from 'react';
import PropTypes from "prop-types";
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";

export function UserProfile({ userPfp, username, userType, userBio, userKeyWord, userEmail, userJoined }) {
    return (
        <>
            <Header />
            <div className='flex flex-col w-auto h-full min-h-screen justify-center'>
                <div className='flex flex-col w-11/12 m-auto p-5 md:p-14 border-2 rounded-3xl divide-y-2 divide'>
                    
                        <div className='flex lg:flex-row flex-col pb-8'>
                            <img className='rounded-2xl w-56 min-h-56 object-cover max-lg:m-auto'
                                src={`${userPfp}`}
                                alt='pfp' />
                            <div className='flex flex-col my-auto p-8 max-lg:m-auto'>
                                <p id='username' className='lg:text-6xl max-lg:text-4xl max relative py-5'>{username}</p>
                                <div className='flex flex-col lg:divide lg:divide-x-2 lg:flex-row'>
                                    <p className='lg:pr-8'>{userType}</p>
                                    <p className='lg:pl-8'>{userEmail}</p>
                                </div>
                            </div>
                        </div>
                        
                    <div className='flex max-md:flex-col md:flex-row items-center gap-16 py-8'>
                        <div className='w-1/3'>
                            <p className='text-[#426B9A]'>Joined:</p>
                            <p className='text-[#535353] py-2.5'>{userJoined}</p>
                        </div>
                        <div className='w-1/3'>
                            <p className='text-[#426B9A]'>Bio:</p>
                            <p className='text-[#535353] py-2.5'>{userBio}</p>
                        </div>
                        <div className='w-1/3'>
                            <p className='text-[#426B9A]'>Key word:</p>
                            <p className='text-[#535353] py-2.5'>#{userKeyWord}</p>
                        </div>
                    </div>
                    <div className='w-full flex gap-8 pt-8 max-lg:justify-center'>
                        <button
                            className='border border-[#426B9A] w-48 h-14 rounded-xl text-[#426B9A] text-lg hover:bg-[#426B99] hover:text-white'>Información</button>
                        <button
                            className='border border-[#426B9A] w-48 h-14 rounded-xl text-[#426B9A] text-lg hover:bg-[#426B99] hover:text-white'>Más</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

UserProfile.propTypes = {
    userPfp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    userBio: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired,
    userJoined: PropTypes.string.isRequired,
    userType: PropTypes.string.isRequired,
}

UserProfile.defaultProps = {
    userPfp: 'https://materializecss.com/templates/parallax-template/background1.jpg',
    username: 'Username',
    userBio: 'Welcome to my profile!',
    userKeyWord: 'EVENTMATE',
    userEmail: 'example@mail.com',
    userJoined: '00-00-0000',
    userType: 'User',

}
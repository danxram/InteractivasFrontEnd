import React from 'react';


export function UserProfile() {
    return (
        <>

            <div className='flex flex-col w-auto h-full min-h-screen justify-center'>
                <div className='flex flex-col w-11/12 m-auto p-14 border-2 rounded-3xl divide-y-2 divide'>

                    <div className='flex'>

                        <div className='flex pb-8'>
                            <img className='rounded-2xl w-56'
                                src='https://holatelcel.com/wp-content/uploads/2022/08/hombre-estudiante-universitario-696x696.jpg'
                                alt='pfp' />
                            <div className='flex flex-col my-auto p-8'>
                                <p id='username' className='text-6xl relative py-5'>José Rodríguez</p>
                                <div className='flex divide divide-x-2'>
                                    <p className='pr-8'>Estudiante</p>
                                    <p className='pl-8'>rodjosmaster@gmail.com</p>
                                </div>
                            </div>



                        </div>

                        <div className='flex gap-4 ml-auto mr-0'>
                            <img className='size-12' src='https://icones.pro/wp-content/uploads/2021/04/icone-cercle-gris.png'
                                alt='' />
                            <img className='size-12' src='https://icones.pro/wp-content/uploads/2021/04/icone-cercle-gris.png'
                                alt='' />
                            <img className='size-12' src='https://icones.pro/wp-content/uploads/2021/04/icone-cercle-gris.png'
                                alt='' />
                            <img className='size-12' src='https://icones.pro/wp-content/uploads/2021/04/icone-cercle-gris.png'
                                alt='' />
                        </div>
                    </div>



                    <div className='flex gap-16 py-8'>
                        <div className='w-1/3'>
                            <p className='text-[#426B9A]'>Joined:</p>
                            <p className='text-[#535353] py-2.5'>22 - 3 - 2026</p>
                        </div>
                        <div className='w-1/3'>
                            <p className='text-[#426B9A]'>Bio:</p>
                            <p className='text-[#535353] py-2.5'>📚 Estudiante apasionado por el conocimiento y la superación
                                personal. 📚 En busca de la excelencia académica y la realización de sueños. 🌟💡
                            </p>
                        </div>
                        <div className='w-1/3'>
                            <p className='text-[#426B9A]'>Key words:</p>
                            <p className='text-[#535353] py-2.5'>#NeverStopLearning</p>
                        </div>
                    </div>
                    <div className='w-full flex gap-8 pt-8'>
                    <button
                        className='border border-[#426B9A] w-48 h-14 rounded-xl text-[#426B9A] text-lg hover:bg-[#426B99] hover:text-white'>Información</button>
                    <button
                        className='border border-[#426B9A] w-48 h-14 rounded-xl text-[#426B9A] text-lg hover:bg-[#426B99] hover:text-white'>Más</button>
                </div>
                </div>

                

            </div>


        </>


    )
}
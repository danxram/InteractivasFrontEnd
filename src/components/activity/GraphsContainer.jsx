import '../../index.css';


export function GraphsContainer() {
    return (

        <section className='flex flex-col'>
            
            <div className='flex flex-col items-center sm:px-32'>
            <h2 className='text-[#274F7E] max-sm:text-4xl sm:text-5xl font-bold py-10 sm:ml-0 sm:mr-auto'>GRAPHS</h2>
                <div className='flex max-sm:divide-y-2 sm:divide-x-2 max-sm:flex-col justify-center'>



                    <div className='flex flex-col sm:w-1/3 pt-10 '>
                        <p className='text-[#274F7E] max-sm:text-3xl sm:text-4xl font-bold mx-auto'>Completion Rate</p>
                        <div className='h-[17rem] w-[17rem] m-10 '>
                            <img src='https://scrapneeds.com.au/wp-content/uploads/2022/01/caribbean.jpeg'
                                alt='placeholder' />
                        </div>
                    </div>
                    <div className='flex flex-col sm:w-1/3 pt-10 '>
                        <p className='text-[#274F7E] max-sm:text-3xl sm:text-4xl font-bold mx-auto'>Done today</p>
                        <div className='h-[17rem] w-[17rem] m-10 flex'>
                            <p className='text-5xl font-bold m-auto'>5 events</p>
                        </div>
                    </div>
                    <div className='flex flex-col sm:w-1/3 pt-10 '>
                        <p className='text-[#274F7E] max-sm:text-3xl sm:text-4xl font-bold mx-auto'>Done this week</p>
                        <div className='h-[17rem] w-[17rem] m-10 flex'>
                            <p className='text-5xl font-bold m-auto'>15 events</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


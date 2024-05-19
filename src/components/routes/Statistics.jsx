import React from 'react';


export function Statistics() {
    return (

        <section className="flex flex-col px-32">
            <div className="flex flex-col w-3/4 m-auto py-9">
                <h1 className="text-[#274F7E] text-6xl font-bold mx-auto">COURSE STATISTICS</h1>
                <div className="bg-gray-300 w-full h-1"></div>
            </div>
            <div className="flex flex-col">
                <h2 className="text-[#274F7E] text-5xl font-bold py-10">GRAPHS</h2>
                <div className="flex py-10 divide-x-2">



                    <div className="flex flex-col items-center w-1/3">
                        <p className="text-[#274F7E] text-4xl font-bold mx-auto">Completion Rate</p>
                        <div className="h-[17rem] w-[17rem] m-10 ">
                            <img src="https://scrapneeds.com.au/wp-content/uploads/2022/01/caribbean.jpeg"
                                alt="placeholder" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <p className="text-[#274F7E] text-4xl font-bold mx-auto">Done today</p>
                        <div className="h-[17rem] w-[17rem] m-10 flex">
                            <p className="text-5xl font-bold m-auto">5 events</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <p className="text-[#274F7E] text-4xl font-bold mx-auto">Done this week</p>
                        <div className="h-[17rem] w-[17rem] m-10 flex">
                            <p className="text-5xl font-bold m-auto">15 events</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-[#274F7E] text-5xl font-bold py-10">DAILY</h2>
                <div className="flex py-10"></div>
                <h2 className="text-[#274F7E] text-5xl font-bold py-10">WEEKLY</h2>
                <div className="flex py-10"></div>





            </div>
        </section>
    )
}
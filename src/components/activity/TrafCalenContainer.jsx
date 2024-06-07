import "../../index.css";
import { EventTraffic } from "../ui/EventTraffic";
import { Backdrop, CircularProgress } from '@mui/material';
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export function TrafCalenContainer({ items }) {
    return (

        <>
            <section>
                <div className="flex flex-col sm:flex-row m-7 md:m-10 lg:m-14 gap-10 w-auto ">
                    {/*Esta es la seccion semaforo*/}
                    <div className="flex flex-col gap-3 md:w-2/4 ">
                        <h1 className="text-[#0F345F] font-main font-bold text-3xl tracking-widest pb-3 sm:pb-6 text-center">UPCOMING EVENTS</h1>
                        {items.map(item => <EventTraffic key={item.id} eventName={item.eventName} description={item.description} borderColor={item.borderColor} />)}
                    </div>
                    {/*Esta es la seccion calendar*/}
                    <div className="flex flex-col gap-3  md:w-2/4 ">
                        <h2 className="text-[#0F345F] font-main font-bold text-xl tracking-normal justify-start">CALENDAR</h2>
                        <div className="flex justify-center w-full">
                            
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateCalendar className="boder-2 border"/>
                            </LocalizationProvider>

                        </div>
                    </div>
                </div>

            </section>


        </>
    )
}
import "../../index.css";
import { EventTraffic } from "../ui/EventTraffic";

export function TrafCalenContainer({items}) {
    return(

        <>
    <section>
        <div class="flex flex-col sm:flex-row m-7 md:m-10 lg:m-14 gap-10 w-auto ">
            {/*Esta es la seccion semaforo*/}
            <div class="flex flex-col gap-3 md:w-2/4 ">
            <h1 class="text-[#0F345F] font-main font-bold text-3xl tracking-widest pb-3 sm:pb-6 text-center">UPCOMING EVENTS</h1>
                {items.map(item=> <EventTraffic key={item.id} eventName={item.eventName} description={item.description} borderColor={item.borderColor} />)}
            </div>
            {/*Esta es la seccion calendar*/}
            <div class="flex flex-col gap-3 text-center">
                <h2 class="text-[#0F345F] font-main font-bold text-xl tracking-normal">CALENDAR</h2>
                <div>

                </div>
            </div>
        </div>

    </section>
    
    
    </>
    )
}

import '../../index.css';
import { CardEvent } from '../ui/CardEvent';

export function CompletedEventsContainer({ items }) {
    return (
        <>
            <div className='flex flex-col px-32 '>
                <h2 className='text-[#274F7E] max-sm:text-4xl sm:text-5xl font-bold py-10  sm:ml-0 sm:mr-auto'>DAILY</h2>
                <section class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7 md:m-10 lg:m-14 justify-items-center gap-10 '>
                    {items.map(item => <CardEvent key={item.id} eventName={item.eventName} imageEvent={item.imageEvent} date={item.date} description={item.description} type={item.type} />)}
                </section>

                <h2 className='text-[#274F7E] max-sm:text-4xl sm:text-5xl font-bold py-10  sm:ml-0 sm:mr-auto'>WEEKLY</h2>
                <section class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7 md:m-10 lg:m-14 justify-items-center gap-10 '>
                    {items.map(item => <CardEvent key={item.id} eventName={item.eventName} imageEvent={item.imageEvent} date={item.date} description={item.description} type={item.type} />)}
                </section>
            </div>
        </>
    )

}
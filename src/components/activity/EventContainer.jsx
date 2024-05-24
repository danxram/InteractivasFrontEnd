import "../../index.css";
import { CardEvent } from "../ui/CardEvent";

export function EventContainer({ items }) {

    return (
        <>
            <div className="flex w-auto justify-center mx-9">
                <h3 className="text-[#0F345F] font-main font-bold text-4xl tracking-widest text-center">EVENT OVERVIEW</h3>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7 md:m-10 lg:m-14 justify-items-center gap-10 ">
                {items.map(item => <CardEvent key={item.id} eventName={item.eventName} imageEvent={item.imageEvent} date={item.date} description={item.description} type={item.type} />)}
            </section>
            <div className="flex justify-center mb-6 sm:mb-14">
                <a className="font-main text-4xl font-bold py-5 px-10 xl:px- 2xl:px-24 bg-[#0F345F] rounded-lg text-[#ffffff]" href="">Show More</a>
            </div>

        </>

    )
}
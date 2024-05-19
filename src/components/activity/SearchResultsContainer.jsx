import "../../index.css";
import { CardEvent } from "../ui/CardEvent";

export function SearchResultsContainer({ items }) {

    return (
        <>
        <div class="flex flex-col w-auto justify-center mx-9 my-12">
            <h1 class="text-[#0F345F] font-main font-bold text-4xl tracking-widest text-center">Search Results</h1>
            <p class="text-[#0F345F] font-main font-bold text-4xl tracking-widest text-center">Search</p>
        </div>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7 md:m-10 lg:m-14 justify-items-center gap-10 ">
            {items.map(item => <CardEvent key={item.id} eventName={item.eventName} imageEvent={item.imageEvent} date={item.date} description={item.description} type={item.type} />)}
        </section>
        </>

    )
}
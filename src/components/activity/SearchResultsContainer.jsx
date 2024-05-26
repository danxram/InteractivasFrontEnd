import "../../index.css";
import { CardEvent } from "../ui/CardEvent";

export function SearchResultsContainer({ items }) {

    return (
        <>
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7 md:m-10 lg:m-14 justify-items-center gap-10 ">
                {items.map(item => <CardEvent key={item.id} eventName={item.eventName} imageEvent={item.imageEvent} date={item.date} description={item.description} type={item.type} />)}
            </section>
        </>

    )
}
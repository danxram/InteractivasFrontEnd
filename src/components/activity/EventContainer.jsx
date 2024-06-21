import "../../index.css";
import { CardEvent } from "../ui/CardEvent";
import { useFetchEvents } from "../hooks/useFetchEvents";

export function EventContainer({id}) {
    const { data } = useFetchEvents(id);
    const {events}= data;

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7 md:m-10 lg:m-14 justify-items-center gap-10">
                {events.map(event => (
                    <CardEvent 
                        id={event.id} 
                        categorie={event.categories_id}
                        eventName={event.name} 
                        imageEvent={event.image} 
                        date={event.date} 
                        description={event.description}
                        status={event.status} 
                    />
                ))}
            </section>
        </>
    );
}

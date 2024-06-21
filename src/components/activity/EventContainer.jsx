import "../../index.css";
import { CardEvent } from "../ui/CardEvent";
import { useFetchEvents } from "../hooks/useFetchEvents";

export function EventContainer() {
    const { data: items } = useFetchEvents();


    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7 md:m-10 lg:m-14 justify-items-center gap-10">
                {items.map(item => (
                    <CardEvent 
                        key={item.id}
                        id={item.id} 
                        categorie={item.categories_id}
                        eventName={item.name} 
                        imageEvent={item.image} 
                        date={item.date} 
                        description={item.description}
                        status={item.status} 
                    />
                ))}
            </section>
        </>
    );
}

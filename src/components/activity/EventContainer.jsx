import "../../index.css";
import { CardEvent } from "../ui/CardEvent";
import { useFetchEvents } from "../hooks/useFetchEvents";
import { useFetchCourseEvents } from "../hooks/useFetchCourseEvents";

export function EventContainer({ id, courseId, userId, fetchType }) {
    let data, loading, error;
    let eventos = [];

    if (fetchType === "course") {
        ({ data, loading, error } = useFetchCourseEvents(courseId, userId));
        eventos = data;
    } else {
        ({ data, loading, error } = useFetchEvents(id));
        const { events } = data;
        eventos = events;
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    

    console.log(data);
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-7 md:m-10 lg:m-14 justify-items-center gap-10">
                {eventos.map(event => (
                    <CardEvent 
                        key={event.id} 
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

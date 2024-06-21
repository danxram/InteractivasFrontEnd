import "../../index.css";
import { DetailEvent } from "../ui/DetailEvent";
import { useFetchDetails } from "../hooks/useFetchDetails";

export function DetailContainer({id}) {
    const { data, loading, error } = useFetchDetails(id);
    console.log(id)
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    

    return (
        <>
                <DetailEvent 
                    key={data.id} 
                    eventName={data.name} 
                    imageEvent={data.image} 
                    date={data.date} 
                    description={data.description}
                    categorie={data.categories_id}
                    hour={data.time}
                    time={data.time}  
                    status={data.status} 
                />
        </>
    );
}

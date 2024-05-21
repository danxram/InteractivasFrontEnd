import "../../index.css";
import { DetailEvent } from "../ui/DetailEvent";


export function DetailContainer({ items }) {

    return (
        <>
            {items.map(item => <DetailEvent key={item.id} eventName={item.eventName} imageEvent={item.imageEvent} date={item.date} description={item.description} type={item.type} hour={item.hour} mode={item.mode} group={item.group} status={item.status} />)}
        </>
    )
}
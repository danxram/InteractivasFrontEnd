
import '../../index.css';
import { CardEvent } from '../ui/CardEvent';
import { EventContainer } from "../activity/EventContainer.jsx";

export function CompletedEventsContainer() {
    const events=[
        {"id": 1, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
        {"id": 2, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
        {"id": 3, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
]
    return (
        <>
            <div className='flex flex-col px-16'>
                <h2 className='text-[#274F7E] max-sm:text-4xl sm:text-5xl font-bold py-10  sm:ml-0 sm:mr-auto'>DAILY</h2>
                <EventContainer items={events} />

                <h2 className='text-[#274F7E] max-sm:text-4xl sm:text-5xl font-bold py-10  sm:ml-0 sm:mr-auto'>WEEKLY</h2>
                <EventContainer items={events} />
            </div>
        </>
    )

}
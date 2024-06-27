import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { TrafCalenContainer } from "../activity/TrafCalenContainer";
import { EventContainer } from "../activity/EventContainer";
import { useParams } from "react-router-dom";


export function HomePage() {

    const {id}= useParams();

    // const eventTraffic=[
    //     {"id":1, "eventName": "Event 1", "description": "Description 1", "borderColor": "#EF3535"},
    //     {"id":2, "eventName": "Event 2", "description": "Description 2", "borderColor": "#FFFF00"},
    //     {"id":3, "eventName": "Event 3", "description": "Description 3", "borderColor": "#35EF35"},
    // ]

    // const events = [
    //     {"id":1, "eventName": "Event 1", "description": "Description 1", "date": "00/00/2024", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", "type": "Event"},
    //     {"id":2, "eventName": "Event 2", "description": "Description 2", "date": "00/00/2024", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", "type": "Task"},
    //     {"id":3, "eventName": "Event 3", "description": "Description 3", "date": "00/00/2024", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", "type": "Notifi..."},
    // ]

    return (
        <>
        <div className="bg-white">
            <Header />
            <TrafCalenContainer id={id}/>
            <EventContainer id={id}/>
            <div className="flex justify-center mb-6 sm:mb-14">
                        <a className="font-main text-4xl font-bold py-5 px-10 xl:px-24 bg-[#0F345F] rounded-lg text-[#ffffff]" href="">
                            Show More
                        </a>
                    </div>
            <Footer />
        </div>
        </>
    )
}
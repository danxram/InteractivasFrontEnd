import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { EventContainer } from "../activity/EventContainer.jsx";

export function SearchResult() {

    const events = [
        { "id": 1, "eventName": "Event 1", "description": "Description 1", "date": "00/00/2024", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", "type": "Event" },
        { "id": 2, "eventName": "Event 2", "description": "Description 2", "date": "00/00/2024", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", "type": "Task" },
        { "id": 3, "eventName": "Event 3", "description": "Description 3", "date": "00/00/2024", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", "type": "Notifi..." },
    ]

    return (
        <>
            <div className="bg-white">
                <Header />
                <div class="flex flex-col w-auto justify-center mx-9 my-12">
                    <h1 class="text-[#0F345F] font-main font-bold text-4xl tracking-widest text-center">Search Results</h1>
                    <p class="text-[#0F345F] font-main font-bold text-4xl tracking-widest text-center">Search</p>
                </div>
                <EventContainer items={events} />
                <Footer />
            </div>
        </>

    )
}
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { EventContainer } from "../activity/EventContainer.jsx";

export function CourseEvents() {

    const events=[
        {"id": 1, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
        {"id": 2, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
        {"id": 3, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
        {"id": 4, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
        {"id": 5, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
        {"id": 6, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
        {"id": 7, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
        {"id": 8, "eventName": "Event", "imageEvent": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain", description:"Lorem ipsum dolor sit amet consectetur. Pharetra nisl nibh aliquet convallis enim nisi...", type: "Task", date:"22/02/24"},
    ]


    return ( 
        <>
        <div className="bg-white">
        <Header />
        <h1 className="text-3xl md:text-5xl lg:text-5xl  font-bold text-center text-[#0F345F] mt-16 mb-12 ff-main uppercase">
        Courses</h1>
    {/*filters */}
        <div className="flex-row">
        <div className="flex justify-center gap-3">
            <button className="w-full h-full justify-center rounded-t-lg  inline-flex bg-[#0F345F] hover:bg-[#7D9FC7]">
                <p className="text-[#ffffff] text-lg font-main pt-2 self-center font-semibold">ALL</p>
            </button>
            <button className="w-full h-full justify-center rounded-t-lg  inline-flex bg-[#0F345F] hover:bg-[#7D9FC7]">
                <p className="text-[#ffffff] text-lg font-main pt-2 self-center font-semibold">TASK</p>
            </button>
            <button className="w-full h-full justify-center rounded-t-lg  inline-flex bg-[#0F345F] hover:bg-[#7D9FC7]">
                <p className="text-[#ffffff] text-lg font-main pt-2 self-center font-semibold">EVENT</p>
            </button>
            <button className="w-full h-full justify-center rounded-t-lg  inline-flex bg-[#0F345F] hover:bg-[#7D9FC7]">
                <p className="text-[#ffffff] text-lg font-main pt-2 self-center font-semibold">NOTICE</p>
            </button>
        </div>

    {/*container*/}
    <div className="w-full h-full p-6 bg-[#7D9FC7]"> 
    <EventContainer items={events}/>
    </div>
        </div>
        <Footer />
        </div>
        </>
    )
}
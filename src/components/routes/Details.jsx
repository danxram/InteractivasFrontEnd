import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { DetailContainer } from "../activity/DetailContainer";

export function Details() {

    const details=[
        {"id":1, "eventName": "Interactivas ", "description": "Lorem ipsum dolor sit amet consectetur. Adipiscing elit etiam consequat vel feugiat quis convallis. Diam massa molestie massa quam velit amet egestas sit sit. Accumsan sed quis at lorem. Dis urna amet venenatis vivamus pharetra sollicitudin lobortis ligula semper. Lorem ipsum dolor sit amet consectetur. ", "type": "Event", "group": "Subject", "status": "Done", "mode": "Active", "date": "21/05/2024", "hour":"10:00", "imageEvent":"https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain"}

    ]

    return (
        <div>
            <Header />
            <DetailContainer items={details} />
            <Footer />
        </div>
    );
}
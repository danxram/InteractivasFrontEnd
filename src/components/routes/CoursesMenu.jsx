import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { CoursesContainer } from "../activity/CoursesContainer";
import { useParams } from "react-router-dom";


export function CoursesMenu() {

    const {id} = useParams();

    // const courses=[
    //     {"id": 1, "titleCourse": "C++", "imageCourse": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain"},
    //     {"id": 2, "titleCourse": "Python", "imageCourse": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain"},
    //     {"id": 3, "titleCourse": "JavaScript", "imageCourse": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain"},
    //     {"id": 4, "titleCourse": "Java", "imageCourse": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain"},
    //     {"id": 5, "titleCourse": "HTML/CSS", "imageCourse": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain"},
    //     {"id": 6, "titleCourse": "React", "imageCourse": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain"},
    //     {"id": 7, "titleCourse": "Angular", "imageCourse": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain"},
    //     {"id": 8, "titleCourse": "Vue.js", "imageCourse": "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain"},
    // ]


    return ( 
        <>
        <div className="bg-white">
        <Header />
        <CoursesContainer id={id}/>
        <Footer />
        </div>
        </>
    )
}

import PropTypes from "prop-types";

import "../../index.css";
import { NavLink } from "react-router-dom";

export function CardCourse({ imageCourse, titleCourse }) {
    return (
        <div className="bg-white border border-gray-300 w-full md:w-[35%] lg:w-[25%] mx-4 my-4 rounded-xl flex-grow">
            <div className="h-full max-w-xl mx-auto rounded-md overflow-hidden flex flex-col justify-between">
                <div className="h-[150px] min-h-[25vh] flex items-center justify-center overflow-hidden">
                    <img src={imageCourse} alt="Imagen" className="w-full h-full object-cover" />
                </div>
                <div className="px-4 w-full flex-grow">
                    <h2 className="text-[#426B9A] text-lg md:text-xl lg:text-2xl font-bold mt-4 text-center">{titleCourse}</h2>
                </div>
                <div className="px-4 pb-4 w-full flex items-center justify-center mt-9">
                    <NavLink to="/courseEvents" type="submit"
                        className="w-[70%] py-1 md:py-2 lg:py-2 bg-[#C94545] text-white font-medium text-lg md:text-xl lg:text-2xl rounded-md hover:bg-[#C94545]/90 hover:text-white transition duration-300">ACCESS</NavLink>
                </div>
            </div>
        </div>


    )
}

CardCourse.propTypes = {
    imageCourse: PropTypes.string.isRequired,
    titleCourse: PropTypes.string.isRequired
}

CardCourse.defaultProps = {
    imageCourse: "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain",
    titleCourse: " Course Title"
}


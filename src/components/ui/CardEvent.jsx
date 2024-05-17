import "../../index.css";
import PropTypes from "prop-types";


export function CardEvent({imageEvent, date, eventName, description, type}) {
    return(
        <div class="flex-col bg-[#D9D9D9] rounded-lg">
            <div class="w-full rounded-t-lg">
                <img class="w-full" src={`${imageEvent}`} alt=""/>
            </div>
            <div class="sticky bg-[#0F345F] w-2/5 rounded-r-lg -mt-5">
                <p class="p-2 text-center text-base text-[#ffffff] font-medium font-main">{date}</p>
            </div>
            <div class="flex m-4 justify-evenly">
                <div class="flex flex-row bg-[#ffffff] rounded-lg h-7 w-32 px-2 gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#274F7E" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p class="font-main text-base text-[#426B9A]">On Going</p>
                </div>
                <div class="flex flex-row bg-[#90BD8C] rounded-lg h-7 w-24 px-2 gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                      </svg>
                    <p class="font-main text-base">{type}</p>
                </div>
            </div>
            <div class="my-5">
                <p class="font-main text-4xl font-bold mx-6 text-[#426B9A]">{eventName}</p>
                <p class="font-main text-base font-medium mx-6 text-[#426B9A]">{description}</p>
            </div>
            <div class="flex justify-center mb-6">
                <a class="font-main text-4xl font-bold py-5 px-10 xl:px- 2xl:px-24 bg-[#C94545] rounded-lg text-[#ffffff]" href="">View More</a>
            </div>
        </div>

    )

}

CardEvent.propTypes = {
    imageEvent: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

CardEvent.defaultProps = {
    imageEvent: "https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain",
    date: "00/00/2024",
    title: "Event Title",
    description: "Event Description",
    type: "event"
}
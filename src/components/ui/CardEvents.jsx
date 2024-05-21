import PropTypes from "prop-types";
import fondo from '../../assets/imgs/fondo.png';

import "../../index.css";

export function CardEvents({titleEvent, imgEvent, description, tag, state, date}) {
    return (
                <div className='flex-col bg-[#D9D9D9] rounded-lg'>
                    <img className="w-full rounded-t-lg" src={`${fondo}`} alt=""/> 
                    <div className='bg-[#0F345F] w-2/5 rounded-r-lg -mt-5'>
                        <p className='p-2 text-center text-base text-[#ffffff] font-medium font-main'>{date}</p>
                    </div>
                    <div className='flex m-4 justify-evenly'>
                        <div className='flex flex-row bg-[#ffffff] rounded-lg h-7 w-32 px-2 gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#274F7E" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className='w-6 h-6'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <p className='font-main text-base text-[#426B9A]'>{state}</p>
                        </div>
                        <div className='flex flex-row bg-[#90BD8C] rounded-lg h-7 w-24 px-2 gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                            </svg>
                            <p className='font-main text-base'>{tag}</p>
                        </div>
                    </div>
                    <div className='my-5'>
                        <p className='font-main text-4xl font-bold mx-6 text-[#426B9A]'>{titleEvent}</p>
                        <p className='font-main text-base font-medium mx-6 text-[#426B9A]'>{description}</p>
                    </div>
                    <div className='flex justify-center mb-6'>
                        <a className='font-main text-4xl font-bold py-5 px-10 xl:px- 2xl:px-24 bg-[#C94545] rounded-lg text-[#ffffff] hover:bg-red-300' href="">View More</a>
                    </div>
                </div>
    )
}

CardEvents.propTypes = {
    titleEvent: PropTypes.string.isRequired,
    imgEvent: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

CardEvents.defaultProps = {
    titleEvent: "Event Title",
    imgEvent: "../../assets/imgs/fondo.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tag: "Tag",
    state: "State",
    date: "Date"
}
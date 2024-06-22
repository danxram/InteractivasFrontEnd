import { NavLink } from "react-router-dom";
import "../../index.css";
import PropTypes from "prop-types";

export function EventTraffic({id, key, traficName, description, borderColor }) {

    if (borderColor == 1) {
        borderColor = "#EF5350";
    } else if (borderColor == 2) {
        borderColor = "#E8D124";
    } else if (borderColor == 3) {
        borderColor = "#EF5350";
    }
    return (
        <div 
            className="flex flex-row gap-2 px-5 2xl:px-10 py-2 border-solid border-2 border-l-8 border-[#0F345F]"
            style={{ borderColor: `${borderColor}` }}
        >
            <div key={key} className="flex flex-col">
                <p className="text-[#0F345F] font-main font-bold text-xl tracking-normal">{traficName}</p>
                <p className="text-[#0F345F] font-main font-medium text-lg tracking-normal">{description}</p>
            </div>
            <NavLink to={`/details/${id}`} className="flex justify-center" href="">
                <svg
                    className="w-9 h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </NavLink>
        </div>
    );
}

EventTraffic.propTypes = {
    eventName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired
}

EventTraffic.defaultProps = {
    eventName: "Event Name",
    description: "Event Description",
    borderColor: "#35EF35"
}

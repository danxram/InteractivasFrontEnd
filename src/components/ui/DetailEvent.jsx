import "../../index.css";
import PropTypes from "prop-types";

export function DetailEvent({ eventName, imageEvent, time, hour, group, status, description, categorie }) {
 var mode = "";
 var bgMode = "";

    if (categorie == 1) {
        categorie = "Event";
    } if (categorie == 2) {
        categorie = "Homework";
    } if (categorie == 3) {
        categorie = "Notice";
    }

    if (status == 0) {
        status = "Approved";
        mode = "Done";
        bgMode = "#70C636";
    } else if (status == 1) {
        status = "Pending";
        mode = "Active";
        bgMode = "#E2C44B";
    } 

    return (
        <div className="flex flex-wrap lg:flex-nowrap p-10 bg-white m-5 rounded-2xl border border-[#274F7E] ff-main">
            <div>
                <img className="rounded-xl" src={`${imageEvent}`} alt="Imagen del evento"/>
                <h3 className="m-4 ff-main text-2xl sm:text-smer4 text-[#426B9A] font-semibold">ACTIVITY:</h3>
                <div className="flex gap-2 m-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512">
                        <path fill={bgMode} d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                    </svg>
                    <label className="ff-main md:text-xl text-sm text-[#426B9A] tracking-wider">{mode}</label>
                </div>

                {/* <!-- tags --> */}
                <div className="flex flex-wrap lg:flex-nowrap gap-4">
                    <button className="group flex justify-center items-center p-2 bg-white rounded-xl border border-[#274F7E] text-[#426B9A] font-medium transition-colors duration-300 w-40 hover:bg-[#274F7E] hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 transition-colors duration-300 group-hover:fill-white" height="20" width="25" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                        </svg>
                        <p className="ff-main text-xl sm:text-sm transition-colors duration-300 group-hover:text-white">{status}</p>
                    </button>

                    <button className="group flex justify-center items-center p-2 bg-white rounded-xl border border-[#274F7E] text-[#426B9A] font-medium transition-colors duration-300 w-40 hover:bg-[#274F7E] hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 transition-colors duration-300 group-hover:fill-white" height="20" width="25" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                        <p className="ff-main text-xl sm:text-sm transition-colors duration-300 group-hover:text-white">{group}</p>
                    </button>

                    <button className="group flex justify-center items-center p-2 bg-white rounded-xl border border-[#274F7E] text-[#426B9A] font-medium transition-colors duration-300 w-40 hover:bg-[#274F7E] hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 transition-colors duration-300 group-hover:fill-white" height="20" width="25" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                        <p className="ff-main text-xl sm:text-sm transition-colors duration-300 group-hover:text-white">{categorie}</p>
                    </button>
                </div>
            </div>

            <div>
                <div>
                    <h1 className="ff-main text-4xl sm:text-md text-[#426B9A] font-bold my-6 md:m-0">{eventName}</h1>
                </div>
                <div className="text-right">
                    <p className="ff-main text-2xl sm:text-sm text-[#274F7E]"><span className="font-bold">Date:</span> {hour}</p>
                    <p className="ff-main text-2xl sm:text-sm text-[#274F7E]"><span className="font-bold">Time:</span> {time}</p>
                </div>
                <div>
                    <p className="ff-main text-xl sm:text-sm text-left mt-4 max-w-[36rem] text-[#426B9A]">{description}</p>
                </div>

                <div className="flex justify-end w-full mt-24">
                    <button className="bg-[#274F7E] ff-main text-white rounded-md text-2xl p-2 w-[60%] md:w-[30%] hover:bg-blue-900" type="submit">+ SUBMIT</button>
                </div>
            </div>
        </div>
    );
}

DetailEvent.propTypes = {
    eventName: PropTypes.string.isRequired,
    imageEvent: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
};

DetailEvent.defaultProps = {
    eventName: "Event Name",
    imageEvent: "../../assets/imgs/fondo.png",
    date: "00/00/0000",
    hour: "00:00",
    description: "Event Description",
    status: "Status",
    group: "Group",
    type: "Type",
    mode: "Mode"
};

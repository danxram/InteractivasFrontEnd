import "../../index.css";
import PropTypes from "prop-types";
import { CircleProgress } from 'keep-react';

export function ProgressGraph({ progressNumber, eventDoneToday, eventDoneWeek }) {
    return(
        <div className='flex max-sm:divide-y-2 sm:divide-x-2  max-sm:flex-col justify-center'>

        <div className='flex flex-col sm:w-1/3 pt-10 '>
            <p className='text-[#274F7E] max-sm:text-3xl sm:text-4xl font-bold mx-auto'>Completion Rate</p>
            <div className='m-10'>
            <CircleProgress className='w-100 h-100' size='2xl' progress={progressNumber}>
                <CircleProgress.Text>{progressNumber}%</CircleProgress.Text>
            </CircleProgress>
        </div>
        </div>
        <div className='flex flex-col sm:w-1/3 pt-10'>
            <p className='text-[#274F7E] max-sm:text-3xl sm:text-4xl font-bold mx-auto'>Today</p>
            <div className='h-[12rem] w-[12rem]  md:h-[17rem] md:w-[17rem] my-10 mx-auto flex'>
            <p className='text-4xl font-bold m-auto'>{eventDoneToday} events</p>
            </div>
        </div>
        <div className='flex flex-col sm:w-1/3 pt-10 '>
            <p className='text-[#274F7E] max-sm:text-3xl sm:text-4xl font-bold mx-auto'>This week</p>
            <div className='h-[12rem] w-[12rem]  md:h-[17rem] md:w-[17rem] my-10 mx-auto flex'>
                <p className='text-4xl font-bold m-auto'>{eventDoneWeek} events</p>
            </div>
        </div>
    </div>
    );
}

ProgressGraph.propTypes = {
    progressNumber: PropTypes.string.isRequired,
    eventDoneToday: PropTypes.string.isRequired,
    eventDoneWeek: PropTypes.string.isRequired
}

ProgressGraph.defaultProps = {
    progressNumber: "0",
    eventDoneToday: "0",
    eventDoneWeek: "0"

}
import "../../index.css";
import PropTypes from "prop-types";
import { CircleProgress } from 'keep-react';

export function ProgressGraph({ progressNumber }){
    return(
        <div className='m-10'>
            <CircleProgress className='w-100 h-100' size='2xl' progress={progressNumber}>
                <CircleProgress.Text>{progressNumber}%</CircleProgress.Text>
            </CircleProgress>
        </div>
    );
}

ProgressGraph.propTypes = {
    progressNumber: PropTypes.string.isRequired
}

ProgressGraph.defaultProps = {
    progressNumber: "0"

}
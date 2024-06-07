import '../../index.css';
import { ProgressGraph } from '../ui/ProgressGraph';


export function GraphsContainer({ items }) {
    return (

        <section className='flex flex-col'>
            
            <div className='flex flex-col items-center px-16'>
            <h2 className='text-[#274F7E] max-sm:text-4xl sm:text-5xl font-bold py-10 sm:ml-0 sm:mr-auto'>GRAPHS</h2>
                        {items.map(item => <ProgressGraph key={item.id} progressNumber={item.progressNumber} eventDoneToday={item.eventDoneToday} eventDoneWeek={item.eventDoneWeek} />)}
            </div>
        </section>

    )
}


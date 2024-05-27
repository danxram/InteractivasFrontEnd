import '../../index.css';
import { ProgressGraph } from '../ui/ProgressGraph';


export function GraphsContainer({ items }) {
    return (

        <section className='flex flex-col'>
            
            <div className='flex flex-col items-center px-32'>
            <h2 className='text-[#274F7E] max-sm:text-4xl sm:text-5xl font-bold py-10 sm:ml-0 sm:mr-auto'>GRAPHS</h2>
                <div className='flex max-sm:divide-y-2 sm:divide-x-2  max-sm:flex-col justify-center'>

                    <div className='flex flex-col sm:w-1/3 pt-10 '>
                        <p className='text-[#274F7E] max-sm:text-3xl sm:text-4xl font-bold mx-auto'>Completion Rate</p>
                        {items.map(item => <ProgressGraph key={item.id} progressNumber={item.progressNumber} />)}
                    </div>
                    <div className='flex flex-col sm:w-1/3 pt-10'>
                        <p className='text-[#274F7E] max-sm:text-3xl sm:text-4xl font-bold mx-auto'>Today</p>
                        <div className='h-[12rem] w-[12rem]  md:h-[17rem] md:w-[17rem] my-10 mx-auto flex'>
    <p className='text-4xl font-bold m-auto'>10 events</p>
</div>
                    </div>
                    <div className='flex flex-col sm:w-1/3 pt-10 '>
                        <p className='text-[#274F7E] max-sm:text-3xl sm:text-4xl font-bold mx-auto'>This week</p>
                        <div className='h-[12rem] w-[12rem]  md:h-[17rem] md:w-[17rem] my-10 mx-auto flex'>
                            <p className='text-4xl font-bold m-auto'>10 events</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}


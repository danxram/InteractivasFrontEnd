import React from 'react';
import { GraphsContainer } from '../activity/GraphsContainer';
import { CompletedEventsContainer } from '../activity/CompletedEventsContainer';
import "../../index.css";
import { Footer } from '../ui/Footer';
import { Header } from '../ui/Header';



export function Statistics() {

    const progressGraph = [
        {'id':1, 'progressNumber':55}
    ]

    const events = [
        {'id':1, 'eventName': 'Event 1', 'description': 'Description 1', 'date': '00/00/2024', 'imageEvent': 'https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain', 'type': 'Event'},
        {'id':2, 'eventName': 'Event 2', 'description': 'Description 2', 'date': '00/00/2024', 'imageEvent': 'https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain', 'type': 'Task'},
        {'id':3, 'eventName': 'Event 3', 'description': 'Description 3', 'date': '00/00/2024', 'imageEvent': 'https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain', 'type': 'Notifi...'},
    ]

    return (

        <>
        <Header />

        <div className='flex flex-col w-3/4 m-auto py-9'>
                <h1 className='text-[#274F7E] font-bold mx-auto max-sm:text-5xl sm:text-6xl'>COURSE STATISTICS</h1>
                
        </div>

        <GraphsContainer items={progressGraph}/>
        <CompletedEventsContainer items={events}/>


        <Footer />
        </>
    )
}
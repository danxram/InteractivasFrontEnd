import React from 'react';
import { GraphsContainer } from '../activity/GraphsContainer';
import { CompletedEventsContainer } from '../activity/CompletedEventsContainer';
import { Footer } from '../ui/Footer';
import { Header } from '../ui/Header';


export function Statistics() {

    const events = [
        {'id':1, 'eventName': 'Event 1', 'description': 'Description 1', 'date': '00/00/2024', 'imageEvent': 'https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain', 'type': 'Event'},
        {'id':2, 'eventName': 'Event 2', 'description': 'Description 2', 'date': '00/00/2024', 'imageEvent': 'https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain', 'type': 'Task'},
        {'id':3, 'eventName': 'Event 3', 'description': 'Description 3', 'date': '00/00/2024', 'imageEvent': 'https://th.bing.com/th/id/OIP.hSXNqQe1qgQd8-sq8KqkWAHaFj?rs=1&pid=ImgDetMain', 'type': 'Notifi...'},
    ]

    return (

        <>
        <Header />


        <GraphsContainer />
        <CompletedEventsContainer items={events}/>


        <Footer />
        </>
    )
}
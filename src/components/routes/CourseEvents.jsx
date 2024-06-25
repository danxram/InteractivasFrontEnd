import React, { useState } from 'react';
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { EventContainer } from "../activity/EventContainer.jsx";
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CourseEventsContainer } from '../activity/CourseEventsContainer.jsx';



export function CourseEvents() {
    

    const {courseId}=useParams();

    

    

    return (
        <div className="bg-white">
            <Header />
            <CourseEventsContainer courseId={courseId} fetchType="course" />
            <Footer />
            
        </div>
    );
}

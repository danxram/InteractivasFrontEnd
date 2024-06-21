import React from 'react';
import { Header } from "../ui/Header";
import { Footer } from "../ui/Footer";
import { Profile } from '../ui/Profile';
import { useParams } from 'react-router-dom';
import { ProfileContainer } from '../activity/ProfileContainer';


export function UserProfile() {

    const { id } = useParams();

    return (
        <>
            <Header />
            <ProfileContainer id={id} />
            <Footer />
        </>


    )
}


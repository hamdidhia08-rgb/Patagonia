import Hero2 from '@/Components/Hero/Hero2';
import Navbar from '@/Components/Navbar/Nav';
import Service from '@/Components/Service/Service';
import Service_Liste from '@/Components/Service/Service_liste';
import TopBar from '@/Components/TopBar/TopBar';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Hero2/>
            <Service_Liste/>
        </div>
    );
}

export default Page;

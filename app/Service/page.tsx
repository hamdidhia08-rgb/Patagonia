import Hero1 from '@/Components/Hero/Hero1';
import Navbar from '@/Components/Navbar/Nav';
import Service from '@/Components/Service/Service';
import TopBar from '@/Components/TopBar/TopBar';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TopBar/>
            <Navbar/>
            <Hero1/>
            <Service/>
        </div>
    );
}

export default Page;

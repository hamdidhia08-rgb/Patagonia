import ContactDetailsForm2 from '@/Components/Contact/ContactDetailsForm'
import GetInTouchCard from '@/Components/Contact/GetInTouchCard'
import MapCard from '@/Components/Contact/MapCard'
import Hero2 from '@/Components/Hero/Hero2'
import Navbar from '@/Components/Navbar/Nav'
import ScrollToTopButton from '@/Components/ScrollToTopButton'
import TopBar from '@/Components/TopBar/TopBar'
import WhatsappButtons from '@/Components/WhatsappButtons'
import React from 'react'

export default function page() {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <Hero2/>
    <main className="bg-gray-50 min-h-screen py-10 sm:py-16 z-20">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <section className="lg:col-span-2">
            <div className="bg-white p-6 sm:p-6 rounded-lg shadow-sm mb-8">
              <ContactDetailsForm2/>
            </div>        
          </section>

            <aside className="lg:col-span-1 flex flex-col">
            <div className="top-8  flex flex-col">
             <GetInTouchCard/>
             <MapCard/>
            </div>
 
          </aside>
        </div>
      </main>
       <WhatsappButtons/>
       <ScrollToTopButton/>
    </div>
  )
}

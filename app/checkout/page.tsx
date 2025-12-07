import React from 'react';
import Navbar from '@/Components/Navbar/Nav';
import TourBookingSummary from '@/Components/checkout/TourBookingSummary';
import TopBar from '@/Components/TopBar/TopBar';
import ContactDetailsForm from '@/Components/checkout/ContactDetailsForm';
import AdditionalInformationForm from '@/Components/checkout/AdditionalInformationForm';
import PaymentSection from '@/Components/checkout/Payment';
import Hero_payment from '@/Components/Hero/Hero_payment';
import Stepper from '@/Components/checkout/Stepper';
import WhatsappButtons from '@/Components/WhatsappButtons';
import ScrollToTopButton from '@/Components/ScrollToTopButton';

export default function CheckoutPage() {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <Hero_payment/>

      <main className="bg-gray-50 min-h-screen py-10 sm:py-16 z-20">
        <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10'>
          <Stepper/>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <section className="lg:col-span-2">
            <div className="bg-white p-6 sm:p-6 rounded-lg shadow-sm mb-8">
              <ContactDetailsForm />
            </div>
            <div className="bg-white p-6 sm:p-6 rounded-lg shadow-sm mb-8">
                  <AdditionalInformationForm/>
            </div>
            <PaymentSection/>
                     
          </section>

            <aside className="lg:col-span-1 flex flex-col">
            <div className="top-8  flex flex-col">
              <TourBookingSummary />
            </div>
 
          </aside>
        </div>
      </main>
       <WhatsappButtons/>
       <ScrollToTopButton/>
    </div>
  );
}

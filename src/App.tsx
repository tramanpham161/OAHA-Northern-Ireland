import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickNav from './components/QuickNav';
import Introduction from './components/Introduction';
import Ambition from './components/Ambition';
import WhatWeUnderstand from './components/WhatWeUnderstand';
import WhyMatters from './components/WhyMatters';
import HowWeWork from './components/HowWeWork';
import RoleOfLeeds from './components/RoleOfLeeds';
import WhoInvolved from './components/WhoInvolved';
import BuildThePicture from './components/BuildThePicture';
import AboutThePartnership from './components/AboutThePartnership';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div
      id="top"
      className="bg-[#faf9f6] text-[#1a2521] min-h-screen selection:bg-[#FF9900]/15 selection:text-[#1a2521] font-sans leading-relaxed antialiased"
    >
      <Header />
      <Hero />
      <QuickNav />
      <main>
        <Introduction />
        <Ambition />
        <WhatWeUnderstand />
        <WhyMatters />
        <HowWeWork />
        <RoleOfLeeds />
        <WhoInvolved />
        <BuildThePicture />
        <InquiryForm />
        <AboutThePartnership />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

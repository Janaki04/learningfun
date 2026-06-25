import React, { useState } from 'react';
import { School, Briefcase, Home, Smartphone, GraduationCap, FileText } from 'lucide-react';
import rightimage  from "../assets/Miroodles Color Composition.png"
import logo from "../assets/Group 49.png"
import FeaturesSection from './FeaturesSection';
import AmazingThingsSection from './AmazingThingsSection';
import HowItWorksSection from './HowItWorksSection';
import TestimonialAndCtaSections from './TestimonialAndCtaSections';

export default function CollaborativeHero() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-[#FAFAFA] font-sans antialiased text-[#2D2D2D] flex relative overflow-x-hidden">
      
      {/* Main Container */}
      <div className="flex-1 bg-white min-h-screen">
        
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">
          
          {/* Logo with Purple Highlight Border Box */}
          <div className="flex items-center space-x-3 cursor-pointer p-1 relative bg-white">
         <img src={logo} alt="Learning Fun Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center space-x-6">
            {/* Language Box with Green Highlight */}
            <div className="relative border-2 border-emerald-500 bg-emerald-50 px-1 rounded flex items-center">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-black font-semibold text-sm transition"
              >
                <span>{currentLang}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 w-24 bg-white border border-gray-200 rounded shadow-lg py-1 z-50">
                  {['EN', 'ES', 'FR'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setCurrentLang(lang); setIsLangOpen(false); }}
                      className="block w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="bg-[#4B61FF] hover:bg-[#3A4EE6] text-white font-semibold px-5 py-2 rounded-md shadow-sm transition text-sm">
              Sign up
            </button>
            
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-5 py-2 rounded-md transition text-sm">
              Log in
            </button>

            {/* Hamburger Menu Toggle Button */}
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex flex-col justify-between w-6 h-4 cursor-pointer z-50"
            >
              <span className="h-[3px] w-full bg-[#4B61FF] rounded"></span>
              <span className="h-[3px] w-4/5 ml-auto bg-[#4B61FF] rounded"></span>
              <span className="h-[3px] w-full bg-[#4B61FF] rounded"></span>
            </button>
          </div>
        </nav>

        {/* Hero Body Layout */}
        <main className="max-w-7xl mx-auto px-20 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 justify-evenly items-center relative">
          
          {/* Left Text Column */}
          <div className="flex flex-col  space-y-2 max-w-xl relative">
            <h1 className="text-start text-5xl md:text-6xl font-black tracking-tight text-[#2D2D2D] leading-[1.15]">
              Make <br />
              learning fun!
            </h1>
            
            <p className="text-start text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
              Any subject, in any language, on any device, for all ages!
            </p>

            <div className="pt-4 relative inline-block w-fit">
              <button className="bg-[#4B61FF] hover:bg-[#3A4EE6] text-white font-bold text-base px-8 py-3.5 rounded-md shadow-md transition">
                Sign up for free
              </button>
              
               
            </div>

            {/* Downloader App Store Badges */}
            <div className="pt-8 flex flex-col space-y-3">
              <span className="text-start text-xs uppercase tracking-wider font-bold text-gray-700">
                Or download the app:
              </span>
              <div className="flex items-center space-x-3">
                <a href="#appstore" className="hover:opacity-90 transition">
                  <img 
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" 
                    alt="App Store" 
                    className="h-9 w-auto object-contain"
                  />
                </a>
                <a href="#googleplay" className="hover:opacity-90 transition">
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Google Play" 
                    className="h-12 w-auto object-contain -ml-2"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Vector Artwork Column */}
          <div className="relative flex justify-center items-center">
            <img
              src={rightimage} 
              alt="Collaborative Learning Illustration" 
              className="w-full max-w-lg"
            />
          </div>
        </main>
      </div>

      {/* Floating Right Sidebar Navigation Board Overlay */}
      <div className={`fixed top-12 right-6 w-56 bg-white rounded-3xl shadow-xl border border-gray-100 p-5 z-40 transition-all duration-300 transform ${isSidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-72 opacity-0 pointer-events-none'}`}>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-gray-800 hover:text-black font-bold text-sm cursor-pointer transition">
            <School className="w-4 h-4 text-gray-600" />
            <span>School</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-800 hover:text-black font-bold text-sm cursor-pointer transition">
            <Briefcase className="w-4 h-4 text-gray-600" />
            <span>Work</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-800 hover:text-black font-bold text-sm cursor-pointer transition">
            <Home className="w-4 h-4 text-gray-600" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-800 hover:text-black font-bold text-sm cursor-pointer transition">
            <Smartphone className="w-4 h-4 text-gray-600" />
            <span>Learning apps</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-800 hover:text-black font-bold text-sm cursor-pointer transition">
            <GraduationCap className="w-4 h-4 text-gray-600" />
            <span>Self study</span>
          </li>
          <li className="flex items-center justify-between text-gray-800 hover:text-black font-bold text-sm cursor-pointer transition">
            <div className="flex items-center space-x-3">
              <FileText className="w-4 h-4 text-gray-600" />
              <span>News</span>
            </div>
            {/* Notification Bubble counter tag */}
            <span className="bg-[#FBBF24] text-white text-xs px-2 py-0.5 rounded-full font-extrabold shadow-sm">
              5
            </span>
          </li>
        </ul>
      </div>

    </div>
    <FeaturesSection/>
    <AmazingThingsSection/>
    <HowItWorksSection/>
    <TestimonialAndCtaSections/>
    </>
  );
}
import React, { useState, useEffect } from 'react';
import { School, Briefcase, Home, Smartphone, GraduationCap, FileText } from 'lucide-react';
import rightimage from "../assets/Miroodles Color Composition.png"
import logo from "../assets/Group 49.png"
import FeaturesSection from './FeaturesSection';
import AmazingThingsSection from './AmazingThingsSection';
import HowItWorksSection from './HowItWorksSection';
import GameCodeSection from './GameCodeSection';
import TestimonialAndCtaSections from './TestimonialAndCtaSections';
import Footer from '../components/Footer';

import LoginModal from '../components/Login';
import SignupModal from '../components/Signup';

export default function CollaborativeHero() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLoginOpen(false);
        setIsSignupOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-[#FAFAFA] font-sans antialiased text-[#2D2D2D] flex flex-col relative overflow-x-hidden transition-colors duration-300">
      
      <div 
        className={`fixed inset-0 bg-black/20 z-30 transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsSidebarOpen(false)} 
      />

      <div className="flex-1 bg-white min-h-screen">
        
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative z-10">
          <div className="flex items-center space-x-3 cursor-pointer p-1 relative bg-white transform active:scale-95 transition-transform duration-150">
            <img src={logo} alt="Learning Fun Logo" className="h-8 w-auto" />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            
            <div className="hidden sm:flex relative border-2 border-[#3A5AFF] px-2 py-1 rounded-md items-center bg-white transition-all hover:border-blue-700">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-black font-semibold text-sm transition-colors duration-150"
              >
                <span>{currentLang}</span>
                <svg className={`w-3 h-3 transform transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full right-0 mt-2 w-24 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50 origin-top-right transition-all duration-200 ${
                isLangOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
              }`}>
                {['EN', 'ES', 'FR'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setCurrentLang(lang); setIsLangOpen(false); }}
                    className="block w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-[#3A5AFF] font-bold transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setIsSignupOpen(true)}
              className="hidden sm:block bg-[#3A5AFF] hover:bg-[#FFC43B] border-b-4 border-[#804000] active:border-b-0 active:mt-[4px] text-white font-semibold px-5 py-2 rounded-md shadow-sm transition-all duration-150 text-sm transform active:scale-98"
            >
              Sign up
            </button>
            
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="hidden sm:block bg-[#3A5AFF] hover:bg-[#FFC43B] border-b-4 border-[#804000] active:border-b-0 active:mt-[4px] text-white font-semibold px-5 py-2 rounded-md transition-all duration-150 text-sm transform active:scale-98"
            >
              Log in
            </button>

            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex flex-col justify-between w-6 h-4 cursor-pointer z-50 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className={`h-[3px] bg-[#3A5AFF] rounded transition-all duration-300 transform origin-left ${isSidebarOpen ? 'w-full rotate-45 translate-x-[2px] -translate-y-[1px]' : 'w-full'}`}></span>
              <span className={`h-[3px] bg-[#3A5AFF] rounded transition-all duration-200 ${isSidebarOpen ? 'w-0 opacity-0' : 'w-4/5 ml-auto'}`}></span>
              <span className={`h-[3px] bg-[#3A5AFF] rounded transition-all duration-300 transform origin-left ${isSidebarOpen ? 'w-full -rotate-45 translate-x-[2px] translate-y-[1px]' : 'w-full'}`}></span>
            </button>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 md:px-20 pt-12 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 justify-evenly items-center relative">
          <div className="flex flex-col space-y-4 max-w-xl relative">
            <h1 className="text-start text-5xl md:text-6xl font-black tracking-tight text-[#2D2D2D] leading-[1.15]">
              Make <br /> learning fun!
            </h1>
            <p className="text-start text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
              Any subject, in any language, on any device, for all ages!
            </p>

            <div className="pt-4 relative inline-block w-fit">
              <button 
                onClick={() => setIsSignupOpen(true)}
                className="bg-[#3A5AFF] hover:bg-[#FFC43B] border-b-4 border-[#804000] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-md transition-all duration-150 transform active:scale-95 active:border-b-0 active:translate-y-[4px]"
              >
                Sign up for free
              </button>
            </div>

            <div className="pt-8 flex flex-col space-y-3">
              <span className="text-start text-xs uppercase tracking-wider font-bold text-gray-700">Or download the app:</span>
              <div className="flex items-center space-x-3">
                <a href="#appstore" className="hover:opacity-80 transition-opacity transform active:scale-98 duration-150"><img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="App Store" className="h-9 w-auto object-contain"/></a>
                <a href="#googleplay" className="hover:opacity-80 transition-opacity transform active:scale-98 duration-150"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="h-12 w-auto object-contain -ml-2"/></a>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center transform hover:scale-[1.02] transition-transform duration-500 ease-out">
            <img src={rightimage} alt="Collaborative Learning Illustration" className="w-full max-w-lg object-contain" />
          </div>
        </main>
      </div>

      <div className={`fixed top-24 right-6 w-64 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 z-40 transition-all duration-300 cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isSidebarOpen ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="block sm:hidden pb-4 mb-4 border-b border-gray-100 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Language</span>
            <div className="relative border border-gray-200 px-2 py-0.5 rounded bg-gray-50">
              <select value={currentLang} onChange={(e) => setCurrentLang(e.target.value)} className="bg-transparent text-xs font-bold text-gray-700 outline-none pr-1 cursor-pointer">
                <option value="EN">EN</option><option value="ES">ES</option><option value="FR">FR</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button onClick={() => { setIsSidebarOpen(false); setIsLoginOpen(true); }} className="bg-[#3A5AFF] hover:bg-[#FFC43B] border-b-2 border-[#804000] text-white text-xs font-bold py-2 rounded-lg text-center transition-all active:translate-y-[2px] active:border-b-0">Log in</button>
            <button onClick={() => { setIsSidebarOpen(false); setIsSignupOpen(true); }} className="bg-[#3A5AFF] hover:bg-[#FFC43B] border-b-2 border-[#804000] text-white text-xs font-bold py-2 rounded-lg text-center transition-all active:translate-y-[2px] active:border-b-0">Sign up</button>
          </div>
        </div>

        <ul className="space-y-3">
          {[
            { icon: School, label: 'School' },
            { icon: Briefcase, label: 'Work' },
            { icon: Home, label: 'Home' },
            { icon: Smartphone, label: 'Learning apps' },
            { icon: GraduationCap, label: 'Self study' },
          ].map((item, idx) => (
            <li 
              key={idx}
              onClick={() => setIsSidebarOpen(false)} 
              className="flex items-center space-x-3 text-gray-800 hover:text-[#3A5AFF] font-extrabold text-sm cursor-pointer transition-all duration-150 transform hover:translate-x-1.5"
            >
              <item.icon className="w-4 h-4 text-gray-400 stroke-[2.5]" />
              <span>{item.label}</span>
            </li>
          ))}
          <li onClick={() => setIsSidebarOpen(false)} className="flex items-center justify-between text-gray-800 hover:text-[#3A5AFF] font-extrabold text-sm cursor-pointer transition-all duration-150 transform hover:translate-x-1.5">
            <div className="flex items-center space-x-3"><FileText className="w-4 h-4 text-gray-400 stroke-[2.5]" /><span>News</span></div>
            <span className="bg-[#FFC43B] text-gray-950 text-xs px-2 py-0.5 rounded-full font-black shadow-sm animate-pulse">5</span>
          </li>
        </ul>
      </div>

    </div>

    <LoginModal 
      isOpen={isLoginOpen} 
      onClose={() => setIsLoginOpen(false)} 
      onSwitchToSignup={() => { setIsLoginOpen(false); setIsSignupOpen(true); }} 
    />
    
    <SignupModal 
      isOpen={isSignupOpen} 
      onClose={() => setIsSignupOpen(false)} 
      onSwitchToLogin={() => { setIsSignupOpen(false); setIsLoginOpen(true); }} 
    />
    
    <FeaturesSection/>
    <AmazingThingsSection/>
    <HowItWorksSection/>
    <GameCodeSection/>
    <TestimonialAndCtaSections/>
    <Footer/>
    </>
  );
}
import React, { useState ,useEffect} from 'react';
import image from "../assets/image6.png"
import LoginModal from '../components/Login';
import SignupModal from '../components/Signup';

export default function TestimonialAndCtaSections() {
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

  const [activeSlide, setActiveSlide] = useState(1); 

  const testimonials = [
    {
      id: 0,
      quote: "The students engage completely instantly!",
      name: "Sarah | Lincoln School",
      desc1: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      desc2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      logoText: "Lincoln School",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=250&h=250&q=80"
    },
    {
      id: 1,
      quote: "I love these games!",
      name: "Martha | Norwegian Air",
      desc1: "Recusandae sunt voluptate repellat velit dolorem eos nostrum cupiditate. Labore porro cupiditate reiciendis enim neque. Modi eos autem expedita voluptatibus dignissimos repellat.",
      desc2: "Sit et aut minus quod vitae. Aut occaecati cupidatat neque dolore amet beatae quasi aliquam.",
      logoText: "norwegian",
      isNorwegianLogo: true,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=250&h=250&q=80"
    },
    {
      id: 2,
      quote: "Corporate training has never been simpler.",
      name: "Alex | TechCorp",
      desc1: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      desc2: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      logoText: "TechCorp",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=250&h=250&q=80"
    },
    {
      id: 3,
      quote: "Perfect asset for our continuous e-learning.",
      name: "Emma | EduGlobal",
      desc1: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      desc2: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
      logoText: "EduGlobal",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=250&h=250&q=80"
    }
  ];

  const stats = [
    { text: "More than 50% of US teachers use Kurtis", borderColor: "border-blue-500" },
    { text: "Players in more than 200 countries", borderColor: "border-teal-400" },
    { text: "Over 30 million public games available", borderColor: "border-rose-500" },
    { text: "97% of the Fortune 500 use Kurtis", borderColor: "border-amber-400" },
  ];

  return (
    <div className="w-full font-sans antialiased bg-white font-sans">
      
      <section className="bg-[#3A5AFF] text-white py-16 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our best customers</h2>
            <div className="h-1 w-20 bg-white/70 mx-auto mt-2 rounded"></div>
          </div>

          <div className="w-full min-h-[320px] md:min-h-[260px] relative flex items-center justify-center">
            {testimonials.map((item, idx) => {
              if (idx !== activeSlide) return null;
              return (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full animate-fadeIn">
                  
                  <div className="md:col-span-5 flex flex-col md:flex-row items-center justify-center md:justify-end relative pr-0 md:pr-6">
                    <div className="bg-white text-[#2D2D2D] p-6 rounded-3xl shadow-lg relative max-w-xs text-center md:text-left mb-6 md:mb-0 md:absolute md:right-[150px] md:top-4 z-20">
                      <p className="font-extrabold text-xl whitespace-nowrap">{item.quote}</p>
                      <div className="absolute bottom-[-10px] left-1/2 md:left-auto md:right-8 transform -translate-x-1/2 md:translate-x-0 w-0 h-0 border-x-8 border-x-transparent border-t-12 border-t-white"></div>
                    </div>

                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white/10 shadow-md grayscale bg-gray-700 relative z-10 flex-shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="hidden md:block w-[2px] bg-white/30 h-40 md:col-span-1 mx-auto"></div>

                  <div className="md:col-span-6 text-left space-y-4">
                    <h4 className="text-xl font-extrabold tracking-wide">{item.name}</h4>
                    <p className="text-sm font-normal text-blue-50/90 leading-relaxed max-w-xl">{item.desc1}</p>
                    <p className="text-sm font-normal text-blue-100/80 leading-relaxed max-w-xl">{item.desc2}</p>
                    
                    <div className="pt-2">
                      {item.isNorwegianLogo ? (
                        <div className="bg-[#1D2B58] inline-flex items-center px-4 py-2 rounded font-black italic tracking-tighter text-lg border border-white/10">
                          norwegian<span className="text-red-500 font-light not-italic ml-1 text-xs">✈</span>
                        </div>
                      ) : (
                        <div className="text-white/60 font-mono tracking-wider uppercase text-sm border-b border-white/20 pb-1 inline-block">
                          {item.logoText}
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center space-x-3 mt-12 z-30">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? 'w-3 bg-amber-400' : 'w-3 bg-[#3A5AFF] hover:bg-[#FFC43B]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      <section className="bg-[#FAFAFA] border-b border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`border-l-4 ${stat.borderColor} pl-4 py-2 text-left`}>
              <p className="text-[#2C2724] text-sm md:text-base font-extrabold leading-snug">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex justify-center order-2 md:order-1">
            <img src={image} alt="Whimsical Character" className="w-full max-w-sm md:max-w-md" />
          </div>

          <div className="flex flex-col text-left space-y-6 order-1 md:order-2 max-w-md mx-auto md:mx-0">
            <h3 className="text-4xl md:text-5xl font-black text-[#2B2724] tracking-tight leading-[1.15]">
              Ready for make learning fun!
            </h3>
            
            <div className="pt-2">
              <button 
                onClick={() => {setIsSignupOpen(true); }}
                className="bg-[#3A5AFF] hover:bg-[#FFD966] text-white font-bold text-sm px-8 py-4 rounded-md shadow-md transition-transform transform active:scale-98 border-b-4  border-[#804000] border-800"
              >
                Sign up for free
              </button>
            </div>
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
      </section>

    </div>
  );
}
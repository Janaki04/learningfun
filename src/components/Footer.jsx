import React from 'react';
import logo from "../assets/Group 50.png"

export default function Footer() {
  const footerLinks = [
    {
      title: "About",
      items: [
        { label: "Company", href: "#" },
        { label: "Leadership", href: "#" },
        { label: "Jobs - HIRING!", href: "#", highlight: true },
        { label: "Pricing", href: "#" },
        { label: "Press", href: "#" },
        { label: "Investors", href: "#" }
      ]
    },
    {
      title: "Solutions",
      items: [
        { label: "At School", href: "#" },
        { label: "At Work", href: "#" },
        { label: "At Home", href: "#" }
      ]
    },
    {
      title: "Resources",
      items: [
        { label: "Study with Kurtis", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Kurtis Certified", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Library", href: "#" },
        { label: "Shop", href: "#" },
        { label: "Safety center", href: "#" }
      ]
    },
    {
      title: "Terms and conditions",
      items: [
        { label: "Terms and Conditions", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "US Privacy Laws", href: "#" },
        { label: "Children's Privacy Policy", href: "#" },
        { label: "Inclusion and Accessibility policy", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-[#3A5AFF] text-white pt-16 pb-8 px-6 md:px-12 lg:px-20 font-sans selection:bg-white selection:text-[#3B63FF]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/20">
          
          <div className="lg:col-span-4 flex flex-col space-y-6 text-left">
            <div className="flex items-center space-x-2 cursor-pointer group">
             <img src={logo} alt="LearningFun Logo" className="w-13 h-8 object-contain"/>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-black uppercase tracking-wider text-blue-100">Get the app:</p>
              <div className="flex flex-col space-y-2.5 max-w-[160px]">
                <a href="#appstore" className="hover:opacity-90 transition transform active:scale-[0.99]">
                  <img 
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" 
                    alt="Download on the App Store" 
                    className="w-full h-auto object-contain rounded-md border border-white/10"
                  />
                </a>
                <a href="#googleplay" className="hover:opacity-90 transition transform active:scale-[0.99]">
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className="w-full h-auto object-contain rounded-md"
                  />
                </a>
                <a href="#appgallery" className="hover:opacity-90 transition transform active:scale-[0.99]">
                  <div className="bg-black border border-white/20 rounded-md p-1.5 flex items-center justify-center space-x-2 h-[40px]">
                    <span className="text-[10px] uppercase font-bold text-gray-400 leading-none">Explore it on</span>
                    <span className="text-sm font-extrabold text-white tracking-tighter leading-none">AppGallery</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <p className="text-xs font-black uppercase tracking-wider text-blue-100">Follow us:</p>
              <div className="flex items-center space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3A5AFF] hover:bg-blue-50 transition-colors transform hover:-translate-y-0.5">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3A5AFF] hover:bg-blue-50 transition-colors transform hover:-translate-y-0.5">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z"/>
                  </svg>
                </a>

                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3A5AFF] hover:bg-blue-50 transition-colors transform hover:-translate-y-0.5">
                  <svg className="w-4 h-4 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>

                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3A5AFF] hover:bg-blue-50 transition-colors transform hover:-translate-y-0.5">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#3A5AFF] font-black text-xs hover:bg-blue-50 transition-colors transform hover:-translate-y-0.5">
                  <span>d</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-left">
            {footerLinks.map((column, cIdx) => (
              <div key={cIdx} className="flex flex-col space-y-4">
                <h4 className="text-base font-extrabold text-white tracking-wide">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.items.map((item, iIdx) => (
                    <li key={iIdx}>
                      <a 
                        href={item.href}
                        className={`text-sm font-medium tracking-wide opacity-90 hover:opacity-100 hover:underline transition-all block ${
                          item.highlight ? 'text-amber-300 font-bold' : 'text-blue-50'
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                
                {cIdx === 3 && (
                  <div className="pt-6 flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-3 max-w-xs">
                    <div className="bg-white p-2 rounded text-gray-900 border border-white/20 flex flex-col items-start flex-1 min-w-[110px]">
                      <span className="text-[9px] font-bold text-gray-500 uppercase leading-none">Microsoft</span>
                      <span className="text-xs font-black text-slate-800 leading-tight">Partner</span>
                      <span className="text-[8px] text-gray-400 mt-1 leading-none">Education Specialist</span>
                    </div>
                    <div className="bg-white p-2 rounded text-gray-900 border border-white/20 flex flex-col items-start flex-1 min-w-[110px]">
                      <span className="text-[9px] font-medium text-gray-400 uppercase leading-none">Partner</span>
                      <span className="text-xs font-extrabold text-blue-600 tracking-tight leading-tight">
                        Google <span className="text-gray-500 font-normal text-[10px]">for Education</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-medium text-blue-100/80 text-left">
          <p>Copyright @ 2020, Kurtis All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
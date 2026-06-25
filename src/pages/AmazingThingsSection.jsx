import React, { useState, useEffect, useRef } from 'react';

export default function AmazingThingsSection() {
  const originalCards = [
    {
      id: 0,
      title: "Kurtis Classroom",
      subtitle: "The next generation of intuitive learning.",
      cta: "Learn more",
      bgLeft: "bg-[#1E5AD6]",
      image: "https://images.unsplash.com/photo-1513258496099-48168024addd?auto=format&fit=crop&q=80&w=400",
      hasCursor: true, 
    },
  
    {
      id: 1,
      title: "Premium for schools",
      subtitle: "Create and teach interactive lessons students will love.",
      cta: "Learn more",
      bgLeft: "bg-[#FBBF24]",
      badge: "New",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
      hasCursor: false,
    },
      {
      id: 2,
      title: "Kurtis Classroom",
      subtitle: "The next generation of corporate learning.",
      cta: "Learn more",
      bgLeft: "bg-[#2B241F]",
      image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=400",
      hasCursor: false,
    },
    {
      id: 3,
      title: "Kurtis for Creators",
      subtitle: "Monetize your educational content with ease.",
      cta: "Learn more",
      bgLeft: "bg-gradient-to-r from-purple-700 to-indigo-600",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
      hasCursor: false,
    },
  ];

  // Clone items to support infinite loop boundaries
  // Array looks like: [Last Item Clone, Item 0, Item 1, Item 2, Item 3, First Item Clone]
  const loopCards = [
    { ...originalCards[originalCards.length - 1], id: 'clone-start' },
    ...originalCards,
    { ...originalCards[0], id: 'clone-end' }
  ];

  // Set the default visible card pointer to index 2 (which maps to originalCards[1])
  const [currentIndex, setCurrentIndex] = useState(2); 
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  // Handle seamless snap at loop boundaries
  useEffect(() => {
    if (currentIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(loopCards.length - 2); // Snap to the actual last item
      }, 500); // Must match transition duration
    } else if (currentIndex === loopCards.length - 1) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1); // Snap to the actual first item
      }, 500);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, loopCards.length]);

  // Safely trigger a slide transition index change
  const handleSlideChange = (targetIndex) => {
    setIsTransitioning(true);
    setCurrentIndex(targetIndex);
  };

  // Utility to determine active formatting index cleanly
  const getMappedActiveIndex = () => {
    if (currentIndex === 0) return originalCards.length - 1;
    if (currentIndex === loopCards.length - 1) return 0;
    return currentIndex - 1;
  };

  const activeMapIndex = getMappedActiveIndex();

  return (
    <section className="bg-white py-16 px-4 md:px-8 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2724] tracking-tight">
            Amazing things are happening
          </h2>
          <div className="h-1.5 w-24 bg-[#4B61FF] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Carousel Window Viewport */}
        <div className="relative w-full">
          <div 
            className="flex gap-6 py-6"
            style={{
              transform: `translateX(calc(50% - (var(--card-width) / 2) - (${currentIndex} * (var(--card-width) + 1.5rem))))`,
              transition: isTransitioning ? 'transform 500ms ease-out' : 'none',
              '--card-width': 'min(480px, 80vw)'
            }}
          >
            {loopCards.map((card, idx) => {
              // Highlight based on current true active visual array spot
              const isActive = activeMapIndex === (idx === 0 ? originalCards.length - 1 : idx === loopCards.length - 1 ? 0 : idx - 1);
              const isYellowCard = card.bgLeft === "bg-[#FBBF24]";

              return (
                <div
                  key={card.id + '-' + idx}
                  onClick={() => handleSlideChange(idx)}
                  style={{ width: 'var(--card-width)' }}
                  className={`flex-shrink-0 h-64 rounded-[1.8rem] overflow-hidden shadow-lg flex cursor-pointer transition-all duration-300 relative ${
                    isActive 
                      ? 'scale-100 opacity-100 shadow-xl ring-1 ring-black/5' 
                      : 'scale-95 opacity-50 hover:opacity-75'
                  }`}
                >
                  {/* Left Half Typography Context */}
                  <div className={`w-3/5 p-6 md:p-8 flex flex-col justify-between relative ${card.bgLeft} ${isYellowCard ? 'text-gray-900' : 'text-white'}`}>
                    <div>
                      {card.badge && (
                        <span className="inline-block bg-[#2A2B2D] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                          {card.badge}
                        </span>
                      )}
                      <h3 className="text-xl md:text-2xl font-extrabold leading-tight tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs md:text-sm mt-2 font-medium opacity-90 line-clamp-3 leading-relaxed">
                        {card.subtitle}
                      </p>
                    </div>
                    
                    <span className="text-sm font-bold tracking-wide underline decoration-2 underline-offset-4">
                      {card.cta}
                    </span>

                    {/* Collaborative Remote Cursor "Snega" Layer */}
                    {card.hasCursor && isActive && (
                      <div className="absolute top-[45%] right-2 flex flex-col items-start pointer-events-none z-30 drop-shadow-md">
                        <svg className="w-7 h-7 text-white fill-current" viewBox="0 0 24 24">
                          <path stroke="black" strokeWidth="1.5" strokeLinejoin="round" d="M4 2l16 11-7 3 5 7-3 1-5-7-6 4V2z" />
                        </svg>
                        <div className="bg-[#6B7280]/90 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-md -mt-1 ml-4 font-bold border border-white/20">
                          Snega
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Half Split Graphics Cover */}
                  <div className="w-2/5 relative bg-gray-100 flex-shrink-0">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-black/[0.04] pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicator Pagination Controls */}
        <div className="flex justify-center items-center space-x-2.5 mt-4">
          {originalCards.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSlideChange(idx + 1)}
              className={`rounded-full transition-all duration-300 ${
                activeMapIndex === idx 
                  ? 'w-3 h-3 bg-[#4B61FF]' 
                  : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`Show slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
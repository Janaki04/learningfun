import React, { useState } from 'react';
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"

export default function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Create",
      description: "It only takes minutes to create a learning game or trivia quiz on any topic, in any language.",
      illustration:image1
    },
    {
      id: 2,
      title: "Host or share",
      description: "Host a live game with questions on a big screen or share a game with remote players.",
      illustration: image2
    },
    {
      id: 3,
      title: "Play",
      description: "Game on! Join a kahoot with a PIN provided by the host and answer questions on your device.",
      illustration: image3
    
      
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 font-sans select-none overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-[#1F1B18] tracking-tight">
            How does Kurtis work?
          </h2>
          <div className="h-1.5 w-28 bg-[#3A5AFF] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="space-y-24 md:space-y-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;

            return (
              <div 
                key={step.id}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center p-6 rounded-3xl transition-all duration-300 ${
                  hoveredStep === step.id ? 'bg-slate-50/60 scale-[1.01]' : 'bg-transparent'
                }`}
              >
                <div className={`w-full flex justify-center ${isEven ? 'md:order-last' : 'md:order-first'}`}>
                  <div className="relative p-2 transform transition-transform duration-300 hover:rotate-2">
                    <img src={step.illustration} alt={step.title} className="w-full h-auto" />
                  </div>
                </div>

                <div className="flex flex-col text-left space-y-4 max-w-md mx-auto md:mx-0">
                  <h3 className="text-2xl md:text-3xl font-black text-[#2D2D2D] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
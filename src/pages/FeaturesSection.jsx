import React from 'react';
import { BookOpen, Presentation, Home, Smartphone } from 'lucide-react';

export default function FeaturesSection() {
  const targetAudiences = [
    {
      id: 'school',
      title: 'At School',
      description: 'Engaging group and distance learning for teachers and students.',
      icon: BookOpen,
      iconBg: 'bg-[#4B61FF]', // Classic Blue
    },
    {
      id: 'work',
      title: 'At work',
      description: 'For training, e-learning, interactive presentations and more.',
      icon: Presentation,
      iconBg: 'bg-[#FBBF24]', // Warm Yellow
    },
    {
      id: 'home',
      title: 'At home',
      description: 'Apps and games for family fun or home study.',
      icon: Home,
      iconBg: 'bg-[#38BDF8]', // Sky Blue
    },
    {
      id: 'apps',
      title: 'Learning apps',
      description: 'Engage kids with the Kurtis! family of learning apps.',
      icon: Smartphone,
      iconBg: 'bg-[#F43F5E]', // Rose Pink
    }
  ];

  const handleLearnMore = (id) => {
    alert(`Redirecting to details page for: ${id}`);
  };

  const handleSignUp = () => {
    alert('Sign up flow initiated');
  };

  return (
    <section className="bg-[#F3F4F6] py-20 px-6 sm:px-12 lg:px-24 text-center">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Heading Block */}
        <div className="mb-16 inline-block">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2D2D] tracking-tight">
            Who is Kurtis for?
          </h2>
          {/* Blue Accent Underline */}
          <div className="h-1.5 w-16 bg-[#4B61FF] mx-auto mt-2 rounded-full"></div>
        </div>

        {/* 4-Column Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 text-left mb-16">
          {targetAudiences.map((audience) => {
            const IconComponent = audience.icon;
            return (
              <div 
                key={audience.id}
                className="flex flex-col items-start p-2 rounded-xl transition-all duration-200 hover:transform hover:-translate-y-1"
              >
                {/* Circular Colorful Icon Shield */}
                <div className={`${audience.iconBg} p-3.5 rounded-2xl text-white shadow-md mb-6 flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 stroke-[2.5]" />
                </div>

                {/* Subheading Card Title */}
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
                  {audience.title}
                </h3>

                {/* Content Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium mb-6 flex-grow">
                  {audience.description}
                </p>

                {/* Interactive Anchor Link */}
                <button
                  onClick={() => handleLearnMore(audience.id)}
                  className="text-sm font-extrabold text-[#4D4D4D] hover:text-black transition-colors underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-current"
                >
                  Learn more
                </button>
              </div>
            );
          })}
        </div>

        {/* Centralized CTA Sign-Up Button */}
        <div className="pt-4">
          <button
            onClick={handleSignUp}
            className="bg-[#4B61FF] hover:bg-[#3A4EE6] text-white font-extrabold tracking-wide text-sm px-10 py-4 rounded-md shadow-lg shadow-blue-200 uppercase transition transform active:scale-98"
          >
            Sign up now
          </button>
        </div>

      </div>
    </section>
  );
}
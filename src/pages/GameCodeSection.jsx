import React, { useState } from 'react';
import logo from "../assets/Group 50.png"

export default function GameCodeSection() {
  const [gameCode, setGameCode] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showGameScreen, setShowGameScreen] = useState(false);

  const handleGameSubmit = (e) => {
    e.preventDefault();
    if (!gameCode.trim()) return;
    
    setShowGameScreen(true);
  };

  const handleQuickFill = () => {
    setGameCode('1234');
    setShowGameScreen(true);
  };

  const handleResetGame = () => {
    setShowGameScreen(false);
    setGameCode('');
  };

  return (
    <section className="bg-white py-10 font-sans selection:bg-amber-400 selection:text-gray-900">
      <div className="text-center">
        
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-[#2B2724] tracking-tight">
            {showGameScreen ? "You're in! Get ready to play" : "Do you have a game code?"}
          </h2>
          <p className="text-sm font-semibold text-gray-500 mt-1">
            {showGameScreen ? `Joined room session PIN: ${gameCode}` : "Let's play for a while!"}
          </p>
        </div>

        <div className=" items-stretch text-left">
          
          <div className="bg-[#FFC53D] rounded-xl p-8 flex flex-col items-center justify-center min-h-[520px] shadow-sm relative overflow-hidden transition-all duration-300 border border-amber-400/20">
            
            {!showGameScreen ? (
              <div className="w-full flex flex-col   items-center animate-fadeIn">
                <div className="flex items-center py-3 space-x-1.5 mb-6 text-[#2B2724]">
                <img src={logo} alt="LearningFun Logo" className="w-13 h-8 object-contain"/>
                </div>

                <form onSubmit={handleGameSubmit} className="w-full max-w-xs py-3 relative">
                  <div className={`relative flex items-center bg-white rounded-full overflow-hidden transition-all duration-200 shadow-sm ${
                    isFocused ? 'ring-4 ring-black/10 scale-[1.02]' : 'hover:scale-[1.01]'
                  }`}>
                    <input
                      type="text"
                      placeholder="Write the code here"
                      value={gameCode}
                      onChange={(e) => setGameCode(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      className="w-full bg-transparent text-center font-bold text-gray-800 placeholder-gray-400 py-3.5 pl-6 pr-12 text-sm outline-none border-none tracking-wide"
                    />
                    
                    <button
                      type="submit"
                      disabled={!gameCode.trim()}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        gameCode.trim() 
                          ? 'bg-[#3A5AFF] text-white hover:bg-blue-700' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      aria-label="Submit game code PIN"
                    >
                      <svg className="w-4 h-4 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </form>

                <button 
                  type="button"
                  onClick={handleQuickFill}
                  className="mt-4 text-xs font-bold text-gray-700/80 hover:text-gray-900 underline underline-offset-2 transition-colors"
                >
                  Or try with 1234
                </button>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center text-center animate-scaleUp">
                <div className="w-full bg-[#1F1B18] text-white rounded-lg p-5 shadow-inner relative max-w-xs">
                  <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                    <span>Question 1/10</span>
                    <span className="text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">0:25s</span>
                  </div>
                  
                  <p className="text-sm font-extrabold text-left leading-snug mb-5">
                    What property applies fonts globally across Tailwind CSS?
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-left">
                    <div className="bg-[#E21B3C] p-2.5 rounded flex items-center space-x-2 cursor-pointer hover:opacity-90">
                      <span className="w-3 h-3 bg-white rotate-45 inline-block flex-shrink-0" />
                      <span className="truncate">fontFamily.sans</span>
                    </div>
                    <div className="bg-[#1368CE] p-2.5 rounded flex items-center space-x-2 cursor-pointer hover:opacity-90">
                      <span className="w-3 h-3 bg-white rounded-full inline-block flex-shrink-0" />
                      <span className="truncate">globalFonts</span>
                    </div>
                    <div className="bg-[#D89E00] p-2.5 rounded flex items-center space-x-2 cursor-pointer hover:opacity-90">
                      <polygon points="6,2 12,12 0,12" className="fill-white inline-block w-3 h-3" />
                      <span className="truncate">@import url()</span>
                    </div>
                    <div className="bg-[#26890C] p-2.5 rounded flex items-center space-x-2 cursor-pointer hover:opacity-90">
                      <span className="w-3 h-3 bg-white inline-block flex-shrink-0" />
                      <span className="truncate">theme.extend</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleResetGame}
                  className="mt-5 text-xs font-black text-[#2B2724] bg-white/40 hover:bg-white/60 px-4 py-2 rounded-full transition-all"
                >
                  ← Leave Game Session
                </button>
              </div>
            )}
          </div>

        </div>

        <div className="mt-12 text-sm font-semibold text-[#2B2724]">
           {showGameScreen ? "" : "Still more?"}
          <a 
            href="#features" 
            className="text-[#3A5AFF] hover:text-blue-700 underline font-bold tracking-tight transition-colors decoration-2 underline-offset-4"
          >
            Take a look to our features games
          </a>
        </div>

      </div>
    </section>
  );
}
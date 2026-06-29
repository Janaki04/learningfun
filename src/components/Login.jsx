import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

export default function Login({ isOpen, onClose, onSwitchToSignup }) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logging into your account session...");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="fixed inset-0 transition-opacity" onClick={onClose} />
      
      <div className="bg-white rounded-3xl w-full max-w-md p-8 relative z-10 shadow-2xl border border-gray-100 transform animate-scaleUp">
        
        <button onClick={onClose} className="absolute right-5 top-5 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-start text-2xl font-black tracking-tight text-gray-900">Welcome Back!</h3>
          <p className="text-start text-xs font-semibold text-gray-400 mt-1">Log in to enter your classroom</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="flex text-xs font-bold text-gray-600 block mb-1">Email Address</label>
            <input type="email" required placeholder="name@domain.com" className="w-full bg-gray-50 text-sm font-semibold border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#3A5AFF] focus:bg-white transition-all duration-200" />
          </div>

          <div className="relative">
            <label className="flex text-xs font-bold text-gray-600 block mb-1">Password</label>
            <input type={showPassword ? "text" : "password"} required placeholder="••••••••" className="w-full bg-gray-50 text-sm font-semibold border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#3A5AFF] focus:bg-white transition-all duration-200" />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 bottom-3.5 text-gray-400 hover:text-gray-700 transition-colors">
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <div className="text-right">
            <a href="#forgot" className="text-xs font-bold text-[#3A5AFF] hover:underline transition-all">Forgot password?</a>
          </div>

          <button type="submit" className="w-full bg-[#3A5AFF] hover:bg-[#FFC43B] border-b-4 border-[#804000] text-white font-bold py-3.5 rounded-xl shadow-md transition-all duration-150 transform active:scale-98 active:border-b-0 active:translate-y-[4px]">
            Log In
          </button>
        </form>

        <div className="text-center mt-6 text-xs font-semibold text-gray-500">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignup} className="text-[#3A5AFF] font-bold hover:underline transition-all">Create an account</button>
        </div>
      </div>
    </div>
  );
}
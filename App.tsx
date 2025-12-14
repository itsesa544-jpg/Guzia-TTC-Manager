import React from 'react';
import { Wrench, Star } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center text-white p-6 overflow-hidden relative">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

      <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-3xl">
        
        {/* Logo / Icon Area */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-8 bg-white/10 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
            <Wrench size={80} className="text-yellow-400 drop-shadow-lg" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-yellow-400 font-medium tracking-wider uppercase text-sm">
            <Star size={16} fill="currentColor" />
            <span>অফিসিয়াল পোর্টাল</span>
            <Star size={16} fill="currentColor" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            স্বাগতম
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light text-blue-200">
            গুজিয়া টেকনিক্যাল ট্রেনিং সেন্টার
          </h2>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full opacity-50"></div>

        <p className="text-gray-400 text-lg max-w-lg mx-auto">
          দক্ষতা উন্নয়নে ও কারিগরি শিক্ষায় আপনার বিশ্বস্ত প্রতিষ্ঠান।
        </p>

        {/* Simple Button */}
        <button className="mt-8 px-10 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-1">
          শুরু করুন
        </button>

      </div>

      {/* Footer Copyright */}
      <div className="absolute bottom-6 text-gray-500 text-sm font-light">
        &copy; ২০২৪ গুজিয়া টিটিসি | সর্বস্বত্ব সংরক্ষিত
      </div>
    </div>
  );
};

export default App;
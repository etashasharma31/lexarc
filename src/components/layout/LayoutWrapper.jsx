import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import TopNavBar from './TopNavBar';
import Footer from './Footer';
import Icon from '../common/Icon';
import ChatWidget from '../ai/ChatWidget';
import { useState } from 'react';

const LayoutWrapper = () => {
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const isAiAssistant = location.pathname === '/ai-assistant';

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col relative">
      <TopNavBar />
      <div className="flex-grow pt-20">
        <Outlet />
      </div>
      <Footer />
      
      {/* Sticky AI Assistant Toggle - Hidden on AI Assistant page */}
      {!isAiAssistant && (
        <>
          <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center shadow-clinical-hover transition-all duration-500 z-[100] group overflow-hidden ${
                isChatOpen 
                ? 'bg-slate-900 border border-white/10 rotate-90 scale-90' 
                : 'bg-gradient-satin hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]'
            }`}
            title="Consult Vidhi"
          >
            {/* Animated background glow */}
            {!isChatOpen && (
              <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
            )}
            
            <Icon name={isChatOpen ? "close" : "smart_toy"} size={28} className={`text-white relative z-10 transition-all duration-300 ${!isChatOpen ? 'group-hover:scale-110' : ''}`} />
            
            {!isChatOpen && (
              <div className="absolute right-full mr-5 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2.5 rounded-sm opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none border border-white/5">
                CONSULT VIDHI
              </div>
            )}
          </button>
        </>
      )}
    </div>
  );
};

export default LayoutWrapper;

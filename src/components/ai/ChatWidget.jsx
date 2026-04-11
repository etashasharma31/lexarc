import React, { useState, useEffect, useRef } from 'react';
import Icon from '../common/Icon';

const ChatWidget = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { role: 'assistant', text: "Welcome back to The Atelier. I've prepared your draft documents. How can I assist with your legal strategy today?", time: '10:24 AM' }
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef(null);

    const suggestions = [
        { label: "Review Document", icon: "description" },
        { label: "Check Compliance", icon: "verified_user" },
        { label: "Talk to Expert", icon: "person" }
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSend = (text = input) => {
        const messageText = typeof text === 'string' ? text : input;
        if (!messageText.trim()) return;
        
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const userMsg = { role: 'user', text: messageText, time: timeStr };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Mock AI Response
        setTimeout(() => {
            let aiText = "Instruction received. I am analyzing your request based on current legal nodes.";
            if (messageText.toLowerCase().includes('gst')) {
                aiText = "For a new incorporation, you'll need to register for GST if your aggregate turnover exceeds the threshold. Would you like me to generate a Compliance Checklist for your specific industry?";
            }
            setMessages(prev => [...prev, { role: 'assistant', text: aiText, time: timeStr }]);
        }, 1100);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-28 right-8 w-[390px] max-w-[calc(100vw-4rem)] h-[640px] bg-white rounded-[2.5rem] shadow-clinical-hover border border-clinical flex flex-col overflow-hidden z-[200] animate-in slide-in-from-bottom-8 duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
            
            {/* Sync Header: Premium Gradient Satin */}
            <div className="bg-gradient-satin px-8 py-7 flex items-center justify-between border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center relative border border-white/10 backdrop-blur-md shadow-inner">
                        <Icon name="account_balance" size={22} className="text-white" />
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 border-4 border-[#00152a] rounded-full animate-pulse"></div>
                    </div>
                    <div className="font-headline">
                        <h2 className="text-[15px] font-bold text-white tracking-tight leading-none mb-1.5 uppercase">Vidhi</h2>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500/50"></span>
                            <p className="text-[9px] font-bold text-white/40 uppercase tracking-[0.2em]">Active Now</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 relative z-10">
                    <button className="p-2 text-white/30 hover:text-white transition-colors bg-white/5 rounded-full">
                        <Icon name="keyboard_arrow_down" size={20} />
                    </button>
                    <button onClick={onClose} className="p-2 text-white/30 hover:text-white transition-colors bg-white/5 rounded-full">
                        <Icon name="close" size={20} />
                    </button>
                </div>
            </div>

            {/* Message Area - Sync with Web Dots & Surface */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 bg-surface bg-dot-pattern space-y-6 custom-scrollbar">
                {messages.map((msg, i) => (
                    <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-bubble`}>
                        <div className={`max-w-[88%] p-5 text-[13.5px] font-body leading-relaxed shadow-clinical rounded-[2rem] ${
                            msg.role === 'user' 
                                ? 'bg-primary text-white rounded-tr-none' 
                                : 'bg-white text-slate-800 border border-clinical rounded-tl-none font-medium'
                        }`}>
                            {msg.text}
                        </div>
                        <span className="text-[9px] font-bold text-slate-400 mt-2.5 px-2 uppercase tracking-widest">{msg.time}</span>
                    </div>
                ))}

                {/* Service Quick-Chips */}
                <div className="flex flex-wrap gap-2.5 pt-4">
                    {suggestions.map((s, i) => (
                        <button 
                            key={i} 
                            onClick={() => handleSend(s.label)}
                            className="flex items-center gap-2.5 px-5 py-3.5 bg-secondary-container/30 text-primary text-[10px] font-bold rounded-full hover:bg-secondary-container/50 transition-all border border-clinical shadow-sm group hover:-translate-y-0.5 duration-300"
                        >
                            <Icon name={s.icon} size={15} className="text-secondary opacity-60 group-hover:opacity-100 transition-opacity" />
                            <span className="uppercase tracking-widest">{s.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Interaction Zone - Premium Floating Input */}
            <div className="p-8 bg-white border-t border-clinical flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <div className="flex-1 relative bg-surface-container-low rounded-[1.5rem] border border-clinical flex items-center pr-3 group focus-within:bg-white focus-within:shadow-clinical transition-all duration-300">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your query..."
                            className="w-full bg-transparent pl-6 py-4.5 text-[14px] font-body text-primary placeholder:text-slate-400 focus:outline-none"
                        />
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors bg-white/50 rounded-full">
                            <Icon name="attach_file" size={20} />
                        </button>
                    </div>
                    <button 
                        onClick={() => handleSend()}
                        className="w-14 h-14 bg-primary text-white rounded-[1.5rem] flex items-center justify-center hover:bg-slate-900 transition-all shadow-clinical-hover active:scale-95 group/btn"
                    >
                        <Icon name="arrow_forward" size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
                
                <div className="flex justify-center flex-col items-center gap-2">
                    <div className="h-[1px] w-12 bg-clinical"></div>
                    <p className="text-[8px] font-bold text-slate-400/60 flex items-center gap-2 tracking-[0.2em] uppercase">
                        AI responses may require legal verification
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChatWidget;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const ConsultationBooking = () => {
    const navigate = useNavigate();
    const [selectedDay, setSelectedDay] = useState(12);
    const [formData, setFormData] = useState({ subject: 'General Counsel', phone: '', matter: '' });
    
    const calendarDays = [
        { day: 29, type: 'prev' }, { day: 30, type: 'prev' }, { day: 31, type: 'prev' },
        { day: 1, type: 'current' }, { day: 2, type: 'current' }, { day: 3, type: 'current' },
        { day: 4, type: 'current' }, { day: 5, type: 'current' }, { day: 6, type: 'current' },
        { day: 7, type: 'current' }, { day: 8, type: 'current' }, { day: 9, type: 'current' },
        { day: 10, type: 'current' }, { day: 11, type: 'current' }, { day: 12, type: 'current' },
        { day: 13, type: 'current' }, { day: 14, type: 'current' }, { day: 15, type: 'current' },
        { day: 16, type: 'current' }, { day: 17, type: 'current' }, { day: 18, type: 'current' },
        { day: 19, type: 'current' }, { day: 20, type: 'current' }, { day: 21, type: 'current' },
        { day: 22, type: 'current' }, { day: 23, type: 'current' }, { day: 24, type: 'current' },
        { day: 25, type: 'current' }, { day: 26, type: 'current' }, { day: 27, type: 'current' },
        { day: 28, type: 'current' }, { day: 29, type: 'current' }, { day: 30, type: 'current' },
        { day: 1, type: 'next' }, { day: 2, type: 'next' }, { day: 3, type: 'next' }
    ];

    return (
        <div className="bg-surface min-h-screen pb-24 bg-dot-pattern">
            <main className="px-8 pt-32 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                {/*  Left Column: Strategic Enquiry  */}
                <div className="lg:col-span-8 space-y-16 animate-in fade-in slide-in-from-left-8 duration-1000">
                    

                    {/*  Unified Protocol Specifications  */}
                    <section className="bg-white p-12 shadow-clinical border border-clinical rounded-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-primary group-hover:rotate-6 transition-transform">
                            <Icon name="assignment" size={100} />
                        </div>
                        
                        <div className="relative z-10 space-y-16">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-clinical pb-10">
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mb-2 block">CONSOLIDATED PROCURATION</span>
                                    <h3 className="text-3xl font-bold font-headline text-primary tracking-tight">Strategic Enquiry</h3>
                                </div>
                                <div className="bg-primary/[0.02] px-6 py-3 border border-clinical rounded-sm flex items-center gap-4">
                                    <Icon name="event" size={16} className="text-secondary" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">April 2026</span>
                                </div>
                            </div>

                            {/*  Temporal Scroller (Compact Calendar)  */}
                            <div className="space-y-8">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30 flex items-center gap-3">
                                    <div className="w-4 h-px bg-primary/20"></div>
                                    PROPOSED INITIATION DATE
                                </h4>
                                <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mask-fade-right">
                                    {calendarDays.filter(d => d.type === 'current').map((date) => (
                                        <button
                                            key={date.day}
                                            onClick={() => setSelectedDay(date.day)}
                                            className={`flex-shrink-0 w-16 h-20 flex flex-col items-center justify-center gap-1 transition-all rounded-sm border ${
                                                selectedDay === date.day
                                                    ? 'bg-primary text-white border-primary shadow-clinical'
                                                    : 'bg-white border-clinical text-primary/40 hover:border-primary hover:text-primary'
                                            }`}
                                        >
                                            <span className="text-[8px] font-bold uppercase tracking-widest opacity-60">
                                                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][(new Date(2026, 3, date.day)).getDay()]}
                                            </span>
                                            <span className="text-lg font-bold">{date.day}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-10">
                                {/*  Enquiry Sub-section  */}
                                <div className="space-y-8">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30 flex items-center gap-3">
                                        <div className="w-4 h-px bg-primary/20"></div>
                                        ENQUIRY PARTICULARS
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">ENQUIRY SUBJECT</label>
                                            <input 
                                                type="text"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                                className="w-full bg-surface-container-low border border-clinical p-5 rounded-sm font-bold text-primary shadow-sm focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-primary/10" 
                                                placeholder="e.g., Corporate Restructuring" 
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">CONTACT NUMBER (WHATSAPP)</label>
                                            <input 
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                className="w-full bg-surface-container-low border border-clinical p-5 rounded-sm font-bold text-primary shadow-sm focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-primary/10" 
                                                placeholder="+91 00000 00000" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">MATTER BRIEF / STRATEGIC REQUIREMENTS</label>
                                        <textarea 
                                            value={formData.matter}
                                            onChange={(e) => setFormData({...formData, matter: e.target.value})}
                                            className="w-full bg-surface-container-low border border-clinical p-5 rounded-sm font-bold text-primary shadow-sm focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-primary/10 resize-none" 
                                            rows="6"
                                            placeholder="Provide a comprehensive analysis of your legal requirements for precise counsel assignment..."
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/*  Right Column: Summary Sticky  */}
                <div className="lg:col-span-4 animate-in fade-in slide-in-from-right-8 duration-1000">
                    <div className="sticky top-32 space-y-8">
                        <div className="bg-white p-10 shadow-clinical-hover border border-clinical rounded-sm relative overflow-hidden group">
                            <Icon name="history" size={140} className="absolute -top-10 -right-10 opacity-[0.02] text-primary rotate-12" />
                            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary border-b border-clinical mb-10 pb-6 opacity-30">ENQUIRY PROTOCOL</h3>
                            
                            <div className="space-y-8 mb-12">
                                <div className="flex gap-6">
                                    <div className="w-10 h-10 bg-primary/[0.03] border border-clinical flex items-center justify-center text-primary/40">
                                        <Icon name="person" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold text-primary/20 uppercase tracking-widest mb-1">Assigned Counsel</p>
                                        <p className="text-sm font-bold text-primary">Alexander Sterling</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-10 h-10 bg-primary/[0.03] border border-clinical flex items-center justify-center text-primary/40">
                                        <Icon name="event" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold text-primary/20 uppercase tracking-widest mb-1">Initiation Window</p>
                                        <p className="text-sm font-bold text-primary">April {selectedDay}, 2026</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-10 h-10 bg-primary/[0.03] border border-clinical flex items-center justify-center text-primary/40">
                                        <Icon name="assignment_turned_in" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold text-primary/20 uppercase tracking-widest mb-1">Enquiry Subject</p>
                                        <p className="text-sm font-bold text-primary truncate max-w-[150px]">{formData.subject || 'Not Specified'}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-10 h-10 bg-primary/[0.03] border border-clinical flex items-center justify-center text-primary/40">
                                        <Icon name="contact_phone" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold text-primary/20 uppercase tracking-widest mb-1">Contact Channel</p>
                                        <p className="text-sm font-bold text-primary font-mono">{formData.phone || '---'}</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-10 h-10 bg-primary/[0.03] border border-clinical flex items-center justify-center text-primary/40">
                                        <Icon name="payments" size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-bold text-primary/20 uppercase tracking-widest mb-1">Provisional Fee</p>
                                        <p className="text-sm font-bold text-primary">₹320.00 / hour</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-10 border-t border-clinical">
                                <div className="flex justify-between items-center mb-10 px-2">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">COMMITMENT TOTAL</span>
                                    <span className="text-3xl font-headline font-black text-primary tracking-tighter">₹320.00</span>
                                </div>
                                <button 
                                    onClick={() => navigate('/checkout-review')}
                                    className="w-full bg-primary text-white py-5 text-[10px] font-bold uppercase tracking-[0.1em] rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-4"
                                >
                                    Authorize Strategic Enquiry <Icon name="arrow_forward" size={18} />
                                </button>
                                <p className="text-[9px] text-center text-primary/20 uppercase tracking-tight mt-6 leading-relaxed bg-primary/[0.01] p-4 rounded-sm italic border border-clinical">
                                    By authorizing, you confirm the LegalSite <span className="underline cursor-pointer">Service Protocol</span> and <span className="underline cursor-pointer">Node Cancellation Policy</span>.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default ConsultationBooking;

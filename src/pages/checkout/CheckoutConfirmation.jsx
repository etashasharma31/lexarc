import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const CheckoutConfirmation = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-surface bg-dot-pattern flex items-center justify-center p-6 md:p-12">
            <main className="max-w-[1200px] w-full grid md:grid-cols-12 bg-white rounded-sm shadow-clinical-hover border border-clinical overflow-hidden animate-in fade-in zoom-in-95 duration-1000">
                {/* Left Side: Success Blueprint Visual */}
                <div className="md:col-span-5 bg-primary relative min-h-[400px] flex flex-col justify-between p-12 overflow-hidden group">
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-1000">
                        <Icon name="policy" size={400} className="absolute -bottom-20 -right-20 rotate-12" />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-12">
                            <div className="w-8 h-8 bg-white/10 backdrop-blur-lg rounded-sm flex items-center justify-center border border-white/20">
                                <Icon name="policy" size={18} className="text-white" />
                            </div>
                            <span className="text-xl font-headline font-bold text-white tracking-tighter">LegalSite</span>
                        </div>
                        
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 border border-white/20 shadow-clinical">
                            <Icon name="verified" size={48} className="text-white" />
                        </div>
                        
                        <h2 className="text-4xl font-headline font-bold text-white leading-tight mb-4 tracking-tight">Protocol Initiated.</h2>
                        <p className="text-white/60 text-lg leading-relaxed italic">Your legal framework is now secured and under active review.</p>
                    </div>

                    <div className="relative z-10 pt-12 border-t border-white/10">
                        <div className="flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
                            <Icon name="shield" size={16} />
                            <span>Blockchain Verified Hash</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Transaction Record */}
                <div className="md:col-span-7 p-12 md:p-16 flex flex-col justify-center">
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-6 h-[1px] bg-secondary"></div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">TRANSACTION SUCCESS</span>
                        </div>
                        <h1 className="text-5xl font-headline font-bold text-primary tracking-tighter mb-2">Payment Confirmed</h1>
                        <p className="text-on-surface-variant text-sm font-bold opacity-40 uppercase tracking-widest leading-none mt-2">Verified May 24, 2024 • 14:22 UTC</p>
                    </div>

                    <div className="space-y-10">
                        {/* Transaction ID */}
                        <div className="bg-primary/[0.02] border border-clinical p-6 grid grid-cols-2 gap-8 rounded-sm">
                            <div className="space-y-1">
                                <p className="text-[9px] font-bold text-primary/30 uppercase tracking-[0.2em]">PROTOCOL ID</p>
                                <p className="text-sm font-bold text-primary tracking-widest">#LS-992834-C</p>
                            </div>
                            <div className="space-y-1 text-right">
                                <p className="text-[9px] font-bold text-primary/30 uppercase tracking-[0.2em]">SERVICE TIER</p>
                                <p className="text-xs font-bold text-secondary uppercase tracking-[0.1em]">Premium Corporate</p>
                            </div>
                        </div>

                        {/* Milestone Update */}
                        <div className="space-y-6">
                            <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4">MILESTONE TRACKING</h3>
                            <div className="space-y-6 pl-4 border-l-2 border-clinical">
                                <div className="flex gap-4 items-start relative">
                                    <div className="absolute -left-[1.375rem] top-1.5 w-3 h-3 bg-primary rounded-full shadow-clinical"></div>
                                    <div>
                                        <p className="text-sm font-bold text-primary -mt-1">Retainer Protocol Finalized</p>
                                        <p className="text-[11px] text-on-surface-variant opacity-60 mt-1">Digital hash archived in secure ledger.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start relative opacity-40">
                                    <div className="absolute -left-[1.375rem] top-1.5 w-3 h-3 bg-clinical rounded-full"></div>
                                    <div>
                                        <p className="text-sm font-bold text-primary -mt-1">Attorney Assignment</p>
                                        <p className="text-[11px] text-on-surface-variant mt-1">Assignment matching pending availability.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-8">
                            <button 
                                onClick={() => navigate('/user-dashboard')}
                                className="w-full md:w-auto bg-primary text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3"
                            >
                                Enter Dashboard
                                <Icon name="arrow_forward" size={16} />
                            </button>
                            <p className="mt-8 text-[9px] text-primary/30 font-bold uppercase tracking-[0.2em] leading-relaxed italic">A digital archive of this receipt has been dispatched to your verified contact.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CheckoutConfirmation;

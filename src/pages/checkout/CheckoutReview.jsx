import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const CheckoutReview = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-surface bg-dot-pattern">
            {/* Header removed as TopNavBar from LayoutWrapper handles branding globally */}

            <main className="max-w-[1200px] mx-auto px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Side: Billing Details */}
                    <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-left-4 duration-700">
                        <section>
                            <h2 className="text-5xl font-headline font-bold text-primary tracking-tight mb-4">Billing Protocol</h2>
                            <p className="text-on-surface-variant text-lg opacity-80">Finalize your entity configuration and tax identification profile.</p>
                        </section>

                        <form className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">ENTITY REPRESENTATIVE</label>
                                    <input className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10" placeholder="Johnathan Doe" type="text"/>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">TAX IDENTIFIER / PAN</label>
                                    <input className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10" placeholder="ABCDE1234F" type="text"/>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">OFFICIAL COMPANY NAME</label>
                                <input className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10" placeholder="LegalSite Digital Holdings Ltd." type="text"/>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">COMPLIANCE ADDRESS</label>
                                <textarea className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10" placeholder="Suite 405, Maritime Plaza, District 4" rows="3"></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
                                <button type="button" className="col-span-3 flex items-center gap-4 group cursor-pointer w-fit">
                                    <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center shadow-clinical">
                                        <Icon name="check" size={14} className="text-white" />
                                    </div>
                                    <span className="text-[11px] font-bold text-primary/60 uppercase tracking-widest">Address is verified for compliance</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Side: Order Summary Card */}
                    <div className="lg:col-span-5 animate-in fade-in slide-in-from-right-4 duration-700">
                        <div className="bg-white rounded-sm p-10 sticky top-32 shadow-clinical-hover border border-clinical overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.01] -mr-16 -mt-16 rounded-full rotate-45 group-hover:bg-primary/[0.03] transition-colors"></div>
                            
                            <h2 className="font-headline font-bold text-2xl text-primary mb-10 pb-6 border-b border-clinical">Strategic Summary</h2>
                            
                            <div className="flex items-start gap-6 mb-10">
                                <div className="w-16 h-16 bg-primary/[0.03] flex items-center justify-center rounded-sm text-primary shadow-clinical border border-clinical group-hover:scale-105 transition-transform duration-500">
                                    <Icon name="account_balance" size={32} />
                                </div>
                                <div>
                                    <p className="font-headline font-bold text-lg text-primary">GST Configuration</p>
                                    <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mt-1">Professional Filing Protocol</p>
                                </div>
                            </div>

                            <div className="space-y-5 border-t border-clinical pt-8 mb-10">
                                <div className="flex justify-between text-primary/60 text-sm font-bold">
                                    <span>Protocol Fee</span>
                                    <span>₹499.00</span>
                                </div>
                                <div className="flex justify-between text-primary/60 text-sm font-bold">
                                    <span>Compliance Tax (18%)</span>
                                    <span>₹89.82</span>
                                </div>
                                <div className="flex justify-between text-secondary text-sm font-bold">
                                    <span>Priority Review</span>
                                    <span className="uppercase tracking-widest">Waived</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mb-12">
                                <span className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">Total Commitment</span>
                                <span className="font-headline font-bold text-4xl text-primary tracking-tighter">₹588.82</span>
                            </div>

                            <button 
                                onClick={() => navigate('/checkout-confirmation')}
                                className="w-full bg-primary text-white font-bold text-[10px] uppercase tracking-[0.2em] py-5 rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all active:scale-95 group flex items-center justify-center gap-3"
                            >
                                <Icon name="lock" size={16} />
                                Authorize Payment
                            </button>

                            <div className="mt-10 pt-10 border-t border-clinical text-center space-y-4">
                                <div className="flex justify-center gap-6 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                                    <Icon name="credit_card" size={24} />
                                    <Icon name="account_balance_wallet" size={24} />
                                    <Icon name="verified_user" size={24} />
                                </div>
                                <p className="text-[9px] font-bold text-primary/20 uppercase tracking-[0.2em]">Verified by Strategic Security Grid</p>
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    );
};

export default CheckoutReview;

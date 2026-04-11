import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const CheckoutPaymentMethodsUpdated = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-surface bg-dot-pattern flex flex-col">
            {/* Header (Transactional Focus) */}
            <header className="bg-white/80 backdrop-blur-md border-b border-clinical flex justify-between items-center w-full px-12 py-6 sticky top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center shadow-clinical">
                        <Icon name="policy" size={18} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-headline font-bold text-primary tracking-tighter leading-none">LegalSite</h1>
                        <p className="text-[9px] text-primary/40 uppercase tracking-[0.2em] font-bold">Secure Gate</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-primary/40 font-bold text-[10px] uppercase tracking-[0.2em]">
                    <Icon name="verified_user" size={14} />
                    <span>Compliance Verified</span>
                </div>
            </header>

            <main className="max-w-[1200px] mx-auto px-12 py-20 flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Payment Selection */}
                    <div className="lg:col-span-8 space-y-12 animate-in fade-in slide-in-from-left-4 duration-700">
                        <section>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-6 h-[1px] bg-secondary"></div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">PHASE 02</span>
                            </div>
                            <h2 className="text-5xl font-headline font-bold text-primary tracking-tight mb-4">Secure Funding</h2>
                            <p className="text-on-surface-variant text-lg opacity-80 max-w-xl">Choose your strategic funding instrument. All transactions are encrypted via professional-grade financial gateways.</p>
                        </section>

                        {/* Payment Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white border-2 border-primary p-8 rounded-sm shadow-clinical-hover relative group cursor-pointer transition-all">
                                <div className="absolute top-4 right-4 text-primary">
                                    <Icon name="check_circle" size={20} />
                                </div>
                                <Icon name="credit_card" size={32} className="text-primary mb-6" />
                                <h3 className="text-sm font-bold text-primary tracking-widest uppercase">Global Card</h3>
                                <p className="text-[9px] text-primary/30 font-bold uppercase tracking-widest mt-1">Visa, MC, Amex</p>
                            </div>
                            <div className="bg-white border border-clinical p-8 rounded-sm shadow-clinical hover:shadow-clinical-hover group cursor-pointer transition-all">
                                <Icon name="account_balance" size={32} className="text-primary/20 group-hover:text-primary transition-colors mb-6" />
                                <h3 className="text-sm font-bold text-primary/40 group-hover:text-primary transition-colors tracking-widest uppercase">Wire Transfer</h3>
                                <p className="text-[9px] text-primary/20 font-bold uppercase tracking-widest mt-1">Direct Settlement</p>
                            </div>
                            <div className="bg-white border border-clinical p-8 rounded-sm shadow-clinical hover:shadow-clinical-hover group cursor-pointer transition-all">
                                <Icon name="qr_code_2" size={32} className="text-primary/20 group-hover:text-primary transition-colors mb-6" />
                                <h3 className="text-sm font-bold text-primary/40 group-hover:text-primary transition-colors tracking-widest uppercase">Digital Wallet</h3>
                                <p className="text-[9px] text-primary/20 font-bold uppercase tracking-widest mt-1">UPI & Local Pay</p>
                            </div>
                        </div>

                        {/* High-Fidelity Form */}
                        <div className="bg-white p-10 shadow-clinical border border-clinical rounded-sm space-y-10">
                            <div className="flex items-center justify-between pb-6 border-b border-clinical">
                                <h3 className="text-sm font-bold text-primary tracking-[0.2em] uppercase opacity-40">CARD AUTHORIZATION</h3>
                                <div className="flex gap-4 opacity-30">
                                    <Icon name="credit_card" size={24} />
                                    <Icon name="verified" size={24} />
                                </div>
                            </div>

                            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); navigate('/checkout-confirmation'); }}>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">HOLDER NAME</label>
                                    <input className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10 uppercase" placeholder="ALEXANDER V. STERLING" type="text" required/>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">PAN-GLOBAL CARD NUMBER</label>
                                    <div className="relative">
                                        <input className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10 tracking-[0.3em]" placeholder="0000 0000 0000 0000" type="text" required/>
                                        <Icon name="lock" size={16} className="absolute right-6 top-1/2 -translate-y-1/2 text-primary/20" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">VALID UNTIL</label>
                                        <input className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10" placeholder="MM / YY" type="text" required/>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">SECURE CVV</label>
                                        <input className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10" placeholder="•••" type="password" required/>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <button className="w-full bg-primary text-white font-bold text-[10px] uppercase tracking-[0.2em] py-6 shadow-clinical-hover hover:-translate-y-1 transition-all active:scale-95">
                                        Authorize &amp; Commit ₹1,450.00
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:col-span-4 space-y-8 animate-in fade-in slide-in-from-right-4 duration-700">
                        <div className="bg-white p-10 shadow-clinical border border-clinical rounded-sm">
                            <h3 className="text-sm font-bold text-primary tracking-[0.2em] uppercase opacity-40 mb-10 border-b border-clinical pb-6">Protocol Allocation</h3>
                            <div className="space-y-6 mb-10">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-bold text-primary uppercase tracking-widest">Premium Retainer</p>
                                        <p className="text-[9px] text-primary/30 font-bold uppercase tracking-widest mt-1">Corporate Core</p>
                                    </div>
                                    <span className="text-sm font-bold text-primary">₹1,200.00</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-bold text-primary uppercase tracking-widest">Filing Protocol</p>
                                        <p className="text-[9px] text-primary/30 font-bold uppercase tracking-widest mt-1">Regulatory Sync</p>
                                    </div>
                                    <span className="text-sm font-bold text-primary">₹250.00</span>
                                </div>
                            </div>
                            <div className="border-t border-clinical pt-8 space-y-4 mb-10">
                                <div className="flex justify-between text-primary/40 text-[10px] font-bold uppercase tracking-widest">
                                    <span>Subtotal</span>
                                    <span>₹1,450.00</span>
                                </div>
                                <div className="flex justify-between items-end pt-4">
                                    <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">Final Total</span>
                                    <span className="text-3xl font-headline font-bold text-primary tracking-tighter">₹1,450.00</span>
                                </div>
                            </div>
                            <div className="bg-primary/[0.02] p-6 border-l-2 border-primary flex gap-4">
                                <Icon name="info" size={18} className="text-primary/40 shrink-0" />
                                <p className="text-[10px] text-on-surface-variant leading-relaxed font-bold opacity-60">
                                    By authorizing this payment, you agree to the LegalSite Terms of Protocol. Funds are secured in escrow until service execution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="w-full px-12 py-10 border-t border-clinical bg-white flex flex-col md:flex-row justify-between items-center text-primary/40 text-[10px] font-bold uppercase tracking-widest">
                <p>© 2024 LegalSite Directorate. Secure Strategic Counsel.</p>
                <div className="flex gap-8 mt-6 md:mt-0">
                    <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary transition-colors">Compliance</a>
                    <a href="#" className="hover:text-primary transition-colors">Contact</a>
                </div>
            </footer>
        </div>
    );
};

export default CheckoutPaymentMethodsUpdated;

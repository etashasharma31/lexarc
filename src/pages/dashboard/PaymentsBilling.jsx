import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import { DASHBOARD_MENU_ITEMS } from '../../constants/navigation';

const PaymentsBilling = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-surface min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8 flex">
                <DashboardSidebar 
                    menuItems={DASHBOARD_MENU_ITEMS} 
                    userName="Aryan Sharma"
                    userRole="Business Owner"
                />
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern transition-all duration-500">
                    <div className="w-full">
                        <header className="mb-12">
                            <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mb-2">Funding & Registry</h1>
                            <p className="text-on-surface-variant font-body opacity-60">Strategic subscriptions and settlement orchestration.</p>
                        </header>

                        {/* Minimalist Stat Strip */}
                        <div className="flex flex-col md:flex-row items-center border-y border-clinical bg-white/40 mb-16 py-6 px-10 gap-x-12 gap-y-6">
                            <div className="flex-1">
                                <p className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] mb-2 uppercase opacity-40">Settlement Required</p>
                                <div className="flex items-center gap-6">
                                    <h2 className="text-4xl font-headline font-bold text-error tracking-tighter">₹1,250.00</h2>
                                    <button 
                                        onClick={() => navigate('/checkout-review')}
                                        className="px-6 py-2.5 bg-primary text-on-primary text-[9px] font-bold uppercase tracking-[0.2em] rounded-sm hover:-translate-y-0.5 transition-all shadow-lg active:scale-95"
                                    >
                                        Authorize
                                    </button>
                                </div>
                            </div>
                            
                            <div className="w-px h-12 bg-clinical hidden md:block opacity-50"></div>
                            
                            <div className="flex-1">
                                <p className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] mb-2 uppercase opacity-40">Previous Settlement</p>
                                <h2 className="text-3xl font-headline font-bold text-primary tracking-tighter">₹45,000.00</h2>
                                <p className="text-[9px] font-bold text-secondary uppercase tracking-widest opacity-40 mt-1">Verified Mar 14</p>
                            </div>

                            <div className="w-px h-12 bg-clinical hidden md:block opacity-50"></div>

                            <div className="flex-1">
                                <p className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] mb-2 uppercase opacity-40">Current Protocol</p>
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl font-headline font-bold text-primary tracking-tight">Enterprise Pro</h2>
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"></span>
                                </div>
                                <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest opacity-30 mt-1">Active Lifecycle</p>
                            </div>
                        </div>

                        {/* Borderless Protocol Archives */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center px-4">
                                <h3 className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase opacity-40">PROTOCOL ARCHIVES</h3>
                                <button className="text-[9px] font-bold uppercase tracking-[0.2em] text-secondary hover:underline underline-offset-4 decoration-1">Export Ledger (CSV)</button>
                            </div>
                            
                            <div className="divide-y divide-clinical/40 border-t border-clinical/20">
                                {[
                                    { id: '#LX-8890', service: 'Pvt Ltd Incorporation', amount: '₹18,500', status: 'Settled', date: 'Mar 04' },
                                    { id: '#LX-8891', service: 'IP & Trademark Filing', amount: '₹45,000', status: 'Settled', date: 'Mar 14' },
                                    { id: '#LX-9002', service: 'GST Retainer Advisory', amount: '₹1,250', status: 'Pending', date: 'Apr 28' }
                                ].map((inv, i) => (
                                    <div key={i} className="grid grid-cols-12 p-8 items-center hover:bg-white/60 transition-all group cursor-pointer border-transparent hover:border-clinical/10 border rounded-sm">
                                        <div className="col-span-2 text-[10px] font-mono font-bold text-primary opacity-20 group-hover:opacity-40 transition-opacity">{inv.id}</div>
                                        <div className="col-span-4 font-bold text-base text-primary tracking-tight">{inv.service}</div>
                                        <div className="col-span-2 text-sm font-bold text-primary">{inv.amount}</div>
                                        <div className="col-span-2">
                                            <span className={`px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm ${
                                                inv.status === 'Settled' 
                                                    ? 'text-secondary opacity-60' 
                                                    : 'bg-error/10 text-error px-3 py-1'
                                            }`}>
                                                {inv.status}
                                            </span>
                                        </div>
                                        <div className="col-span-2 text-right">
                                            <button className="p-3 text-primary/10 group-hover:text-primary transition-all rounded-sm">
                                                <Icon name="download" size={18} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PaymentsBilling;

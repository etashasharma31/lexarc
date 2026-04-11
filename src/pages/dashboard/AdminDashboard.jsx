import React from 'react';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const AdminDashboard = () => {
    const menuItems = [
        { label: 'Directorate', path: '/admin-dashboard', icon: 'dashboard' },
        { label: 'Firm Management', path: '/admin-firms', icon: 'business' },
        { label: 'Compliance Audit', path: '/admin-compliance', icon: 'verified_user' },
        { label: 'Revenue Analytics', path: '/admin-analytics', icon: 'payments' },
        { label: 'System Health', path: '/admin-health', icon: 'dns' }
    ];

    return (
        <div className="bg-surface min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8 flex">
                <DashboardSidebar 
                    menuItems={menuItems}
                    userName="Arthur Sterling"
                    userRole="Chief Director"
                />
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern transition-all duration-500">
                    <div className="w-full">
                    {/* Header Section */}
                    <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-8 h-[2px] bg-secondary"></div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">DIRECTORATE OVERSIGHT</span>
                            </div>
                            <h1 className="text-6xl font-headline font-bold text-primary tracking-tighter leading-none">Platform Vitality.</h1>
                            <p className="text-on-surface-variant text-lg opacity-80 mt-4 max-w-xl">Real-time governance metrics and cross-firm revenue trajectories.</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-6 w-full md:w-auto">
                            <div className="bg-white p-8 shadow-clinical border border-clinical rounded-sm min-w-[200px]">
                                <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4">ACTIVE NODES</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-headline font-bold text-primary tracking-tighter">12,842</span>
                                    <span className="text-[10px] text-secondary font-bold font-mono">+12.4%</span>
                                </div>
                            </div>
                            <div className="bg-white p-8 shadow-clinical border border-clinical rounded-sm min-w-[200px]">
                                <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4">AVG. MARGIN</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-headline font-bold text-primary tracking-tighter">24.8%</span>
                                    <span className="text-[10px] text-secondary font-bold font-mono">+0.8%</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Bento Grid Analytics */}
                    <div className="grid grid-cols-12 gap-10 mb-16">
                        {/* Revenue Projection Card */}
                        <div className="col-span-12 lg:col-span-8 bg-white p-12 shadow-clinical border border-clinical rounded-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.02] text-primary group-hover:rotate-6 transition-transform">
                                <Icon name="trending_up" size={120} />
                            </div>
                            
                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <div>
                                    <h3 className="text-sm font-bold text-primary tracking-[0.2em] uppercase opacity-40">Revenue Trajectory</h3>
                                    <p className="text-2xl font-headline font-bold text-primary mt-2">₹842,500.00 <span className="text-xs font-bold text-secondary tracking-widest uppercase ml-2 italic">Ahead of curve</span></p>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-6 py-2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">7D Forecast</button>
                                    <button className="px-6 py-2 border border-clinical text-primary/40 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:text-primary transition-colors">30D Forecast</button>
                                </div>
                            </div>

                            {/* Chart Sim */}
                            <div className="h-64 flex items-end justify-between gap-4 pt-10 relative z-10">
                                <div className="flex-1 bg-primary/[0.03] border-t border-clinical h-[40%] rounded-sm hover:bg-primary/[0.06] transition-all"></div>
                                <div className="flex-1 bg-primary/[0.03] border-t border-clinical h-[60%] rounded-sm hover:bg-primary/[0.06] transition-all"></div>
                                <div className="flex-1 bg-primary/[0.03] border-t border-clinical h-[55%] rounded-sm hover:bg-primary/[0.06] transition-all"></div>
                                <div className="flex-1 bg-primary/[0.03] border-t border-clinical h-[85%] rounded-sm hover:bg-primary/[0.06] transition-all relative">
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] py-1 px-2 rounded-sm shadow-clinical font-bold">CURRENT</div>
                                </div>
                                <div className="flex-1 bg-secondary/[0.1] border-t border-secondary/20 h-[70%] rounded-sm transition-all italic flex items-center justify-center">
                                    <Icon name="auto_awesome" size={14} className="text-secondary opacity-40" />
                                </div>
                                <div className="flex-1 bg-secondary/[0.05] border-t border-secondary/10 h-[75%] rounded-sm transition-all"></div>
                                <div className="flex-1 bg-secondary/[0.02] border-t border-secondary/5 h-[90%] rounded-sm transition-all"></div>
                            </div>
                        </div>

                        {/* Side Metric Card */}
                        <div className="col-span-12 lg:col-span-4 space-y-8">
                            <div className="bg-primary p-10 text-white shadow-clinical rounded-sm relative overflow-hidden group">
                                <Icon name="dns" size={140} className="absolute -bottom-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000" />
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-10">SYSTEM INTEGRITY</h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest opacity-60">Latency</span>
                                        <span className="text-2xl font-headline font-bold tracking-tighter">42ms</span>
                                    </div>
                                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                        <span className="text-xs font-bold uppercase tracking-widest opacity-60">Nodes Active</span>
                                        <span className="text-2xl font-headline font-bold tracking-tighter">100%</span>
                                    </div>
                                    <p className="text-[9px] font-bold uppercase tracking-widest opacity-40 italic">Next redundancy check in 4h 12m</p>
                                </div>
                            </div>

                            <div className="bg-white p-10 shadow-clinical border border-clinical rounded-sm">
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30 mb-8">PRIMARY PRACTICE</h3>
                                <div className="flex gap-6 items-center">
                                    <div className="w-14 h-14 bg-transparent border border-clinical shadow-clinical flex items-center justify-center text-primary">
                                        <Icon name="corporate_fare" size={28} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-primary uppercase tracking-widest">Mergers & Acquisitions</p>
                                        <p className="text-[10px] font-bold text-primary/30 uppercase mt-1 tracking-widest">42.4% Case Volume</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Section */}
                    <div className="grid grid-cols-12 gap-10">
                        {/* Oversight Table */}
                        <section className="col-span-12 lg:col-span-8 bg-white shadow-clinical border border-clinical rounded-sm overflow-hidden animate-in fade-in duration-1000">
                            <div className="p-8 pb-4 border-b border-clinical bg-primary/[0.01]">
                                <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">DIRECTORATE OVERSIGHT</h3>
                            </div>
                            <table className="w-full text-left">
                                <thead className="bg-white text-primary">
                                    <tr>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">SECTOR PROTOCOL</th>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">NODE VOLUME</th>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">RES. FIDELITY</th>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40 text-right">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-clinical">
                                    <tr className="hover:bg-primary/[0.01] transition-all cursor-pointer group">
                                        <td className="px-8 py-6 font-bold text-sm text-primary group-hover:pl-10 transition-all">Intellectual Property</td>
                                        <td className="px-8 py-6 text-[11px] font-bold text-primary/40 uppercase tracking-widest">142 Cases</td>
                                        <td className="px-8 py-6 text-[11px] font-bold text-primary/40 uppercase tracking-widest">14.2 Days</td>
                                        <td className="px-8 py-6 text-right">
                                            <span className="px-3 py-1 bg-transparent text-secondary text-[9px] font-bold uppercase tracking-widest rounded-sm border border-secondary/30 shadow-clinical">OPTIMAL</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-primary/[0.01] transition-all cursor-pointer group">
                                        <td className="px-8 py-6 font-bold text-sm text-primary group-hover:pl-10 transition-all">Corporate Litigation</td>
                                        <td className="px-8 py-6 text-[11px] font-bold text-primary/40 uppercase tracking-widest">89 Cases</td>
                                        <td className="px-8 py-6 text-[11px] font-bold text-primary/40 uppercase tracking-widest">45.0 Days</td>
                                        <td className="px-8 py-6 text-right">
                                            <span className="px-3 py-1 bg-transparent text-primary/40 text-[9px] font-bold uppercase tracking-widest rounded-sm border border-clinical">MONITORING</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        {/* Recent Activity Log */}
                        <section className="col-span-12 lg:col-span-4 bg-white shadow-clinical border border-clinical rounded-sm p-10 h-full">
                            <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-10 pb-6 border-b border-clinical">PROTOCOL FEED</h3>
                            <div className="space-y-10 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-clinical">
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-[24px] h-[24px] rounded-full bg-white border border-clinical shadow-clinical flex items-center justify-center text-primary">
                                        <Icon name="history_edu" size={12} />
                                    </div>
                                    <p className="text-sm font-bold text-primary leading-none">Firm Registry Protocol</p>
                                    <p className="text-[10px] text-on-surface-variant mt-2 opacity-60">Sullivan & Cromwell LLP joined the Directorate network.</p>
                                    <p className="text-[9px] text-primary/30 uppercase tracking-widest font-bold mt-2">2m ago</p>
                                </div>
                                <div className="relative pl-10">
                                    <div className="absolute left-0 top-1 w-[24px] h-[24px] rounded-full bg-white border border-clinical shadow-clinical flex items-center justify-center text-secondary">
                                        <Icon name="verified" size={12} />
                                    </div>
                                    <p className="text-sm font-bold text-primary leading-none">Security Cycle Complete</p>
                                    <p className="text-[10px] text-on-surface-variant mt-2 opacity-60">Encrypted redundant archive stored in US-East-1.</p>
                                    <p className="text-[9px] text-primary/30 uppercase tracking-widest font-bold mt-2">45m ago</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    </div>
);
};

export default AdminDashboard;

import React from 'react';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const AdminAnalytics = () => {
    const menuItems = [
        { label: 'Directorate', path: '/admin-dashboard', icon: 'dashboard' },
        { label: 'Compliance Audit', path: '/admin-compliance', icon: 'verified_user' },
        { label: 'Revenue Analytics', path: '/admin-analytics', icon: 'payments' },
        { label: 'System Health', path: '/admin-health', icon: 'dns' },
        { label: 'Platform Status', path: '/status', icon: 'monitor_heart' }
    ];

    return (
        <div className="bg-surface min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8 flex">
                <DashboardSidebar 
                    menuItems={menuItems}
                    userName="Arthur Sterling"
                    userRole="Chief Director"
                />
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern">
                    <div className="w-full">
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-8 h-[2px] bg-secondary"></div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Directorate Revenue</span>
                            </div>
                            <h1 className="text-6xl font-headline font-bold text-primary tracking-tighter leading-none">Revenue Analytics.</h1>
                            <p className="text-on-surface-variant text-lg opacity-80 mt-4 max-w-xl">Deep-dive financial trajectories and unit-economic breakdowns across all practices.</p>
                        </header>

                        {/* Top Hero Charts */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
                            <div className="md:col-span-12 bg-white p-16 shadow-clinical border border-clinical rounded-sm relative overflow-hidden group">
                                <Icon name="payments" size={200} className="absolute -right-20 -top-20 opacity-[0.02] group-hover:rotate-12 transition-transform duration-[2000ms]" />
                                
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-16 relative z-10">
                                    <div>
                                        <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.3em] mb-4">PLATFORM GROSS VOLUME</p>
                                        <h2 className="text-5xl font-headline font-bold text-primary tracking-tight">₹42.8M</h2>
                                        <p className="text-xs font-bold text-secondary tracking-widest uppercase mt-4 italic">+14.2% Quarter-over-Quarter</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-10 border-t md:border-t-0 md:border-l border-clinical md:pl-16 pt-8 md:pt-0">
                                        {[
                                            { label: 'M&A Practice', val: '42%' },
                                            { label: 'Intellectual Property', val: '28%' },
                                            { label: 'Litigation', val: '15%' }
                                        ].map((stat, i) => (
                                            <div key={i}>
                                                <p className="text-[9px] font-bold text-primary/30 uppercase tracking-widest mb-1">{stat.label}</p>
                                                <p className="text-xl font-bold text-primary">{stat.val}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Main Revenue Graph Sim */}
                                <div className="h-80 flex items-end justify-between gap-6 px-10 relative z-10 pt-10">
                                    {[20, 45, 30, 60, 45, 80, 70, 95, 85].map((h, i) => (
                                        <div key={i} className="flex-1 relative group/bar cursor-pointer">
                                            <div 
                                                className={`w-full rounded-sm transition-all duration-1000 ${i === 8 ? 'bg-secondary' : 'bg-primary/5 hover:bg-primary/10'}`} 
                                                style={{ height: `${h}%` }}
                                            ></div>
                                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary/30 uppercase tracking-widest">Q{i%4 + 1}</div>
                                            {i === 8 && <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary text-white text-[8px] py-2 px-4 rounded-sm shadow-xl font-black">CURRENT</div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Metric Node */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { title: 'Avg. Case Margin', val: '24.2%', icon: 'trending_up', trend: '+0.8%' },
                                { title: 'Churn Probability', val: '0.08%', icon: 'verified', trend: '-0.02%' },
                                { title: 'Projected Revenue', val: '₹145M', icon: 'auto_graph', trend: 'FY2025' }
                            ].map((node, i) => (
                                <div key={i} className="bg-white p-12 shadow-clinical border border-clinical rounded-sm hover:-translate-y-2 transition-all duration-500">
                                    <Icon name={node.icon} size={32} className="text-secondary mb-10" />
                                    <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4">{node.title}</p>
                                    <div className="flex items-baseline gap-4">
                                        <span className="text-4xl font-headline font-black text-primary tracking-tight">{node.val}</span>
                                        <span className="text-[10px] font-bold text-secondary tracking-widest italic">{node.trend}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminAnalytics;

import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const AdminHealth = () => {
    const menuItems = [
        { label: 'Directorate', path: '/admin-dashboard', icon: 'dashboard' },
        { label: 'Compliance Audit', path: '/admin-compliance', icon: 'verified_user' },
        { label: 'Revenue Analytics', path: '/admin-analytics', icon: 'payments' },
        { label: 'System Health', path: '/admin-health', icon: 'dns' },
        { label: 'Platform Status', path: '/status', icon: 'monitor_heart' }
    ];

    const healthNodes = [
        { name: 'Redundant Archive US-EAST-1', status: 'Operational', latency: '24ms', load: '12%' },
        { name: 'Encrypted Document Vault', status: 'Optimal', latency: '42ms', load: '45%' },
        { name: 'AI Strategy Engine', status: 'Monitoring', latency: '115ms', load: '82%' },
        { name: 'Firm Interconnect Mesh', status: 'Operational', latency: '12ms', load: '8%' }
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
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Directorate Infrastructure</span>
                            </div>
                            <h1 className="text-6xl font-headline font-bold text-primary tracking-tighter leading-none">System Health.</h1>
                            <p className="text-on-surface-variant text-lg opacity-80 mt-4 max-w-xl">Real-time monitoring of platform nodes, encryption integrity, and infrastructure latency.</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            {/* Main Health Status */}
                            <div className="md:col-span-12">
                                <div className="bg-[#00152a] p-16 rounded-sm shadow-xl text-white relative overflow-hidden group mb-10">
                                    <Icon name="dns" size={250} className="absolute -right-20 -top-20 opacity-5 group-hover:rotate-12 transition-transform duration-[3000ms]" />
                                    
                                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                                        <div>
                                            <div className="flex items-center gap-3 mb-6 bg-white/5 border border-white/10 w-fit px-4 py-1 rounded-full">
                                                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">PLATFORM VITALITY: OPTIMAL</span>
                                            </div>
                                            <h2 className="text-5xl font-headline font-bold text-white tracking-tight mb-4 leading-none">99.998% Uptime</h2>
                                            <p className="text-white/40 text-sm italic font-medium">Last automated redundancy sweep completed 12m ago.</p>
                                        </div>

                                        <div className="flex gap-20">
                                             <div>
                                                <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-1">AVG. LATENCY</p>
                                                <p className="text-3xl font-headline font-bold text-white">42ms</p>
                                             </div>
                                             <div>
                                                <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-1">DATA FLOW</p>
                                                <p className="text-3xl font-headline font-bold text-white">1.2 TB/hr</p>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Node Ledger */}
                            <div className="md:col-span-8">
                                <section className="bg-white shadow-clinical border border-clinical rounded-sm overflow-hidden">
                                     <div className="p-8 pb-4 border-b border-clinical bg-primary/[0.01]">
                                        <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">Infrastructure Node Ledger</h3>
                                    </div>
                                    <div className="divide-y divide-clinical">
                                        {healthNodes.map((node, i) => (
                                            <div key={i} className="p-10 flex items-center justify-between hover:bg-primary/[0.01] transition-all group cursor-pointer">
                                                <div className="flex items-center gap-8">
                                                    <div className="w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_8px_rgba(203,171,114,0.6)] animate-pulse"></div>
                                                    <div>
                                                        <Link to="/admin-dashboard">
                                                            <h4 className="text-lg font-headline font-bold text-primary group-hover:text-secondary transition-colors border-b border-transparent hover:border-secondary/20 inline-block">{node.name}</h4>
                                                        </Link>
                                                        <div className="flex items-center gap-6 mt-2">
                                                            <div className="flex items-center gap-2">
                                                                <Icon name="speed" size={14} className="text-primary/20" />
                                                                <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">{node.latency} Latency</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Icon name="memory" size={14} className="text-primary/20" />
                                                                <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">{node.load} System Load</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2 border border-clinical text-primary/60 rounded-sm">
                                                    {node.status}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Alert Log Widget */}
                            <div className="md:col-span-4 bg-white p-10 border border-clinical shadow-clinical rounded-sm">
                                <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-12 pb-6 border-b border-clinical">INTEGRITY LOG</h3>
                                <div className="space-y-10 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-clinical">
                                    <div className="relative pl-10">
                                        <div className="absolute left-[3px] top-1 flex items-center justify-center text-secondary">
                                            <Icon name="lock" size={16} />
                                        </div>
                                        <p className="text-sm font-bold text-primary leading-none">Vault Key Rotated</p>
                                        <p className="text-[10px] text-on-surface-variant mt-2 opacity-60 italic">Automated FIPS 140-2 rotation complete.</p>
                                        <p className="text-[9px] text-primary/30 uppercase tracking-widest font-bold mt-2">12m ago</p>
                                    </div>
                                    <div className="relative pl-10">
                                        <div className="absolute left-[3px] top-1 flex items-center justify-center text-primary/20">
                                            <Icon name="dns" size={16} />
                                        </div>
                                        <p className="text-sm font-bold text-primary leading-none">Backup Node Synced</p>
                                        <p className="text-[10px] text-on-surface-variant mt-2 opacity-60 italic">Redundant archive US-WEST-2 primary mirror.</p>
                                        <p className="text-[9px] text-primary/30 uppercase tracking-widest font-bold mt-2">2h ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminHealth;

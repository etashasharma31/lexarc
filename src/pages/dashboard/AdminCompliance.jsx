import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const AdminCompliance = () => {
    const menuItems = [
        { label: 'Directorate', path: '/admin-dashboard', icon: 'dashboard' },
        { label: 'Firm Management', path: '/admin-firms', icon: 'business' },
        { label: 'Compliance Audit', path: '/admin-compliance', icon: 'verified_user' },
        { label: 'Revenue Analytics', path: '/admin-analytics', icon: 'payments' },
        { label: 'System Health', path: '/admin-health', icon: 'dns' }
    ];

    const auditChecklist = [
        { id: 'DP-882', title: 'DPDP Data Sovereignty Audit', status: 'Verified', date: 'Apr 12, 2024', severity: 'High' },
        { id: 'RO-901', title: 'ROC/MCA Annual Filing Sync', status: 'In Progress', date: 'Ongoing', severity: 'Critical' },
        { id: 'TR-114', title: 'Trademark Registry Mirror Update', status: 'Scheduled', date: 'Apr 15, 2024', severity: 'Medium' },
        { id: 'KY-004', title: 'Director KYC Identity Refresh', status: 'Verified', date: 'Mar 28, 2024', severity: 'Low' }
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
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Directorate Integrity</span>
                            </div>
                            <h1 className="text-6xl font-headline font-bold text-primary tracking-tighter leading-none">Compliance Audit.</h1>
                            <p className="text-on-surface-variant text-lg opacity-80 mt-4 max-w-xl">Centralized regulatory ledger monitoring cross-firm variance and security health.</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                            {/* Compliance Overview */}
                            <div className="md:col-span-8">
                                <section className="bg-white shadow-clinical border border-clinical rounded-sm overflow-hidden mb-10">
                                    <div className="p-8 pb-4 border-b border-clinical bg-primary/[0.01]">
                                        <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">Active Audit Protocol</h3>
                                    </div>
                                    <div className="divide-y divide-clinical">
                                        {auditChecklist.map((item, idx) => (
                                            <div key={idx} className="p-10 flex items-center justify-between hover:bg-primary/[0.01] transition-all group cursor-pointer">
                                                <div className="flex items-center gap-8">
                                                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${
                                                        item.status === 'Verified' ? 'bg-secondary/10 text-secondary' : 'bg-primary/5 text-primary/40'
                                                    }`}>
                                                        <Icon name={item.status === 'Verified' ? 'verified' : 'pending'} size={24} />
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="text-[10px] font-bold text-primary/20 uppercase tracking-widest">{item.id}</span>
                                                            <span className="w-1 h-1 bg-clinical rounded-full" />
                                                            <span className={`text-[10px] font-black uppercase tracking-widest ${
                                                                item.severity === 'Critical' ? 'text-red-500' : 'text-primary/40'
                                                            }`}>SEVERITY: {item.severity}</span>
                                                        </div>
                                                        <Link to="/admin-dashboard">
                                                            <h4 className="text-lg font-headline font-bold text-primary group-hover:text-secondary transition-colors border-b border-transparent hover:border-secondary/20 inline-block">{item.title}</h4>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">{item.status}</p>
                                                    <p className="text-xs text-primary/20 font-medium italic">{item.date}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar Widgets */}
                            <div className="md:col-span-4 space-y-8">
                                <div className="bg-primary p-12 text-white shadow-clinical rounded-sm relative overflow-hidden group">
                                    <Icon name="security" size={150} className="absolute -bottom-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000" />
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-12">REGULATORY DRIFT</h3>
                                    <div className="space-y-8">
                                        <div>
                                            <p className="text-3xl font-headline font-black tracking-tighter mb-2">0.24%</p>
                                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-secondary" style={{ width: '24%' }}></div>
                                            </div>
                                            <p className="text-[9px] font-bold uppercase tracking-widest opacity-40 mt-3 italic underline decoration-secondary">Sub-Threshold Variance</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-10 border border-clinical shadow-clinical rounded-sm">
                                    <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-8">NEXT SECURITY CYCLE</h3>
                                    <div className="flex items-center gap-6">
                                         <div className="text-primary animate-pulse">
                                            <Icon name="history" size={32} />
                                         </div>
                                         <div>
                                            <p className="text-xl font-headline font-bold text-primary tracking-tight">04h 12m 45s</p>
                                            <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">Automatic Vault Refresh</p>
                                         </div>
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

export default AdminCompliance;

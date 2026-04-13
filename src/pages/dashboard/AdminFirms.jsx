import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const AdminFirms = () => {
    const menuItems = [
        { label: 'Directorate', path: '/admin-dashboard', icon: 'dashboard' },
        { label: 'Firm Management', path: '/admin-firms', icon: 'business' },
        { label: 'Compliance Audit', path: '/admin-compliance', icon: 'verified_user' },
        { label: 'Revenue Analytics', path: '/admin-analytics', icon: 'payments' },
        { label: 'System Health', path: '/admin-health', icon: 'dns' }
    ];

    const firms = [
        { name: 'Sullivan & Cromwell LLP', lead: 'Arthur Sterling', status: 'Active', cases: 142, compliance: '100%', accent: '#1e4d8c' },
        { name: 'Wachtell, Lipton, Rosen & Katz', lead: 'Elena Volkov', status: 'Optimal', cases: 89, compliance: '98%', accent: '#7c3aed' },
        { name: 'Skadden, Arps, Slate, Meagher & Flom', lead: 'Marcus Sterling', status: 'Active', cases: 215, compliance: '100%', accent: '#065f46' },
        { name: 'Latham & Watkins LLP', lead: 'Alistair Thorne', status: 'Monitoring', cases: 64, compliance: '92%', accent: '#b45309' }
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
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-8 h-[2px] bg-secondary"></div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Directorate Inventory</span>
                            </div>
                            <h1 className="text-6xl font-headline font-bold text-primary tracking-tighter leading-none">Firm Management.</h1>
                            <p className="text-on-surface-variant text-lg opacity-80 mt-4 max-w-xl">Oversight of clinical legal nodes and partner-level performance metrics.</p>
                        </header>

                        {/* Firm Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                            {[
                                { label: 'TOTAL FIRMS', value: '14' },
                                { label: 'GLOBAL CASES', value: '4.2k+' },
                                { label: 'COMPLIANCE AVG', value: '99.4%' },
                                { label: 'SYSTEM NODES', value: '100%' }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-8 shadow-clinical border border-clinical rounded-sm">
                                    <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                                    <span className="text-3xl font-headline font-bold text-primary tracking-tighter">{stat.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Firm Ledger Table */}
                        <section className="bg-white shadow-clinical border border-clinical rounded-sm overflow-hidden">
                            <div className="p-8 pb-4 border-b border-clinical bg-primary/[0.01]">
                                <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">Institutional Firm Ledger</h3>
                            </div>
                            <table className="w-full text-left">
                                <thead className="bg-white text-primary">
                                    <tr>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">INSTITUTION</th>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">LEAD PARTNER</th>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">LOAD VOLUME</th>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">COMPLIANCE</th>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40 text-right">STATUS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-clinical">
                                    {firms.map((firm, idx) => (
                                        <tr key={idx} className="hover:bg-primary/[0.01] transition-all cursor-pointer group">
                                            <td className="px-8 py-6">
                                                <Link to="/admin-dashboard" className="flex items-center gap-4 hover:opacity-70 transition-opacity">
                                                    <div className="w-1 h-8 rounded-full" style={{ backgroundColor: firm.accent }} />
                                                    <span className="font-bold text-sm text-primary group-hover:translate-x-1 transition-transform border-b border-transparent hover:border-primary/20">{firm.name}</span>
                                                </Link>
                                            </td>
                                            <td className="px-8 py-6 text-xs text-primary font-medium">{firm.lead}</td>
                                            <td className="px-8 py-6 text-[11px] font-bold text-primary/40 uppercase tracking-widest">{firm.cases} ACTIVE CASES</td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-16 h-1 bg-clinical rounded-sm overflow-hidden flex-shrink-0">
                                                        <div className="h-full bg-secondary" style={{ width: firm.compliance }}></div>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-primary">{firm.compliance}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-sm border ${
                                                    firm.status === 'Optimal' ? 'border-secondary/20 text-secondary' : 'border-clinical text-primary/40'
                                                }`}>
                                                    {firm.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="p-8 border-t border-clinical bg-primary/[0.01] flex justify-between items-center">
                                <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest">Showing 4 of 14 Institutional Nodes</p>
                                <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline transition-all">Export Protocol Audit →</button>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminFirms;

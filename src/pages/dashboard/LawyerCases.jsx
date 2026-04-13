import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const LawyerCases = () => {
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState('');

    const menuItems = [
        { label: 'Profile Info', path: '/lawyer-panel-dashboard', icon: 'account_circle' },
        { label: 'Case Management', path: '/lawyer-cases', icon: 'folder_shared' },
        { label: 'Consultation Calendar', path: '/lawyer-calendar', icon: 'calendar_today' }
    ];

    const cases = [
        { id: 'LC-2024-0012', client: 'Terraform Global', title: 'Asset Acquisition Audit', category: 'M&A', status: 'Priority', deadline: 'Today', urgency: 'Critical' },
        { id: 'LC-2024-0089', client: 'Estate of E. Vance', title: 'Probate Litigation Protocol', category: 'Litigation', status: 'Drafting', deadline: 'Apr 14', urgency: 'High' },
        { id: 'LC-2024-0142', client: 'Nexus Dynamics', title: 'SaaS Agreement Review', category: 'Corporate', status: 'Pending Review', deadline: 'Apr 16', urgency: 'Medium' },
        { id: 'LC-2023-0992', client: 'Skadden Partners', title: 'Trademark Infringement Response', category: 'IP Law', status: 'In Review', deadline: 'Apr 20', urgency: 'Low' }
    ];

    const triggerAction = (action, caseId) => {
        setToastMsg(`Protocol "${action}" initiated for ${caseId}. System is synchronizing metadata.`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
    };

    return (
        <div className="bg-surface min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8 flex">
                <DashboardSidebar 
                    menuItems={menuItems}
                    userName="Marcus Sterling"
                    userRole="Senior Associate"
                    userImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCUAyR_Vkm7c1i6k0i5MAfPGzMKhKubHCXGiKbt4_idPQgYRyNEFh31646086ODEGCnvsNiKp1QewdNwwCgzBkxsSC0ok3smOB9SLILhGQcwkOdS3WXguEyAqnfg7nhJ0gjptDoGrklxcPnu7rY1yZiAZgkmkfvG7-Yn1kTkPWPCi55uWfQqFACH7jCdAlK3rRILV99_UDXcEiTJJj2dpoQUorLT8C6Qh9s2tMMrA2VKJO9QCaY7fR-D5q5PtiqjQ7Oi8LVSBUvWYQ"
                />
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern">
                    <div className="w-full">
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-8 h-[2px] bg-primary"></div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Case Management Hub</span>
                            </div>
                            <h1 className="text-6xl font-headline font-bold text-primary tracking-tighter leading-none">Active Ledger.</h1>
                            <p className="text-on-surface-variant text-lg opacity-80 mt-4 max-w-xl">Centralized command for jurisdictional filings and high-priority case reviews.</p>
                        </header>

                        {/* Filter Bar */}
                        <div className="flex justify-between items-center mb-10 pb-6 border-b border-clinical">
                             <div className="flex gap-4">
                                {['Priority', 'In Review', 'Completed'].map(filter => (
                                    <button key={filter} className="px-6 py-2 border border-clinical bg-white text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all rounded-sm">
                                        {filter}
                                    </button>
                                ))}
                             </div>
                             <div className="flex items-center gap-2 text-primary/30">
                                <Icon name="search" size={18} />
                                <input type="text" placeholder="Search Case ID or Client..." className="bg-transparent border-none outline-none text-xs text-primary font-medium w-64" />
                             </div>
                        </div>

                        {/* Case Table */}
                        <section className="bg-white shadow-clinical border border-clinical rounded-sm overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-primary/5 text-primary">
                                    <tr>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">PROTOCOL ID</th>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">CLIENT / TITLE</th>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">URGENCY</th>
                                        <th className="px-8 py-5 text-[9px] font-bold uppercase tracking-[0.2em] opacity-40 text-right">ACTION NODES</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-clinical">
                                    {cases.map((c, i) => (
                                        <tr key={i} className="hover:bg-primary/[0.01] transition-all group">
                                            <td className="px-8 py-6">
                                                <p className="text-xs font-mono font-bold text-primary/40">{c.id}</p>
                                                <p className="text-[10px] uppercase font-bold text-primary mt-1 tracking-widest">{c.category}</p>
                                            </td>
                                            <td className="px-8 py-6">
                                                <Link to="/lawyer-panel-dashboard">
                                                    <p className="text-sm font-bold text-primary leading-tight hover:text-secondary transition-colors border-b border-transparent hover:border-secondary/20 inline-block">{c.client}</p>
                                                </Link>
                                                <p className="text-[11px] text-primary/60 mt-1">{c.title}</p>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-3">
                                                    <span className={`w-2 h-2 rounded-full ${c.urgency === 'Critical' ? 'bg-error animate-pulse' : 'bg-primary/20'}`}></span>
                                                    <span className={`text-[10px] font-black uppercase tracking-widest ${c.urgency === 'Critical' ? 'text-error' : 'text-primary'}`}>{c.urgency}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex justify-end gap-3 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                                    <button 
                                                        onClick={() => triggerAction('Execute Signature', c.id)}
                                                        className="px-4 py-2 bg-primary text-white text-[9px] font-bold uppercase tracking-widest rounded-sm hover:-translate-y-0.5 transition-all"
                                                    >
                                                        E-Sign
                                                    </button>
                                                    <button 
                                                        onClick={() => triggerAction('Draft Petition', c.id)}
                                                        className="px-4 py-2 border border-clinical text-primary text-[9px] font-bold uppercase tracking-widest rounded-sm hover:border-primary transition-all"
                                                    >
                                                        Draft
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </div>
                </main>
            </div>

            {/* Premium Toast */}
            {showToast && (
                <div className="fixed bottom-12 right-12 z-[100] animate-in fade-in slide-in-from-bottom-6">
                    <div className="bg-white/80 backdrop-blur-xl px-8 py-6 rounded-sm shadow-2xl border-l-4 border-l-secondary border border-clinical flex items-center gap-6 max-w-md">
                        <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                            <Icon name="verified" size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-1">ACTION EXECUTED</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">{toastMsg}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LawyerCases;

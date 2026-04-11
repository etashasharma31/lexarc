import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const LawyerPanelDashboard = () => {
    const menuItems = [
        { label: 'Profile Info', path: '/lawyer-panel-dashboard', icon: 'account_circle' },
        { label: 'Case Management', path: '/lawyer-cases', icon: 'folder_shared' },
        { label: 'Consultation Calendar', path: '/lawyer-calendar', icon: 'calendar_today' }
    ];

    return (
        <div className="bg-surface min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8 flex">
                <DashboardSidebar 
                    menuItems={menuItems}
                    userName="Marcus Sterling"
                    userRole="Senior Associate"
                    userImage="https://lh3.googleusercontent.com/aida-public/AB6AXuCUAyR_Vkm7c1i6k0i5MAfPGzMKhKubHCXGiKbt4_idPQgYRyNEFh31646086ODEGCnvsNiKp1QewdNwwCgzBkxsSC0ok3smOB9SLILhGQcwkOdS3WXguEyAqnfg7nhJ0gjptDoGrklxcPnu7rY1yZiAZgkmkfvG7-Yn1kTkPWPCi55uWfQqFACH7jCdAlK3rRILV99_UDXcEiTJJj2dpoQUorLT8C6Qh9s2tMMrA2VKJO9QCaY7fR-D5q5PtiqjQ7Oi8LVSBUvWYQ"
                />
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern transition-all duration-500">
                    <div className="w-full">
                    {/*  Page Header Section  */}
                    <div className="mb-12">
                        <h1 className="text-5xl font-bold tracking-tight text-primary mb-2">Morning, Marcus.</h1>
                        <p className="text-on-surface-variant font-body">You have <span className="font-bold text-primary">4 priority reviews</span> pending for today.</p>
                    </div>

                    {/*  Bento Grid Dashboard  */}
                    <div className="grid grid-cols-12 gap-8">
                        {/*  Profile Info Section (Wireframe Item)  */}
                        <div className="col-span-12 bg-white p-10 rounded-sm border border-clinical shadow-clinical relative overflow-hidden group">
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div>
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Experience & Specialization</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Icon name="history_edu" size={20} className="text-primary" />
                                            <span className="text-sm font-bold text-primary">12+ Years Corporate Law</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Icon name="verified" size={20} className="text-secondary" />
                                            <span className="text-sm font-bold text-primary">Certified Arbitrator</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-l border-outline-variant/10 pl-12">
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Certifications</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-surface-container-high text-primary text-[10px] font-bold rounded-sm border border-outline-variant/20 uppercase">Bar Council #992</span>
                                        <span className="px-3 py-1 bg-surface-container-high text-primary text-[10px] font-bold rounded-sm border border-outline-variant/20 uppercase">M&A Expert</span>
                                    </div>
                                </div>
                                <div className="border-l border-outline-variant/10 pl-12">
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant mb-6">Ratings</h3>
                                    <div className="flex items-center gap-4">
                                        <span className="text-4xl font-headline font-black text-secondary">4.9</span>
                                        <div className="flex text-secondary">
                                            <Icon name="star" size={16} /><Icon name="star" size={16} /><Icon name="star" size={16} /><Icon name="star" size={16} /><Icon name="star_half" size={16} />
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-on-surface-variant mt-2 uppercase font-bold tracking-widest">From 250+ Clients</p>
                                </div>
                            </div>
                            <Icon name="account_balance_wallet" size={160} className="absolute -bottom-12 -right-12 text-primary/5 group-hover:rotate-6 transition-transform duration-700" />
                        </div>

                        {/*  Metrics Bar  */}
                        <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-6">
                            <div className="bg-white p-8 shadow-clinical rounded-sm border border-clinical border-l-4 border-l-primary">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Active Cases</p>
                                <h3 className="text-4xl font-bold text-primary">24</h3>
                            </div>
                            <div className="bg-white p-8 shadow-clinical rounded-sm border border-clinical border-l-4 border-l-secondary">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Billable Hours</p>
                                <h3 className="text-4xl font-bold text-primary">142.5</h3>
                            </div>
                            <div className="bg-white p-8 shadow-clinical rounded-sm border border-clinical border-l-4 border-l-error">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Pending Review</p>
                                <h3 className="text-4xl font-bold text-error">04</h3>
                            </div>
                        </div>

                        {/*  Consultations Widget  */}
                        <div className="col-span-12 lg:col-span-4 lg:row-span-1">
                            <div className="bg-surface-container-high/50 p-8 rounded-md h-full">
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-lg font-bold text-primary">Consultations</h3>
                                    <span className="text-[10px] font-bold uppercase tracking-tighter bg-surface-container-highest px-2 py-1 rounded">Today</span>
                                </div>
                                <div className="space-y-6">
                                    <div className="relative pl-6 border-l border-outline-variant">
                                        <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-primary"></div>
                                        <p className="text-xs font-bold text-primary mb-1">10:00 AM</p>
                                        <p className="font-bold text-sm text-on-surface">Capital Acquisitions</p>
                                    </div>
                                    <div className="relative pl-6 border-l border-outline-variant">
                                        <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-outline-variant"></div>
                                        <p className="text-xs font-bold text-on-surface-variant mb-1">01:30 PM</p>
                                        <p className="font-bold text-sm text-on-surface">Estate Planning: V. Rossi</p>
                                    </div>
                                </div>
                                <button className="mt-8 w-full border border-primary text-primary text-[10px] font-bold uppercase tracking-widest py-3 rounded-sm hover:bg-primary hover:text-on-primary transition-all">
                                    Full Calendar
                                </button>
                            </div>
                        </div>
                        {/*  Action Required  */}
                        <div className="col-span-12 lg:col-span-8">
                            <div className="bg-white p-8 shadow-clinical border border-clinical rounded-sm">
                                <div className="flex justify-between items-center mb-10">
                                    <div>
                                        <h3 className="text-lg font-bold text-primary">Action Required</h3>
                                        <p className="text-xs text-on-surface-variant">High-priority case files requiring your electronic signature or review.</p>
                                    </div>
                                    <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                                        View all cases <Icon name="chevron_right" size={14} />
                                    </button>
                                </div>
                                <div className="overflow-hidden">
                                    <table className="w-full text-left border-separate border-spacing-y-4">
                                        <thead>
                                            <tr>
                                                <th className="px-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-70">Case ID</th>
                                                <th className="px-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-70">Client / Title</th>
                                                <th className="px-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-70">Status</th>
                                                <th className="px-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-70 text-right">Deadline</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="group hover:bg-surface-container-low transition-colors cursor-pointer">
                                                <td className="px-4 py-5 text-sm font-mono text-on-surface-variant">LC-2024-0012</td>
                                                <td className="px-4 py-5">
                                                    <p className="font-bold text-sm text-primary">Terraform Global vs. Apex Inc.</p>
                                                    <p className="text-xs text-on-surface-variant">Mergers &amp; Acquisitions</p>
                                                </td>
                                                <td className="px-4 py-5">
                                                    <span className="px-2 py-1 bg-error-container text-on-error-container text-[10px] font-bold rounded-sm uppercase tracking-tighter">Signature Required</span>
                                                </td>
                                                <td className="px-4 py-5 text-right">
                                                    <p className="text-sm font-bold text-error">Today</p>
                                                </td>
                                            </tr>
                                            <tr className="group hover:bg-surface-container-low transition-colors cursor-pointer">
                                                <td className="px-4 py-5 text-sm font-mono text-on-surface-variant">LC-2024-0089</td>
                                                <td className="px-4 py-5">
                                                    <p className="font-bold text-sm text-primary">Estate of Eleanor Vance</p>
                                                    <p className="text-xs text-on-surface-variant">Probate Litigation</p>
                                                </td>
                                                <td className="px-4 py-5">
                                                    <span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-container text-[10px] font-bold rounded-sm uppercase tracking-tighter">Evidence Review</span>
                                                </td>
                                                <td className="px-4 py-5 text-right">
                                                    <p className="text-sm font-bold text-on-surface">Apr 14</p>
                                                </td>
                                            </tr>
                                            <tr className="group hover:bg-surface-container-low transition-colors cursor-pointer">
                                                <td className="px-4 py-5 text-sm font-mono text-on-surface-variant">LC-2023-0442</td>
                                                <td className="px-4 py-5">
                                                    <p className="font-bold text-sm text-primary">Venture Tech Series B</p>
                                                    <p className="text-xs text-on-surface-variant">Corporate Finance</p>
                                                </td>
                                                <td className="px-4 py-5">
                                                    <span className="px-2 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold rounded-sm uppercase tracking-tighter">Drafting</span>
                                                </td>
                                                <td className="px-4 py-5 text-right">
                                                    <p className="text-sm font-bold text-on-surface">Apr 16</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/*  Secondary Intelligence  */}
                        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                            {/*  Compliance Status  */}
                            <div className="bg-white p-8 shadow-clinical rounded-sm flex items-center gap-8 border border-clinical">
                                <div className="h-20 w-20 flex-shrink-0 relative">
                                    <svg className="h-full w-full" viewbox="0 0 36 36">
                                        <path className="stroke-surface-container-high fill-none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke-width="3"></path>
                                        <path className="stroke-primary fill-none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke-dasharray="85, 100" stroke-width="3"></path>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-sm font-bold text-primary">85%</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-md font-bold text-primary">Compliance Wellness</h4>
                                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Your professional indemnity logs and CLE certifications are up to date. 15h required by June.</p>
                                </div>
                            </div>
                            {/*  AI Insights / Firm News  */}
                            <div className="bg-white p-8 shadow-clinical border-l-4 border-primary rounded-sm flex items-center gap-8">
                                <div className="h-12 w-12 flex-shrink-0 bg-primary/[0.05] rounded-full flex items-center justify-center">
                                    <Icon name="auto_awesome" size={24} className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-md font-bold text-primary italic">LegalSite Insight</h4>
                                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Based on your recent filings, we recommend reviewing the updated Section 102(b) statutes affecting the Apex case.</p>
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

export default LawyerPanelDashboard;

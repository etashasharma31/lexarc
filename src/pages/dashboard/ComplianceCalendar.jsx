import React from 'react';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import { DASHBOARD_MENU_ITEMS } from '../../constants/navigation';

const ComplianceCalendar = () => {
    const events = [
        { date: 'Apr 07', title: 'TDS Payment', type: 'Monthly Tax', color: 'error' },
        { date: 'Apr 11', title: 'GSTR-1 Filing', type: 'GST Compliance', color: 'primary' },
        { date: 'Apr 20', title: 'GSTR-3B Filing', type: 'GST Compliance', color: 'primary' },
        { date: 'May 30', title: 'ROC Form MGT-7', type: 'Annual Return', color: 'secondary' },
        { date: 'May 30', title: 'ROC Form AOC-4', type: 'Financial Filing', color: 'secondary' }
    ];

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
                        <header className="mb-10 animate-in fade-in slide-in-from-left-4 duration-700">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="max-w-2xl">
                                    <h1 className="text-5xl font-headline font-bold text-primary mb-2 tracking-tight">Compliance Roadmap</h1>
                                    <p className="text-on-surface-variant text-lg leading-relaxed">Mandatory regulatory intelligence and filing orchestration for Indian enterprises.</p>
                                </div>
                                <button className="px-8 py-4 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all active:scale-95 inline-flex items-center gap-3 whitespace-nowrap">
                                    <Icon name="sync" size={16} />
                                    Authorize Sync
                                </button>
                            </div>
                        </header>

                        {/* Stability Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="bg-white p-8 border border-clinical shadow-clinical relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/[0.03] -mr-12 -mt-12 rounded-full blur-2xl"></div>
                                <p className="text-[10px] font-bold text-on-surface-variant/40 tracking-[0.2em] mb-4 uppercase">Compliance Score</p>
                                <div className="flex items-end gap-3">
                                    <p className="text-4xl font-headline font-bold text-primary">94%</p>
                                    <p className="text-[10px] font-bold text-secondary mb-1.5 uppercase tracking-widest">+2.4%</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 border border-clinical shadow-clinical relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/[0.03] -mr-12 -mt-12 rounded-full blur-2xl"></div>
                                <p className="text-[10px] font-bold text-on-surface-variant/40 tracking-[0.2em] mb-4 uppercase">Active Protocols</p>
                                <div className="flex items-end gap-3">
                                    <p className="text-4xl font-headline font-bold text-primary">05</p>
                                    <p className="text-[10px] font-bold text-primary/30 mb-1.5 uppercase tracking-widest">In Motion</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 border border-clinical shadow-clinical relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-error/[0.03] -mr-12 -mt-12 rounded-full blur-2xl"></div>
                                <p className="text-[10px] font-bold text-on-surface-variant/40 tracking-[0.2em] mb-4 uppercase">Risk Profile</p>
                                <div className="flex items-end gap-3">
                                    <p className="text-3xl font-headline font-bold text-error">Minimal</p>
                                    <Icon name="shield" size={24} className="text-error mb-1.5 opacity-30" />
                                </div>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            {/* Clinical Milestone Rail */}
                            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <div className="flex items-center gap-4 mb-12">
                                    <h3 className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">STATUTORY FILING PROTOCOLS</h3>
                                    <div className="h-px flex-1 bg-clinical"></div>
                                </div>
                                
                                <div className="relative pl-12 space-y-16 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-clinical">
                                    {events.map((ev, i) => (
                                        <div key={i} className="relative group cursor-pointer">
                                            {/* Status Node */}
                                            <div className={`absolute -left-[40px] top-0 w-[24px] h-[24px] rounded-sm flex items-center justify-center bg-transparent border-2 shadow-clinical ring-4 ring-white z-10 transition-transform group-hover:scale-110 ${
                                                ev.color === 'error' ? 'border-error text-error' : ev.color === 'primary' ? 'border-primary text-primary' : 'border-secondary text-secondary'
                                            }`}>
                                                <Icon name={ev.color === 'error' ? 'priority_high' : 'event'} size={14} />
                                            </div>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                                <div className="md:col-span-1">
                                                    <p className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-1 ${
                                                        ev.color === 'error' ? 'text-error' : ev.color === 'primary' ? 'text-primary' : 'text-secondary'
                                                    }`}>
                                                        {ev.date}, 2024
                                                    </p>
                                                    <p className="text-[9px] text-on-surface-variant font-bold uppercase tracking-widest opacity-40">
                                                        Protocol: {ev.type}
                                                    </p>
                                                </div>
                                                <div className="md:col-span-3 space-y-3">
                                                    <h4 className="font-headline font-bold text-primary text-2xl tracking-tight leading-tight group-hover:text-secondary transition-colors">
                                                        {ev.title}
                                                    </h4>
                                                    <p className="text-sm text-on-surface-variant leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                                        Expert intelligence suggests immediate review of internal records before statutory {ev.date} submission. Failure to comply may trigger automatic regulatory follow-up sequences.
                                                    </p>
                                                    <div className="flex items-center gap-4 pt-4">
                                                        <button className="text-[10px] font-bold text-primary hover:text-secondary uppercase tracking-widest transition-colors flex items-center gap-2">
                                                            Prepare Documentation <Icon name="arrow_forward" size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ComplianceCalendar;

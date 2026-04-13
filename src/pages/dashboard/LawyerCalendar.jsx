import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const LawyerCalendar = () => {
    const [isAvailable, setIsAvailable] = useState(true);

    const menuItems = [
        { label: 'Profile Info', path: '/lawyer-panel-dashboard', icon: 'account_circle' },
        { label: 'Case Management', path: '/lawyer-cases', icon: 'folder_shared' },
        { label: 'Consultation Calendar', path: '/lawyer-calendar', icon: 'calendar_today' }
    ];

    const appointments = [
        { time: '10:00 AM', client: 'Nexus Dynamics', type: 'Virtual Session', status: 'Confirmed', impact: 'High' },
        { time: '11:30 AM', client: 'Skadden Partners', type: 'Clinical Audit', status: 'Pending', impact: 'Medium' },
        { time: '02:00 PM', client: 'Terraform Global', type: 'Document Review', status: 'Confirmed', impact: 'High' },
        { time: '04:30 PM', client: 'Alistair Thorne', type: 'Strategy Briefing', status: 'Scheduled', impact: 'Critical' }
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
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern">
                    <div className="w-full">
                        <header className="mb-12 flex justify-between items-start">
                            <div>
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-8 h-[2px] bg-secondary"></div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Consultation Protocol</span>
                                </div>
                                <h1 className="text-6xl font-headline font-bold text-primary tracking-tighter leading-none">Command Cycle.</h1>
                                <p className="text-on-surface-variant text-lg opacity-80 mt-4 max-w-sm">Strategic management of client sessions and availability nodes.</p>
                            </div>

                            <button 
                                onClick={() => setIsAvailable(!isAvailable)}
                                className={`flex items-center gap-4 px-8 py-4 rounded-sm border transition-all ${
                                    isAvailable ? 'bg-secondary/10 border-secondary text-secondary' : 'bg-primary/5 border-clinical text-primary/40'
                                }`}
                            >
                                <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-secondary animate-pulse' : 'bg-primary/20'}`}></div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{isAvailable ? 'Availability: Active' : 'Availability: Paused'}</span>
                            </button>
                        </header>

                        <div className="grid grid-cols-12 gap-10">
                            {/* Daily Schedule */}
                            <div className="col-span-12 lg:col-span-8">
                                <section className="bg-white shadow-clinical border border-clinical rounded-sm overflow-hidden">
                                     <div className="p-8 border-b border-clinical flex justify-between items-center bg-primary/[0.01]">
                                        <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">Today: Monday, Apr 13</h3>
                                        <div className="flex gap-4">
                                            <button className="p-2 text-primary/20 hover:text-primary transition-colors"><Icon name="chevron_left" size={20} /></button>
                                            <button className="p-2 text-primary/20 hover:text-primary transition-colors"><Icon name="chevron_right" size={20} /></button>
                                        </div>
                                    </div>
                                    <div className="divide-y divide-clinical">
                                        {appointments.map((apt, i) => (
                                            <div key={i} className="p-10 flex items-center justify-between group hover:bg-primary/[0.01] transition-all cursor-pointer">
                                                <div className="flex items-center gap-12">
                                                    <div className="text-center w-20">
                                                        <p className="text-lg font-headline font-bold text-primary tracking-tight">{apt.time.split(' ')[0]}</p>
                                                        <p className="text-[10px] font-black text-primary/20 uppercase">{apt.time.split(' ')[1]}</p>
                                                    </div>
                                                    <div className="h-12 w-[1px] bg-clinical group-hover:bg-secondary transition-colors" />
                                                    <div>
                                                        <p className="text-[9px] font-black text-secondary uppercase tracking-[0.2em] mb-1">{apt.type}</p>
                                                        <Link to="/lawyer-cases">
                                                            <h4 className="text-xl font-headline font-bold text-primary group-hover:translate-x-1 transition-transform border-b border-transparent hover:border-primary/20 inline-block">{apt.client}</h4>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="text-right flex items-center gap-10">
                                                    <div>
                                                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{apt.status}</p>
                                                        <p className="text-[9px] text-primary/20 uppercase font-black tracking-widest mt-1">Impact: {apt.impact}</p>
                                                    </div>
                                                    <button className="w-10 h-10 flex items-center justify-center text-primary/20 group-hover:text-primary transition-colors">
                                                        <Icon name="video_call" size={24} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar Stats */}
                            <div className="col-span-12 lg:col-span-4 space-y-8">
                                <div className="bg-primary p-12 text-white shadow-clinical rounded-sm relative overflow-hidden group">
                                    <Icon name="event" size={120} className="absolute -bottom-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-[2000ms]" />
                                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 mb-12">WEEKLY UTILIZATION</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Consultation Volume</span>
                                            <span className="text-2xl font-headline font-black tracking-tight">84%</span>
                                        </div>
                                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-secondary" style={{ width: '84%' }}></div>
                                        </div>
                                        <p className="text-[9px] font-bold uppercase tracking-widest opacity-30 italic mt-6 italic">12h additional capacity scheduled</p>
                                    </div>
                                </div>

                                <div className="bg-white p-10 border border-clinical shadow-clinical rounded-sm">
                                    <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-8">NEXT CLINIC NODE</h3>
                                    <div className="flex gap-6 items-center">
                                         <div className="flex items-center justify-center text-primary">
                                            <Icon name="location_on" size={32} />
                                         </div>
                                         <div>
                                            <p className="text-md font-bold text-primary leading-tight">Floor 12, Node B</p>
                                            <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">Capital Acquisitions Desk</p>
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

export default LawyerCalendar;

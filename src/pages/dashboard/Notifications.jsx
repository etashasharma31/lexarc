import React, { useState, useMemo } from 'react';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import { DASHBOARD_MENU_ITEMS } from '../../constants/navigation';

const Notifications = () => {
    const [activeFilter, setActiveFilter] = useState('ALL ALERTS');
    const [notifications, setNotifications] = useState([
        { 
            id: 1, 
            type: 'CASE UPDATE', 
            icon: 'gavel', 
            title: 'DPDP Act 2023: New Compliance Framework', 
            desc: 'A new compliance blueprint has been generated for cross-border data transfer requirements under the Digital Personal Data Protection Act.', 
            time: '10 MINS AGO',
            isUnread: true,
            isUrgent: false
        },
        { 
            id: 2, 
            type: 'URGENT FILING', 
            icon: 'warning', 
            title: 'Missing Document: Case #LX-2024-8842', 
            desc: 'GSTR-3B deadline is approaching in 24 hours. Form B-12 has not been uploaded to the Case File.', 
            time: '2 HOURS AGO',
            isUnread: true,
            isUrgent: true
        },
        { 
            id: 3, 
            type: 'SYSTEM LOG', 
            icon: 'verified_user', 
            title: 'Security Audit: Optimal Integrity', 
            desc: 'Monthly end-to-end encryption audit completed with no vulnerabilities found.',  
            time: 'YESTERDAY',
            isUnread: false,
            isUrgent: false
        },
        { 
            id: 4, 
            type: 'ROC ALERT', 
            icon: 'business', 
            title: 'MGT-7 Annual Return Due in 15 Days', 
            desc: 'The MCA requires filing of Annual Return (MGT-7) for your Private Limited company by May 30, 2024.', 
            time: '3 DAYS AGO',
            isUnread: false,
            isUrgent: false
        }
    ]);

    const [selectedItem, setSelectedItem] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const filterCategories = ['ALL ALERTS', 'URGENT ONLY', 'FILING EVENTS', 'SYSTEM REPORTS'];

    const filteredItems = useMemo(() => {
        if (activeFilter === 'ALL ALERTS') return notifications;
        if (activeFilter === 'URGENT ONLY') return notifications.filter(item => item.isUrgent);
        if (activeFilter === 'FILING EVENTS') return notifications.filter(item => item.type.includes('FILING') || item.type.includes('ROC'));
        if (activeFilter === 'SYSTEM REPORTS') return notifications.filter(item => item.type === 'SYSTEM LOG');
        return notifications;
    }, [activeFilter, notifications]);

    const handleArchive = (id) => {
        setNotifications(prev => prev.filter(item => item.id !== id));
    };

    const handleReview = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleResolve = () => {
        if (selectedItem) {
            handleArchive(selectedItem.id);
            setShowModal(false);
            setSelectedItem(null);
        }
    };

    return (
        <div className="bg-surface min-h-screen relative">
            
            {/* Intelligence Terminal Modal */}
            {showModal && selectedItem && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300">
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-xl" onClick={() => setShowModal(false)}></div>
                    <div className="relative w-full max-w-xl bg-gradient-satin rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden animate-in zoom-in-95 duration-500">
                        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
                        <div className="p-12 space-y-8 relative z-10">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-black/20 ${selectedItem.isUrgent ? 'bg-error text-white animate-pulse-soft' : 'bg-primary text-white'}`}>
                                <Icon name={selectedItem.icon} size={32} />
                            </div>
                            
                            <div className="text-center space-y-4">
                                <div className="flex items-center justify-center gap-3">
                                    <span className={`text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1 rounded-full ${selectedItem.isUrgent ? 'bg-error text-white' : 'bg-white/10 text-white/60'}`}>
                                        {selectedItem.type}
                                    </span>
                                    <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{selectedItem.time}</span>
                                </div>
                                <h2 className="font-headline text-3xl font-black text-white tracking-tighter">{selectedItem.title}</h2>
                                <p className="text-white/60 text-sm leading-relaxed font-medium">
                                    {selectedItem.desc}
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button 
                                    onClick={handleResolve}
                                    className="w-full py-5 bg-white text-primary font-headline font-black text-[11px] tracking-[0.3em] uppercase rounded-2xl shadow-xl hover:bg-secondary-container transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
                                >
                                    <Icon name="verified" size={16} /> Mark as Resolved
                                </button>
                                <button 
                                    onClick={() => setShowModal(false)}
                                    className="w-full py-5 bg-white/5 text-white/40 font-headline font-black text-[11px] tracking-[0.3em] uppercase rounded-2xl hover:bg-white/10 hover:text-white/80 transition-all border border-white/5"
                                >
                                    Dismiss Terminal
                                </button>
                            </div>

                            <div className="pt-4 text-center">
                                <p className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">Protocol Log ID: #INT-ACK-{selectedItem.id}2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-[1200px] mx-auto px-8 flex">
                <DashboardSidebar 
                    menuItems={DASHBOARD_MENU_ITEMS} 
                    userName="Aryan Sharma"
                    userRole="Business Owner"
                />
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern transition-all duration-500">
                    <div className="w-full">
                    <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-in fade-in slide-in-from-left-4 duration-700">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl font-headline font-bold text-primary mb-2 tracking-tight">Intelligence Log</h1>
                            <p className="text-on-surface-variant text-lg leading-relaxed">Stay updated with real-time regulatory intelligence on your active case files.</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="bg-white p-6 min-w-[140px] shadow-clinical border border-clinical">
                                <p className="text-[9px] font-bold text-on-surface-variant tracking-[0.2em] mb-1 uppercase opacity-40">UNREAD</p>
                                <p className="text-3xl font-headline font-bold text-primary">
                                    {notifications.filter(n => n.isUnread).length.toString().padStart(2, '0')}
                                </p>
                            </div>
                            <div className="bg-white p-6 min-w-[140px] shadow-clinical border border-clinical">
                                <p className="text-[9px] font-bold text-on-surface-variant tracking-[0.2em] mb-1 uppercase opacity-40">URGENT</p>
                                <p className="text-3xl font-headline font-bold text-error">
                                    {notifications.filter(n => n.isUrgent).length.toString().padStart(2, '0')}
                                </p>
                            </div>
                        </div>
                    </header>

                    <div className="flex flex-col gap-10">
                        {/* Horizontal Filter Protocol */}
                        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 border-b border-clinical pb-6 animate-in fade-in duration-700">
                            <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 font-bold text-[11px] tracking-widest uppercase text-primary/40">
                                {filterCategories.map(filter => (
                                    <li 
                                        key={filter}
                                        onClick={() => setActiveFilter(filter)}
                                        className={`cursor-pointer transition-all duration-300 pb-6 -mb-[26px] ${
                                            activeFilter === filter 
                                            ? 'text-primary border-b-2 border-primary' 
                                            : 'hover:text-primary'
                                        }`}
                                    >
                                        {filter}
                                    </li>
                                ))}
                            </ul>
                        </div>


                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Notifications List */}
                        <div className="flex-1 space-y-6">
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item, idx) => (
                                    <div key={item.id} className={`group relative bg-white p-8 shadow-clinical hover:shadow-clinical-hover border-l-4 transition-all flex gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards ${
                                        item.isUrgent ? 'border-error' : item.isUnread ? 'border-primary' : 'border-clinical'
                                    }`} style={{ animationDelay: `${idx * 100}ms` }}>
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/[0.03] flex items-center justify-center rounded-sm">
                                            <Icon name={item.icon} size={24} className={item.isUrgent ? 'text-error' : 'text-primary'} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <span className={`text-[9px] font-bold tracking-[0.2em] uppercase ${item.isUrgent ? 'text-error' : 'text-primary/40'}`}>{item.type}</span>
                                                <span className="text-[10px] text-primary/30 font-bold uppercase tracking-widest">{item.time}</span>
                                            </div>
                                            <h3 className="text-lg font-headline font-bold text-primary mb-2">{item.title}</h3>
                                            <p className="text-on-surface-variant text-sm leading-relaxed mb-6 opacity-80">{item.desc}</p>
                                            <div className="flex items-center gap-6">
                                                <button 
                                                    onClick={() => handleReview(item)}
                                                    className="bg-primary text-on-primary px-8 py-3 text-[10px] font-bold tracking-[0.2em] rounded-sm uppercase shadow-clinical hover:-translate-y-1 transition-all"
                                                >
                                                    Review Action
                                                </button>
                                                <button 
                                                    onClick={() => handleArchive(item.id)}
                                                    className="text-primary/40 hover:text-primary text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                                                >
                                                    <Icon name="archive" size={14} /> Archive
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="py-24 text-center border-2 border-dashed border-clinical rounded-[2.5rem] animate-in fade-in duration-700">
                                    <Icon name="history" size={48} className="text-primary/10 mx-auto mb-6" />
                                    <h3 className="text-xl font-headline font-bold text-primary/30 uppercase tracking-widest">No Active Alerts</h3>
                                    <p className="text-[10px] font-bold text-primary/20 uppercase tracking-[0.2em] mt-2">Log synchronized and clear</p>
                                </div>
                            )}
                            
                            {filteredItems.length > 0 && (
                                <div className="pt-10 flex justify-center">
                                    <button className="text-[10px] font-bold text-primary/30 tracking-[0.2em] uppercase hover:text-primary transition-colors flex items-center gap-3 active:scale-95">
                                        Load Archive <Icon name="expand_more" size={16} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                </div>
            </main>
        </div>
    </div>
    );
};

export default Notifications;

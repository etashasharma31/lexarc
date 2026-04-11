import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const UserProfile = () => {
    // Identity State
    const [profile, setProfile] = useState({
        name: 'Arjun Sharma',
        email: 'arjun.sharma@sharmalegal.in',
        phone: '+91 98200 12345',
        location: 'Hoechst House, Nariman Point, Mumbai'
    });

    // Interaction & Feedback States
    const [isSaving, setIsSaving] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
    const [showRevokeModal, setShowRevokeModal] = useState(false);
    const [isRevoking, setIsRevoking] = useState(false);
    const [reactivatingIndex, setReactivatingIndex] = useState(null);

    const [notifications, setNotifications] = useState({
        matterUpdates: true,
        filingReminders: true,
        vaultAccess: false
    });
    const [firms, setFirms] = useState([
        { name: 'Sharma Legal Associates', role: 'Founding Partner • Active Since 2019', initials: 'SL', active: true },
        { name: 'Mumbai Tech Law Circle', role: 'Senior Consultant • Active', initials: 'MT', active: false }
    ]);

    // Handlers
    const showFeedback = (message, type = 'success') => {
        setToast({ show: true, message, type });
        setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 4000);
    };

    const handleInputChange = (field, value) => {
        setProfile(prev => ({ ...prev, [field]: value }));
        if (toast.show) setToast({ ...toast, show: false });
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            showFeedback('IDENTITY NODE SYNCHRONIZED');
        }, 1200);
    };

    const toggleNotification = (key) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
        showFeedback(`ALERT NODE: ${key === 'vaultAccess' ? 'VAULT ACCESS' : key.toUpperCase()} UPDATED`);
    };

    const executeRevoke = () => {
        setIsRevoking(true);
        setTimeout(() => {
            setIsRevoking(false);
            setShowRevokeModal(false);
            showFeedback('SECURITY PROTOCOL: ALL SESSIONS TERMINATED', 'error');
        }, 2000);
    };

    const handleModifyRequest = () => {
        showFeedback('MODIFICATION PROTOCOL INITIALIZED • AWAITING NODE AUTH', 'info');
    };

    const reactivateFirm = (index) => {
        setReactivatingIndex(index);
        setTimeout(() => {
            const newFirms = [...firms];
            newFirms[index].active = true;
            setFirms(newFirms);
            setReactivatingIndex(null);
            showFeedback(`FIRM NODE ACTIVATED: ${newFirms[index].name.toUpperCase()}`);
        }, 1500);
    };

    return (
        <React.Fragment>
            <main className="pb-24 bg-surface min-h-screen relative overflow-hidden">
                
                {/*  Premium Feedback Toast  */}
                {toast.show && (
                    <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-[100] ${toast.type === 'error' ? 'bg-error' : toast.type === 'info' ? 'bg-secondary' : 'bg-primary'} text-white px-8 py-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] font-headline font-black text-[10px] tracking-[0.2em] animate-in slide-in-from-top-20 duration-500 flex flex-col gap-2 min-w-[320px] border border-white/10 uppercase`}>
                        <div className="flex items-center gap-4">
                            <Icon name={toast.type === 'error' ? 'security' : toast.type === 'info' ? 'info' : 'verified'} size={20} className="text-white/80" />
                            <span>{toast.message}</span>
                        </div>
                        <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full bg-white animate-shrink-width origin-left duration-[4000ms]"></div>
                        </div>
                    </div>
                )}

                {/*  Security Terminal Modal (The 'Surgical' Confirmation)  */}
                {showRevokeModal && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 animate-in fade-in duration-300">
                        <div className="absolute inset-0 bg-primary/40 backdrop-blur-xl" onClick={() => !isRevoking && setShowRevokeModal(false)}></div>
                        <div className="relative w-full max-w-md bg-gradient-satin rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden animate-in zoom-in-95 duration-500">
                            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
                            <div className="p-12 space-y-8 relative z-10">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-secondary-container animate-pulse-soft">
                                    <Icon name="gpp_maybe" size={32} />
                                </div>
                                <div className="text-center space-y-4">
                                    <h2 className="font-headline text-3xl font-black text-white tracking-tighter">Security Alert</h2>
                                    <p className="text-white/60 text-sm font-medium leading-relaxed uppercase tracking-widest text-[10px]">
                                        Executing the **Revoke Nodes** command will terminate all synchronized sessions across your legal network.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <button 
                                        onClick={executeRevoke}
                                        disabled={isRevoking}
                                        className={`w-full py-5 bg-white text-primary font-headline font-black text-[11px] tracking-[0.3em] uppercase rounded-2xl shadow-xl transition-all ${isRevoking ? 'opacity-50 cursor-wait' : 'hover:bg-primary-container hover:text-white hover:-translate-y-1 active:scale-95'}`}
                                    >
                                        {isRevoking ? 'Terminating sessions...' : 'Confirm Revocation'}
                                    </button>
                                    <button 
                                        onClick={() => setShowRevokeModal(false)}
                                        disabled={isRevoking}
                                        className="w-full py-5 bg-white/5 text-white/40 font-headline font-black text-[11px] tracking-[0.3em] uppercase rounded-2xl hover:bg-white/10 hover:text-white/80 transition-all"
                                    >
                                        Abort Protocol
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-container/5 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
                
                <div className="px-8 py-16 max-w-[1200px] mx-auto bg-dot-pattern">
                    <div className="space-y-16 animate-in fade-in duration-700">
                        {/*  Introduction / Hero  */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 pb-16 border-b border-clinical">
                            <div className="flex items-center gap-8">
                                <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center text-white text-3xl font-black shadow-clinical relative overflow-hidden group border border-white/10">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                                    {profile.name.split(' ').map(n => n[0]).join('')}
                                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-surface rounded-full"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[10px] font-black tracking-[0.3em] text-secondary uppercase bg-transparent border border-secondary/30 shadow-sm px-3 py-1 rounded-full">Associate since 2019</span>
                                    </div>
                                    <h1 className="font-headline text-5xl font-black tracking-tighter text-primary">{profile.name}</h1>
                                    <p className="text-on-surface-variant max-w-md text-sm leading-relaxed font-body font-medium opacity-70 italic">
                                        Senior Associate • Sharma Legal Associates
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button 
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className={`px-10 py-4 font-headline font-black text-[11px] uppercase tracking-widest rounded-2xl transition-all shadow-clinical-hover active:scale-95 border-b-4 ${
                                        isSaving ? 'bg-slate-200 text-slate-400 cursor-wait border-slate-300' : 'bg-primary text-on-primary hover:-translate-y-1 border-primary-container'
                                    }`}
                                >
                                    {isSaving ? 'Synchronizing Node...' : 'Update Identity'}
                                </button>
                            </div>
                        </div>

                        {/*  Bento Grid Layout for Settings  */}
                        <div className="grid grid-cols-12 gap-10">
                            {/*  Personal Details: Column 1-8  */}
                            <section className="col-span-12 lg:col-span-8 space-y-10">
                                <div className="bg-white p-12 rounded-[2.5rem] border border-clinical shadow-clinical group hover:shadow-clinical-hover transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.01] rounded-full -mr-16 -mt-16 group-hover:bg-primary/[0.03] transition-colors"></div>
                                    <div className="flex items-center gap-5 mb-12">
                                        <div className="w-12 h-12 bg-surface-container-low rounded-2xl flex items-center justify-center text-primary shadow-inner">
                                            <Icon name="person" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-headline text-2xl font-black text-primary tracking-tight">Identity Node</h3>
                                            <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">Surgical Profile Data Flow</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                        <div className="space-y-3 group/field relative">
                                            <label className="font-headline text-[9px] uppercase tracking-[0.2em] text-primary/40 font-black px-1 group-focus-within/field:text-primary transition-colors">Full Legal Name</label>
                                            <input 
                                                className="w-full bg-surface-container-low border border-transparent p-5 font-body text-sm text-primary font-bold focus:bg-white focus:border-clinical focus:ring-4 focus:ring-primary/5 transition-all rounded-2xl shadow-inner-sm outline-none" 
                                                type="text" 
                                                value={profile.name}
                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-3 group/field relative">
                                            <label className="font-headline text-[9px] uppercase tracking-[0.2em] text-primary/40 font-black px-1 group-focus-within/field:text-primary transition-colors">Professional Email</label>
                                            <input 
                                                className="w-full bg-surface-container-low border border-transparent p-5 font-body text-sm text-primary font-bold focus:bg-white focus:border-clinical focus:ring-4 focus:ring-primary/5 transition-all rounded-2xl shadow-inner-sm outline-none" 
                                                type="email" 
                                                value={profile.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-3 group/field relative">
                                            <label className="font-headline text-[9px] uppercase tracking-[0.2em] text-primary/40 font-black px-1 group-focus-within/field:text-primary transition-colors">Contact Number</label>
                                            <input 
                                                className="w-full bg-surface-container-low border border-transparent p-5 font-body text-sm text-primary font-bold focus:bg-white focus:border-clinical focus:ring-4 focus:ring-primary/5 transition-all rounded-2xl shadow-inner-sm outline-none" 
                                                type="tel" 
                                                value={profile.phone}
                                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-3 group/field relative">
                                            <label className="font-headline text-[9px] uppercase tracking-[0.2em] text-primary/40 font-black px-1 group-focus-within/field:text-primary transition-colors">Practice Location</label>
                                            <input 
                                                className="w-full bg-surface-container-low border border-transparent p-5 font-body text-sm text-primary font-bold focus:bg-white focus:border-clinical focus:ring-4 focus:ring-primary/5 transition-all rounded-2xl shadow-inner-sm outline-none" 
                                                type="text" 
                                                value={profile.location}
                                                onChange={(e) => handleInputChange('location', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/*  Firm Associations  */}
                                <div className="bg-white p-12 rounded-[2.5rem] border border-clinical shadow-clinical relative overflow-hidden group">
                                     <div className="flex items-center gap-5 mb-12">
                                        <div className="w-12 h-12 bg-surface-container-low rounded-2xl flex items-center justify-center text-primary shadow-inner">
                                            <Icon name="corporate_fare" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-headline text-2xl font-black text-primary tracking-tight">Firm Affiliations</h3>
                                            <p className="text-[10px] font-bold text-primary/30 uppercase tracking-widest mt-1">Indian Jurisdictional Nodes</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {firms.map((firm, i) => (
                                            <div key={i} className={`flex items-center justify-between p-8 rounded-3xl border border-clinical transition-all duration-300 ${firm.active ? 'bg-surface border-primary/10 shadow-sm' : 'opacity-40 grayscale hover:grayscale-0'}`}>
                                                <div className="flex items-center gap-6">
                                                    <div className="w-14 h-14 bg-gradient-satin rounded-2xl flex items-center justify-center text-white font-headline font-black text-xl shadow-lg">
                                                        {firm.initials}
                                                    </div>
                                                    <div>
                                                        <p className="font-headline font-black text-lg text-primary tracking-tight leading-none mb-2">{firm.name}</p>
                                                        <p className="text-[11px] font-bold text-primary/40 uppercase tracking-widest">{firm.role}</p>
                                                    </div>
                                                </div>
                                                {firm.active ? (
                                                    <span className="px-5 py-2 bg-primary text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full shadow-clinical">Active Node</span>
                                                ) : (
                                                    <button 
                                                        onClick={() => reactivateFirm(i)}
                                                        disabled={reactivatingIndex !== null}
                                                        className={`text-[10px] font-black text-primary uppercase tracking-widest transition-all px-6 py-2.5 border border-clinical rounded-full ${reactivatingIndex === i ? 'opacity-50 cursor-wait bg-surface' : 'hover:bg-primary hover:text-white active:scale-95 shadow-sm'}`}
                                                    >
                                                        {reactivatingIndex === i ? 'Calibrating...' : 'Reactivate Node'}
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/*  Sidebar Content: Column 9-12  */}
                            <aside className="col-span-12 lg:col-span-4 space-y-10">
                                {/*  Security Settings - Premium Gradient  */}
                                <div className="bg-gradient-satin text-on-primary p-12 rounded-[2.5rem] shadow-clinical-hover border border-white/5 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
                                    <div className="flex items-center gap-4 mb-10 relative z-10">
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                            <Icon name="shield_lock" size={22} className="text-secondary-container" />
                                        </div>
                                        <h3 className="font-headline text-xl font-bold tracking-tight">Access Node</h3>
                                    </div>
                                    <div className="space-y-8 relative z-10">
                                        <div className="pb-8 border-b border-on-primary/10">
                                            <p className="text-[9px] text-white/40 font-black uppercase tracking-[0.3em] mb-3">Two-Factor Auth</p>
                                            <div className="flex items-center justify-between">
                                                <span className="font-headline font-bold text-lg">Active (Secure SMS)</span>
                                                <Icon name="verified_user" size={24} className="text-secondary-container animate-pulse-soft" />
                                            </div>
                                        </div>
                                        <div className="pb-8 border-b border-on-primary/10">
                                            <p className="text-[9px] text-white/40 font-black uppercase tracking-[0.3em] mb-3">Identity Node</p>
                                            <div className="flex items-center justify-between">
                                                <span className="font-headline font-bold text-sm text-white/70 italic">Verified Identity Flow</span>
                                                <button onClick={handleModifyRequest} className="text-[9px] bg-white/10 px-5 py-2 hover:bg-white/20 transition-all uppercase font-black tracking-widest rounded-xl border border-white/5 shadow-sm active:scale-95">Modify</button>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => setShowRevokeModal(true)}
                                            className="w-full py-6 bg-white text-primary font-headline font-black text-[10px] tracking-[0.3em] hover:bg-primary-container hover:text-white transition-all uppercase rounded-2xl shadow-2xl active:scale-[0.98] group/revoke flex items-center justify-center gap-3"
                                        >
                                            <Icon name="gpp_maybe" size={16} className="text-primary group-hover/revoke:text-white" />
                                            Revoke All Access
                                        </button>
                                    </div>
                                </div>

                                {/*  Notification Preferences  */}
                                <div className="bg-white p-12 rounded-[2.5rem] border border-clinical shadow-sm space-y-10">
                                    <div className="flex items-center gap-4">
                                        <Icon name="notifications" size={24} className="text-secondary" />
                                        <h3 className="font-headline text-xl font-black text-primary tracking-tight">Alert Node</h3>
                                    </div>
                                    <div className="space-y-8">
                                        <label className="flex items-center justify-between cursor-pointer group/toggle">
                                            <span className="font-body text-sm font-bold text-primary tracking-tight group-hover/toggle:text-secondary transition-colors">Matter Updates</span>
                                            <div className="relative inline-flex items-center">
                                                <input 
                                                    checked={notifications.matterUpdates} 
                                                    onChange={() => toggleNotification('matterUpdates')}
                                                    className="sr-only peer" 
                                                    type="checkbox"
                                                />
                                                <div className="w-14 h-7 bg-surface-container-low rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-[20px] after:w-[20px] after:transition-all peer-checked:bg-primary shadow-inner border border-clinical/10"></div>
                                            </div>
                                        </label>
                                        <label className="flex items-center justify-between cursor-pointer group/toggle">
                                            <span className="font-body text-sm font-bold text-primary tracking-tight group-hover/toggle:text-secondary transition-colors">Filing Reminders</span>
                                            <div className="relative inline-flex items-center">
                                                <input 
                                                    checked={notifications.filingReminders} 
                                                    onChange={() => toggleNotification('filingReminders')}
                                                    className="sr-only peer" 
                                                    type="checkbox"
                                                />
                                                <div className="w-14 h-7 bg-surface-container-low rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-[20px] after:w-[20px] after:transition-all peer-checked:bg-primary shadow-inner border border-clinical/10"></div>
                                            </div>
                                        </label>
                                        <label className="flex items-center justify-between cursor-pointer group/toggle">
                                            <span className="font-body text-sm font-bold text-primary tracking-tight group-hover/toggle:text-secondary transition-colors">Vault Access</span>
                                            <div className="relative inline-flex items-center">
                                                <input 
                                                    checked={notifications.vaultAccess} 
                                                    onChange={() => toggleNotification('vaultAccess')}
                                                    className="sr-only peer" 
                                                    type="checkbox"
                                                />
                                                <div className="w-14 h-7 bg-surface-container-low rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-[20px] after:w-[20px] after:transition-all peer-checked:bg-primary shadow-inner border border-clinical/10"></div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="pt-6 border-t border-clinical">
                                        <p className="text-[9px] text-primary/30 font-bold uppercase tracking-widest leading-loose">
                                            MeitY Compliant • End-to-end Encrypted • Indian Data Sovereign
                                        </p>
                                    </div>
                                </div>
                            </aside>
                        </div>


                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default UserProfile;

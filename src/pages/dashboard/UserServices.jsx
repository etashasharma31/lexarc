import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import { DASHBOARD_MENU_ITEMS } from '../../constants/navigation';

const UserServices = () => {
    const navigate = useNavigate();

    const getActionRoute = (service) => {
        if (service.status === 'Completed') return null;
        if (service.nextAction.toLowerCase().includes('upload')) return '/document-vault';
        if (service.nextAction.toLowerCase().includes('wait')) return '/consultation-booking';
        return '/document-vault';
    };
    const activeServices = [
        { id: 'LX-8892', name: 'Business Registration', status: 'In Progress', progress: 65, nextAction: 'Upload Articles of Association', lawyer: 'Dr. Alistair Thorne' },
        { id: 'LX-9014', name: 'Trademark Filing', status: 'Pending Review', progress: 30, nextAction: 'Wait for IP Office response', lawyer: 'Elena Volkov' },
        { id: 'LX-7721', name: 'Employment Contract Review', status: 'Completed', progress: 100, nextAction: 'None', lawyer: 'Marcus Sterling' }
    ];

    return (
        <div className="bg-surface min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8 flex">
                <DashboardSidebar 
                    menuItems={DASHBOARD_MENU_ITEMS} 
                    userName="Anderson Marcus" 
                    userRole="Business Owner"
                />
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern">
                    <div className="w-full">
                    <div className="mb-12">
                        <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mb-2">My Services</h1>
                        <p className="text-on-surface-variant max-w-2xl">Manage your active legal protocols and track the structural progress of your enterprise matters.</p>
                    </div>

                    <div className="space-y-8">
                        {activeServices.map((service, idx) => (
                            <section key={idx} className="bg-white rounded-sm p-10 shadow-clinical border border-clinical/50 group hover:border-secondary transition-all">
                                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm ${
                                                service.status === 'Completed' ? 'bg-secondary text-on-secondary' : 'bg-secondary-container text-on-secondary-container'
                                            }`}>
                                                {service.status}
                                            </span>
                                            <span className="text-xs text-on-surface-variant font-mono">#{service.id}</span>
                                        </div>
                                        <h2 className="text-3xl font-headline font-bold text-primary mb-2">{service.name}</h2>
                                        <p className="text-sm text-on-surface-variant mb-6 italic">With Counsel: {service.lawyer}</p>
                                        
                                        <div className="space-y-2 mb-8">
                                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                                <span>Structural Completion</span>
                                                <span>{service.progress}%</span>
                                            </div>
                                            <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                                                <div className="h-full bg-secondary transition-all duration-1000" style={{ width: `${service.progress}%` }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:w-80 p-8 bg-surface-container-low border border-clinical rounded-sm">
                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-4 opacity-70">Next Required Action</h4>
                                        <p className="text-sm font-bold text-primary mb-6 leading-relaxed">{service.nextAction}</p>
                                        <button
                                            onClick={() => { const r = getActionRoute(service); if (r) navigate(r); }}
                                            className={`w-full py-4 text-[10px] font-bold uppercase tracking-widest rounded-sm transition-all ${
                                                service.status === 'Completed' 
                                                    ? 'bg-surface-container text-on-surface-variant cursor-not-allowed' 
                                                    : 'bg-primary text-on-primary shadow-lg hover:-translate-y-1 active:scale-95'
                                            }`}
                                        >
                                            {service.status === 'Completed' ? 'Protocol Closed' : 'Execute Action'}
                                        </button>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    </div>
);
};

export default UserServices;

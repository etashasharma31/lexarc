import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const Status = () => {
    const services = [
        { name: "Legal Core Engine", status: "Operational", health: 100 },
        { name: "AI Counsel Framework", status: "Operational", health: 99.8 },
        { name: "Secure Document Vault", status: "Operational", health: 100 },
        { name: "Compliance Monitoring Sync", status: "Limited Performance", health: 85 },
        { name: "Public API Gateway", status: "Operational", health: 100 }
    ];

    return (
        <main className="bg-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen pt-8 pb-24">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-green-500/20 text-green-500 rounded-full mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-left">Systems Fully Operational</span>
                    </div>
                    <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mb-4">Platform Status</h1>
                    <p className="text-on-surface-variant">Real-time monitoring of the LegalSite structural legal nodes.</p>
                </div>

                <section className="bg-white border border-clinical shadow-clinical rounded-sm overflow-hidden mb-12">
                    <div className="bg-primary p-6 flex justify-between items-center">
                        <h3 className="text-on-primary font-headline font-bold text-sm uppercase tracking-widest">Protocol Health</h3>
                        <span className="text-on-primary/70 text-[10px] font-bold">Last Check: 2 min ago</span>
                    </div>
                    <div className="divide-y divide-outline-variant/10">
                        {services.map((sys, i) => (
                            <div key={i} className="p-8 flex items-center justify-between group hover:bg-primary/5 transition-colors">
                                <div className="flex items-center gap-6">
                                    <Icon name={sys.health < 90 ? "warning" : "check_circle"} size={24} className={sys.health < 90 ? "text-secondary" : "text-green-500"} />
                                    <div>
                                        <h4 className="text-lg font-headline font-bold text-primary">{sys.name}</h4>
                                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">{sys.status}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="hidden md:flex gap-1 h-4 items-end">
                                        {[...Array(20)].map((_, j) => (
                                            <div key={j} className={`w-1 rounded-full ${j > 16 && sys.health < 90 ? 'bg-secondary/30' : 'bg-green-500/80'} ${j === 19 ? 'h-4' : 'h-2'}`}></div>
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold font-mono text-primary w-12 text-right">{sys.health}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-transparent rounded-sm border border-clinical">
                        <h4 className="font-headline font-bold text-primary mb-4">Recent Stability Incidents</h4>
                        <p className="text-xs text-on-surface-variant italic">No incidents reported in the last 30 days.</p>
                    </div>
                    <div className="p-8 bg-transparent rounded-sm border border-clinical">
                        <h4 className="font-headline font-bold text-primary mb-4">Scheduled Maintenance</h4>
                        <p className="text-xs text-on-surface-variant">Protocol Upgrade 12.4 scheduled for Oct 28, 02:00 UTC.</p>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-xs text-on-surface-variant mb-6 uppercase tracking-widest font-bold">Require specialized status lookup?</p>
                    <Link to="/contact" className="text-primary font-bold hover:underline">Contact Integration Support →</Link>
                </div>
            </div>
        </main>
    );
};

export default Status;

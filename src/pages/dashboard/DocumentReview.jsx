import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const DocumentReview = () => {
    const navigate = useNavigate();
    const [isSigned, setIsSigned] = useState(false);

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
                />
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern transition-all duration-500">
                    <div className="w-full">
                    <header className="mb-12 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-3">
                                <button onClick={() => navigate(-1)} className="p-2 hover:bg-white rounded-sm transition-colors border border-clinical shadow-clinical group">
                                    <Icon name="arrow_back" size={18} className="text-primary group-hover:-translate-x-1 transition-transform" />
                                </button>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">PROTOCOL #LX-2024-0012</span>
                            </div>
                            <h1 className="text-5xl font-headline font-bold text-primary tracking-tighter">Signature Protocol</h1>
                            <p className="text-on-surface-variant text-lg opacity-80 mt-2">Terraform Global vs. Apex Inc. • Merger Allocation Agreement</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-white p-4 border border-clinical shadow-clinical rounded-sm text-primary/40 hover:text-primary transition-colors">
                                <Icon name="download" size={24} />
                            </button>
                            <button className="bg-white p-4 border border-clinical shadow-clinical rounded-sm text-primary/40 hover:text-primary transition-colors">
                                <Icon name="print" size={24} />
                            </button>
                        </div>
                    </header>

                    <div className="grid grid-cols-12 gap-12">
                        {/* Document Viewer (Simulated) */}
                        <div className="col-span-12 lg:col-span-8">
                            <div className="bg-white border border-clinical shadow-clinical p-20 min-h-[1000px] relative overflow-hidden flex flex-col items-center">
                                {/* Watermark */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                                    <Icon name="policy" size={600} className="rotate-12" />
                                </div>
                                
                                <div className="max-w-2xl w-full space-y-12 relative z-10 text-primary/80 font-body leading-[1.8]">
                                    <div className="text-center space-y-2 border-b border-clinical pb-10">
                                        <h2 className="text-2xl font-headline font-bold text-primary">MERGER ALLOCATION AGREEMENT</h2>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.20em] opacity-40">Strategic Legal Framework v4.2</p>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="font-bold text-sm uppercase tracking-widest text-primary underline">SECTION 1: ENTITY CLASSIFICATION</h3>
                                        <p>This Agreement ("Agreement") is made as of [Current Date], by and between <span className="font-bold border-b border-primary/20">Terraform Global</span>, a Delaware corporation, and <span className="font-bold border-b border-primary/20">Apex Inc.</span>, a Singaporean entity.</p>
                                        <p>The parties acknowledge that the structural integrity of the merger depends entirely on the adherence to the structural protocols defined herein. Any deviation from the stipulated data silos will result in an immediate audit trigger.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="font-bold text-sm uppercase tracking-widest text-primary underline">SECTION 2: ASSET INFRASTRUCTURE</h3>
                                        <p>Asset allocation will be governed by the LegalSite secure ledger. All physical and digital assets, including but not limited to intellectual property repositories, cloud infrastructure, and operational nodes, shall be transitioned under the primary governance portal.</p>
                                        <div className="p-8 bg-primary/[0.02] border border-clinical italic rounded-sm text-sm">
                                            "Operational efficiency is projected to stabilize within 48 hours of protocol execution."
                                        </div>
                                    </div>

                                    <div className="space-y-6 pt-12 border-t border-clinical">
                                        <h3 className="font-bold text-sm uppercase tracking-widest text-primary underline">SECTION 3: EXECUTION</h3>
                                        <p>By applying a digital cryptographic hash to this document, the Senior Associate Marcus Sterling confirms that all due diligence sub-routines have been completed successfully.</p>
                                        
                                        <div className="mt-20 flex justify-between items-end">
                                            <div className="space-y-4">
                                                <div className="w-64 h-[1px] bg-primary/20"></div>
                                                <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Client Representative Signature</p>
                                            </div>
                                            <div className="space-y-4 text-right">
                                                {isSigned ? (
                                                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                                        <p className="font-headline font-bold text-secondary text-2xl italic">Marcus Sterling</p>
                                                        <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mt-1">HASH: 0x882A...F01</p>
                                                    </div>
                                                ) : (
                                                    <div className="w-64 h-[1px] bg-primary/20"></div>
                                                )}
                                                <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Senior Associate Signature</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Actions */}
                        <div className="col-span-12 lg:col-span-4 space-y-8 sticky top-32 h-fit">
                            <div className="bg-white p-10 border border-clinical shadow-clinical rounded-sm">
                                <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-8">COMPLIANCE TOOLS</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-center p-4 bg-primary/[0.03] rounded-sm group cursor-pointer border border-transparent hover:border-primary/20 transition-all">
                                        <Icon name="history" size={20} className="text-primary/40 group-hover:text-primary transition-colors" />
                                        <div>
                                            <p className="text-xs font-bold text-primary uppercase tracking-widest">Revision History</p>
                                            <p className="text-[9px] text-primary/20 font-bold uppercase mt-0.5">3 versions detected</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-center p-4 bg-primary/[0.03] rounded-sm group cursor-pointer border border-transparent hover:border-primary/20 transition-all">
                                        <Icon name="compare" size={20} className="text-primary/40 group-hover:text-primary transition-colors" />
                                        <div>
                                            <p className="text-xs font-bold text-primary uppercase tracking-widest">Compare Changes</p>
                                            <p className="text-[9px] text-primary/20 font-bold uppercase mt-0.5">2 deletions found</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-10 mt-10 border-t border-clinical">
                                    {!isSigned ? (
                                        <button 
                                            onClick={() => setIsSigned(true)}
                                            className="w-full bg-primary text-white py-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-3"
                                        >
                                            <Icon name="draw" size={16} />
                                            Execute Signature
                                        </button>
                                    ) : (
                                        <div className="bg-secondary/10 p-4 border border-secondary/20 rounded-sm flex items-center gap-4 animate-in fade-in duration-500">
                                            <Icon name="verified" size={24} className="text-secondary" />
                                            <p className="text-xs font-bold text-secondary uppercase tracking-widest">Document Signed</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="bg-primary p-10 rounded-sm text-white shadow-clinical">
                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-6">DIAGNOSTIC STATUS</h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end">
                                        <span className="text-xs font-bold uppercase tracking-widest opacity-60">Legal Validity</span>
                                        <span className="text-2xl font-headline font-bold">100%</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="w-full h-full bg-secondary"></div>
                                    </div>
                                    <p className="text-[10px] italic opacity-40 leading-relaxed border-t border-white/10 pt-6">"All statutory nodes have been validated against current jurisdictional frameworks."</p>
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

export default DocumentReview;

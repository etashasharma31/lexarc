import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const AiAssistant = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const menuItems = [
        { label: 'Directorale Feed', path: '/', icon: 'dashboard' },
        { label: 'Case Protocols', path: '/orders-case-history', icon: 'gavel' },
        { label: 'Resource Nodes', path: '/resource-library', icon: 'library_books' },
        { label: 'Admin Terminal', path: '/admin-dashboard', icon: 'settings' }
    ];

    return (
        <div className="flex bg-surface min-h-screen">
            <DashboardSidebar 
                menuItems={menuItems}
                userName="Marcus Sterling"
                userRole="Senior Associate"
            />
            
            {/*  Main Content Area  */}
            <main className="flex-1 ml-64 flex flex-col h-screen relative bg-dot-pattern">
                {/*  TopAppBar  */}
                <header className="flex justify-between items-center h-20 px-12 border-b border-clinical bg-white/10 backdrop-blur-md sticky top-0 z-40">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm shadow-clinical">
                                <Icon name="smart_toy" size={18} className="text-white" />
                            </div>
                            <h2 className="text-xl font-bold font-headline text-primary tracking-tighter">LegalSite AI</h2>
                        </div>
                        <div className="h-4 w-px bg-clinical"></div>
                        <span className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">Surgical Intent Engine v4.2</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="bg-primary text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-clinical-hover hover:-translate-y-0.5 transition-all">
                            New Protocol
                        </button>
                        <div className="flex items-center gap-4 border-l border-clinical pl-6">
                            <Icon name="history" size={20} className="text-primary/30 cursor-pointer hover:text-primary transition-colors" />
                            <Icon name="verified_user" size={20} className="text-secondary opacity-40" />
                        </div>
                    </div>
                </header>

                {/*  Chat Container  */}
                <div className="flex-1 flex overflow-hidden">
                    {/*  Central Chat Area  */}
                    <section className="flex-1 flex flex-col relative">
                        {/*  Chat Messages Container  */}
                        <div className="flex-1 overflow-y-auto p-12 space-y-12 custom-scrollbar">
                            
                            {/*  AI Welcome Message  */}
                            <div className="flex gap-8 max-w-[1200px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                                <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center flex-shrink-0 shadow-clinical border border-clinical">
                                    <Icon name="psychology" size={24} className="text-white" />
                                </div>
                                <div className="space-y-6 flex-1">
                                    <div className="bg-white border border-clinical p-8 rounded-sm shadow-clinical-hover relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
                                        <h2 className="font-headline text-xl font-bold text-primary mb-4 relative z-10">System Initialized: LegalSite Protocol</h2>
                                        <p className="text-sm text-primary/70 leading-relaxed font-body relative z-10 italic">
                                            How shall we build your legal strategy today? I am optimized for drafting dossiers, auditing jurisdictional statutes, and identifying procedural nodes in complex litigation frameworks.
                                        </p>
                                    </div>
                                    
                                    {/*  Quick Nodes  */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            { cat: 'Drafting', label: 'Generate LLC Operating Agreement', icon: 'draw' },
                                            { cat: 'Analysis', label: 'Audit IP Infringement Risks', icon: 'verified_user' },
                                            { cat: 'Compliance', label: 'GDPR Data Processing Protocol', icon: 'policy' },
                                            { cat: 'Strategy', label: 'M&A Asset Allocation Review', icon: 'account_balance' }
                                        ].map((node, i) => (
                                            <button key={i} className="text-left p-5 bg-white border border-clinical rounded-sm shadow-clinical hover:shadow-clinical-hover hover:-translate-y-1 transition-all group flex items-center justify-between">
                                                <div>
                                                    <p className="text-[9px] font-bold text-primary/20 mb-1 uppercase tracking-widest">{node.cat}</p>
                                                    <p className="text-xs font-bold text-primary tracking-tight">{node.label}</p>
                                                </div>
                                                <Icon name={node.icon} size={16} className="text-primary/10 group-hover:text-secondary group-hover:opacity-100 transition-all" />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/*  User Message Mockup  */}
                            <div className="flex gap-8 max-w-[1200px] ml-auto flex-row-reverse animate-in fade-in slide-in-from-bottom-8 duration-700">
                                <div className="w-12 h-12 rounded-sm bg-primary/[0.03] border border-clinical flex items-center justify-center flex-shrink-0">
                                    <Icon name="person" size={24} className="text-primary/30" />
                                </div>
                                <div className="bg-primary text-white p-8 rounded-sm shadow-clinical relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-white/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                    <p className="text-sm font-bold tracking-tight relative z-10 leading-relaxed">Summarize the structural updates to the California Consumer Privacy Act regarding sensitive personal nodes.</p>
                                </div>
                            </div>

                            {/*  AI Detailed Response  */}
                            <div className="flex gap-8 max-w-[1200px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                                <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center flex-shrink-0 shadow-clinical border border-clinical">
                                    <Icon name="psychology" size={24} className="text-white" />
                                </div>
                                <div className="space-y-6 flex-1">
                                    <div className="bg-white border border-clinical p-8 rounded-sm shadow-clinical-hover italic">
                                        <p className="text-sm text-primary/70 leading-relaxed mb-6">
                                            Under the California Privacy Rights Act (CPRA), a specialized sub-category defined as <span className="text-primary font-bold">"Sensitive Personal Information" (SPI)</span> has been activated. The protocol now limits the disclosure of SPI to strictly necessary operational nodes.
                                        </p>
                                        <div className="space-y-4 border-l-2 border-secondary/20 pl-6 my-6">
                                            {[
                                                'Opt-out rights for SPI processing sub-routines.',
                                                'Enhanced transparency in privacy structural frameworks.',
                                                'Surgical definitions for geolocation and biometric nodes.'
                                            ].map((txt, i) => (
                                                <div key={i} className="flex gap-3 text-xs text-primary/60 font-medium">
                                                    <Icon name="check" size={14} className="text-secondary" />
                                                    {txt}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 pt-6 border-t border-clinical">
                                            <p className="text-[10px] font-bold text-primary/20 uppercase tracking-[0.2em] mb-4">REFERENTIAL SOURCES</p>
                                            <div className="flex flex-wrap gap-3">
                                                <span className="px-3 py-1 bg-primary/[0.03] border border-clinical text-primary text-[9px] font-bold rounded-sm flex items-center gap-2">
                                                    <Icon name="menu_book" size={12} className="text-secondary" /> CAL. CIV. CODE § 1798.100
                                                </span>
                                                <span className="px-3 py-1 bg-primary/[0.03] border border-clinical text-primary text-[9px] font-bold rounded-sm flex items-center gap-2">
                                                    <Icon name="menu_book" size={12} className="text-secondary" /> CPRA STRATEGIC DOC v3
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/*  Typing State  */}
                                    <div className="flex items-center gap-4 px-2 animate-pulse">
                                        <div className="flex gap-1.5">
                                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">LEGALSITE IS ANALYZING NODES...</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Input Area  */}
                        <div className="p-10 border-t border-clinical bg-white/50 backdrop-blur-sm">
                            <div className="max-w-[1200px] mx-auto relative group">
                                <textarea 
                                    className="w-full bg-white border border-clinical shadow-clinical focus:shadow-clinical-hover focus:ring-1 focus:ring-primary rounded-sm p-6 pr-40 text-sm font-body placeholder:text-primary/20 resize-none transition-all" 
                                    placeholder="Enter legal prompt or specify legal dossier to audit..." 
                                    rows="1"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                ></textarea>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
                                    <button className="p-2 text-primary/20 hover:text-primary transition-colors">
                                        <Icon name="attach_file" size={20} />
                                    </button>
                                    <button className="bg-primary text-white p-3 rounded-sm shadow-clinical hover:-translate-y-0.5 transition-all">
                                        <Icon name="send" size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="max-w-[1200px] mx-auto mt-6 flex justify-between items-center px-2">
                                <p className="text-[10px] font-bold text-primary/20 uppercase tracking-widest flex items-center gap-3">
                                    <Icon name="verified_user" size={12} className="text-secondary opacity-60" /> 
                                    ECC-256 ENCRYPTION PROTOCOL ACTIVE
                                </p>
                                <div className="flex gap-8">
                                    <button className="text-[10px] font-bold text-primary/40 hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-2">
                                        <Icon name="history" size={14} /> PERSISTENT CONTEXT
                                    </button>
                                    <button className="text-[10px] font-bold text-primary/40 hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-2">
                                        <Icon name="download" size={14} /> EXPORT DOSSIER
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default AiAssistant;

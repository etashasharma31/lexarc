import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const AiAssistant = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [attachedFile, setAttachedFile] = useState(null);
    const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'ai',
            title: 'System Initialized: LegalSite Protocol',
            text: 'How shall we build your legal strategy today? I am optimized for drafting dossiers, auditing jurisdictional statutes, and identifying procedural nodes in complex litigation frameworks.',
            isWelcome: true
        }
    ]);

    const handleSendMessage = (text = inputValue) => {
        if (!text.trim() && !attachedFile) return;

        const newUserMsg = {
            id: Date.now(),
            type: 'user',
            text: text,
            attachment: attachedFile ? attachedFile.name : null
        };

        setMessages(prev => [...prev, newUserMsg]);
        setInputValue('');
        setAttachedFile(null);
        setIsTyping(true);

        // Simulate AI "Thinking" and "Analyzing"
        setTimeout(() => {
            const aiResponse = {
                id: Date.now() + 1,
                type: 'ai',
                text: attachedFile 
                    ? `Dossier "${attachedFile.name}" ingested successfully. Preliminary surgical audit indicates 100% data integrity within the provided legal framework. I've cross-referenced this against the latest jurisdictional nodes.`
                    : `ANALYSIS COMPLETE: Regarding your query on "${text}", I've identified several high-priority jurisdictional nodes. Under current statutory frameworks, your enterprise must synchronize its governance protocols with latest state compliance mandates.`,
                sources: attachedFile ? ['UPLOADED_DOSSIER', 'LEXARCHITECT_PROTOCOL_v4'] : ['STATUTORY DOC v4.2', 'JURISDICTIONAL NODE REF'],
                points: [
                    'Surgical refinement of liability caps required.',
                    'Data sovereignty node breach detected in current draft.',
                    'Procedural alignment with regional arbitration norms recommended.'
                ]
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 2000);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAttachedFile(file);
        }
    };

    const triggerFileSelect = () => {
        setShowAttachmentMenu(false);
        fileInputRef.current?.click();
    };

    const handleSimulatedAttach = (fileName) => {
        setAttachedFile({ name: fileName, simulated: true });
        setShowAttachmentMenu(false);
    };

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
                            <Icon name="smart_toy" size={24} className="text-primary" />
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
                            {messages.map((msg) => (
                                <div key={msg.id}>
                                    {msg.type === 'ai' ? (
                                        <div className="flex gap-8 max-w-[1200px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                                            <Icon name="psychology" size={32} className="text-primary" />
                                            <div className="space-y-6 flex-1">
                                                <div className="bg-white border border-clinical p-8 rounded-sm shadow-clinical-hover relative overflow-hidden group">
                                                    <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
                                                    {msg.title && <h2 className="font-headline text-xl font-bold text-primary mb-4 relative z-10">{msg.title}</h2>}
                                                    <p className={`text-sm text-primary/70 leading-relaxed font-body relative z-10 ${!msg.isWelcome ? 'italic' : ''}`}>
                                                        {msg.text}
                                                    </p>
                                                    
                                                    {msg.points && (
                                                        <div className="space-y-4 border-l-2 border-secondary/20 pl-6 my-6">
                                                            {msg.points.map((p, i) => (
                                                                <div key={i} className="flex gap-3 text-xs text-primary/60 font-medium">
                                                                    <Icon name="check" size={14} className="text-secondary" />
                                                                    {p}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {msg.sources && (
                                                        <div className="mt-8 pt-6 border-t border-clinical">
                                                            <p className="text-[10px] font-bold text-primary/20 uppercase tracking-[0.2em] mb-4">REFERENTIAL SOURCES</p>
                                                            <div className="flex flex-wrap gap-3">
                                                                {msg.sources.map((s, i) => (
                                                                    <span key={i} className="px-0 py-1 text-primary text-[9px] font-bold flex items-center gap-2">
                                                                        <Icon name="menu_book" size={12} className="text-secondary" /> {s}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {msg.isWelcome && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {[
                                                            { cat: 'Drafting', label: 'Generate LLC Operating Agreement', icon: 'draw' },
                                                            { cat: 'Analysis', label: 'Audit IP Infringement Risks', icon: 'verified_user' },
                                                            { cat: 'Compliance', label: 'GDPR Data Processing Protocol', icon: 'policy' },
                                                            { cat: 'Strategy', label: 'M&A Asset Allocation Review', icon: 'account_balance' }
                                                        ].map((node, i) => (
                                                            <button 
                                                                key={i} 
                                                                onClick={() => handleSendMessage(node.label)}
                                                                className="text-left p-5 bg-white border border-clinical rounded-sm shadow-clinical hover:shadow-clinical-hover hover:-translate-y-1 transition-all group flex items-center justify-between"
                                                            >
                                                                <div>
                                                                    <p className="text-[9px] font-bold text-primary/20 mb-1 uppercase tracking-widest">{node.cat}</p>
                                                                    <p className="text-xs font-bold text-primary tracking-tight">{node.label}</p>
                                                                </div>
                                                                <Icon name={node.icon} size={16} className="text-primary/10 group-hover:text-secondary group-hover:opacity-100 transition-all" />
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex gap-8 max-w-[1200px] ml-auto flex-row-reverse animate-in fade-in slide-in-from-bottom-8 duration-700">
                                            <Icon name="person" size={32} className="text-primary/30" />
                                            <div className="bg-primary text-white p-8 rounded-sm shadow-clinical relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-white/5 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                                                {msg.attachment && (
                                                    <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-sm mb-4 border border-white/10">
                                                        <Icon name="description" size={14} className="text-secondary" />
                                                        <span className="text-[10px] font-bold uppercase tracking-widest">{msg.attachment}</span>
                                                    </div>
                                                )}
                                                <p className="text-sm font-bold tracking-tight relative z-10 leading-relaxed">{msg.text}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex gap-8 max-w-[1200px] animate-in fade-in duration-300">
                                    <Icon name="psychology" size={32} className="text-primary" />
                                    <div className="flex items-center gap-4 px-2 animate-pulse">
                                        <div className="flex gap-1.5">
                                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                            <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                        </div>
                                        <span className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">LEGALSITE IS ANALYZING NODES...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/*  Input Area  */}
                        <div className="p-10 border-t border-clinical bg-white/80 backdrop-blur-md relative z-30">
                            <div className="max-w-[1200px] mx-auto relative group">
                                {/* Staged File Preview */}
                                {attachedFile && (
                                    <div className="absolute -top-16 left-0 flex items-center gap-4 bg-white border border-clinical p-3 rounded-sm shadow-clinical animate-in slide-in-from-bottom-2 duration-300">
                                        <div className="flex items-center gap-2">
                                            <Icon name="description" size={16} className="text-secondary" />
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{attachedFile.name}</span>
                                        </div>
                                        <button 
                                            onClick={() => setAttachedFile(null)}
                                            className="p-1 hover:bg-slate-50 rounded-full transition-colors"
                                        >
                                            <Icon name="close" size={14} className="text-primary/40" />
                                        </button>
                                    </div>
                                )}

                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    className="hidden" 
                                    onChange={handleFileChange}
                                />
                                
                                <textarea 
                                    className="w-full bg-white border border-clinical shadow-clinical focus:shadow-clinical-hover focus:ring-1 focus:ring-primary rounded-sm p-6 pr-40 text-sm font-body placeholder:text-primary/20 resize-none transition-all" 
                                    placeholder="Enter legal prompt or specify legal dossier to audit..." 
                                    rows="1"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage();
                                        }
                                    }}
                                ></textarea>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-4">
                                    {/* Attachment Palette Menu */}
                                    {showAttachmentMenu && (
                                        <div className="absolute bottom-20 right-0 bg-white/95 backdrop-blur-xl border border-clinical shadow-[0_30px_60px_rgba(0,0,0,0.15)] rounded-sm p-3 w-80 z-50 animate-in slide-in-from-bottom-4 duration-300">
                                            <div className="px-4 py-3 border-b border-clinical mb-3">
                                                <p className="text-[9px] font-black text-primary/30 uppercase tracking-[0.3em]">ATTACHMENT PROTOCOL</p>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                {[
                                                    { label: 'Local Node', desc: 'Secure device upload', icon: 'file_upload', action: triggerFileSelect },
                                                    { label: 'Document Vault', desc: 'Encrypted platform storage', icon: 'lock', action: () => handleSimulatedAttach('Vault_Registry_Archive.pdf') },
                                                    { label: 'Entity Ledger', desc: 'Institutional firm records', icon: 'business_center', action: () => handleSimulatedAttach('Entity_Profile_Dossier.json') },
                                                    { label: 'Statute Map', desc: 'Jurisdictional legal codes', icon: 'gavel', action: () => handleSimulatedAttach('Statutory_Provision_Ref.pdf') }
                                                ].map((opt, i) => (
                                                    <button 
                                                        key={i}
                                                        onClick={opt.action}
                                                        className="flex items-center gap-5 p-4 hover:bg-primary/[0.03] rounded-sm transition-all group text-left border-l-2 border-transparent hover:border-secondary"
                                                    >
                                                        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-slate-50 rounded-sm text-primary/40 group-hover:text-secondary group-hover:bg-secondary/5 transition-all">
                                                            <Icon name={opt.icon} size={22} />
                                                        </div>
                                                        <div className="overflow-hidden">
                                                            <p className="text-[11px] font-bold text-primary uppercase tracking-widest leading-tight mb-2 truncate">{opt.label}</p>
                                                            <p className="text-[9px] text-primary/40 font-bold uppercase tracking-[0.15em] leading-snug">{opt.desc}</p>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <button 
                                        onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                                        className={`p-2 transition-colors ${attachedFile || showAttachmentMenu ? 'text-secondary' : 'text-primary/20 hover:text-primary'}`}
                                    >
                                        <Icon name="attach_file" size={20} />
                                    </button>
                                    <button 
                                        onClick={() => handleSendMessage()}
                                        className={`bg-primary text-white p-3 rounded-sm shadow-clinical transition-all ${!inputValue.trim() ? 'opacity-30 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
                                        disabled={!inputValue.trim()}
                                    >
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

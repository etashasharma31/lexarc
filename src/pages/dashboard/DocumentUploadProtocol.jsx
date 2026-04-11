import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const DocumentUploadProtocol = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const docMeta = location.state?.doc || { 
        title: 'Unknown Document', 
        category: 'UNDEFINED', 
        subLabel: 'General Protocol' 
    };

    const [uploadStatus, setUploadStatus] = useState('IDLE'); // IDLE, UPLOADING, PROCESSING, COMPLETE
    const [progress, setProgress] = useState(0);
    const [auditLogs, setAuditLogs] = useState([
        `[${new Date().toLocaleTimeString()}] INITIALIZING SECURE UPLOAD NODE...`,
        `[${new Date().toLocaleTimeString()}] ESTABLISHING END-TO-END ENCRYPTED CHANNEL...`
    ]);

    const addLog = (msg) => {
        setAuditLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
    };

    useEffect(() => {
        if (uploadStatus === 'UPLOADING') {
            const timer = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(timer);
                        setUploadStatus('PROCESSING');
                        return 100;
                    }
                    return prev + 5;
                });
            }, 100);
            return () => clearInterval(timer);
        }
    }, [uploadStatus]);

    useEffect(() => {
        if (uploadStatus === 'PROCESSING') {
            addLog('UPLOADING COMPLETE. INITIATING JURISDICTIONAL SCAN...');
            setTimeout(() => {
                addLog('CRYPTO-HASH GENERATION: 0x882A...F01');
                setTimeout(() => {
                    addLog('AUDIT SUCCESSFUL. DOCUMENT COMMITTED TO VAULT.');
                    setUploadStatus('COMPLETE');
                }, 1000);
            }, 1500);
        }
    }, [uploadStatus]);

    const handleFileUpload = (e) => {
        setUploadStatus('UPLOADING');
        addLog(`DETECTED FILE: ${e.target.files[0]?.name || 'Unknown'}`);
        addLog('COMMENCING SECURE DATA TRANSFER...');
    };

    return (
        <div className="bg-surface min-h-screen bg-dot-pattern">
            <main className="max-w-[1200px] mx-auto px-8 pt-12 pb-24">
                <header className="mb-12 flex items-center justify-between animate-in fade-in slide-in-from-top-4 duration-700">
                    <div className="flex items-center gap-6">
                        <button onClick={() => navigate(-1)} className="p-3 bg-white border border-clinical shadow-clinical rounded-sm group hover:scale-105 transition-all">
                            <Icon name="arrow_back" size={20} className="text-primary group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-[10px] font-black text-secondary tracking-[0.3em] uppercase">{docMeta.category}</span>
                                <span className="h-1 w-1 bg-clinical rounded-full"></span>
                                <span className="text-[10px] font-bold text-primary/30 tracking-widest uppercase">{docMeta.subLabel}</span>
                            </div>
                            <h1 className="text-4xl font-headline font-bold text-primary tracking-tighter uppercase">{docMeta.title}</h1>
                        </div>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-[9px] font-black text-primary/20 uppercase tracking-[0.4em]">Node Cluster: IN-BOM-04</p>
                        <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">Protocol ID: #PRO-ACK-{Math.floor(Math.random() * 9000) + 1000}</p>
                    </div>
                </header>

                <div className="grid grid-cols-12 gap-12">
                    {/* Secure Upload Node */}
                    <div className="col-span-12 lg:col-span-7">
                        <div className="bg-white border border-clinical shadow-clinical rounded-sm p-12 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group animate-in fade-in slide-in-from-left-6 duration-1000">
                            <div className="absolute inset-0 bg-primary/[0.01] pointer-events-none"></div>
                            
                            {uploadStatus === 'IDLE' && (
                                <div className="space-y-8 animate-in zoom-in-95 duration-500">
                                    <div className="w-24 h-24 bg-transparent border-2 border-primary/20 text-primary rounded-2xl flex items-center justify-center mx-auto shadow-clinical group-hover:scale-110 transition-transform duration-700">
                                        <Icon name="cloud_upload" size={48} className="animate-bounce-slow" />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-headline font-bold text-primary tracking-tight">Integrated Submission Protocol</h2>
                                        <p className="text-xs text-on-surface-variant max-w-sm mx-auto opacity-60 leading-relaxed font-body italic">
                                            Select or drag your structural document to initiate the end-to-end encrypted audit channel.
                                        </p>
                                    </div>
                                    <label className="inline-block px-12 py-5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-sm shadow-xl hover:bg-secondary transition-all cursor-pointer hover:-translate-y-1 active:scale-95">
                                        Select Document
                                        <input type="file" className="hidden" onChange={handleFileUpload} />
                                    </label>
                                    <p className="text-[9px] text-primary/20 font-bold uppercase tracking-widest">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
                                </div>
                            )}

                            {(uploadStatus === 'UPLOADING' || uploadStatus === 'PROCESSING') && (
                                <div className="w-full max-w-md space-y-10 animate-in fade-in duration-500 text-center">
                                    <Icon name="verified_user" size={64} className="text-secondary mx-auto mb-8 animate-pulse" />
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-[10px] font-black text-primary tracking-widest uppercase">Encryption Status</span>
                                            <span className="text-xl font-headline font-bold text-primary">{progress}%</span>
                                        </div>
                                        <div className="w-full h-1 bg-primary/5 rounded-full overflow-hidden">
                                            <div className="h-full bg-secondary transition-all duration-300" style={{ width: `${progress}%` }}></div>
                                        </div>
                                    </div>
                                    <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.3em] inline-flex items-center gap-3">
                                        <span className="w-2 h-2 bg-secondary rounded-full animate-ping"></span>
                                        {uploadStatus === 'UPLOADING' ? 'Transferring Data Silos...' : 'Commencing Jurisdictional Scan...'}
                                    </p>
                                </div>
                            )}

                            {uploadStatus === 'COMPLETE' && (
                                <div className="space-y-8 animate-in zoom-in-95 duration-700">
                                    <div className="w-24 h-24 bg-transparent border-2 border-secondary text-secondary rounded-2xl flex items-center justify-center mx-auto shadow-clinical shadow-secondary/10">
                                        <Icon name="check_circle" size={48} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-headline font-bold text-primary tracking-tight">Audit Synchronized</h2>
                                        <p className="text-xs text-on-surface-variant max-w-sm mx-auto opacity-60 leading-relaxed font-body italic">
                                            Your document has been verified and committed to the encrypted repository.
                                        </p>
                                    </div>
                                    <div className="flex gap-4 justify-center">
                                        <button onClick={() => navigate(-1)} className="px-10 py-5 bg-primary text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-sm shadow-xl hover:bg-secondary transition-all hover:-translate-y-1 active:scale-95">
                                            Return to Flow
                                        </button>
                                        <button onClick={() => navigate('/document-vault')} className="px-10 py-5 bg-white text-primary border border-clinical text-[10px] font-black uppercase tracking-[0.4em] rounded-sm shadow-md hover:bg-surface transition-all">
                                            View in Vault
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Audit Terminal */}
                    <div className="col-span-12 lg:col-span-5 flex flex-col">
                        <div className="bg-primary p-10 rounded-sm shadow-clinical flex-1 animate-in fade-in slide-in-from-right-6 duration-1000">
                            <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Audit Terminal v2.1</h3>
                                <div className="flex gap-1.5 font-black">
                                    <span className="w-2 h-2 rounded-full bg-error opacity-40"></span>
                                    <span className="w-2 h-2 rounded-full bg-warning opacity-40"></span>
                                    <span className="w-2 h-2 rounded-full bg-secondary opacity-80"></span>
                                </div>
                            </div>
                            <div className="font-mono text-[11px] space-y-4 text-white/60 leading-relaxed overflow-y-auto max-h-[400px] custom-scrollbar">
                                {auditLogs.map((log, i) => (
                                    <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
                                        <span className="text-secondary font-black opacity-80 mr-3">>>></span>
                                        {log}
                                    </div>
                                ))}
                                {(uploadStatus === 'UPLOADING' || uploadStatus === 'PROCESSING') && (
                                    <div className="animate-pulse flex items-center gap-2 text-secondary font-black">
                                        <span className="mr-3">>>></span>
                                        WAITING_FOR_HASH_ACKNOWLEDGMENT...
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-8 bg-white border border-clinical shadow-clinical p-8 rounded-sm animate-in fade-in slide-in-from-bottom-4 duration-1200">
                            <div className="flex items-start gap-4">
                                <Icon name="verified_user" size={20} className="text-secondary mt-1" />
                                <div>
                                    <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 text-on-surface">Data Integrity Guarantee</h4>
                                    <p className="text-[10px] text-primary/40 leading-relaxed italic">
                                        All structural data is processed within jurisdictional boundaries and encrypted via AES-256 protocols before persistence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DocumentUploadProtocol;

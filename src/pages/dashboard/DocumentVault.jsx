import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import { DASHBOARD_MENU_ITEMS } from '../../constants/navigation';

const DocumentVault = () => {
    const navigate = useNavigate();
    const [isDownloading, setIsDownloading] = useState(null); // stores index of downloading doc
    const [showToast, setShowToast] = useState(false);
    const [activeDocName, setActiveDocName] = useState('');

    const handleDownload = (doc, index) => {
        setIsDownloading(index);
        setActiveDocName(doc.name);
        // Simulate preparation delay
        setTimeout(() => {
            setIsDownloading(null);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 4000);
        }, 1500);
    };
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
                    <header className="mb-12 flex justify-between items-end">
                        <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                            <h1 className="text-5xl font-headline font-bold text-primary mb-2 tracking-tight">Document Vault</h1>
                            <p className="text-on-surface-variant max-w-md">Manage and securely share your legal certificates and structural agreements.</p>
                        </div>
                        <button 
                            onClick={() => navigate('/document-audit-protocol', { state: { doc: { title: 'Vault Asset Node', category: 'VAULT', subLabel: 'Secure Repository' } } })}
                            className="bg-primary text-on-primary px-10 py-4 text-[10px] font-bold uppercase tracking-[0.2em] shadow-clinical hover:-translate-y-1 transition-all active:scale-95 animate-in fade-in slide-in-from-right-4 duration-700"
                        >
                            Upload Asset
                        </button>
                    </header>

                    <div className="bg-white rounded-sm shadow-clinical border border-clinical overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <div className="grid grid-cols-12 p-6 bg-primary/[0.02] border-b border-clinical text-[9px] font-bold uppercase tracking-[0.2em] text-primary/40">
                            <div className="col-span-1"></div>
                            <div className="col-span-5">Structural Record</div>
                            <div className="col-span-2">Classification</div>
                            <div className="col-span-2">Date Verified</div>
                            <div className="col-span-2 text-right">Action</div>
                        </div>

                        <div className="divide-y divide-clinical">
                            {[
                                { name: 'Certificate_of_Incorporation.pdf', type: 'ENTITY CORE', date: 'Mar 12, 2024', icon: 'verified' },
                                { name: 'Shareholders_Agreement_Final.docx', type: 'C-SUITE', date: 'Mar 14, 2024', icon: 'gavel' },
                                { name: 'GST_Registration_Certificate.pdf', type: 'FISCAL', date: 'Mar 20, 2024', icon: 'payments' },
                                { name: 'Director_KYC_PAN_Aryan.pdf', type: 'PERSONNEL', date: 'Mar 22, 2024', icon: 'account_circle' },
                                { name: 'Trademark_Application_TM-48932.pdf', type: 'IP RIGHTS', date: 'Apr 02, 2024', icon: 'verified_user' }
                            ].map((doc, i) => (
                                <div key={i} className="grid grid-cols-12 p-6 items-center hover:bg-primary/[0.01] transition-all group cursor-pointer">
                                    <div className="col-span-1">
                                        <div className="w-8 h-8 bg-primary/[0.03] flex items-center justify-center rounded-sm text-primary/30 group-hover:text-primary transition-colors">
                                            <Icon name={doc.icon} size={18} />
                                        </div>
                                    </div>
                                    <div className="col-span-5">
                                        <span className="font-bold text-sm text-primary group-hover:underline">{doc.name}</span>
                                    </div>
                                    <div className="col-span-2 text-[10px] text-on-surface-variant font-bold tracking-widest opacity-60">{doc.type}</div>
                                    <div className="col-span-2 text-[10px] text-on-surface-variant opacity-40 font-bold">{doc.date}</div>
                                    <div className="col-span-2 text-right">
                                        <button 
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleDownload(doc, i);
                                            }}
                                            disabled={isDownloading !== null}
                                            className={`font-bold text-[10px] uppercase tracking-widest transition-all px-4 py-2 rounded-sm ${
                                                isDownloading === i 
                                                ? 'text-primary/40 animate-pulse' 
                                                : 'text-secondary hover:text-primary hover:bg-surface'
                                            }`}
                                        >
                                            {isDownloading === i ? 'Decrypting...' : 'Download'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    
    {/* Premium Toast Notification */}
    {showToast && (
        <div className="fixed bottom-12 right-12 z-[100] animate-bubble">
            <div className="glass-morphism px-8 py-6 rounded-xl shadow-clinical-hover border-secondary/20 flex items-center gap-6 max-w-md relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Icon name="verified" size={28} />
                </div>
                <div className="flex-1">
                    <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-1">Asset Synchronized</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                        {activeDocName} has been verified and released for local deployment.
                    </p>
                </div>
                <button 
                    onClick={() => setShowToast(false)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors opacity-30 hover:opacity-100 mr-[-8px]"
                >
                    <Icon name="close" size={16} />
                </button>
            </div>
        </div>
    )}
</div>
);
};

export default DocumentVault;

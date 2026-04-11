import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const ServiceDetailBusinessReg = () => {
    const navigate = useNavigate();

    const handleDocInteraction = (doc) => {
        navigate('/document-audit-protocol', { state: { doc } });
    };

    return (
        <div className="bg-surface min-h-screen pb-24 bg-dot-pattern">
            <main className="max-w-[1200px] mx-auto px-8 pt-8">
                {/*  Hero Section  */}
                <section className="relative py-24 overflow-hidden mb-24">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-8 h-[2px] bg-secondary"></div>
                                <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em]">CORPORATE STRATEGY</span>
                            </div>
                            <h1 className="text-7xl font-headline font-bold leading-none tracking-tighter text-primary mb-8">Business Registration.</h1>
                            <p className="text-xl text-primary/60 max-w-xl leading-relaxed font-body mb-12 italic">
                                Building your legal foundation with surgical precision. Secure your entity's future with our end-to-end digital counsel for Private Limited, LLP, and OPC setups.
                            </p>
                            <div className="flex items-center gap-10">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-headline font-bold text-primary tracking-tighter">15,000+</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/30 mt-2">Entities Formed</span>
                                </div>
                                <div className="w-px h-12 bg-clinical"></div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-headline font-bold text-primary tracking-tighter">100%</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/30 mt-2">Digital Protocol</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[550px] rounded-sm shadow-clinical-hover border border-clinical overflow-hidden group animate-in fade-in scale-95 duration-1000">
                            <img alt="Premium workspace" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIHyelq6hoDcpCIIHATttBAFLEHbSoWns9yvqkFPJsRJMMJ9PETS4FyWbMH7IiRTZWnzABKQHbAN3Ebe-_g2-Pqc22WbqH4F0RkDVExTDv6ByDaKKmauSB8QTzNU0AIb3TwtjL780AtRy0d3dl9_WDbPnZIoYhwnwLejFOeD3HuIbGK7T6js3cFGWeEevizEKhATPlYIW5uFpi8Mx8fzXxrJPNQ18F6rg9lfGr2qNM9jOyl82QDY6dMpGdkhGtpDhCRCrtQxcfkSE"/>
                            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    </div>
                </section>

                {/*  Multi-Step Process  */}
                <section className="py-24 bg-white shadow-clinical border border-clinical rounded-sm relative overflow-hidden mb-24 group">
                    <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
                    <div className="max-w-[1200px] mx-auto px-12 relative z-10">
                        <div className="mb-20">
                            <h2 className="text-3xl font-headline font-bold text-primary mb-4 tracking-tight">Three-Phase Execution Protocol</h2>
                            <p className="text-primary/40 text-sm font-bold uppercase tracking-widest">Our streamlined strategic approach to entry incorporation.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            {[
                                { step: '01', title: 'Discovery & Filings', status: 'Real-time', desc: 'Initial verification of DIN and digital signatures. We finalize name availability within 24 hours of onboarding.' },
                                { step: '02', title: 'Charter Drafting', status: '48 Hours', desc: "Bespoke drafting of MoA and AoA tailored to your industry's specific compliance requirements." },
                                { step: '03', title: 'Final Issuance', status: 'Completion', desc: 'Liaising with central registries for the Certificate of Incorporation, PAN, and TAN allotment in a single dossier.' }
                            ].map((item, i) => (
                                <div key={i} className={`p-10 ${i < 2 ? 'border-r border-clinical' : ''} group/item hover:bg-primary/[0.01] transition-colors relative`}>
                                    <div className="text-6xl font-headline font-black text-primary/[0.03] mb-8 group-hover/item:text-secondary group-hover/item:text-opacity-20 transition-all duration-700">{item.step}</div>
                                    <h3 className="text-xl font-headline font-bold text-primary mb-4 tracking-tight">{item.title}</h3>
                                    <p className="text-xs text-primary/40 leading-relaxed mb-8 font-body">{item.desc}</p>
                                    <div className="flex items-center text-primary font-bold text-[9px] uppercase tracking-[0.2em] opacity-40">
                                        <Icon name="verified" size={14} className="mr-2 text-secondary" />
                                        STATUS: {item.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/*  Document List  */}
                <section className="py-24 grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-24">
                    <div className="lg:col-span-7">
                        <h2 className="text-4xl font-headline font-bold text-primary mb-16 tracking-tight">Mandatory Documentation.</h2>
                        <div className="space-y-4">
                            {[
                                { title: 'Permanent Account Number (PAN)', subtitle: 'Identity Proof • Required for all Directors', icon: 'verified', category: 'IDENTITY PROOF' },
                                { title: 'Aadhaar Card / Passport', subtitle: 'Address Proof • KYC Verification', icon: 'fingerprint', category: 'ADDRESS PROOF' },
                                { title: 'Latest Utility Bill', subtitle: 'Office Proof • No-Objection Certificate', icon: 'receipt', category: 'OFFICE PROOF' },
                                { title: 'Director Photos', subtitle: 'Passport Size • High Resolution Scan', icon: 'account_circle', category: 'KYC ASSETS' },
                                { title: 'Digital Signature (DSC)', subtitle: 'Authorization • Class 3 Certificate', icon: 'draw', category: 'AUTHORIZATION' },
                                { title: 'MoA & AoA Instruments', subtitle: 'Statutory • Constitutional Documents', icon: 'description', category: 'STATUTORY' }
                            ].map((doc, i) => (
                                <button 
                                    key={i} 
                                    onClick={() => handleDocInteraction(doc)}
                                    className="w-full text-left flex items-center p-8 bg-white border border-clinical shadow-clinical rounded-sm group hover:translate-x-3 hover:border-secondary transition-all duration-500"
                                >
                                    <div className="flex items-center justify-center text-primary mr-8 transition-all">
                                        <Icon name={doc.icon} size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-[9px] font-black text-secondary tracking-widest uppercase">{doc.category}</span>
                                            <span className="h-0.5 w-0.5 bg-clinical rounded-full"></span>
                                            <span className="text-[9px] font-bold text-primary/20 tracking-widest uppercase truncate">{doc.subtitle.split(' • ')[1] || doc.subtitle}</span>
                                        </div>
                                        <h4 className="font-bold text-primary text-sm uppercase tracking-widest">{doc.title}</h4>
                                    </div>
                                    <Icon name="chevron_right" size={16} className="text-primary/10 group-hover:text-primary transition-colors" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="sticky top-32 bg-primary p-16 text-white rounded-sm shadow-clinical overflow-hidden group">
                            <Icon name="hub" size={200} className="absolute -right-20 -top-20 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                            <div className="relative z-10">
                                <h3 className="text-2xl font-headline font-bold mb-6 tracking-tight">Bespoke Consultation</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-12 italic">
                                    Every enterprise framework is unique. Consult with our senior legal council to determine the optimal structure for your vision.
                                </p>
                                <div className="space-y-8 mb-16 px-2">
                                    <div className="flex items-center space-x-6">
                                        <Icon name="schedule" size={24} className="text-secondary" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">15 Min Discovery Node</span>
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <Icon name="payments" size={24} className="text-secondary" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Transparent Fee Structure</span>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => navigate('/consultation-booking')}
                                    className="w-full bg-white text-primary font-black py-5 rounded-sm hover:bg-white/90 shadow-clinical-hover transition-all text-[10px] uppercase tracking-[0.3em]"
                                >
                                    Initiate Context
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  FAQs  */}
                <section className="py-24 border-t border-clinical">
                    <div className="max-w-[1200px] mx-auto">
                        <h2 className="text-center text-4xl font-headline font-bold text-primary mb-20 tracking-tight">Legal Clarifications.</h2>
                        <div className="space-y-4">
                            {[
                                { q: 'Which entity type is best for venture capital?', a: 'A Private Limited Company is universally preferred by investors due to its clear shareholding structure, ease of transferability, and established legal framework for equity financing.' },
                                { q: 'Can I register a business from my home address?', a: 'Yes, provided you have a valid No-Objection Certificate (NOC) from the property owner and utility bills in their name matching the address proof submitted.' },
                                { q: 'What is the timeline for GST registration?', a: 'GST registration typically takes 3-7 working days following the issuance of the Certificate of Incorporation, depending on state jurisdiction.' }
                            ].map((faq, i) => (
                                <details key={i} className="group bg-white border border-clinical shadow-clinical rounded-sm overflow-hidden transition-all duration-500">
                                    <summary className="flex justify-between items-center p-8 cursor-pointer list-none hover:bg-primary/[0.01] transition-colors">
                                        <span className="text-sm font-bold text-primary uppercase tracking-widest">{faq.q}</span>
                                        <Icon name="expand_more" size={20} className="text-primary/20 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="px-8 pb-8 text-xs text-primary/40 leading-relaxed max-w-2xl font-body italic border-t border-clinical pt-6">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServiceDetailBusinessReg;

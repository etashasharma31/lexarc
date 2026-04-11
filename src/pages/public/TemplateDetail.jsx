import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const TEMPLATES = {
    'msa-saas-india': {
        name: 'Master Services Agreement (SaaS India)',
        category: 'Commercial',
        complexity: 'Advanced',
        description: 'A comprehensive, practitioner-grade Master Services Agreement (MSA) specifically architected for B2B SaaS enterprises operating in the Indian jurisdiction. This document provides a robust framework for subscription-based software delivery, ensuring compliance with the Information Technology Act, 2000 and evolving data governance standards.',
        downloads: '2.1k',
        format: 'DOCX + PDF',
        icon: 'handshake',
        accentColor: '#1e4d8c',
        lastUpdated: 'Apr 2024',
        fileSize: '42KB',
        clauses: [
            { title: 'Scope of Subscription', text: 'Defines the non-exclusive, non-transferable right to access the SaaS platform, including user seat limitations and jurisdictional restrictions.' },
            { title: 'SLA & Uptime Guarantees', text: 'Detailed service level objectives (SLOs), maintenance windows, and service credit protocols for downtime incidents.' },
            { title: 'Data Processing Addendum', text: 'Compliant with DPDP Act 2023 principles, covering data localization, breach notification, and processor obligations.' },
            { title: 'Intellectual Property Ownership', text: 'Clear distinction between Provider IP, Customer Data, and derived analytical insights.' },
            { title: 'Liability & Indemnification', text: 'Balanced liability caps, exclusion of consequential damages, and robust IP infringement indemnity.' }
        ],
        regulatoryBasis: [
            { law: 'Information Technology Act, 2000', context: 'Governing electronic contracts and digital signatures.' },
            { law: 'DPDP Act, 2023', context: 'Alignment with modern data fiduciary obligations.' },
            { law: 'Indian Contract Act, 1872', context: 'Foundational framework for offer, acceptance, and consideration.' }
        ]
    },
    'mutual-nda-india': {
        name: 'Mutual Non-Disclosure Agreement (India)',
        category: 'Corporate',
        complexity: 'Foundational',
        description: 'A standard-form bilateral Non-Disclosure Agreement (NDA) designed for Indian businesses engaging in sensitive discussions. It provides a surgically precise definition of Confidential Information and robust return obligations, aligned with the Indian Contract Act, 1872.',
        downloads: 'Essential',
        format: 'DOCX + PDF',
        icon: 'lock_outline',
        accentColor: '#065f46',
        lastUpdated: 'Mar 2024',
        fileSize: '28KB',
        clauses: [
            { title: 'Confidentiality Scope', text: 'Broad yet precise definition of information subject to non-disclosure, including oral and written communications.' },
            { title: 'Term & Survival', text: 'A 3-year confidentiality term with survival markers for trade secrets and proprietary algorithms.' },
            { title: 'Permitted Disclosure', text: 'Exceptions for legal orders, professional advisors, and information already in the public domain.' },
            { title: 'Return of Materials', text: 'Mandatory destruction or return of physical and digital assets upon termination of discussions.' }
        ],
        regulatoryBasis: [
            { law: 'Indian Contract Act, 1872', context: 'Enforceability of restrictive covenants.' },
            { law: 'Specific Relief Act, 1963', context: 'Grounds for seeking injunctive relief against data leaks.' }
        ]
    },
    'founders-agreement': {
        name: "Founders Agreement — Pvt Ltd",
        category: 'Startup',
        complexity: 'Expert',
        description: "A foundational governance document for co-founders of Indian Private Limited companies. This agreement mitigates future disputes by codifying equity vesting, IP assignment, roles & responsibilities, and clear exit/buy-out protocols.",
        downloads: '1.8k',
        format: 'DOCX + PDF',
        icon: 'groups',
        accentColor: '#7c3aed',
        lastUpdated: 'Feb 2024',
        fileSize: '56KB',
        clauses: [
            { title: 'Equity Vesting', text: 'Standard 4-year vesting schedule with a 1-year cliff and double-trigger acceleration on exit.' },
            { title: 'IP Assignment', text: 'Irrevocable transfer of all pre-incorporation and future intellectual property from founders to the Company entity.' },
            { title: 'Reserved Matters', text: 'List of strategic board decisions requiring unanimous co-founder approval.' },
            { title: 'Non-Compete & Non-Solicit', text: 'Reasonable restrictive covenants to protect the company nodes during and post-founder tenure.' }
        ],
        regulatoryBasis: [
            { law: 'Companies Act, 2013', context: 'Framework for share issuance and director obligations.' },
            { law: 'FEMA Regulations', context: 'Considerations for non-resident founders and FDI compliance.' }
        ]
    }
};

const TemplateDetail = () => {
    const { id } = useParams();
    const template = TEMPLATES[id] || TEMPLATES['msa-saas-india']; // Default to MSA if not found

    return (
        <main className="bg-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen pt-8 pb-24">
            <div className="max-w-[1200px] mx-auto px-8">
                
                {/* ── Breadcrumbs ── */}
                <nav className="flex items-center gap-2 mb-12 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <Link to="/templates" className="hover:text-primary transition-colors">Templates</Link>
                    <Icon name="chevron_right" size={12} />
                    <span className="text-primary">{template.category}</span>
                    <Icon name="chevron_right" size={12} />
                    <span className="text-slate-300">Detail</span>
                </nav>

                {/* ── Hero Section ── */}
                <header className="mb-20">
                    <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white shadow-clinical border border-clinical rounded-sm">
                                    <Icon name={template.icon} size={40} style={{ color: template.accentColor }} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">Protocol ID: {id.toUpperCase()}</span>
                                    <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mt-1">{template.name}</h1>
                                </div>
                            </div>
                            <p className="text-on-surface-variant text-xl leading-relaxed opacity-80">
                                {template.description}
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-6 w-full lg:w-auto">
                            <div className="bg-white p-8 border border-clinical shadow-clinical rounded-sm flex items-center justify-between lg:min-w-[280px]">
                                <div>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Complexity</p>
                                    <p className="text-sm font-bold text-primary mt-1">{template.complexity}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Format</p>
                                    <p className="text-sm font-bold text-primary mt-1">{template.format}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* ── Content Column ── */}
                    <div className="lg:col-span-8 space-y-20">
                        {/* Key Clauses */}
                        <section>
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-2xl font-headline font-bold text-primary">Key Clauses & Provisions</h2>
                                <div className="flex-1 h-px bg-slate-100" />
                            </div>
                            <div className="space-y-6">
                                {template.clauses.map((clause, i) => (
                                    <div key={i} className="group p-8 bg-white border border-clinical shadow-clinical hover:border-secondary transition-all rounded-sm">
                                        <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-3 flex items-center gap-3">
                                            <span className="text-secondary opacity-30">0{i + 1}</span>
                                            {clause.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{clause.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Regulatory Compliance */}
                        <section>
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-2xl font-headline font-bold text-primary">Regulatory Alignment</h2>
                                <div className="flex-1 h-px bg-slate-100" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {template.regulatoryBasis.map((law, i) => (
                                    <div key={i} className="p-6 bg-slate-50/50 border border-clinical rounded-sm italic">
                                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-2">{law.law}</p>
                                        <p className="text-xs text-slate-500">{law.context}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* ── Sidebar ── */}
                    <aside className="lg:col-span-4 lg:sticky lg:top-8 h-fit">
                        <section className="bg-primary p-10 text-white shadow-clinical rounded-sm relative overflow-hidden group">
                            <Icon name="auto_awesome" size={140} className="absolute -bottom-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-1000" />
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-10">EXECUTION PROTOCOL</h3>
                            
                            <div className="space-y-10 relative z-10">
                                <button className="w-full bg-white text-primary py-5 text-[10px] font-black uppercase tracking-widest rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all">
                                    Download Assets
                                </button>
                                <Link to="/ai-assistant" className="w-full border border-white/20 text-white/80 py-5 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                                    Customize with AI <Icon name="bolt" size={14} className="text-secondary" />
                                </Link>
                                
                                <div className="pt-10 border-t border-white/10 space-y-4">
                                    <div className="flex justify-between text-[10px] font-bold opacity-40 uppercase tracking-widest">
                                        <span>File Size</span>
                                        <span>{template.fileSize}</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold opacity-40 uppercase tracking-widest">
                                        <span>Last Audit</span>
                                        <span>{template.lastUpdated}</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold opacity-40 uppercase tracking-widest">
                                        <span>Security</span>
                                        <span className="text-secondary">Verified</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="mt-12 p-10 border border-clinical rounded-sm">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30 mb-8">Related Documents</h3>
                            <div className="space-y-6">
                                <Link to="/templates/mutual-nda-india" className="block group">
                                    <p className="text-xs font-bold text-primary group-hover:text-secondary transition-colors underline decoration-primary/10 group-hover:decoration-secondary">Mutual NDA (India)</p>
                                    <p className="text-[9px] text-slate-400 uppercase mt-1">Institutional NDA Standard</p>
                                </Link>
                                <Link to="/templates/founders-agreement" className="block group">
                                    <p className="text-xs font-bold text-primary group-hover:text-secondary transition-colors underline decoration-primary/10 group-hover:decoration-secondary">Founders Agreement</p>
                                    <p className="text-[9px] text-slate-400 uppercase mt-1">Vesting & IP Protocols</p>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>

            </div>
        </main>
    );
};

export default TemplateDetail;

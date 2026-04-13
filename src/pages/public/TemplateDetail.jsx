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
    },
    'TMP-001': {
        name: 'Global NDA (Bilateral)',
        category: 'Corporate',
        complexity: 'Foundational',
        description: 'A versatile, cross-border Non-Disclosure Agreement for bilateral information exchange. Optimized for neutrality, it protects sensitive commercial data while maintaining standard exceptions for legal disclosure.',
        downloads: '3.4k',
        format: 'DOCX',
        icon: 'description',
        accentColor: '#1e4d8c',
        lastUpdated: 'Apr 2024',
        fileSize: '32KB',
        clauses: [
            { title: 'Information Perimeter', text: 'Specific identification of confidential data nodes across technical, financial, and strategic domains.' },
            { title: 'Usage Restrictions', text: 'Strict prohibition on reverse-engineering or secondary exploitation of disclosed assets.' },
            { title: 'Jurisdictional Choice', text: 'Neutral venue selection for dispute resolution via institutional arbitration.' }
        ],
        regulatoryBasis: [
            { law: 'Indian Contract Act', context: 'Standard privacy protections.' },
            { law: 'Global Data Standards', context: 'Alignment with international secrecy protocols.' }
        ]
    },
    'TMP-042': {
        name: 'Advisor Board Agreement',
        category: 'Governance',
        complexity: 'Intermediate',
        description: 'Structured framework for formalizing advisory relationships. Covers compensation (equity/cash mix), confidentiality, and the distinct non-fiduciary nature of the advisor role.',
        downloads: '840+',
        format: 'DOCX + PDF',
        icon: 'people',
        accentColor: '#0ea5e9',
        lastUpdated: 'Jan 2024',
        fileSize: '35KB',
        clauses: [
            { title: 'Service Nodes', text: 'Granular definition of advisory commitments, including meeting cadence and availability.' },
            { title: 'Equity Grants', text: 'Standard advisor stock option (ASO) language with performance-linked vesting hooks.' },
            { title: 'Conflict of Interest', text: 'Detailed protocols for managing competing advisory roles in the same vertical.' }
        ],
        regulatoryBasis: [
            { law: 'IT Act, 2000', context: 'Digital acceptance protocols.' },
            { law: 'Income Tax Act', context: 'TDS implications for cash-based retainers.' }
        ]
    },
    'TMP-109': {
        name: 'Intellectual Property Assignment',
        category: 'IP',
        complexity: 'Advanced',
        description: 'Direct transfer of economic rights in creative or technical works. Essential for capturing IP generated by third-party contractors or before formal corporate incorporation.',
        downloads: '1.2k',
        format: 'DOCX',
        icon: 'copyright',
        accentColor: '#059669',
        lastUpdated: 'Mar 2024',
        fileSize: '30KB',
        clauses: [
            { title: 'Absolute Assignment', text: 'Irrevocable, worldwide transfer of all copyright, moral rights, and trade patterns.' },
            { title: 'Moral Rights Waiver', text: 'Waiver of paternity and integrity rights to enable full commercial exploitation.' },
            { title: 'Further Assurances', text: 'Obligation on assignor to execute additional filings at IP offices as needed.' }
        ],
        regulatoryBasis: [
            { law: 'Copyright Act, 1957', context: 'Section 19 requirements for written assignment.' },
            { law: 'Patents Act, 1970', context: 'Formalities for transfer of patentable inventions.' }
        ]
    },
    'TMP-201': {
        name: 'Series Seed Term Sheet',
        category: 'Investment',
        complexity: 'Expert',
        description: 'Industry-standard term sheet for early-stage equity funding. Establishes commercial anchors for valuation, liquidation preference, and governance control.',
        downloads: 'Featured',
        format: 'DOCX + PDF',
        icon: 'trending_up',
        accentColor: '#7c3aed',
        lastUpdated: 'Apr 2024',
        fileSize: '48KB',
        clauses: [
            { title: 'Valuation & Dilution', text: 'Specific pre-money targets and unissued ESOP pool accounting.' },
            { title: 'Liquidation Preference', text: '1x non-participating preferred equity structure overview.' },
            { title: 'Governance Rights', text: 'Board representation and reserved matter veto lists.' }
        ],
        regulatoryBasis: [
            { law: 'SEBI Regulations', context: 'AIF and Angel fund investment parameters.' },
            { law: 'FEMA NDI Rules', context: 'Foreign investment pricing compliance.' }
        ]
    },
    'TMP-015': {
        name: 'Articles of Incorporation',
        category: 'Corporate',
        complexity: 'Foundational',
        description: 'The definitive constitutional document for an Indian Private Limited Company. Codifies internal management rules, share transfer restrictions, and board powers.',
        downloads: 'Institutional',
        format: 'DOCX',
        icon: 'apartment',
        accentColor: '#1e293b',
        lastUpdated: 'Apr 2024',
        fileSize: '65KB',
        clauses: [
            { title: 'Share Transfer Restriction', text: 'ROFR and ROFO protocols for private equity maintenance.' },
            { title: 'Board Composition', text: 'Quorum requirements and chairman casting vote provisions.' },
            { title: 'Insolvency Protocols', text: 'Procedural rules for winding up or capital restructuring.' }
        ],
        regulatoryBasis: [
            { law: 'Companies Act, 2013', context: 'Table F compliance architecture.' },
            { law: 'MCA Portal V3', context: 'E-filing compatibility standards.' }
        ]
    },
    'TMP-088': {
        name: 'Shareholder Loan Agreement',
        category: 'Finance',
        complexity: 'Intermediate',
        description: 'Loan architecture for capital injection by founders or shareholders. Designed to maintain tax efficiency and clear repayment hierarchies.',
        downloads: '920+',
        format: 'DOCX',
        icon: 'account_balance',
        accentColor: '#b45309',
        lastUpdated: 'Feb 2024',
        fileSize: '40KB',
        clauses: [
            { title: 'Interest Architecture', text: 'Market-linked interest rate capping for Arm\'s Length compliance.' },
            { title: 'Repayment Trigger', text: 'Subordination clauses to senior debt and milestone-linked liquidity triggers.' },
            { title: 'Convertibility', text: 'Optional clauses for debt-to-equity swap during future funding rounds.' }
        ],
        regulatoryBasis: [
            { law: 'Income Tax Rules', context: 'Related party transaction disclosure.' },
            { law: 'Companies Act §186', context: 'Compliance with inter-corporate loan limits.' }
        ]
    }
};

const TemplateDetail = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = React.useState('overview');
    const [isDownloading, setIsDownloading] = React.useState(false);
    const template = TEMPLATES[id] || TEMPLATES['msa-saas-india'];

    const [showToast, setShowToast] = React.useState(false);

    const handleDownload = () => {
        setIsDownloading(true);
        // Simulate a preparation and download process
        setTimeout(() => {
            setIsDownloading(false);
            setShowToast(true);
            // Hide toast after 4 seconds
            setTimeout(() => setShowToast(false), 4000);
        }, 2000);
    };

    return (
        <main className="bg-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen pt-8 pb-24">
            <div className="max-w-[1200px] mx-auto px-8">
                
                {/* ── Breadcrumbs ── */}
                <nav className="flex items-center gap-3 mb-16 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400/60 animate-bubble">
                    <Link to="/templates" className="hover:text-secondary transition-colors flex items-center gap-2">
                        <Icon name="folder" size={12} />
                        Templates
                    </Link>
                    <Icon name="chevron_right" size={10} className="opacity-30" />
                    <span className="text-primary/40">{template.category} Node</span>
                    <Icon name="chevron_right" size={10} className="opacity-30" />
                    <span className="text-secondary/80">Asset Analysis</span>
                </nav>

                {/* ── Hero Section ── */}
                <header className="mb-24 animate-bubble" style={{ animationDelay: '0.1s' }}>
                    <div className="flex flex-col lg:flex-row gap-16 lg:items-end justify-between">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-4 bg-white shadow-clinical border-clinical rounded-lg group-hover:scale-105 transition-transform">
                                    <Icon name={template.icon} size={48} style={{ color: template.accentColor }} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/40">Protocol Node ID: {id.toUpperCase()}</span>
                                        <span className="h-1.5 w-1.5 rounded-full bg-secondary-container animate-pulse-soft" />
                                    </div>
                                    <h1 className="text-4xl lg:text-5xl font-headline font-black text-primary tracking-tight leading-[1.1]">{template.name}</h1>
                                </div>
                            </div>
                            <p className="text-on-surface-variant text-xl leading-relaxed opacity-70 font-medium">
                                {template.description}
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-6 w-full lg:w-auto">
                            <div className="bg-white/50 backdrop-blur-sm p-8 border-clinical shadow-clinical rounded-lg flex items-center justify-between lg:min-w-[360px] relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-secondary/10 group-hover:bg-secondary/30 transition-colors" />
                                <div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5">Complexity</p>
                                    <p className="text-sm font-black text-primary uppercase">{template.complexity}</p>
                                </div>
                                <div className="text-center px-6 border-l border-slate-100">
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5">Metrics</p>
                                    <p className="text-sm font-black text-primary uppercase">{template.downloads}</p>
                                </div>
                                <div className="text-right border-l border-slate-100 pl-6">
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1.5">Asset Type</p>
                                    <p className="text-sm font-black text-primary uppercase">{template.format.split('+')[0]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* ── Content Column ── */}
                    <div className="lg:col-span-8">
                        {/* Tabs */}
                        <div className="flex gap-12 border-b border-slate-100 mb-16 px-2">
                            {['overview', 'clause-preview'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-5 text-[10px] font-black uppercase tracking-[0.3em] border-b-2 transition-all duration-300 relative ${
                                        activeTab === tab 
                                        ? 'border-secondary text-primary' 
                                        : 'border-transparent text-slate-400 hover:text-primary hover:border-slate-200'
                                    }`}
                                >
                                    {tab.replace('-', ' ')}
                                    {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary animate-bubble" />}
                                </button>
                            ))}
                        </div>

                        {activeTab === 'overview' ? (
                            <div className="space-y-20">
                                {/* Key Provisions */}
                                <section className="animate-bubble" style={{ animationDelay: '0.2s' }}>
                                    <div className="flex items-center gap-6 mb-12">
                                        <h2 className="text-3xl font-headline font-black text-primary">Strategic Provisions</h2>
                                        <div className="flex-1 h-px bg-slate-100" />
                                        <Icon name="verified" size={20} className="text-secondary opacity-30" />
                                    </div>
                                    <div className="space-y-8">
                                        {template.clauses.map((clause, i) => (
                                            <div key={i} className="group p-10 bg-white border-clinical shadow-clinical hover:shadow-clinical-hover hover:border-secondary/20 transition-all duration-500 rounded-lg relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-50 group-hover:bg-secondary/10 transition-colors" />
                                                <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-4">
                                                    <span className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-secondary/40 scale-90 group-hover:scale-100 group-hover:bg-secondary/5 transition-all duration-500">
                                                        {i + 1}
                                                    </span>
                                                    {clause.title}
                                                </h3>
                                                <p className="text-slate-500 text-sm leading-relaxed px-12 group-hover:text-slate-700 transition-colors">{clause.text}</p>
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
                        ) : (
                            <section className="bg-white p-12 rounded-lg border-clinical shadow-clinical font-mono text-sm leading-loose text-slate-700 relative overflow-hidden animate-bubble">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12">
                                    <Icon name="gavel" size={240} />
                                </div>
                                <div className="relative z-10 space-y-10">
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-8 mb-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Draft Protocol Preview v4.2</p>
                                        <div className="flex gap-2">
                                            <div className="h-2 w-2 rounded-full bg-slate-100" />
                                            <div className="h-2 w-2 rounded-full bg-slate-100" />
                                            <div className="h-2 w-2 rounded-full bg-slate-100" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-6 max-w-2xl">
                                        <p className="font-black underline uppercase tracking-widest text-primary text-xs">Article 1: {template.clauses[0].title}</p>
                                        <p className="opacity-80">The parties hereby agree that the <span className="bg-secondary/5 px-1 font-bold">{template.name}</span> shall be governed by the standard procedural norms as established under the relevant {template.category} frameworks of the jurisdiction chosen by the First Party.</p>
                                        <p className="opacity-80">Subject to the provisions of <span className="underline decoration-secondary/30 underline-offset-4">{template.regulatoryBasis[0].law}</span>, this agreement constitutes a binding obligation of both parties from the date of execution.</p>
                                        <p className="opacity-50 italic">... proprietary clauses redacted for protocol security ...</p>
                                    </div>

                                    <div className="h-64 bg-gradient-to-b from-transparent via-white/80 to-white absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center pt-24 px-12 text-center pointer-events-none">
                                        <div className="glass-morphism px-8 py-5 rounded-lg shadow-clinical flex flex-col items-center gap-3 animate-bubble pointer-events-auto">
                                            <Icon name="lock" size={24} className="text-secondary/40" />
                                            <div>
                                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] block mb-1">Asset Node Locked</span>
                                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Full Protocol Reserved for Authorized Download</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* ── Sidebar ── */}
                    <aside className="lg:col-span-4 lg:sticky lg:top-12 h-fit space-y-8 animate-bubble" style={{ animationDelay: '0.4s' }}>
                        <section className="bg-primary p-12 text-white shadow-clinical-hover rounded-xl relative overflow-hidden group">
                            <Icon name="auto_awesome" size={180} className="absolute -bottom-16 -right-16 opacity-[0.08] group-hover:rotate-12 group-hover:scale-110 transition-all duration-[2s]" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-12 opacity-50">
                                    <span className="h-1.5 w-1.5 rounded-full bg-secondary-container" />
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Node Execution</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    <button 
                                        onClick={handleDownload}
                                        disabled={isDownloading}
                                        className={`w-full bg-white text-primary py-6 text-[11px] font-black uppercase tracking-[0.2em] rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        {isDownloading ? (
                                            <>
                                                <Icon name="refresh" size={16} className="animate-spin" />
                                                Preparing Node...
                                            </>
                                        ) : (
                                            'Download Protocol'
                                        )}
                                    </button>
                                    <Link to="/ai-assistant" className="w-full border border-white/10 glass-satin py-6 text-[11px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3 group/ai">
                                        AI Reconstruction <Icon name="bolt" size={16} className="text-secondary-fixed group-hover/ai:scale-125 transition-transform" />
                                    </Link>
                                    
                                    <div className="pt-12 mt-4 border-t border-white/5 space-y-5">
                                        <div className="flex justify-between items-center text-[10px] font-bold opacity-40 uppercase tracking-[0.2em]">
                                            <span>Asset Integrity</span>
                                            <span className="text-secondary-fixed font-black">100% Secure</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] font-bold opacity-40 uppercase tracking-[0.2em]">
                                            <span>VCS Version</span>
                                            <span>v{new Date().getFullYear()}.04.R2</span>
                                        </div>
                                        <div className="flex justify-between items-center text-[10px] font-bold opacity-40 uppercase tracking-[0.2em]">
                                            <span>Verification</span>
                                            <span className="bg-white/5 px-2 py-1 rounded">QC Passed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="mt-12 p-10 border border-clinical rounded-sm bg-white">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30 mb-8">Related Assets</h3>
                            <div className="space-y-6">
                                {Object.entries(TEMPLATES)
                                    .filter(([key]) => key !== id)
                                    .slice(0, 4)
                                    .map(([key, item]) => (
                                        <Link key={key} to={`/templates/${key}`} className="block group">
                                            <p className="text-xs font-bold text-primary group-hover:text-secondary transition-colors underline decoration-primary/10 group-hover:decoration-secondary">
                                                {item.name}
                                            </p>
                                            <p className="text-[9px] text-slate-400 uppercase mt-1">{item.category} Protocol</p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </aside>
                </div>

            </div>

            {/* Premium Toast Notification */}
            {showToast && (
                <div className="fixed bottom-12 right-12 z-[100] animate-bubble">
                    <div className="glass-morphism px-8 py-6 rounded-xl shadow-clinical-hover border-secondary/20 flex items-center gap-6 max-w-md relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary" />
                        <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                            <Icon name="check_box" size={28} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-1">Node Synchronized</h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                {template.name.split('(')[0]} protocol has been prepared for local deployment.
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
        </main>
    );
};

export default TemplateDetail;

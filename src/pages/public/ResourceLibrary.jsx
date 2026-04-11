import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const ALL_RESOURCES = [
    {
        id: 1,
        type: 'Guide',
        icon: 'article',
        title: 'Incorporating a Private Limited Company in India',
        desc: 'Step-by-step walkthrough for MCA registration, DIN, DSC, and ROC filings under the Companies Act 2013.',
        meta: 'Updated Apr 2024',
        metaLabel: 'Last Updated',
        tag: 'guide',
        tagColor: 'secondary',
        link: '/guides',
        linkLabel: 'View Guide',
    },
    {
        id: 2,
        type: 'Template',
        icon: 'description',
        title: 'Master Services Agreement (SaaS India)',
        desc: 'Fully customizable MSA draft for Indian B2B SaaS companies, compliant with the IT Act 2000.',
        meta: '2.1k Downloads',
        metaLabel: 'Popularity',
        tag: 'template',
        tagColor: 'tertiary',
        link: '/templates/msa-saas-india',
        linkLabel: 'View Template',
    },
    {
        id: 3,
        type: 'Statute',
        icon: 'menu_book',
        title: 'Digital Personal Data Protection Act, 2023',
        desc: 'Full text of the DPDP Act 2023 with annotations on obligations for data fiduciaries and processors.',
        meta: 'Legal Text',
        metaLabel: 'Type',
        tag: 'statute',
        tagColor: 'surface',
        link: '/statutes',
        linkLabel: 'View Statute',
    },
    {
        id: 4,
        type: 'Template',
        icon: 'contract_edit',
        title: 'Mutual Non-Disclosure Agreement (India)',
        desc: 'Standard bilateral NDA for Indian businesses, aligned with the Indian Contract Act 1872.',
        meta: 'Essential',
        metaLabel: 'Popularity',
        tag: 'template',
        tagColor: 'tertiary',
        link: '/templates/mutual-nda-india',
        linkLabel: 'View Template',
    },
    {
        id: 5,
        type: 'Guide',
        icon: 'library_books',
        title: 'ESOP Guide for Indian Startups',
        desc: "Founder-focused breakdown of employee stock option pools, vesting, and tax implications under India's SEBI & IT regulations.",
        meta: 'Jan 2024',
        metaLabel: 'Last Updated',
        tag: 'guide',
        tagColor: 'secondary',
        link: '/guides',
        linkLabel: 'View Guide',
    },
    {
        id: 6,
        type: 'Guide',
        icon: 'fact_check',
        title: 'GST Compliance Audit Checklist',
        desc: 'Internal protocol for reconciling GSTR-2B with GSTR-3B, managing ITC claims, and avoiding scrutiny notices.',
        meta: 'Monthly',
        metaLabel: 'Frequency',
        tag: 'guide',
        tagColor: 'secondary',
        link: '/guides',
        linkLabel: 'View Guide',
    },
    {
        id: 7,
        type: 'Statute',
        icon: 'gavel',
        title: 'Companies Act 2013 — Section 92 (Annual Return)',
        desc: 'Annotated text of Section 92 governing the filing of Annual Returns (MGT-7) with the Registrar of Companies.',
        meta: 'Legal Text',
        metaLabel: 'Type',
        tag: 'statute',
        tagColor: 'surface',
        link: '/statutes',
        linkLabel: 'View Statute',
    },
    {
        id: 8,
        type: 'Template',
        icon: 'description',
        title: 'Founders Agreement — Pvt Ltd',
        desc: 'Comprehensive founders agreement covering IP assignment, equity split, vesting, and exit clauses for Indian startups.',
        meta: '1.8k Downloads',
        metaLabel: 'Popularity',
        tag: 'template',
        tagColor: 'tertiary',
        link: '/templates/founders-agreement',
        linkLabel: 'View Template',
    },
    {
        id: 9,
        type: 'Guide',
        icon: 'article',
        title: 'Startup India DPIIT Recognition Guide',
        desc: 'How to apply for DPIIT recognition, claim 80-IAC tax exemption, and access Startup India benefits.',
        meta: 'Mar 2024',
        metaLabel: 'Last Updated',
        tag: 'guide',
        tagColor: 'secondary',
        link: '/guides',
        linkLabel: 'View Guide',
    },
];

const ITEMS_PER_PAGE = 6;
const TABS = ['All Resources', 'Guides', 'Templates', 'Statutes'];
const TAB_FILTER = { 'All Resources': null, 'Guides': 'guide', 'Templates': 'template', 'Statutes': 'statute' };

const tagBg = {
    secondary: 'text-secondary-fixed',
    tertiary: 'text-tertiary-fixed',
    surface: 'text-on-surface-variant',
};

const ResourceLibrary = () => {
    const [activeTab, setActiveTab] = useState('All Resources');
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = TAB_FILTER[activeTab]
        ? ALL_RESOURCES.filter(r => r.tag === TAB_FILTER[activeTab])
        : ALL_RESOURCES;

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleTab = (tab) => { setActiveTab(tab); setCurrentPage(1); };

    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) pages.push(i);
        return pages;
    };

    return (
        <React.Fragment>
            <main className="min-h-screen pt-8">
                <div className="max-w-[1200px] mx-auto px-8 pb-12">
                    {/* Hero Featured Section */}
                    <section className="mb-16">
                        <div className="relative h-[420px] w-full overflow-hidden flex items-center group rounded-sm">
                            <div className="absolute inset-0 z-0">
                                <img
                                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                    alt="Indian law library"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE_a7cAHIfW7ms8VYUSlftZC7ghwIEIl8ywZ2fEqMNdjzLVs24e_Im-1XfxTPm9fhlI3JbA435UQi12QdX2_6ejyKvJgnPyFjMR0Hvvybw5HCVSy29sNd_HQGdEVR6BNoqpKNPeCJNCqDBXm1fnDtpeWH8j3gsRQzETVybJug3fMfjvPhsC4SRBAGpLPxKyqR_617B0OHL4-XmazIvju2LrcNI5p1-om7Sa3OF66lm9X1pt5G6N9E6eDIAneIQIpU6NtJxinyYohM"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00152a] via-[#00152a]/80 to-transparent"></div>
                            </div>
                            <div className="relative z-10 px-16 max-w-2xl">
                                <span className="inline-block text-white px-0 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
                                    Editor's Choice
                                </span>
                                <h2 className="text-white text-5xl font-headline font-extrabold tracking-tight mb-6 leading-tight">
                                    DPDP Act 2023:<br />Compliance Framework
                                </h2>
                                <p className="text-slate-300 text-lg leading-relaxed mb-8 font-body">
                                    The definitive implementation guide for the Digital Personal Data Protection Act — built by senior Indian litigation partners.
                                </p>
                                <div className="flex space-x-4">
                                    <Link to="/guides" className="bg-white text-primary px-8 py-4 rounded-sm font-headline font-bold text-sm flex items-center hover:bg-slate-100 transition-colors">
                                        Read Guides
                                        <Icon name="arrow_forward" size={18} className="ml-2" />
                                    </Link>
                                    <Link to="/templates" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-headline font-bold text-sm hover:bg-white/10 transition-colors">
                                        View Templates
                                    </Link>
                                    <Link to="/statutes" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-headline font-bold text-sm hover:bg-white/10 transition-colors">
                                        Statutes
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Filters & Tabs */}
                    <section className="mb-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
                            <div className="space-y-4">
                                <h3 className="font-headline text-3xl font-bold tracking-tight text-primary">Asset Repository</h3>
                                <div className="flex space-x-6">
                                    {TABS.map(tab => (
                                        <button
                                            key={tab}
                                            onClick={() => handleTab(tab)}
                                            className={`text-sm font-bold pb-2 transition-colors border-b-2 ${
                                                activeTab === tab
                                                    ? 'text-primary border-primary'
                                                    : 'text-slate-400 border-transparent hover:text-primary'
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="relative">
                                    <select className="appearance-none bg-transparent border border-clinical/20 rounded-sm px-4 py-2.5 pr-10 text-xs font-bold text-primary focus:ring-1 focus:ring-primary cursor-pointer">
                                        <option>Jurisdiction: All</option>
                                        <option>India — Central</option>
                                        <option>India — State GST</option>
                                        <option>SEBI / RBI</option>
                                    </select>
                                    <Icon name="expand_more" size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                                <div className="relative">
                                    <select className="appearance-none bg-transparent border border-clinical/20 rounded-sm px-4 py-2.5 pr-10 text-xs font-bold text-primary focus:ring-1 focus:ring-primary cursor-pointer">
                                        <option>Complexity: Expert</option>
                                        <option>Advanced</option>
                                        <option>Intermediate</option>
                                        <option>Foundational</option>
                                    </select>
                                    <Icon name="expand_more" size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Resource Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
                        {paginated.length === 0 && (
                            <div className="col-span-3 flex items-center justify-center py-20 text-on-surface-variant">
                                <p className="text-sm font-bold uppercase tracking-widest opacity-40">No resources found in this category.</p>
                            </div>
                        )}
                        {paginated.map((res) => (
                            <div key={res.id} className="group bg-white p-8 border-none shadow-[0_12px_40px_rgba(23,28,31,0.04)] hover:shadow-[0_12px_40px_rgba(23,28,31,0.08)] transition-all flex flex-col h-full rounded-sm">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex items-center justify-center text-primary transition-colors">
                                        <Icon name={res.icon} size={28} />
                                    </div>
                                    <span className={`${tagBg[res.tagColor]} text-[10px] font-bold uppercase tracking-wider`}>
                                        {res.type}
                                    </span>
                                </div>
                                <h4 className="font-headline text-xl font-bold text-primary mb-4">{res.title}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 line-clamp-2">{res.desc}</p>
                                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{res.metaLabel}</span>
                                        <span className="text-xs font-medium text-slate-700">{res.meta}</span>
                                    </div>
                                    <Link to={res.link} className="flex items-center text-primary font-bold text-xs hover:gap-2 transition-all gap-1">
                                        {res.linkLabel || 'View File'}
                                        <Icon name="arrow_forward" size={14} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Pagination */}
                    <footer className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            Showing {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filtered.length)}–{Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)} of {filtered.length} assets
                        </p>
                        <div className="flex space-x-2">
                            {/* Prev */}
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="w-10 h-10 flex items-center justify-center bg-transparent text-slate-400 font-bold hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <Icon name="chevron_left" size={14} />
                            </button>

                            {/* Page Numbers */}
                            {getPageNumbers().map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-10 h-10 flex items-center justify-center font-bold transition-all rounded-sm text-sm ${
                                        currentPage === page
                                            ? 'text-primary font-black'
                                            : 'bg-transparent text-slate-400 hover:text-primary'
                                    }`}
                                >
                                    {page}
                                </button>
                            ))}

                            {/* Next */}
                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages || totalPages === 0}
                                className="w-10 h-10 flex items-center justify-center bg-transparent text-slate-400 font-bold hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                                <Icon name="chevron_right" size={14} />
                            </button>
                        </div>
                    </footer>
                </div>
            </main>
        </React.Fragment>
    );
};

export default ResourceLibrary;

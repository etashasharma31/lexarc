import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

/* ── Real Templates (from Resource Library) ─────────────────────────── */
const realTemplates = [
    {
        id: 'msa-saas-india',
        name: 'Master Services Agreement (SaaS India)',
        category: 'Commercial',
        complexity: 'Advanced',
        description: 'Fully customizable MSA draft for Indian B2B SaaS companies, compliant with the IT Act 2000. Covers SLA definitions, data processing addendum, IP ownership, and liability caps.',
        downloads: '2.1k',
        format: 'DOCX + PDF',
        icon: 'handshake',
        accentColor: '#1e4d8c',
        tags: ['IT Act 2000', 'SLA', 'IP Ownership', 'Data Addendum'],
        lastUpdated: 'Apr 2024',
    },
    {
        id: 'mutual-nda-india',
        name: 'Mutual Non-Disclosure Agreement (India)',
        category: 'Corporate',
        complexity: 'Foundational',
        description: 'Standard bilateral NDA for Indian businesses, aligned with the Indian Contract Act 1872. Includes confidential information definition, exclusions, return obligations, and 3-year term.',
        downloads: 'Essential',
        format: 'DOCX + PDF',
        icon: 'lock_outline',
        accentColor: '#065f46',
        tags: ['Contract Act 1872', 'Bilateral', '3-Year Term', 'Return Obligations'],
        lastUpdated: 'Mar 2024',
    },
    {
        id: 'founders-agreement',
        name: "Founders Agreement — Pvt Ltd",
        category: 'Startup',
        complexity: 'Expert',
        description: "Comprehensive founders agreement covering IP assignment, equity split, vesting schedule, non-compete, reserved matters, and exit clauses for Indian Pvt Ltd startups.",
        downloads: '1.8k',
        format: 'DOCX + PDF',
        icon: 'groups',
        accentColor: '#7c3aed',
        tags: ['IP Assignment', 'Equity Split', 'Vesting', 'Exit Clause'],
        lastUpdated: 'Feb 2024',
    },
];

/* ── Placeholder Templates ───────────────────────────────────────────── */
const placeholderTemplates = [
    { name: 'Global NDA (Bilateral)', category: 'Corporate', complexity: 'Foundational', id: 'TMP-001', icon: 'description' },
    { name: 'Advisor Board Agreement', category: 'Governance', complexity: 'Intermediate', id: 'TMP-042', icon: 'people' },
    { name: 'Intellectual Property Assignment', category: 'IP', complexity: 'Advanced', id: 'TMP-109', icon: 'copyright' },
    { name: 'Series Seed Term Sheet', category: 'Investment', complexity: 'Expert', id: 'TMP-201', icon: 'trending_up' },
    { name: 'Articles of Incorporation', category: 'Corporate', complexity: 'Foundational', id: 'TMP-015', icon: 'apartment' },
    { name: 'Shareholder Loan Agreement', category: 'Finance', complexity: 'Intermediate', id: 'TMP-088', icon: 'account_balance' },
];

const complexityBadge = {
    Foundational: 'border border-emerald-600/20 text-emerald-700',
    Intermediate: 'border border-amber-600/20 text-amber-700',
    Advanced: 'border border-orange-600/20 text-orange-700',
    Expert: 'border border-red-600/20 text-red-700',
};

/* ── REAL TEMPLATE CARD ────────────────────────────────────────────────── */
function RealTemplateCard({ tmpl }) {
    return (
        <div className="group bg-white border-clinical rounded-lg shadow-clinical hover:shadow-clinical-hover hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col relative">
            {/* Header bar */}
            <div className="px-8 pt-7 pb-6 relative">
                <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-lg opacity-80" style={{ backgroundColor: tmpl.accentColor }} />
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center justify-center p-2.5 bg-surface rounded-lg">
                        <Icon name={tmpl.icon} size={28} style={{ color: tmpl.accentColor }} />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                        <span className={`text-[10px] font-black uppercase tracking-[0.15em] px-2 py-1 rounded-sm ${complexityBadge[tmpl.complexity]}`}>
                            {tmpl.complexity}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{tmpl.category}</span>
                    </div>
                </div>
                <Link to={`/templates/${tmpl.id}`}>
                    <h3 className="font-headline text-xl font-bold text-primary leading-tight mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                        {tmpl.name}
                    </h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-2">{tmpl.description}</p>
            </div>

            {/* Tags */}
            <div className="px-8 pb-6 flex flex-wrap gap-2">
                {tmpl.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-slate-50 border border-slate-100" style={{ color: tmpl.accentColor }}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="px-8 py-5 border-t border-slate-50 bg-slate-50/30 mt-auto flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">DLs</p>
                        <p className="text-xs font-bold text-primary">{tmpl.downloads}</p>
                    </div>
                    <div className="h-6 w-px bg-slate-200" />
                    <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Format</p>
                        <p className="text-xs font-bold text-primary">{tmpl.format}</p>
                    </div>
                </div>
                <Link
                    to={`/templates/${tmpl.id}`}
                    className="inline-flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2.5 rounded-sm shadow-sm transition-all hover:scale-105 active:scale-95"
                    style={{ backgroundColor: tmpl.accentColor }}
                >
                    Extract <Icon name="arrow_forward" size={12} />
                </Link>
            </div>
        </div>
    );
}

/* ── PLACEHOLDER CARD ────────────────────────────────────────────────── */
function PlaceholderCard({ tmpl }) {
    return (
        <div className="group bg-white p-8 border-clinical rounded-lg shadow-clinical hover:shadow-clinical-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden bg-dot-pattern">
            <div className="flex justify-between items-start mb-8">
                <div className="flex items-center justify-center text-primary/40 group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
                    <Icon name={tmpl.icon} size={28} />
                </div>
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{tmpl.id}</span>
            </div>
            <Link to={`/templates/${tmpl.id}`} className="block flex-1">
                <h3 className="font-headline text-lg font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {tmpl.name}
                </h3>
            </Link>
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 bg-slate-50 border border-slate-100 rounded-sm">{tmpl.category}</span>
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm ${complexityBadge[tmpl.complexity]}`}>{tmpl.complexity}</span>
            </div>
            <Link to={`/templates/${tmpl.id}`} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors group/link">
                Review Protocol <Icon name="chevron_right" size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
}


/* ── MAIN COMPONENT ────────────────────────────────────────────────────── */
const Templates = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredReal = realTemplates.filter(tmpl => 
        tmpl.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tmpl.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tmpl.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const filteredPlaceholder = placeholderTemplates.filter(tmpl => 
        tmpl.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tmpl.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const hasResults = filteredReal.length > 0 || filteredPlaceholder.length > 0;
    return (
        <main className="bg-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen pt-12 pb-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 right-0 h-96 bg-dot-pattern opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 text-left">
                    <div className="max-w-2xl animate-bubble">
                        <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em] mb-4 block">Asset Node Architecture</span>
                        <h1 className="text-6xl font-headline font-black text-primary tracking-tight mb-6">Legal Templates</h1>
                        <p className="text-on-surface-variant text-xl leading-relaxed opacity-80">
                            High-fidelity document frameworks engineered for Indian jurisdiction. Vetted by senior partners for immediate deployment.
                        </p>
                    </div>
                    <div className="flex gap-4 flex-shrink-0 animate-bubble" style={{ animationDelay: '0.1s' }}>
                        <div className="bg-white border-clinical px-5 py-4 rounded-lg shadow-clinical flex items-center gap-4 group focus-within:ring-2 focus-within:ring-secondary/20 transition-all">
                            <Icon name="search" size={20} className="text-slate-400 group-hover:text-secondary transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Search repository..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border-none bg-transparent text-sm focus:ring-0 w-56 placeholder:text-slate-300 font-medium" 
                            />
                        </div>
                        <Link 
                            to="/document-audit-protocol" 
                            state={{ doc: { title: 'New Template Asset', category: 'REPOSITORY', subLabel: 'User Contribution' } }}
                            className="bg-primary text-white px-8 py-4 font-black text-[10px] uppercase tracking-[0.3em] rounded-lg shadow-clinical hover:bg-secondary transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3"
                        >
                            <Icon name="cloud_upload" size={16} />
                            Upload Asset
                        </Link>
                    </div>
                </div>

                {/* ── Section 1: Featured / Real Templates ─── */}
                {filteredReal.length > 0 && (
                    <section className="mb-16 animate-bubble">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-headline font-bold text-primary">Featured Templates</h2>
                                <p className="text-slate-400 text-sm mt-1">Most-downloaded, partner-drafted documents for Indian businesses.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {filteredReal.map(tmpl => <RealTemplateCard key={tmpl.id} tmpl={tmpl} />)}
                        </div>
                    </section>
                )}

                {!hasResults && (
                    <div className="py-24 text-center bg-white border border-clinical rounded-lg shadow-clinical animate-bubble">
                        <Icon name="search_off" size={48} className="text-slate-200 mx-auto mb-6" />
                        <h3 className="text-xl font-bold text-primary mb-2">No Protocols Synchronized</h3>
                        <p className="text-slate-400 text-sm uppercase tracking-widest">Adjust your search parameters for node retrieval.</p>
                    </div>
                )}

                {/* Divider */}
                {filteredReal.length > 0 && filteredPlaceholder.length > 0 && (
                    <div className="flex items-center gap-4 mb-10 animate-bubble">
                        <div className="flex-1 h-px bg-[rgba(0,21,42,0.07)]" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">More Templates</span>
                        <div className="flex-1 h-px bg-[rgba(0,21,42,0.07)]" />
                    </div>
                )}

                {/* ── Section 2: Extended Template Library ─── */}
                {filteredPlaceholder.length > 0 && (
                    <section className="animate-bubble">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {filteredPlaceholder.map((tmpl, i) => <PlaceholderCard key={i} tmpl={tmpl} />)}
                        </div>
                    </section>
                )}

            </div>
        </main>
    );
};

export default Templates;

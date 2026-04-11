import React from 'react';
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
        <div className="group bg-white border border-clinical rounded-sm shadow-clinical hover:shadow-clinical-hover transition-all duration-300 overflow-hidden flex flex-col">
            {/* Header bar */}
            <div className="px-7 pt-6 pb-5 relative">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-sm" style={{ backgroundColor: tmpl.accentColor }} />
                <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center justify-center">
                        <Icon name={tmpl.icon} size={32} style={{ color: tmpl.accentColor }} />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-0 py-0.5 ${complexityBadge[tmpl.complexity]}`}>
                            {tmpl.complexity}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{tmpl.category}</span>
                    </div>
                </div>
                <Link to={`/templates/${tmpl.id}`}>
                    <h3 className="font-headline text-xl font-bold text-primary leading-snug mb-3 group-hover:text-secondary transition-colors">
                        {tmpl.name}
                    </h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed">{tmpl.description}</p>
            </div>

            {/* Tags */}
            <div className="px-7 pb-5 flex flex-wrap gap-1.5">
                {tmpl.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-0 py-0.5" style={{ color: tmpl.accentColor }}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Footer */}
            <div className="px-7 py-5 border-t border-[rgba(0,21,42,0.06)] mt-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Downloads</p>
                        <p className="text-xs font-semibold text-slate-700 mt-0.5">{tmpl.downloads}</p>
                    </div>
                    <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Format</p>
                        <p className="text-xs font-semibold text-slate-700 mt-0.5">{tmpl.format}</p>
                    </div>
                </div>
                <Link
                    to={`/templates/${tmpl.id}`}
                    className="inline-flex items-center gap-1.5 text-white text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: tmpl.accentColor }}
                >
                    View Protocols
                </Link>
            </div>
        </div>
    );
}

/* ── PLACEHOLDER CARD ────────────────────────────────────────────────── */
function PlaceholderCard({ tmpl }) {
    return (
        <div className="group bg-white p-7 border border-clinical shadow-clinical hover:shadow-clinical-hover transition-all flex flex-col h-full relative overflow-hidden rounded-sm">
            <div className="flex justify-between items-start mb-7">
                <div className="flex items-center justify-center text-primary group-hover:text-secondary-fixed transition-colors">
                    <Icon name={tmpl.icon} size={28} />
                </div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{tmpl.id}</span>
            </div>
            <Link to={`/templates/${tmpl.id}`}>
                <h3 className="font-headline text-lg font-bold text-primary mb-4 group-hover:text-secondary transition-colors flex-1">
                    {tmpl.name}
                </h3>
            </Link>
            <div className="flex flex-wrap gap-2 mb-5">
                <span className="text-on-surface-variant text-[9px] font-bold uppercase">{tmpl.category}</span>
                <span className={`text-[9px] font-bold uppercase ${complexityBadge[tmpl.complexity]}`}>{tmpl.complexity}</span>
            </div>
            <Link to={`/templates/${tmpl.id}`} className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors">
                View Details <Icon name="chevron_right" size={14} />
            </Link>
        </div>
    );
}

/* ── MAIN COMPONENT ────────────────────────────────────────────────────── */
const Templates = () => {
    return (
        <main className="bg-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen pt-8 pb-24">
            <div className="max-w-[1200px] mx-auto px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
                    <div className="max-w-2xl">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Asset Repository</span>
                        <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mb-5">Legal Templates</h1>
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                            Structured legal documents ready for immediate deployment — drafted and verified by senior Indian legal partners.
                        </p>
                    </div>
                    <div className="flex gap-4 flex-shrink-0">
                        <div className="bg-white border border-clinical px-4 py-3 rounded-sm shadow-sm flex items-center gap-3">
                            <Icon name="search" size={18} className="text-primary" />
                            <input type="text" placeholder="Search templates..." className="border-none bg-transparent text-sm focus:ring-0 w-44" />
                        </div>
                    </div>
                </div>

                {/* ── Section 1: Featured / Real Templates ─── */}
                <section className="mb-16">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-2xl font-headline font-bold text-primary">Featured Templates</h2>
                            <p className="text-slate-400 text-sm mt-1">Most-downloaded, partner-drafted documents for Indian businesses.</p>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-primary text-white rounded-sm">{realTemplates.length} Documents</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {realTemplates.map(tmpl => <RealTemplateCard key={tmpl.id} tmpl={tmpl} />)}
                    </div>
                </section>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="flex-1 h-px bg-[rgba(0,21,42,0.07)]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">More Templates</span>
                    <div className="flex-1 h-px bg-[rgba(0,21,42,0.07)]" />
                </div>

                {/* ── Section 2: Extended Template Library ─── */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {placeholderTemplates.map((tmpl, i) => <PlaceholderCard key={i} tmpl={tmpl} />)}
                    </div>
                </section>

            </div>
        </main>
    );
};

export default Templates;

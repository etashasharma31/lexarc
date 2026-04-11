import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

/* ── Analysis Guides (deep-dive, slug-based pages) ─────────────────── */
const analysisGuides = [
    {
        slug: 'digital-privacy-act-2024-framework',
        title: 'Digital Privacy Act: 2024 Framework',
        author: 'Elena Volkov',
        authorTitle: 'Senior Partner, Data Governance',
        category: 'Compliance',
        readTime: '12 min',
        description:
            'Practitioner-grade breakdown of the DPDP Act 2023 — covering consent obligations, Data Principal rights, Significant Data Fiduciary classification, and penalty exposure up to ₹250 Crore per event.',
        highlights: ['DPDP Act 2023', 'Consent Architecture', '₹250 Cr Penalty Cap'],
        icon: 'security',
        accentColor: '#1e4d8c',
        bgGradient: 'from-[#e8f0fe] to-[#c7d9f7]',
        bgPattern: '🔐',
        stat: { value: '₹250Cr', label: 'Max Penalty' },
        tag: 'NEW',
    },
    {
        slug: 'strategizing-your-series-a',
        title: 'Strategizing Your Series A',
        author: 'Dr. Alistair Thorne',
        authorTitle: 'Managing Partner, Capital Markets',
        category: 'Investment',
        readTime: '25 min',
        description:
            'Term sheet anatomy, FEMA and RBI compliance for foreign investment, cap table structuring, anti-dilution mechanics, and surviving institutional due diligence in the Indian VC landscape.',
        highlights: ['Term Sheet Negotiation', 'FEMA Compliance', 'FC-GPR Filing'],
        icon: 'trending_up',
        accentColor: '#7c3aed',
        bgGradient: 'from-[#ede9fe] to-[#d4c7f8]',
        bgPattern: '📈',
        stat: { value: '$7.2M', label: 'Avg Series A (2024)' },
        tag: 'FEATURED',
    },
    {
        slug: 'ip-protection-age-of-ai',
        title: 'IP Protection in the Age of AI',
        author: 'Marcus Sterling',
        authorTitle: 'Head of IP & Technology Law',
        category: 'Intellectual Property',
        readTime: '18 min',
        description:
            'Where Indian patent law meets AI-generated invention, copyright in machine-authored works, training-data liability, and how to build a defensible trade secret portfolio for AI model weights.',
        highlights: ['AI Inventorship', 'Training Data Liability', 'Trade Secret Strategy'],
        icon: 'psychology',
        accentColor: '#065f46',
        bgGradient: 'from-[#d1fae5] to-[#a7f3d0]',
        bgPattern: '🤖',
        stat: { value: 'Section 3(k)', label: 'Key Exclusion' },
        tag: 'TRENDING',
    },
    {
        slug: 'modern-boardroom-protocol',
        title: 'The Modern Boardroom Protocol',
        author: 'Alistair Thorne',
        authorTitle: 'Managing Partner, Capital Markets',
        category: 'Governance',
        readTime: '15 min',
        description:
            'Independent director obligations, mandatory committee composition under Companies Act 2013, SEBI LODR compliance, and the governance culture that separates institutional-grade boards from checkbox compliance.',
        highlights: ['Independent Directors', 'SEBI LODR', 'Board Committees'],
        icon: 'domain',
        accentColor: '#92400e',
        bgGradient: 'from-[#fef3c7] to-[#fde68a]',
        bgPattern: '⚖️',
        stat: { value: '₹10L/day', label: 'LODR Penalty' },
        tag: 'ESSENTIAL',
    },
];

/* ── How-To Guides (practical how-to resources from Resource Library) ── */
const howToGuides = [
    {
        id: 'pvt-ltd-incorporation',
        title: 'Incorporating a Private Limited Company in India',
        category: 'Corporate',
        description:
            'Step-by-step walkthrough for MCA registration, DIN, DSC, and ROC filings under the Companies Act 2013.',
        meta: 'Updated Apr 2024',
        metaLabel: 'Last Updated',
        icon: 'apartment',
        accentColor: '#1e4d8c',
        steps: ['MCA21 Portal', 'DIN & DSC', 'MOA / AOA', 'Certificate of Incorporation'],
        complexity: 'Foundational',
    },
    {
        id: 'esop-guide',
        title: 'ESOP Guide for Indian Startups',
        category: 'Employment & Equity',
        description:
            "Founder-focused breakdown of employee stock option pools, vesting schedules, and tax implications under India's SEBI & IT regulations.",
        meta: 'Jan 2024',
        metaLabel: 'Last Updated',
        icon: 'pie_chart',
        accentColor: '#7c3aed',
        steps: ['ESOP Pool Sizing', 'Vesting Cliff', 'Exercise Price', 'Perquisite Tax'],
        complexity: 'Intermediate',
    },
    {
        id: 'gst-audit',
        title: 'GST Compliance Audit Checklist',
        category: 'Taxation',
        description:
            'Internal protocol for reconciling GSTR-2B with GSTR-3B, managing ITC claims, and avoiding GST scrutiny notices.',
        meta: 'Monthly',
        metaLabel: 'Frequency',
        icon: 'fact_check',
        accentColor: '#065f46',
        steps: ['GSTR-2B Reconciliation', 'ITC Claims', 'E-Invoicing', 'Annual Return'],
        complexity: 'Intermediate',
    },
    {
        id: 'companies-act-annual-return',
        title: 'Companies Act 2013 — Annual Return Filing',
        category: 'Compliance',
        description:
            'Annotated guide to filing MGT-7 with the Registrar of Companies under Section 92, including timelines and penalty matrix.',
        meta: 'Oct 2023',
        metaLabel: 'Last Updated',
        icon: 'assignment_turned_in',
        accentColor: '#92400e',
        steps: ['MGT-7 Form', 'ROC Filing Deadline', 'Certifying CS', 'Late Filing Penalty'],
        complexity: 'Foundational',
    },
    {
        id: 'dpiit-recognition',
        title: 'Startup India DPIIT Recognition Guide',
        category: 'Startup',
        description:
            'How to apply for DPIIT recognition, claim 80-IAC tax exemption, and access Startup India fund-of-funds and regulatory benefits.',
        meta: 'Mar 2024',
        metaLabel: 'Last Updated',
        icon: 'rocket_launch',
        accentColor: '#b45309',
        steps: ['DPIIT Portal', '80-IAC Application', 'Self-Certification', 'Fund Access'],
        complexity: 'Foundational',
    },
];

const tagStyle = {
    NEW: 'bg-blue-600 text-white',
    FEATURED: 'bg-purple-600 text-white',
    TRENDING: 'bg-emerald-600 text-white',
    ESSENTIAL: 'bg-amber-700 text-white',
};

const complexityColor = {
    Foundational: 'bg-emerald-50 text-emerald-700',
    Intermediate: 'bg-amber-50 text-amber-700',
    Advanced: 'bg-red-50 text-red-700',
};

/* ── ANALYSIS CARD ────────────────────────────────────────────────────── */
function AnalysisCard({ guide }) {
    return (
        <Link
            to={`/guides/${guide.slug}`}
            className="group bg-white border border-clinical rounded-sm shadow-clinical hover:shadow-clinical-hover transition-all duration-300 overflow-hidden flex flex-col"
        >
            {/* Thumbnail */}
            <div className={`relative bg-gradient-to-br ${guide.bgGradient} h-44 flex items-center justify-center overflow-hidden`}>
                <span className="absolute -right-4 -bottom-4 text-[120px] leading-none select-none pointer-events-none opacity-20">
                    {guide.bgPattern}
                </span>
                <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: guide.accentColor }} />
                <span className={`absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm ${tagStyle[guide.tag]}`}>
                    {guide.tag}
                </span>
                <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="w-16 h-16 rounded-sm flex items-center justify-center shadow-md border border-white/20" style={{ color: 'white' }}>
                        <Icon name={guide.icon} size={32} />
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-headline font-black leading-none" style={{ color: guide.accentColor }}>{guide.stat.value}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">{guide.stat.label}</p>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-7">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: guide.accentColor }}>{guide.category}</span>
                    <span className="w-1 h-1 bg-outline-variant rounded-full" />
                    <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">{guide.readTime} Read</span>
                </div>
                <h3 className="text-xl font-headline font-bold text-primary mb-3 leading-snug group-hover:underline">{guide.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{guide.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {guide.highlights.map(h => (
                        <span key={h} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm" style={{ backgroundColor: `${guide.accentColor}14`, color: guide.accentColor }}>{h}</span>
                    ))}
                </div>
                <div className="flex items-center justify-between pt-5 border-t border-clinical">
                    <div>
                        <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">By {guide.author}</p>
                        <p className="text-[10px] text-slate-400 mt-0.5">{guide.authorTitle}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform" style={{ color: guide.accentColor }}>
                        Read Analysis <Icon name="arrow_forward" size={13} />
                    </span>
                </div>
            </div>
        </Link>
    );
}

/* ── HOW-TO CARD ──────────────────────────────────────────────────────── */
function HowToCard({ guide }) {
    return (
        <div className="group bg-white border border-clinical rounded-sm shadow-clinical hover:shadow-clinical-hover transition-all duration-300 overflow-hidden flex flex-col">
            {/* Top accent bar + icon row */}
            <div className="relative px-6 pt-6 pb-5 border-b border-[rgba(0,21,42,0.05)]">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-sm" style={{ backgroundColor: guide.accentColor }} />
                <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-sm flex items-center justify-center border border-clinical/10">
                        <Icon name={guide.icon} size={22} style={{ color: guide.accentColor }} />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm" style={{ backgroundColor: `${guide.accentColor}15`, color: guide.accentColor }}>
                            {guide.category}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm ${complexityColor[guide.complexity]}`}>
                            {guide.complexity}
                        </span>
                    </div>
                </div>
                <h3 className="text-lg font-headline font-bold text-primary mt-4 leading-snug group-hover:text-secondary transition-colors">{guide.title}</h3>
            </div>

            {/* Description */}
            <div className="px-6 py-5 flex-1">
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{guide.description}</p>

                {/* Step pills */}
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2">Key Steps</p>
                <div className="flex flex-wrap gap-1.5">
                    {guide.steps.map((step, i) => (
                        <span key={step} className="flex items-center gap-1 text-[10px] font-medium text-slate-600 border border-clinical/10 bg-transparent px-2 py-1 rounded-sm">
                            <span className="w-3.5 h-3.5 rounded-full text-white text-[8px] font-bold flex items-center justify-center flex-shrink-0" style={{ backgroundColor: guide.accentColor }}>{i + 1}</span>
                            {step}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6 pt-4 border-t border-[rgba(0,21,42,0.05)] flex items-center justify-between">
                <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{guide.metaLabel}</p>
                    <p className="text-xs font-semibold text-slate-700 mt-0.5">{guide.meta}</p>
                </div>
                <Link to={`/guides/${guide.id}`} className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform" style={{ color: guide.accentColor }}>
                    View Guide <Icon name="arrow_forward" size={13} />
                </Link>
            </div>
        </div>
    );
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────────── */
const Guides = () => {
    const [activeTab, setActiveTab] = useState('analysis');

    return (
        <main className="bg-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen pt-8 pb-24">
            <div className="max-w-[1200px] mx-auto px-8">

                {/* Header */}
                <div className="mb-12">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Intelligence Portfolio</span>
                    <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mb-6">Legal Guides</h1>
                    <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
                        Deep-dive analyses and practical how-to guides covering the most critical legal challenges for modern enterprise leaders.
                    </p>
                </div>

                {/* Tab Bar */}
                <div className="flex items-end gap-8 mb-10 border-b border-[rgba(0,21,42,0.08)]">
                    <button
                        onClick={() => setActiveTab('analysis')}
                        className={`pb-4 text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${
                            activeTab === 'analysis'
                                ? 'text-primary border-primary'
                                : 'text-slate-400 border-transparent hover:text-primary'
                        }`}
                    >
                        Analysis Guides
                        <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary">{analysisGuides.length}</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('howto')}
                        className={`pb-4 text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${
                            activeTab === 'howto'
                                ? 'text-primary border-primary'
                                : 'text-slate-400 border-transparent hover:text-primary'
                        }`}
                    >
                        How-To Guides
                        <span className="ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary">{howToGuides.length}</span>
                    </button>
                </div>

                {/* Tab: Analysis Guides */}
                {activeTab === 'analysis' && (
                    <>
                        <p className="text-slate-400 text-sm mb-8">
                            Expert-authored legal analyses with structured sections, key takeaways, and consultation CTAs.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {analysisGuides.map(guide => <AnalysisCard key={guide.slug} guide={guide} />)}
                        </div>
                    </>
                )}

                {/* Tab: How-To Guides */}
                {activeTab === 'howto' && (
                    <>
                        <p className="text-slate-400 text-sm mb-8">
                            Practical, step-by-step compliance and procedure guides for Indian businesses — updated regularly.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {howToGuides.map(guide => <HowToCard key={guide.id} guide={guide} />)}
                        </div>
                    </>
                )}

            </div>
        </main>
    );
};

export default Guides;

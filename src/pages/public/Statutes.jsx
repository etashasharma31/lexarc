import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

/* ── Statute Data ─────────────────────────────────────────────────── */
const STATUTES = [
    {
        id: 'dpdp-act-2023',
        shortName: 'DPDP Act, 2023',
        fullName: 'Digital Personal Data Protection Act, 2023',
        year: '2023',
        ministryOrBody: 'Ministry of Electronics & IT (MeitY)',
        jurisdiction: 'India — Central',
        category: 'Data Protection',
        icon: 'security',
        accentColor: '#1e4d8c',
        bgGradient: 'from-[#e8f0fe] to-[#c7d9f7]',
        bgIcon: '🔐',
        status: 'In Force',
        statusColor: 'bg-transparent text-emerald-700 border border-emerald-200',
        enactedDate: 'August 11, 2023',
        effectiveDate: 'Partial — DPB Pending Operationalisation',
        annotations: 38,
        totalSections: 44,
        keySections: [
            { num: 'S.4', title: 'Grounds for Processing Personal Data' },
            { num: 'S.6', title: 'Consent — Requirements and Withdrawal' },
            { num: 'S.8', title: 'Obligations of Data Fiduciary' },
            { num: 'S.13', title: 'Right of Data Principal to Information' },
            { num: 'S.17', title: 'Significant Data Fiduciaries' },
            { num: 'S.33', title: 'Penalties — Schedule III' },
        ],
        description:
            'The Digital Personal Data Protection Act 2023 establishes a framework for the processing of digital personal data in India. It recognises the right of individuals to protect their personal data and the need to process data for lawful purposes. The Act creates the Data Protection Board of India as the adjudicatory authority.',
        relatedGuide: { slug: 'digital-privacy-act-2024-framework', title: 'Read Our DPDP Compliance Analysis' },
        maxPenalty: '₹250 Crore',
    },
    {
        id: 'companies-act-s92',
        shortName: 'Companies Act 2013 — §92',
        fullName: 'Companies Act, 2013 — Section 92: Annual Return',
        year: '2013',
        ministryOrBody: 'Ministry of Corporate Affairs (MCA)',
        jurisdiction: 'India — Central',
        category: 'Corporate Law',
        icon: 'apartment',
        accentColor: '#7c3aed',
        bgGradient: 'from-[#ede9fe] to-[#d4c7f8]',
        bgIcon: '🏛️',
        status: 'In Force',
        statusColor: 'bg-transparent text-emerald-700 border border-emerald-200',
        enactedDate: 'August 29, 2013',
        effectiveDate: 'April 1, 2014',
        annotations: 24,
        totalSections: 1,
        keySections: [
            { num: 'S.92(1)', title: 'Annual Return — Mandatory Contents' },
            { num: 'S.92(2)', title: 'Certification by Company Secretary' },
            { num: 'S.92(3)', title: 'Filing with Registrar within 60 days of AGM' },
            { num: 'S.92(4)', title: 'Extract of Annual Return — MGT-9' },
            { num: 'S.92(5)', title: 'Default Penalties — ₹50,000 to ₹5 Lakh' },
            { num: 'Rule 11', title: 'Form MGT-7 — Prescribed Format' },
        ],
        description:
            'Section 92 of the Companies Act 2013 mandates that every company prepare an Annual Return (Form MGT-7) for each financial year, containing prescribed particulars as of the close of that year. The return must be filed with the Registrar of Companies within 60 days of the date of the AGM. Defaults attract significant penalties on the company and its officers.',
        relatedGuide: { slug: 'modern-boardroom-protocol', title: 'Read Our Boardroom Governance Guide' },
        maxPenalty: '₹5 Lakh + ₹500/day',
    },
];

/* ── Statute Card ─────────────────────────────────────────────────── */
function StatuteCard({ statute }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white border border-clinical rounded-sm shadow-clinical hover:shadow-clinical-hover transition-all duration-300 overflow-hidden">
            {/* Thumbnail Hero */}
            <div className={`relative bg-gradient-to-br ${statute.bgGradient} h-36 flex items-center px-8 overflow-hidden`}>
                <div className="absolute left-0 top-0 w-1 h-full" style={{ backgroundColor: statute.accentColor }} />
                <span className="absolute -right-3 -bottom-4 text-[100px] leading-none select-none pointer-events-none opacity-20">
                    {statute.bgIcon}
                </span>
                <div className="relative z-10 flex items-center gap-5">
                    <div className="flex items-center justify-center" style={{ color: 'white' }}>
                        <Icon name={statute.icon} size={32} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: statute.accentColor }}>{statute.category}</p>
                        <p className="font-headline font-black text-xl text-[#00152a] leading-tight">{statute.shortName}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{statute.ministryOrBody}</p>
                    </div>
                </div>
                {/* Status badge */}
                <span className={`absolute top-4 right-5 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-sm ${statute.statusColor}`}>
                    {statute.status}
                </span>
            </div>

            {/* Body */}
            <div className="px-8 py-6">
                <h3 className="font-headline text-xl font-bold text-primary mb-3 leading-snug">{statute.fullName}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{statute.description}</p>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-[rgba(0,21,42,0.06)]">
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Enacted</p>
                        <p className="text-sm font-semibold text-[#00152a]">{statute.enactedDate}</p>
                    </div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Annotations</p>
                        <p className="text-sm font-semibold text-[#00152a]">{statute.annotations} Notes</p>
                    </div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Max Penalty</p>
                        <p className="text-sm font-bold" style={{ color: statute.accentColor }}>{statute.maxPenalty}</p>
                    </div>
                </div>

                {/* Key Sections */}
                <div className="mb-6">
                    <button
                        onClick={() => setExpanded(e => !e)}
                        className="flex items-center justify-between w-full text-left mb-3 group"
                    >
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Key Sections</p>
                        <Icon name={expanded ? 'expand_less' : 'expand_more'} size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {(expanded ? statute.keySections : statute.keySections.slice(0, 4)).map((sec, i) => (
                            <div key={i} className="flex items-start gap-4 py-3 border-b border-clinical/10 last:border-none">
                                <span className="text-[10px] font-black uppercase tracking-wider flex-shrink-0 mt-0.5" style={{ color: statute.accentColor }}>{sec.num}</span>
                                <span className="text-xs text-slate-600 leading-snug">{sec.title}</span>
                            </div>
                        ))}
                    </div>

                    {!expanded && statute.keySections.length > 4 && (
                        <button onClick={() => setExpanded(true)} className="mt-2 text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">
                            +{statute.keySections.length - 4} more sections →
                        </button>
                    )}
                </div>

                {/* Footer actions */}
                <div className="flex items-center justify-between pt-5 border-t border-[rgba(0,21,42,0.06)]">
                    <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-sm bg-transparent border border-clinical/10 text-slate-500">{statute.jurisdiction}</span>
                        <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-sm bg-transparent border border-clinical/10 text-slate-500">{statute.totalSections} Section{statute.totalSections > 1 ? 's' : ''}</span>
                    </div>
                    <Link
                        to={`/guides/${statute.relatedGuide.slug}`}
                        className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest hover:translate-x-0.5 transition-transform"
                        style={{ color: statute.accentColor }}
                    >
                        Read Analysis <Icon name="arrow_forward" size={13} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

/* ── MAIN COMPONENT ──────────────────────────────────────────────── */
const Statutes = () => {
    return (
        <main className="min-h-screen">
            {/* Hero Banner */}
            <header className="relative bg-gradient-to-br from-[#00152a] via-[#071e35] to-[#0a2a47] overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-20" />
                <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(255,255,255,0.015) 80px, rgba(255,255,255,0.015) 81px)',
                }} />
                <div className="max-w-[1200px] mx-auto px-8 py-16 relative z-10">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] mb-5 block">Legal Repository</span>
                    <h1 className="text-5xl font-headline font-extrabold text-white tracking-tight mb-5 leading-tight">
                        Indian Statutes &<br />
                        <span className="text-white/40">Annotated Acts</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">
                        Annotated reference texts of key Indian legislation — enriched with practitioner notes, penalty matrices, and links to related compliance guides.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <Link to="/guides" className="inline-flex items-center gap-2 bg-white text-primary text-sm font-bold px-6 py-3 rounded-sm hover:bg-slate-100 transition-colors">
                            <Icon name="menu_book" size={16} /> View All Guides
                        </Link>
                        <Link to="/resource-library" className="inline-flex items-center gap-2 border border-white/20 text-white/70 text-sm font-bold px-6 py-3 rounded-sm hover:bg-white/10 transition-colors">
                            Resource Library <Icon name="arrow_forward" size={16} />
                        </Link>
                    </div>

                    {/* Stats strip */}
                    <div className="mt-12 flex gap-8">
                        {[
                            { value: `${STATUTES.length}`, label: 'Annotated Acts' },
                            { value: `${STATUTES.reduce((a, s) => a + s.annotations, 0)}`, label: 'Practitioner Annotations' },
                            { value: 'India', label: 'Primary Jurisdiction' },
                        ].map(stat => (
                            <div key={stat.label}>
                                <p className="text-white font-headline font-black text-3xl">{stat.value}</p>
                                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-0.5">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="bg-[#f9fafb] min-h-screen">
                <div className="max-w-[1200px] mx-auto px-8 py-14">
                    {/* Info bar */}
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-headline font-bold text-primary">Current Repository</h2>
                            <p className="text-slate-400 text-sm mt-1">Expand each statute to view annotated key sections.</p>
                        </div>
                        <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                            <Icon name="info" size={14} /> Updated April 2024
                        </span>
                    </div>

                    {/* Statute Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
                        {STATUTES.map(statute => <StatuteCard key={statute.id} statute={statute} />)}
                    </div>

                    {/* "More Coming" notice */}
                    <div className="border border-dashed border-[rgba(0,21,42,0.15)] rounded-sm p-10 text-center">
                        <Icon name="inventory_2" size={32} className="text-slate-200 mx-auto mb-4" />
                        <h3 className="font-headline font-bold text-primary text-lg mb-2">More Statutes Being Added</h3>
                        <p className="text-slate-400 text-sm max-w-md mx-auto mb-5">
                            The repository currently covers the DPDP Act and Companies Act §92.
                            GST Act, FEMA, SEBI LODR, and IT Act annotated versions are being prepared.
                        </p>
                        <Link to="/consultation-booking" className="inline-flex items-center gap-2 bg-primary text-white text-sm font-bold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity">
                            <Icon name="headset_mic" size={16} /> Request a Statute Annotation
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Statutes;

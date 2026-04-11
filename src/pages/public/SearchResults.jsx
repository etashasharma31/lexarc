import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const SearchResults = () => {
    return (
        <React.Fragment>
            {/*  Top Navigation Bar  */}

<main className="pt-8 pb-24 px-8 max-w-[1200px] mx-auto min-h-screen">
{/*  Search Header Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="flex-1 max-w-2xl">
<h1 className="font-headline text-5xl font-bold tracking-tight text-primary mb-6">Search results</h1>
<div className="relative group">
<Icon name="search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" />
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all text-lg font-medium" placeholder="Search cases, documents, or counsel..." type="text" value="LegalSite"/>
</div>
</div>
<div className="pb-2">
<span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">24 results found</span>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
{/*  Filters Sidebar  */}
<aside className="lg:col-span-3">
<div className="sticky top-32 space-y-10">
<div>
<h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">Jurisdiction</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="w-4 h-4 border-outline-variant text-primary focus:ring-primary rounded-none" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">United States (Federal)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 border-outline-variant text-primary focus:ring-primary rounded-none" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">European Union</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 border-outline-variant text-primary focus:ring-primary rounded-none" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">United Kingdom</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 border-outline-variant text-primary focus:ring-primary rounded-none" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">International Arbitration</span>
</label>
</div>
</div>
<div>
<h3 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">Practice Area</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="w-4 h-4 border-outline-variant text-primary focus:ring-primary rounded-none" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">Corporate Strategy</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="w-4 h-4 border-outline-variant text-primary focus:ring-primary rounded-none" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">Intellectual Property</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 border-outline-variant text-primary focus:ring-primary rounded-none" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">Construction Litigation</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 border-outline-variant text-primary focus:ring-primary rounded-none" type="checkbox"/>
<span className="text-sm font-medium group-hover:text-primary transition-colors">Corporate Compliance</span>
</label>
</div>
</div>
<button className="w-full py-3 text-sm font-bold border border-outline-variant text-primary hover:bg-surface-container-high transition-all uppercase tracking-widest">Clear All Filters</button>
</div>
</aside>
{/*  Results Content Area  */}
<div className="lg:col-span-9 space-y-16">
{/*  Categorized Section: Lawyers  */}
<section>
<div className="flex items-center justify-between mb-8">
<h2 className="font-headline text-2xl font-bold text-primary">Legal Counsel (3)</h2>
<a className="text-sm font-bold text-primary border-b border-primary/20 pb-0.5 hover:border-primary transition-all" href="#">View all senior partners</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-lowest p-6 shadow-[0_12px_40px_rgba(23,28,31,0.06)] group hover:-translate-y-1 transition-transform cursor-pointer">
<img className="w-16 h-16 rounded-full object-cover mb-4" data-alt="professional portrait of a senior lawyer in a charcoal suit, minimalist grey office background, authoritative and trustworthy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4i372xDZYn7LSlIiv0MxV-un7XSZl_WJFoFnztRgEJtWPts1SdhIJj--mx7ujm7Q0uUHt7U6RZoogcPSqtz9R2tXj2TJKNRT80QeQMOWuRF1WdlxOjv5qDNdLzLKHp3rqTRUlHqi0yCRvIbFS2BschDFqtTkUhX5voeJW1lkfTEZi1Ff10Jq_ePePS8AtFL-p_WMNA5GuKyBZxv6JQcNfDVJnoMuYq7qwftNE403RSM18Dva70hnz5FpxDd9-TbJn-3DRQ726T8"/>
<h4 className="font-headline text-lg font-bold text-primary">Marcus Sterling</h4>
<p className="text-xs font-label text-on-surface-variant uppercase tracking-wider mb-3">Senior Partner</p>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-4">Lead strategist for LegalSite's patent portfolio and structural disputes.</p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-bold uppercase tracking-tighter text-primary/40">IP Law</span>
<span className="text-[10px] font-bold uppercase tracking-tighter text-primary/40">New York</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 shadow-[0_12px_40px_rgba(23,28,31,0.06)] group hover:-translate-y-1 transition-transform cursor-pointer">
<img className="w-16 h-16 rounded-full object-cover mb-4" data-alt="close-up portrait of female attorney in professional attire, soft natural lighting, elegant legal firm setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd5aCu29BJFCBDIA36ZygZdx4xnqW30J56lI6IyY3qfloteRKaWul15XOLQput4EYrFkwJAfFKIGHF7jCpkebRrW09830pzPvx78fQ2KuiuPQHHhNweSXXFl-aCbshkIBRXcp0FtmVtqecm0j3NxJ_HkLC3LZKYwmtVblo7irLGmA1ECXwkLPX4Rs3Mn10yXUNF0cFiy5Hc4LkXVAqEukWXzvz3UoFiyhYzzugTMATPoDIgOWcGW_JW2C9QA_wlOVxgEVfPxBPZ7g"/>
<h4 className="font-headline text-lg font-bold text-primary">Elena Rodriguez</h4>
<p className="text-xs font-label text-on-surface-variant uppercase tracking-wider mb-3">Associate Counsel</p>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-4">Specializing in international building codes and cross-border compliance.</p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-bold uppercase tracking-tighter text-primary/40">Compliance</span>
<span className="text-[10px] font-bold uppercase tracking-tighter text-primary/40">London</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 shadow-[0_12px_40px_rgba(23,28,31,0.06)] group hover:-translate-y-1 transition-transform cursor-pointer">
<img className="w-16 h-16 rounded-full object-cover mb-4" data-alt="male legal expert in glasses, warm studio lighting, modern minimalist professional background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk5ZWyWZSm_L0SVxYyG2F_O0r6JRHg6kwdNL6kcyRrorwLnJvBWWiOxOaDlJ8INVTMNSCf-iFMZqUqqaJwarnFe4tWKoKZspqlWFdg_7jmF4C-OGy-Mvwoe5Jtz_dVnzkGZQac0osPpJYa19UDd2NUKbZurepNykPNTg9gSZ1fRKFyiXcofV6qf4ZHiNggkrIqaj31uE1_zI0PYVhmWzXvVjywpuozDgus81Q8BE2Q_f4H1KIOUkPITVLHFl7BRKa0trmG07ynfuQ"/>
<h4 className="font-headline text-lg font-bold text-primary">Julian Vance</h4>
<p className="text-xs font-label text-on-surface-variant uppercase tracking-wider mb-3">Consulting Counsel</p>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-4">Dual-certified expert witness for structural integrity and zoning regulations.</p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-bold uppercase tracking-tighter text-primary/40">Litigation</span>
<span className="text-[10px] font-bold uppercase tracking-tighter text-primary/40">Paris</span>
</div>
</div>
</div>
</section>
{/*  Categorized Section: Services (Bento Style)  */}
<section>
<div className="flex items-center justify-between mb-8">
<h2 className="font-headline text-2xl font-bold text-primary">Legal Services (8)</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-8 bg-primary-container text-white p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
<div className="relative z-10">
<Icon name="layers" size={32} className="mb-4 text-secondary-fixed" />
<h3 className="font-headline text-3xl font-bold mb-4">Strategic Integrity Assurance</h3>
<p className="text-blue-100 max-w-md">Comprehensive legal framework analysis for innovative structural designs ensuring compliance with 2024 global standards.</p>
</div>
<div className="mt-8 flex items-center gap-2 font-bold uppercase tracking-widest text-sm relative z-10">
                                Explore Service <Icon name="arrow_forward" size={16} />
</div>
{/*  Subtle abstract background  */}
<div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
<Icon name="layers" size={300} className="text-secondary-fixed fill-mode-current" />
</div>
</div>
<div className="md:col-span-4 bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container-high transition-colors cursor-pointer flex flex-col justify-between">
<div>
<h3 className="font-headline text-xl font-bold text-primary mb-3">IP Protection</h3>
<p className="text-sm text-on-surface-variant">Patent filing for proprietary modular construction methods.</p>
</div>
<Icon name="verified" size={20} className="text-primary self-end" />
</div>
<div className="md:col-span-4 bg-surface-container-low p-8 border border-outline-variant/10 hover:bg-surface-container-high transition-colors cursor-pointer flex flex-col justify-between">
<div>
<h3 className="font-headline text-xl font-bold text-primary mb-3">Zoning Analysis</h3>
<p className="text-sm text-on-surface-variant">Urban planning legal permits and high-density residential rights.</p>
</div>
<Icon name="map" size={20} className="text-primary self-end" />
</div>
<div className="md:col-span-8 bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(23,28,31,0.06)] flex items-center gap-8 cursor-pointer group">
<div className="flex-1">
<h3 className="font-headline text-xl font-bold text-primary mb-3">LegalSite Compliance Suite</h3>
<p className="text-sm text-on-surface-variant">A curated digital environment for real-time regulatory tracking across 45 jurisdictions.</p>
</div>
<div className="flex items-center justify-center text-primary">
<Icon name="inventory_2" size={48} />
</div>
</div>
</div>
</section>
{/*  Categorized Section: Resources (Editorial Table Style)  */}
<section>
<div className="flex items-center justify-between mb-8">
<h2 className="font-headline text-2xl font-bold text-primary">Knowledge Hub (13)</h2>
</div>
<div className="bg-surface-container-lowest shadow-[0_12px_40px_rgba(23,28,31,0.06)]">
<div className="overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr className="bg-surface-container-low">
<th className="px-8 py-4 text-left font-label text-xs uppercase tracking-widest text-on-surface-variant">Resource Title</th>
<th className="px-8 py-4 text-left font-label text-xs uppercase tracking-widest text-on-surface-variant">Category</th>
<th className="px-8 py-4 text-right font-label text-xs uppercase tracking-widest text-on-surface-variant">Last Updated</th>
</tr>
</thead>
<tbody>
<tr className="group hover:bg-surface-container transition-colors cursor-pointer border-b border-outline-variant/5">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<Icon name="description" size={20} className="text-primary" />
<span className="font-medium text-primary">Structural Liability Framework v4.2</span>
</div>
</td>
<td className="px-8 py-6 text-sm text-on-surface-variant">White Paper</td>
<td className="px-8 py-6 text-right text-sm font-mono text-on-surface-variant">OCT 12, 2024</td>
</tr>
<tr className="group hover:bg-surface-container transition-colors cursor-pointer border-b border-outline-variant/5">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<Icon name="video_library" size={20} className="text-primary" />
<span className="font-medium text-primary">Masterclass: Intellectual Property in 3D Modeling</span>
</div>
</td>
<td className="px-8 py-6 text-sm text-on-surface-variant">Webinar</td>
<td className="px-8 py-6 text-right text-sm font-mono text-on-surface-variant">SEP 28, 2024</td>
</tr>
<tr className="group hover:bg-surface-container transition-colors cursor-pointer">
<td className="px-8 py-6">
<div className="flex items-center gap-4">
<Icon name="gavel" size={20} className="text-primary" />
<span className="font-medium text-primary">LegalSite vs. UrbanDev Corp: Precedent Analysis</span>
</div>
</td>
<td className="px-8 py-6 text-sm text-on-surface-variant">Case Brief</td>
<td className="px-8 py-6 text-right text-sm font-mono text-on-surface-variant">AUG 15, 2024</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>
</div>
</main>
        </React.Fragment>
    );
};

export default SearchResults;

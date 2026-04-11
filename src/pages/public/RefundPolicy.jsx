import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const RefundPolicy = () => {
    return (
        <React.Fragment>
            <main className="max-w-[1200px] mx-auto px-8 pt-8 pb-24 min-h-screen">
{/*  Hero Editorial Section  */}
<header className="mb-24 flex flex-col lg:flex-row gap-12 items-end">
<div className="flex-1">
<div className="mb-6 inline-block bg-primary-container text-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]">
                    Institutional Policy
                </div>
<h1 className="text-[3.5rem] font-bold leading-[1.1] tracking-[-0.03em] text-primary mb-8 max-w-2xl">
                    Service Terms &amp; Refund Framework.
                </h1>
<p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
                    Transparency is the foundation of our partnership. This document outlines the protocols for fee adjustments, service terminations, and financial credits maintained by LegalSite.
                </p>
</div>
<div className="w-full lg:w-1/3 aspect-[4/3] bg-surface-container-highest overflow-hidden shadow-[0_12px_40px_rgba(23,28,31,0.06)] relative group">
<img alt="Professional legal setting" className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:scale-105 transition-transform duration-700" data-alt="Close-up of a high-end fountain pen resting on structural blueprints and legal documents with soft atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0LcK_7obzjjd8tlgUWMB36W6EM8mK5ykybLsLuKugFcb1QJ78dZ3Lm1dQfHlU3J8i91tL6Suua1mWsRAINguIEZMbPRZY6Lz6TDW7LXwSISBpJB6CtOvgTFo4auSQXU_43yzFbveeWCzG6S8tH_lwSNDGrvFFx9npmdTOY6ZwiOzmnwZqKcWRMpWimT7YkN-1W3wynMW3QvmRqYYXpKZgnqIG56mqqGrBJXA_e3CRzg8bFeLSalWmdflvE8juB-SX-XSYJldmqAk"/>
<div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
</div>
</header>
{/*  Bento Grid Policy Sections  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
{/*  Service Cancellations  */}
<section className="md:col-span-7 bg-surface-container-lowest p-12 flex flex-col justify-between shadow-[0_12px_40px_rgba(23,28,31,0.03)] border-l-4 border-primary">
<div>
<div className="flex items-center gap-4 mb-8">
<Icon name="cancel" size={32} className="text-primary" />
<h2 className="text-2xl font-bold tracking-tight text-primary">Service Cancellations</h2>
</div>
<div className="space-y-6 text-on-surface-variant leading-relaxed">
<p>Engagement with LegalSite may be terminated by the client at any point during the service lifecycle. Cancellations requested within 48 hours of initial retainer payment are eligible for a full refund, less a 5% administrative processing fee.</p>
<ul className="space-y-4 font-medium text-on-surface">
<li className="flex items-start gap-3">
<Icon name="arrow_forward" size={16} className="text-primary mt-1" />
                                Notice must be provided in writing to the assigned Senior Partner.
                            </li>
<li className="flex items-start gap-3">
<Icon name="arrow_forward" size={16} className="text-primary mt-1" />
                                Immediate cessation of all billable strategic and legal research.
                            </li>
</ul>
</div>
</div>
</section>
{/*  Partial Refunds  */}
<section className="md:col-span-5 bg-surface-container-high p-12 flex flex-col justify-between">
<div>
<h2 className="text-2xl font-bold tracking-tight text-primary mb-8">Partial Settlements</h2>
<p className="text-on-surface-variant leading-relaxed mb-6">
                        For ongoing projects, refunds are calculated based on work-in-progress (WIP) milestones.
                    </p>
<div className="space-y-8">
<div className="bg-surface-container-lowest p-6 border-b border-outline-variant/20">
<span className="text-[10px] uppercase tracking-widest block mb-2 font-bold text-on-surface-variant">Milestone 01</span>
<div className="flex justify-between items-center">
<span className="text-primary font-semibold">Pre-Discovery Phase</span>
<span className="text-sm font-bold">75% Refund</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 border-b border-outline-variant/20">
<span className="text-[10px] uppercase tracking-widest block mb-2 font-bold text-on-surface-variant">Milestone 02</span>
<div className="flex justify-between items-center">
<span className="text-primary font-semibold">Active Filing Phase</span>
<span className="text-sm font-bold">40% Refund</span>
</div>
</div>
</div>
</div>
</section>
{/*  Credit Notes & AI Consultant  */}
<section className="md:col-span-12 lg:col-span-4 bg-primary text-white p-12 flex flex-col justify-between">
<div>
<div className="flex items-center gap-4 mb-8">
<Icon name="account_balance_wallet" size={32} className="text-white" />
<h2 className="text-2xl font-bold tracking-tight">Institutional Credit</h2>
</div>
<p className="text-blue-100/70 leading-relaxed mb-8">
                        In lieu of direct refunds, clients may opt for LegalSite Credit Notes. These credits are valid for 24 months and carry a 10% value premium over the cash refund amount.
                    </p>
</div>
<button className="bg-white text-primary px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-surface-container-lowest transition-all">
                    Issue Credit Note
                </button>
</section>
{/*  Compliance & Policy Data  */}
<section className="md:col-span-12 lg:col-span-8 bg-surface-container-low p-12 border border-outline-variant/15">
<h2 className="text-xl font-bold text-primary mb-8">Regulatory Compliance Disclosure</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Statutory Rights</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
                            Our refund framework is designed to comply with International Bar Association (IBA) standards and local jurisdictional consumer protection statutes. These terms do not override your mandatory legal rights under the Consumer Rights Act.
                        </p>
</div>
<div>
<h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Dispute Resolution</h3>
<p className="text-sm text-on-surface-variant leading-relaxed">
                            Discrepancies regarding refund calculations are subject to an internal audit by our compliance department. Decisions are rendered within 14 business days of formal lodging.
                        </p>
</div>
</div>
<div className="mt-12 pt-8 border-t border-outline-variant/10 flex flex-wrap gap-4">
<span className="bg-surface-container-highest px-4 py-2 text-[10px] font-bold tracking-wider uppercase text-on-surface-variant">EU-GDPR Compliant</span>
<span className="bg-surface-container-highest px-4 py-2 text-[10px] font-bold tracking-wider uppercase text-on-surface-variant">SLA 2.0 Standard</span>
<span className="bg-surface-container-highest px-4 py-2 text-[10px] font-bold tracking-wider uppercase text-on-surface-variant">ISO 9001:2015 Verified</span>
</div>
</section>
</div>
{/*  Support CTA  */}
<section className="bg-surface-container-lowest p-16 text-center border border-outline-variant/10 shadow-sm mb-24">
<h2 className="text-3xl font-bold text-primary mb-6">Inquiries Regarding Financial Adjustments?</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
                Our Billing &amp; Compliance team is available for scheduled consultations to discuss specific case allocations and refund eligibility.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="premium-gradient text-white px-10 py-4 font-bold uppercase tracking-widest text-xs">
                    Contact Billing Dept
                </button>
<button className="border border-primary text-primary px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all">
                    View Fee Schedule
                </button>
</div>
</section>
</main>
        </React.Fragment>
    );
};

export default RefundPolicy;

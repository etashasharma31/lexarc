import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const TermsConditions = () => {
    return (
        <React.Fragment>
            <main className="flex-grow scroll-smooth">
                {/*  Hero Section  */}
                <section className="max-w-[1200px] mx-auto px-8 pt-8 pb-24 flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/2">
<span className="font-label text-xs tracking-[0.2em] text-outline uppercase mb-6 block">Legal Governance</span>
<h1 className="font-headline text-6xl font-extrabold tracking-tighter text-primary leading-none mb-8">
                    Terms of Service &amp; <br/>Legal Frameworks.
                </h1>
<p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                    This document serves as the structural foundation for our partnership. It outlines the obligations, standards, and governing frameworks for LegalSite and The Counsel's digital ecosystem.
                </p>
<div className="mt-12 flex items-center gap-4 text-sm font-label font-bold text-primary">
<Icon name="update" size={20} />
                    LAST UPDATED: OCTOBER 24, 2024
                </div>
</div>
<div className="md:w-1/2 relative">
<div className="bg-surface-container-highest w-full aspect-[4/3] relative overflow-hidden">
<img className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" data-alt="Modern strategic law firm interior with high ceilings, concrete textures, and soft natural sunlight casting long shadows on minimalist furniture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG7AlLeWwiD7GLDiHSzgiJMAfmrCi5XTCcy49i0NwIjtH7s0opQrrgpJryHxLHltYcF3tCNvwxAEB8vM0VQghxyiOwhy9Tp6806UJWuXGU3uZ6Hqw2IRTtpZtzq15bV4VO1OBiWqdlcwLcj3HLNDr1Kfqku5L5ciXGpPQ8lAZs7HdpBUdYTWzCG8NU3JWLRzNxnMhpqwsxSkOtPFB76etgJwxsSxKGzQ38aiOVWRuRR-aFhmHO2i47U_4Ap3B5k37pNX6ygNt0bMQ"/>
</div>
<div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 editorial-shadow max-w-xs">
<p className="font-body text-sm italic text-on-surface-variant">
                        "Law is the foundation of trust; these terms are the blueprints of our commitment to excellence."
                    </p>
</div>
</div>
</section>
{/*  Content Grid (Bento Layout)  */}
<section className="bg-surface-container-low py-24">
<div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
{/*  Section 1: User Obligations  */}
<div className="md:col-span-8 bg-surface-container-lowest p-12 editorial-shadow">
<div className="flex items-center gap-4 mb-10">
<span className="w-12 h-1 px-0 bg-primary block"></span>
<h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-primary">01. User Obligations</h2>
</div>
<div className="space-y-8">
<div className="flex gap-6">
<span className="font-headline text-outline opacity-30 text-4xl font-black">A.</span>
<div>
<h3 className="font-headline text-xl font-semibold mb-3">Professional Integrity</h3>
<p className="text-on-surface-variant leading-relaxed font-body">Users must maintain the highest standards of professional conduct. All information provided during the engagement must be accurate, complete, and updated in real-time to ensure the integrity of the Counsel Strategic Legal Services ecosystem.</p>
</div>
</div>
<div className="flex gap-6">
<span className="font-headline text-outline opacity-30 text-4xl font-black">B.</span>
<div>
<h3 className="font-headline text-xl font-semibold mb-3">Credential Security</h3>
<p className="text-on-surface-variant leading-relaxed font-body">Maintaining the confidentiality of portal access credentials is a primary obligation. Any breach or suspected compromise must be reported to our security division within two hours of discovery.</p>
</div>
</div>
</div>
</div>
{/*  Section 2: Quick Index  */}
<div className="md:col-span-4 bg-primary text-on-primary p-12 flex flex-col justify-between">
<div>
<h3 className="font-headline text-xl font-bold mb-8">Document Index</h3>
<ul className="space-y-6 font-label text-xs tracking-widest uppercase">
<li className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer">
<Icon name="arrow_forward" size={16} />
                                01. User Obligations
                            </li>
<li className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer opacity-60">
<Icon name="arrow_forward" size={16} />
                                02. Service Scope
                            </li>
<li className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer opacity-60">
<Icon name="arrow_forward" size={16} />
                                03. Liability Framework
                            </li>
<li className="flex items-center gap-4 hover:translate-x-2 transition-transform cursor-pointer opacity-60">
<Icon name="arrow_forward" size={16} />
                                04. Governing Law
                            </li>
</ul>
</div>
<div className="pt-12 border-t border-white/10">
<p className="text-[10px] opacity-50 uppercase tracking-widest leading-relaxed">
                            Certified under the Global Strategic Legal Framework (GSLF) 2024.
                        </p>
</div>
</div>
{/*  Section 3: Service Scope  */}
<div className="md:col-span-4 bg-surface-container-highest p-10 flex flex-col gap-6">
<div className="bg-primary-container w-12 h-12 flex items-center justify-center">
<Icon name="verified_user" size={24} className="text-white" />
</div>
<h2 className="font-headline text-2xl font-bold text-primary">02. Service Scope</h2>
<p className="font-body text-sm text-on-surface-variant leading-loose">
                        LegalSite provides strategic legal consultation, case management software, and AI-driven document analysis. Our scope is limited to professional guidance and does not constitute a formal guarantee of litigation outcomes. Services are delivered through a hybrid model of human expertise and algorithmic precision.
                    </p>
</div>
{/*  Section 4: Liability  */}
<div className="md:col-span-8 bg-surface-container-lowest p-12 editorial-shadow">
<h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-primary mb-10">03. Liability &amp; Indemnification</h2>
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-4">
<h4 className="font-label text-xs font-bold text-outline tracking-widest uppercase">Limited Liability</h4>
<p className="text-sm text-on-surface-variant font-body leading-relaxed">To the maximum extent permitted by applicable law, The Counsel shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our digital legal services.</p>
</div>
<div className="space-y-4">
<h4 className="font-label text-xs font-bold text-outline tracking-widest uppercase">Safe Harbor</h4>
<p className="text-sm text-on-surface-variant font-body leading-relaxed">Clients agree to indemnify and hold harmless LegalSite from any third-party claims arising from a breach of user obligations as defined in Section 01 of this framework.</p>
</div>
</div>
</div>
{/*  Section 5: Governing Law  */}
<div className="md:col-span-12 bg-white p-12 border-l-8 border-primary editorial-shadow flex flex-col md:flex-row items-center gap-12">
<div className="flex-grow">
<h2 className="font-headline text-2xl font-bold text-primary mb-4">04. Governing Law</h2>
<p className="font-body text-on-surface-variant">
                            These terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any dispute arising under this agreement shall be resolved exclusively through binding arbitration in Wilmington, DE.
                        </p>
</div>
<button className="whitespace-nowrap font-label text-xs font-bold tracking-widest uppercase px-10 py-5 border-2 border-primary hover:bg-primary hover:text-white transition-all">
                        Download PDF Version
                    </button>
</div>
</div>
</section>
{/*  Compliance Banner  */}
<section className="max-w-[1200px] mx-auto px-8 py-16 flex items-center justify-center">
<div className="text-center max-w-2xl">
<div className="inline-flex items-center gap-2 mb-6">
<Icon name="verified_user" size={16} className="text-secondary" />
<span className="font-label text-[10px] tracking-[0.3em] font-black uppercase text-secondary">Verified Compliance</span>
</div>
<h3 className="font-headline text-xl font-semibold text-primary mb-4">Need further clarification?</h3>
<p className="text-on-surface-variant text-sm mb-8">Our compliance team is available for deep-dive consultations regarding specific jurisdictional requirements and data sovereignty protocols.</p>
<a className="text-primary font-label text-xs font-bold tracking-widest uppercase border-b border-primary pb-2 hover:opacity-70 transition-opacity" href="#">Contact Legal Desk</a>
</div>
</section>
</main>
        </React.Fragment>
    );
};

export default TermsConditions;

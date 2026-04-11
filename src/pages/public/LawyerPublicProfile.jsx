import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const LawyerPublicProfile = () => {
    return (
        <React.Fragment>
            <main className="pb-24 px-8 max-w-[1200px] mx-auto bg-dot-pattern">
                {/*  Hero Section  */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
                    {/*  Portrait Column  */}
                    <div className="lg:col-span-5 relative animate-in fade-in duration-1000">
                        <div className="aspect-[4/5] bg-white p-2 shadow-clinical border border-clinical rounded-sm overflow-hidden group">
                            <img alt="Alexander Sterling, Senior Associate" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbPUqVbpoYTo0aDQg3ssC6vp0iLf1fqi9hfXXU9dVB8CyhuRKKfVkeTbviBhb5yEwo9w831_8A_j_wk5PkVwCQwx5ihIx7O_RhhrQZ6KXXX2ShzX5RL8F7xjHDcSW72r7tXkC6IJb3Jql9RwGFOe_FsBabOo9ueh-uy9_VPvGj7ed2Zeb1JaglQISyOv4LE6V1p1YI5SKXMBnCCvTy5iLOQis0ORtg3aj425JcZJc-AHeZCJn_qnW1Wm3o64m_--kbxr-kMocFBSs"/>
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        {/*  Status Overlay  */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-10 shadow-clinical-hover border-l-4 border-secondary max-w-xs animate-in slide-in-from-bottom-4 duration-700">
                            <p className="text-[9px] font-bold text-primary/30 uppercase tracking-[0.3em] mb-4">ACTIVE PROTOCOL</p>
                            <p className="text-sm font-headline font-bold text-primary leading-relaxed italic">"Leading the strategic restructuring for Global Fintech Corp's Q4 expansion nodes."</p>
                        </div>
                    </div>

                    {/*  Content Column  */}
                    <div className="lg:col-span-7 pt-12 animate-in slide-in-from-right-8 duration-1000">
                        <div className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-8 h-[2px] bg-secondary"></div>
                                <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.4em]">SENIOR ASSOCIATE</span>
                            </div>
                            <h1 className="text-7xl font-headline font-bold text-primary leading-none tracking-tighter mb-4">Alexander Sterling.</h1>
                            <h2 className="text-2xl font-headline text-primary/40 font-bold uppercase tracking-widest">Corporate Law & Venture Strategy</h2>
                        </div>

                        <div className="flex flex-wrap gap-6 mb-16">
                            <div className="flex items-center gap-3 px-6 py-3 bg-white border border-clinical shadow-clinical rounded-sm">
                                <Icon name="verified" size={18} className="text-secondary" />
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">12 Years Precision</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-3 bg-white border border-clinical shadow-clinical rounded-sm">
                                <Icon name="location_on" size={18} className="text-secondary" />
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">London Node</span>
                            </div>
                            <div className="flex items-center gap-3 px-6 py-3 bg-white border border-clinical shadow-clinical rounded-sm">
                                <Icon name="star" size={18} className="text-secondary" />
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">4.9 Fidelity</span>
                            </div>
                        </div>

                        <div className="space-y-10 max-w-2xl border-l border-clinical pl-10 mb-16">
                            <p className="text-lg text-primary/70 leading-relaxed font-body">
                                Alexander specializes in complex cross-border mergers and strategic venture financing. With a career spanning over a decade at the intersection of law and finance, he advise institutional clients through transformative legal landscapes with surgical fidelity.
                            </p>
                            <p className="text-lg text-primary/70 leading-relaxed font-body">
                                His approach is defined by legal precision—building legal frameworks that facilitate growth and innovation cycles. He currently leads the firm’s Digital Assets & Fintech practice directorate.
                            </p>
                        </div>

                        <div className="flex gap-8">
                            <Link to="/consultation-booking" className="bg-primary text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all">
                                Schedule Protocol
                            </Link>
                            <button className="bg-transparent border border-clinical text-primary/40 px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:text-primary hover:bg-white hover:shadow-clinical transition-all">
                                Request Dossier
                            </button>
                        </div>
                    </div>
                </section>

                {/*  Expertise Section  */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-32">
                    <div className="lg:col-span-2 bg-white p-16 shadow-clinical border border-clinical rounded-sm relative overflow-hidden group">
                        <Icon name="policy" size={180} className="absolute -top-10 -right-10 opacity-[0.02] text-primary rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
                        <h3 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-12 flex items-center gap-4">
                            <div className="w-6 h-[1px] bg-primary/20"></div>
                            CORE EXPERTISE NODES
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                            {[
                                { title: 'M&A Strategy', icon: 'account_balance', desc: 'Structuring cross-border mergers and asset transitions.' },
                                { title: 'Venture Capital', icon: 'rocket_launch', desc: 'Guiding series cycles from Seed to institutional Growth.' },
                                { title: 'Governance', icon: 'gavel', desc: 'Fiduciary oversight and regulatory compliance protocols.' },
                                { title: 'Digital Assets', icon: 'currency_bitcoin', desc: 'Legal navigation of the DeFi and blockchain space.' }
                            ].map((item, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 bg-primary/[0.03] border border-clinical shadow-clinical flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <Icon name={item.icon} size={20} />
                                        </div>
                                        <h4 className="font-bold text-primary uppercase tracking-widest text-sm">{item.title}</h4>
                                    </div>
                                    <p className="text-xs text-primary/40 leading-relaxed font-body">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-primary p-16 text-white shadow-clinical rounded-sm flex flex-col justify-between">
                        <div>
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-12">QUALIFIED CREDENTIALS</h3>
                            <ul className="space-y-10">
                                <li className="flex items-start gap-4">
                                    <Icon name="school" size={24} className="text-secondary opacity-40" />
                                    <div>
                                        <p className="text-sm font-bold tracking-tight">J.D., Harvard Law School</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1 italic">Magna Cum Laude</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Icon name="workspace_premium" size={24} className="text-secondary opacity-40" />
                                    <div>
                                        <p className="text-sm font-bold tracking-tight">Bar Admission</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1 italic">New York & London (Solicitor)</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Icon name="history_edu" size={24} className="text-secondary opacity-40" />
                                    <div>
                                        <p className="text-sm font-bold tracking-tight">B.A. Economics</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mt-1 italic">Oxford University</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="pt-10 border-t border-white/10 mt-12">
                            <p className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-30 mb-4">MEMBER AFFILIATIONS</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest leading-loose opacity-60">
                                International Bar Association • American Bar Association • Law Society of England and Wales
                            </p>
                        </div>
                    </div>
                </section>

                {/*  Trust Footer CTA  */}
                <section className="bg-white p-20 text-center shadow-clinical border border-clinical rounded-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
                    <div className="relative z-10">
                        <h3 className="text-4xl font-headline font-bold text-primary mb-6">Secure Your Strategic Advantage.</h3>
                        <p className="text-primary/40 max-w-2xl mx-auto mb-12 italic leading-relaxed">
                            Schedule a confidential 30-minute consultation protocol with Alexander Sterling to discuss your case or corporate strategy.
                        </p>
                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <Link to="/consultation-booking" className="bg-primary text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all">
                                Initiate Consultation
                            </Link>
                            <button className="bg-transparent border border-clinical text-primary/40 hover:text-primary hover:bg-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm transition-all">
                                All Partners
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

export default LawyerPublicProfile;

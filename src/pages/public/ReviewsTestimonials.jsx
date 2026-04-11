import React from 'react';
import Icon from '../../components/common/Icon';

const ReviewsTestimonials = () => {
    return (
        <div className="bg-surface min-h-screen bg-dot-pattern pt-8 pb-24">
            <main className="px-8 max-w-[1200px] mx-auto">
                {/* Hero Section */}
                <header className="mb-24 animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-[2px] bg-secondary"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">REPUTATION & TRUST</span>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
                        <div className="max-w-[1200px]">
                            <h1 className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter mb-8 leading-none">
                                Client Voices.
                            </h1>
                            <p className="text-on-surface-variant text-xl leading-relaxed opacity-80">
                                A curated compendium of institutional experiences, reflecting our commitment to legal precision and surgical fidelity in legal practice.
                            </p>
                        </div>
                        
                        {/* Summary Metrics */}
                        <div className="grid grid-cols-2 gap-8">
                            <div className="bg-white p-10 shadow-clinical border border-clinical rounded-sm min-w-[200px]">
                                <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4">AGGREGATE SCORE</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-headline font-black text-primary tracking-tighter">4.96</span>
                                    <span className="text-xs font-bold text-primary/20 tracking-widest">/ 5.0</span>
                                </div>
                            </div>
                            <div className="bg-white p-10 shadow-clinical border border-clinical rounded-sm min-w-[200px]">
                                <p className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-4">SUCCESS PROTOCOLS</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-headline font-black text-secondary tracking-tighter">1,402</span>
                                    <Icon name="verified" size={18} className="text-secondary opacity-40 ml-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Filter / Search Sim */}
                <section className="mb-16 animate-in fade-in duration-1000">
                    <div className="bg-white p-4 shadow-clinical border border-clinical rounded-sm flex items-center justify-between">
                        <div className="flex gap-4 pl-4 overflow-x-auto no-scrollbar">
                            <button className="text-[10px] font-bold text-primary px-6 py-2 border-b-2 border-primary uppercase tracking-widest">All Sectors</button>
                            <button className="text-[10px] font-bold text-primary/30 px-6 py-2 hover:text-primary transition-colors uppercase tracking-widest">Tech M&A</button>
                            <button className="text-[10px] font-bold text-primary/30 px-6 py-2 hover:text-primary transition-colors uppercase tracking-widest">IP Strategy</button>
                            <button className="text-[10px] font-bold text-primary/30 px-6 py-2 hover:text-primary transition-colors uppercase tracking-widest">Compliance</button>
                        </div>
                        <div className="pr-4 border-l border-clinical pl-8 flex gap-4 text-primary/20">
                            <Icon name="search" size={20} />
                            <Icon name="tune" size={20} />
                        </div>
                    </div>
                </section>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    {/* Featured Review */}
                    <div className="md:col-span-8 bg-white p-16 shadow-clinical border border-clinical rounded-sm relative overflow-hidden group">
                        <Icon name="format_quote" size={200} className="absolute -top-10 -right-10 opacity-[0.03] text-primary" />
                        
                        <div className="flex gap-1 mb-10">
                            {[1,2,3,4,5].map(i => <Icon key={i} name="star" size={18} className="text-secondary" />)}
                        </div>
                        
                        <blockquote className="text-3xl md:text-4xl font-headline font-bold text-primary leading-tight mb-16 italic tracking-tight relative z-10">
                            "LegalSite's approach to cross-border intellectual property disputes is unparalleled. They didn't just represent us; they built a strategic solution that protected our future growth nodes."
                        </blockquote>
                        
                        <div className="flex items-center justify-between pt-12 border-t border-clinical">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-sm overflow-hidden bg-primary/[0.03] shadow-clinical">
                                    <img alt="Client Avatar" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeryQv1ZKs7wEpV0DrMf7Xy8Kw-wnR3CtlHHst6lb8ZI5VUD3pxW0-CMoBj1OaiP3D745VnRRu6Dnsh8xYPMdhn3NffUYrGRObzoNR-GMtNuIWBlTwxaAWOXbyd3SFgqDLCnALWxrlS3n46wADVCqHuwLKIB6656JjnW0VV04VBKTU8Ha_fSyNWHJqJVHK9bwX-cM_Id8j402TQArZmSZW4LTnyycpXSVJ1OxqiTBMkAnBjvI_NaR_R9IVjMXuvEUVEAKqyUT6yFo"/>
                                </div>
                                <div>
                                    <p className="text-lg font-bold text-primary leading-none">Evelyn Thorne</p>
                                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mt-2 opacity-60">CTO, Veridia Global</p>
                                </div>
                            </div>
                            <span className="text-[9px] font-bold text-primary/30 uppercase tracking-[0.2em] px-4 py-2 bg-primary/[0.02] border border-clinical rounded-full">Strategic IP Litigation</span>
                        </div>
                    </div>

                    {/* Secondary Reviews */}
                    <div className="md:col-span-4 bg-primary p-12 shadow-clinical rounded-sm text-white flex flex-col justify-between">
                        <div className="space-y-8">
                            <div className="flex gap-0.5 opacity-40">
                                {[1,2,3,4,5].map(i => <Icon key={i} name="star" size={14} className="text-white" />)}
                            </div>
                            <p className="text-xl font-headline font-medium leading-relaxed italic opacity-80">
                                "Precision and speed. The compliance audit was completed ahead of schedule, with zero friction from their digital interface."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 pt-10 border-t border-white/10 mt-10">
                            <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center">
                                <Icon name="person" size={24} className="text-white/20" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white leading-none">Marcus Vane</p>
                                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">Helix Finserv</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 bg-white p-12 shadow-clinical border border-clinical rounded-sm flex flex-col justify-between">
                        <div className="space-y-8">
                            <div className="flex gap-0.5">
                                {[1,2,3,4,5].map(i => <Icon key={i} name="star" size={14} className="text-secondary" />)}
                            </div>
                            <p className="text-lg font-body leading-relaxed text-primary/80">
                                "LegalSite handles our M&A cycle with absolute discretion. Their team acts as a natural extension of our board's strategic nodes."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 pt-10 border-t border-clinical mt-10">
                            <div className="w-12 h-12 rounded-sm bg-primary/[0.03] border border-clinical shadow-clinical"></div>
                            <div>
                                <p className="text-sm font-bold text-primary leading-none">Arthur Sterling</p>
                                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1 opacity-40">Sterling Assets</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 bg-white p-12 shadow-clinical border border-clinical rounded-sm flex flex-col justify-between">
                        <div className="space-y-8">
                            <div className="flex gap-0.5">
                                {[1,2,3,4,5].map(i => <Icon key={i} name="star" size={14} className="text-secondary" />)}
                            </div>
                            <p className="text-lg font-body leading-relaxed text-primary/80">
                                "The digital oversight tools allowed me to track our litigation status in real-time. Transparency that is rare in the legal field."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 pt-10 border-t border-clinical mt-10">
                            <div className="w-12 h-12 rounded-sm bg-primary/[0.03] border border-clinical shadow-clinical"></div>
                            <div>
                                <p className="text-sm font-bold text-primary leading-none">Dr. Sarah Laine</p>
                                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1 opacity-40">BioNode Systems</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-4 bg-secondary p-12 shadow-clinical rounded-sm text-primary flex flex-col justify-between relative overflow-hidden group">
                        <Icon name="hub" size={100} className="absolute -bottom-6 -right-6 opacity-5" />
                        <div className="space-y-8 relative z-10">
                            <div className="flex gap-0.5 opacity-30">
                                {[1,2,3,4,5].map(i => <Icon key={i} name="star" size={14} className="text-primary" />)}
                            </div>
                            <p className="text-xl font-headline font-bold leading-tight uppercase tracking-widest">
                                Reliable. Consistent. Logically Driven.
                            </p>
                            <p className="text-sm opacity-60">"They are our primary go-to for all complex contract lifecycle management."</p>
                        </div>
                        <div className="flex items-center gap-4 pt-10 border-t border-primary/10 mt-10 relative z-10">
                            <div>
                                <p className="text-sm font-bold text-primary leading-none">James P. Chen</p>
                                <p className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mt-1">Omni-Corp</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Feedback CTA */}
                <section className="mt-32">
                    <div className="bg-primary p-20 text-center shadow-clinical border border-clinical rounded-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-headline font-bold text-white mb-6">Contribute to the Archive.</h2>
                            <p className="text-white/60 mb-12 max-w-xl mx-auto italic">Existing clients are invited to authenticate their protocol experience to maintain our collective standards of excellence.</p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button className="bg-white text-primary px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all">Submit Feedback</button>
                                <button className="bg-transparent border border-white/20 text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white/5 transition-all">Support Portal</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ReviewsTestimonials;

import React from 'react';
import Icon from '../../components/common/Icon';

const ContactUs = () => {
    return (
        <div className="bg-surface min-h-screen bg-dot-pattern pt-8 pb-24">
            <main className="px-8 max-w-[1200px] mx-auto">
                {/* Hero Section */}
                <header className="mb-24 animate-in fade-in slide-in-from-left-4 duration-700">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-[2px] bg-secondary"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">CONTACT PROTOCOL</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-headline font-bold text-primary tracking-tighter mb-8 leading-none">
                        Specialized<br />Consultation.
                    </h1>
                    <p className="text-on-surface-variant max-w-2xl text-xl leading-relaxed opacity-80">
                        Secure a specialized audit of your enterprise's regulatory framework. Precise, authoritative, and unconditionally committed to structural integrity.
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Form Card */}
                    <section className="lg:col-span-8 bg-white p-12 shadow-clinical border border-clinical rounded-sm animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-backwards delay-100">
                        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30 mb-10">INQUIRY INITIATION</h2>
                        <form className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">REPRESENTATIVE NAME</label>
                                    <input className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10" placeholder="Alexander Sterling" type="text" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">ENTITY EMAIL</label>
                                    <input className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10" placeholder="alex@enterprise.hq" type="email" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">MATTER CATEGORY</label>
                                <select className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical appearance-none focus:ring-1 focus:ring-primary focus:border-primary transition-all">
                                    <option>Corporate Structure & Compliance</option>
                                    <option>Intellectual Property Defense</option>
                                    <option>Mergers & Acquisitions</option>
                                    <option>Digital Protocol Strategy</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30">PROTOCOLS REQUIRED</label>
                                <textarea className="w-full bg-white border border-clinical p-5 rounded-sm font-bold text-primary shadow-clinical focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-primary/10" placeholder="Outline the legal structural requirements..." rows="6"></textarea>
                            </div>
                            <div className="flex justify-end pt-6">
                                <button className="bg-primary text-white px-16 py-5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all active:scale-95">
                                    Transmit Inquiry
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* Quick Channels */}
                    <aside className="lg:col-span-4 space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 fill-mode-backwards delay-200">
                        <div className="bg-primary p-12 text-white shadow-clinical rounded-sm relative overflow-hidden group">
                            <Icon name="psychology" size={120} className="absolute -bottom-8 -right-8 text-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-10">AI DIAGNOSTICS</h3>
                            <h4 className="text-3xl font-headline font-bold mb-4 leading-tight">Instant Protocol Node</h4>
                            <p className="text-white/60 text-sm leading-relaxed mb-10 italic">Deploy a direct link to our available duty counsel for urgent inquiries.</p>
                            <button className="w-full bg-white text-primary py-4 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:shadow-clinical-hover transition-all">Connect to Node</button>
                        </div>

                        <div className="bg-white p-12 shadow-clinical border border-clinical rounded-sm">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/30 mb-10">GLOBAL ANCHORS</h3>
                            <div className="space-y-10">
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest">London Headquarters</p>
                                    <p className="text-[11px] text-on-surface-variant mt-2 leading-relaxed opacity-60">The Shard, Level 24<br />32 London Bridge St, SE1 9SG</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest">New York Nexus</p>
                                    <p className="text-[11px] text-on-surface-variant mt-2 leading-relaxed opacity-60">One World Trade Center<br />New York, NY 10007</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest">Singapore Hub</p>
                                    <p className="text-[11px] text-on-surface-variant mt-2 leading-relaxed opacity-60">Marina Bay Financial Centre<br />Tower 2, Singapore</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Direct Support Channels */}
                <section className="mt-24 bg-white p-16 shadow-clinical border border-clinical rounded-sm animate-in fade-in duration-1000">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <div className="w-12 h-12 bg-primary/[0.03] flex items-center justify-center rounded-sm text-primary shadow-clinical">
                                <Icon name="mail" size={24} />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-2">GENERAL INTEL</h4>
                                <p className="text-lg font-headline font-bold text-primary">protocols@legalsite.com</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-12 h-12 bg-primary/[0.03] flex items-center justify-center rounded-sm text-primary shadow-clinical">
                                <Icon name="call" size={24} />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em] mb-2">GLOBAL LINE</h4>
                                <p className="text-lg font-headline font-bold text-primary">+1 (800) LEX-LEGAL</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="w-12 h-12 bg-primary/[0.03] flex items-center justify-center rounded-sm text-secondary shadow-clinical">
                                <Icon name="verified_user" size={24} />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-bold text-secondary/40 uppercase tracking-[0.2em] mb-2">URGENT RESPONSE</h4>
                                <p className="text-lg font-headline font-bold text-primary">urgent.ops@legalsite.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactUs;



import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const Careers = () => {
    const jobCategories = [
        { title: "Legal & Strategy", desc: "For senior counsels and associates specializing in structural legal frameworks.", open: 4 },
        { title: "Digital Policy & AI", desc: "Engineers and policy analysts working on the cutting edge of legal automation.", open: 2 },
        { title: "Operations & Admin", desc: "The engine room of LegalSite. Precision execution and platform support.", open: 3 }
    ];

    return (
        <main className="bg-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8 pt-8 pb-24">
                {/* Header */}
                <div className="mb-24">
                    <span className="inline-block px-3 py-1 bg-primary text-on-primary text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm mb-6">Join The Protocol</span>
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary leading-tight tracking-tighter mb-8">
                        The Counsel of <br />
                        Future Governance.
                    </h1>
                    <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed">
                        We are looking for individuals who view the law as a strategic and engineering challenge. Join a team dedicated to precision, transparency, and digital integrity.
                    </p>
                </div>

                {/* Values section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    <div className="p-8 border-l border-outline-variant/30">
                        <h3 className="font-headline text-2xl font-bold text-primary mb-4">Intellectual Rigor</h3>
                        <p className="text-on-surface-variant text-sm">We value deep specialized knowledge over superficial breadth.</p>
                    </div>
                    <div className="p-8 border-l border-outline-variant/30">
                        <h3 className="font-headline text-2xl font-bold text-primary mb-4">Digital First</h3>
                        <p className="text-on-surface-variant text-sm">Technology is not a tool; it is the environment in which we work.</p>
                    </div>
                    <div className="p-8 border-l border-outline-variant/30">
                        <h3 className="font-headline text-2xl font-bold text-primary mb-4">Structural Impact</h3>
                        <p className="text-on-surface-variant text-sm">We build legal frameworks that stand for decades, not fiscal quarters.</p>
                    </div>
                </section>

                {/* Open Positions Grid */}
                <section className="mb-32">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="text-3xl font-headline font-bold text-primary tracking-tight">Open Protocols</h2>
                        <span className="text-xs font-bold text-secondary-fixed-dim uppercase tracking-widest">9 Active Positions</span>
                    </div>
                    
                    <div className="space-y-4">
                        {jobCategories.map((cat, i) => (
                            <div key={i} className="group p-10 bg-white border border-clinical shadow-clinical hover:shadow-clinical-hover transition-all duration-300 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-8">
                                <div className="max-w-xl">
                                    <h4 className="text-2xl font-headline font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{cat.title}</h4>
                                    <p className="text-on-surface-variant text-sm">{cat.desc}</p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest bg-surface-container px-3 py-1 rounded-sm">{cat.open} Roles</span>
                                    <button className="bg-primary text-on-primary px-8 py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:-translate-y-0.5 transition-all shadow-lg active:scale-95">View Listings</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Editorial Break */}
                <section className="relative h-96 rounded-sm overflow-hidden mb-32 flex items-center justify-center text-center p-8">
                    <img className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 -z-10" data-alt="Abstract minimalist structural space with sharp light and shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-3_FB29jalbrZY75Ziwae3FuBbbMpdFIwjdDWVL7i3zCwrjlcfAqLaPzCZW3PeSalZtp0VDRP4GTK3_umVLbEcbXeGzI0miSjQnXCDGfCxVhTZa2IoVP1BpYh7ZU2iJTrrnBkpRMDQ19ziRf9y02VkahkMki-XLJo_AWGtHRl5E3oVrMqWpfSfHLA973Bxh7q4NJZ3-Dcf9kkjBzdqgmxU7xlljPWg-BVtyrgQkVf6e9VL10sB4A0Hf8JUj6TQY-peTtjZSrzmcE" />
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-headline font-bold text-primary mb-4 italic">"We don't just fill seats; we recruit strategic thinkers for the legal domain."</h2>
                        <p className="text-xs font-bold text-secondary uppercase tracking-widest">— Human Capital Protocol</p>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Careers;

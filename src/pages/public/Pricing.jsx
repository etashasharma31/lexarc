import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const Pricing = () => {
    return (
        <React.Fragment>
            <main className="pt-8 pb-24">
                {/*  Hero Section  */}
                <header className="max-w-[1200px] mx-auto px-8 mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h1 className="font-headline font-extrabold text-6xl tracking-tight text-primary mb-6 leading-tight">
                                Predictable <br/>Counsel, <span className="text-secondary">Fixed Fees.</span>
                            </h1>
                            <p className="text-on-surface-variant text-xl max-w-lg mb-8 leading-relaxed">
                                Top-tier legal expertise shouldn't be a legal mystery. Choose a plan that fits your growth stage, with transparent billing and no hidden retainers.
                            </p>
                            <div className="flex items-center gap-4">
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                                    <Icon name="verified_user" size={14} />
                                    BCI Standards
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                                    <Icon name="lock" size={14} />
                                    Encrypted Portals
                                </span>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-surface-container-low overflow-hidden rounded-md shadow-2xl relative z-10">
                                <img alt="Modern law office interior" className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply" data-alt="Monochrome minimal shot of a minimalist legal office with clean lines, concrete walls, and sharp sunlight shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM-fCDtCcR0uz293zD5l_ceqUT6vlczN9pTmraQps7Bh-odl2VO1JwlJ7xygrIsmBRgXMDyzE_FnbrMxvMk0Rt2tF1MrIG2Uw4Bjq671bxvDxbiGTN0nEHNsDVJ_QJrOplT1nsaAi1MFxxZE_33-5Z2KwTE8X9Q-Q97TgPkpy2y-qGW40ehu1vWR1vbjEqFL5p3yQ5qJoDHeIdHSZ-T6Rn1o1O6mXHyIW561jxJGDwhuDS7k_wqkVz53QtCu0nJTJ9CYkCrkji6TM"/>
                            </div>
                            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary-container z-0"></div>
                        </div>
                    </div>
                </header>

                {/*  Detailed Comparison Header  */}
                <section className="max-w-[1200px] mx-auto px-8 mb-12">
                    <h3 className="font-headline text-4xl font-extrabold text-primary mb-4">Deep Technicals</h3>
                    <p className="text-on-surface-variant max-w-xl">Every detail of our digital counsel services compared side-by-side. No ambiguity, just precision.</p>
                </section>

                {/*  Detailed Comparison Table  */}
                <section className="max-w-[1200px] mx-auto px-8 overflow-x-auto mb-32">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low">
                                <th className="py-6 px-4 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Feature Set</th>
                                <th className="py-6 px-4 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Basic</th>
                                <th className="py-6 px-4 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Standard</th>
                                <th className="py-6 px-4 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Premium</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/10">
                            <tr className="hover:bg-white transition-colors">
                                <td className="py-5 px-4 font-semibold text-sm">Monthly Consulting Hours</td>
                                <td className="py-5 px-4 text-sm">0.5 Hours</td>
                                <td className="py-5 px-4 text-sm font-bold">3 Hours</td>
                                <td className="py-5 px-4 text-sm">Unlimited*</td>
                            </tr>
                            <tr className="hover:bg-white transition-colors bg-surface-container-low/30">
                                <td className="py-5 px-4 font-semibold text-sm">Document Turnaround</td>
                                <td className="py-5 px-4 text-sm">5-7 Business Days</td>
                                <td className="py-5 px-4 text-sm font-bold">2-3 Business Days</td>
                                <td className="py-5 px-4 text-sm">Next Day Priority</td>
                            </tr>
                            <tr className="hover:bg-white transition-colors">
                                <td className="py-5 px-4 font-semibold text-sm">Equity Plan Management (ESOP)</td>
                                <td className="py-5 px-4 text-sm"><Icon name="priority_high" size={16} className="text-outline/40" /></td>
                                <td className="py-5 px-4 text-sm"><Icon name="check_circle" size={16} className="text-primary" /></td>
                                <td className="py-5 px-4 text-sm"><Icon name="check_circle" size={16} className="text-primary" /></td>
                            </tr>
                            <tr className="hover:bg-white transition-colors bg-surface-container-low/30">
                                <td className="py-5 px-4 font-semibold text-sm">Trademark Filings (per year)</td>
                                <td className="py-5 px-4 text-sm">Discounted Rate</td>
                                <td className="py-5 px-4 text-sm font-bold">1 Included</td>
                                <td className="py-5 px-4 text-sm">3 Included</td>
                            </tr>
                            <tr className="hover:bg-white transition-colors">
                                <td className="py-5 px-4 font-semibold text-sm">Privacy Policy / TOS</td>
                                <td className="py-5 px-4 text-sm">Template Only</td>
                                <td className="py-5 px-4 text-sm font-bold">Custom Drafted</td>
                                <td className="py-5 px-4 text-sm">Global Compliance</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/*  FAQ Section  */}
                <section className="max-w-[1200px] mx-auto px-8 mb-32">
                    <h3 className="font-headline text-3xl font-bold text-center mb-16">Frequently Asked</h3>
                    <div className="space-y-12">
                        <div className="group">
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                Are government filing fees included?
                            </h4>
                            <p className="text-on-surface-variant text-sm leading-relaxed ml-4.5 border-l border-outline-variant/20 pl-6">
                                No, all government filing fees (e.g., ROC/MCA statutory fees, GST registration charges) are passed through at cost without markup. Our pricing covers our professional counsel and documentation services.
                            </p>
                        </div>
                        <div className="group">
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                Can I switch plans as I scale?
                            </h4>
                            <p className="text-on-surface-variant text-sm leading-relaxed ml-4.5 border-l border-outline-variant/20 pl-6">
                                Absolutely. LegalSite is designed to scale with your enterprise growth. You can upgrade or downgrade with a 30-day notice period.
                            </p>
                        </div>
                        <div className="group">
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                Is litigation covered?
                            </h4>
                            <p className="text-on-surface-variant text-sm leading-relaxed ml-4.5 border-l border-outline-variant/20 pl-6">
                                Our plans cover transactional and advisory counsel. Litigation and formal dispute resolution are billed separately under a custom engagement letter, though subscribers receive a 20% discount on standard litigation rates.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

export default Pricing;

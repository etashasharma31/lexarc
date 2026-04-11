import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const categories = [
    { id: 'all', label: 'All Services', icon: 'grid_view' },
    { id: 'registration', label: 'Business Registration', icon: 'business' },
    { id: 'startup', label: 'Startup India & MSME', icon: 'rocket_launch' },
    { id: 'ip-services', label: 'IP Services', icon: 'verified_user' },
    { id: 'docs', label: 'Legal Docs', icon: 'description' },
    { id: 'compliance', label: 'Compliance', icon: 'policy' }
];

const services = [
    {
        id: 'registration-1',
        title: 'Business Registration',
        category: 'registration',
        description: 'Full-cycle entity formation including Pvt Ltd, LLP, and OPC status. Includes PAN/TAN filing, MoA/AoA drafting, and Digital Signatures.',
        price: 'From ₹15,000',
        icon: 'business',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9DcU71VPlp08pCDbhRHmqcstx0f1JGrMXcohXDzn69T6Ghz3n2qXwbgJVCQUjYT60m1HsGIkwBdCqNm43vGKOVrtWX2Yn3WkjRy0GqNKm6uJMRSYyEPIF4KYXIZRZ948Eq2ZDjEjN_mgUxkWzjp6Or-RgS5qYBeiqxDJNW8URPGznUhimbNG4FRo2c2Y4x355vPXrScF67ioY8EdLX6MuLcvOE0E2XqNV7XK-1oaB1TwLj1OMhnBjhV4y73hoDq08HiNQNRD2bYk',
        featured: true,
        badge: 'Popular Service'
    },
    {
        id: 'trademarks-1',
        title: 'Trademark Protection',
        category: 'ip-services',
        description: 'Defend your brand identity under the Indian Trademarks Act. We handle search, filing, and renewal monitoring with legal rigour.',
        linkText: 'Start Search',
        icon: 'copyright'
    },
    {
        id: 'startup-1',
        title: 'Startup India Recognition',
        category: 'startup',
        description: 'Expert guidance for DPIIT recognition, tax exemptions, and MSME/Udyam registration to unlock government benefits.',
        linkText: 'Apply Now',
        icon: 'rocket_launch'
    },
    {
        id: 'docs-1',
        title: 'Custom Contracts',
        category: 'docs',
        description: 'Bespoke drafting for MSAs, SaaS agreements, and Employment contracts under Indian Law. No templates, just iron-clad structures.',
        linkText: 'Request Draft',
        icon: 'draw'
    },
    {
        id: 'compliance-1',
        title: 'ROC & GST Compliance',
        category: 'compliance',
        description: 'Monthly GST filings, Annual ROC returns (AOC-4/MGT-7), and structural health checks to keep your enterprise in good standing.',
        linkText: 'Enroll Now',
        icon: 'policy'
    },
    {
        id: 'advisory-1',
        title: 'Institutional Strategy',
        category: 'all',
        description: 'Retained advisory services for Indian startups and established firms needing strategic oversight without full-time legal overhead.',
        linkText: 'Learn More',
        icon: 'insights'
    }
];

const ServicesListing = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('registration');
    const [activeSubCategory, setActiveSubCategory] = useState('PVT LTD');

    const filteredServices = activeCategory === 'all' 
        ? services 
        : services.filter(service => service.category === activeCategory);

    // Per sub-category content
    const subCategoryData = {
        'PVT LTD': {
            fullName: 'Private Limited Company',
            tagline: 'Most popular structure for funded startups and scalable businesses.',
            price: '₹15,000',
            timeline: '7–10 Days',
            minDirectors: '2',
            liability: 'Limited',
            docs: [
                { id: 'pan', title: 'PERMANENT ACCOUNT NUMBER (PAN)', category: 'IDENTITY PROOF', subLabel: 'REQUIRED FOR ALL DIRECTORS', icon: 'verified' },
                { id: 'aadhaar', title: 'AADHAAR CARD / PASSPORT', category: 'ADDRESS PROOF', subLabel: 'KYC VERIFICATION', icon: 'fingerprint' },
                { id: 'utility', title: 'LATEST UTILITY BILL', category: 'OFFICE PROOF', subLabel: 'NO-OBJECTION CERTIFICATE', icon: 'receipt' },
                { id: 'photos', title: 'DIRECTOR PHOTOS', category: 'PASSPORT SIZE', subLabel: 'HIGH RESOLUTION SCAN', icon: 'account_circle' },
                { id: 'dsc', title: 'DIGITAL SIGNATURE (DSC)', category: 'AUTHORIZATION', subLabel: 'CLASS 3 CERTIFICATE', icon: 'draw' },
                { id: 'moa', title: 'MOA & AOA INSTRUMENTS', category: 'STATUTORY', subLabel: 'CONSTITUTIONAL DOCUMENTS', icon: 'description' },
            ],
            steps: [
                { title: 'DSC & DIN Filing', desc: 'Secure Class 3 DSC and apply for DIN for all proposed directors on the MCA V3 portal.' },
                { title: 'RUN Name Approval', desc: 'File RUN (Reserve Unique Name) with ROC and obtain name availability confirmation.' },
                { title: 'SPICe+ Form Filing', desc: 'File SPICe+ INC-32 with MoA (INC-33) and AoA (INC-34) including PAN and TAN application.' },
                { title: 'Certificate of Incorporation', desc: 'MCA issues Certificate of Incorporation with CIN. Company is legally born.' },
            ],
            faqs: [
                { q: 'How long does Pvt Ltd registration take?', a: 'Typically 7–10 working days on MCA V3 once all documentation is verified and DSC is ready.' },
                { q: 'What is the minimum paid-up capital required?', a: 'There is no statutory minimum paid-up capital for a Pvt Ltd. ₹1,000 is common for early-stage companies.' },
                { q: 'Can an NRI or foreign national be a Director?', a: 'Yes. One Director must be resident in India (present for 182+ days in prior FY). Others can be foreign nationals with valid DIN.' },
                { q: 'What are the annual compliance obligations?', a: 'MCA annual return (MGT-7), financial statements (AOC-4), Board meetings (min. 4/year), Statutory Audit, and GST filing if applicable.' },
            ],
        },
        'LLP': {
            fullName: 'Limited Liability Partnership',
            tagline: 'Preferred by professionals, consultants, and small business partnerships.',
            price: '₹8,500',
            timeline: '10–14 Days',
            minDirectors: '2 Partners',
            liability: 'Limited',
            docs: [
                { id: 'pan', label: 'PARTNER PAN & AADHAAR', category: 'IDENTITY PROOF', subLabel: 'ALL DESIGNATED PARTNERS', icon: 'verified' },
                { id: 'utility', label: 'REGISTERED OFFICE PROOF', category: 'OFFICE PROOF', subLabel: 'UTILITY BILL + NOC', icon: 'receipt' },
                { id: 'photos', label: 'PARTNER PHOTOGRAPHS', category: 'KYC ASSETS', subLabel: 'HIGH RESOLUTION', icon: 'account_circle' },
                { id: 'dsc', label: 'PARTNER DSC (CLASS 3)', category: 'AUTHORIZATION', subLabel: 'STATUTORY REQUIREMENT', icon: 'draw' },
            ],
            steps: [
                { title: 'DPIN & DSC', desc: 'Obtain DPIN for all designated partners and procure Class 3 DSC for digital filings.' },
                { title: 'Name Reservation', desc: 'File RUN-LLP with MCA for name availability. Name must end with "LLP" or "Limited Liability Partnership".' },
                { title: 'FiLLiP Filing', desc: 'File FiLLiP (Form for Incorporation of LLP) with all partner details and subscriber sheet.' },
                { title: 'LLP Agreement', desc: 'File LLP Agreement (Form 3) within 30 days of incorporation specifying rights and duties of partners.' },
            ],
            faqs: [
                { q: 'What is the difference between LLP and Pvt Ltd?', a: 'LLPs have less compliance burden and profit sharing flexibility, but cannot raise venture capital due to restrictions on equity investment.' },
                { q: 'Is an LLP required to undergo a statutory audit?', a: 'Only if turnover exceeds ₹40 Lakh or capital contribution exceeds ₹25 Lakh. Otherwise, no mandatory statutory audit.' },
                { q: 'Can an LLP be converted to a Pvt Ltd later?', a: 'Yes. Section 366 of the Companies Act 2013 and LLP Act 2008 permit conversion with MCA approval. LexArchitect handles this transition.' },
                { q: 'How many partners are required minimum?', a: 'Minimum 2 partners (at least 2 designated partners). There is no maximum partner cap for an LLP.' },
            ],
        },
        'OPC': {
            fullName: 'One Person Company',
            tagline: 'Sole proprietorship backed by limited liability — ideal for solo founders.',
            price: '₹10,000',
            timeline: '5–7 Days',
            minDirectors: '1 (+ Nominee)',
            liability: 'Limited',
            docs: [
                { id: 'pan', label: 'OWNER PAN & AADHAAR', category: 'IDENTITY PROOF', subLabel: 'SINGLE DIRECTOR', icon: 'verified' },
                { id: 'nominee', label: 'NOMINEE CONSENT (INC-3)', category: 'STATUTORY', subLabel: 'SIGNED FORM + KYC', icon: 'how_to_reg' },
                { id: 'utility', label: 'OFFICE PROOF', category: 'OFFICE PROOF', subLabel: 'RENTAL + NOC', icon: 'receipt' },
                { id: 'photos', label: 'DIRECTOR PHOTO', category: 'KYC ASSETS', subLabel: 'PASSPORT SIZE', icon: 'account_circle' },
            ],
            steps: [
                { title: 'DSC & DIN', desc: 'Obtain DSC and DIN for the sole director. Identify and obtain consent from a nominee director.' },
                { title: 'Name Approval (RUN)', desc: 'File RUN with ROC. OPC name must end with "(OPC) Private Limited".' },
                { title: 'SPICe+ Filing', desc: 'File SPICe+ with MoA, AoA, INC-3 (nominee consent), and PAN/TAN application in a single integrated form.' },
                { title: 'Incorporation Certificate', desc: 'MCA issues Certificate of Incorporation. OPC commences operations as a legal entity.' },
            ],
            faqs: [
                { q: 'Who qualifies to form an OPC?', a: 'Only a natural person who is an Indian citizen and resident in India (present for 182+ days in prior FY). NRIs and companies cannot form an OPC.' },
                { q: 'What is mandatory conversion of OPC?', a: 'An OPC must mandatorily convert to Pvt Ltd if turnover exceeds ₹2 Crore OR paid-up capital exceeds ₹50 Lakh in any financial year.' },
                { q: 'Can an OPC have more than one director?', a: 'Yes. Up to 15 directors are allowed, but membership is restricted to one person only. Additional directors do not hold membership.' },
                { q: 'Is there a nominee requirement?', a: 'Yes. A nominee must be appointed at the time of incorporation who can take over the company on the incapacity or death of the sole member.' },
            ],
        },
        'Partnership': {
            fullName: 'Partnership Firm',
            tagline: 'Simple, low-cost structure for small businesses and professional practices.',
            price: '₹4,500',
            timeline: '3–5 Days',
            minDirectors: '2 Partners',
            liability: 'Unlimited',
            docs: [
                { id: 'pan', label: 'PARTNER PAN CARDS', category: 'IDENTITY PROOF', subLabel: 'ALL EXECUTING PARTNERS', icon: 'verified' },
                { id: 'deed', label: 'PARTNERSHIP DEED', category: 'LEGAL INSTRUMENT', subLabel: 'SIGNED & NOTARISED', icon: 'history_edu' },
                { id: 'utility', label: 'OFFICE UTILTY BILL', category: 'OFFICE PROOF', subLabel: 'REQUIRED FOR PAN', icon: 'receipt' },
                { id: 'photos', label: 'PARTNER PHOTOS', category: 'KYC ASSETS', subLabel: 'IDENTIFICATION', icon: 'account_circle' },
            ],
            steps: [
                { title: 'Partnership Deed Drafting', desc: 'LexArchitect drafts a comprehensive Partnership Deed specifying profit sharing ratio, partner roles, decision rights, and dissolution terms.' },
                { title: 'Stamp Duty Payment', desc: 'Deed is executed on non-judicial stamp paper of appropriate value as per state stamp duty schedule.' },
                { title: 'Notarisation & Execution', desc: 'Deed is signed by all partners in presence of witnesses and notarised.' },
                { title: 'Firm Registration (Optional)', desc: 'Registration with the Registrar of Firms under the Partnership Act 1932 is optional but recommended for legal enforceability.' },
            ],
            faqs: [
                { q: 'Is registration of a partnership firm mandatory?', a: 'No. Registration is optional under the Indian Partnership Act 1932, but an unregistered firm cannot sue partners or third parties in court.' },
                { q: 'What is the liability of partners?', a: 'Partners have unlimited personal liability — personal assets can be attached to settle firm debts. This is the key risk vs. LLP or Pvt Ltd.' },
                { q: 'How many partners can a firm have?', a: 'Banking partnerships are restricted to 10 partners. All other partnerships are limited to 50 partners under the Companies Act 2013.' },
                { q: 'Can a partnership be converted to an LLP?', a: 'Yes. The LLP Act 2008 provides a straightforward conversion mechanism. LexArchitect handles the full conversion including asset transfer.' },
            ],
        },
    };

    const activeSub = subCategoryData[activeSubCategory];
    const formRef = useRef(null);

    const handleDocInteraction = (doc) => {
        navigate('/document-audit-protocol', { state: { doc } });
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Inquiry submitted for ${activeSub.fullName}. Our team will contact you shortly.`);
    };

    return (
        <React.Fragment>
            <main className="pt-8 pb-24 px-8 max-w-[1200px] mx-auto min-h-screen bg-dot-pattern">
                <div className="flex flex-col lg:flex-row gap-12 text-on-surface">
                    {/*  Sidebar Navigation  */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-32 space-y-8">
                            <div>
                                <h3 className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-6">Service Categories</h3>
                                <nav className="space-y-1">
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => setActiveCategory(cat.id)}
                                            className={`w-full flex items-center justify-between group py-3 px-4 rounded-md transition-all duration-200 ${
                                                activeCategory === cat.id 
                                                    ? 'bg-primary text-on-primary font-bold shadow-lg' 
                                                    : 'hover:bg-surface-container-low text-on-surface-variant'
                                            }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <Icon name={cat.icon} size={14} className={activeCategory === cat.id ? 'text-on-primary' : 'text-outline group-hover:text-primary'} />
                                                <span className="text-sm">{cat.label}</span>
                                            </span>
                                            {activeCategory === cat.id && <Icon name="chevron_right" size={12} />}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/*  Main Content Canvas  */}
                    <section className="flex-grow">
                        <header className="mb-12">
                            <h1 className="font-headline text-5xl font-extrabold text-primary tracking-tighter mb-4 animate-in fade-in slide-in-from-left-4 duration-500">
                                {categories.find(c => c.id === activeCategory)?.label}.
                            </h1>
                            <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed font-body">Scale your Indian enterprise with Counsel-led legal precision. We manage the complexity from MCA registration to GST compliance.</p>
                        </header>

                        {activeCategory === 'registration' ? (
                            /* Wireframe Detailed Category View */
                            <div className="space-y-16 animate-in fade-in duration-700">
                                {/* Sub-Categories */}
                                <div className="flex flex-wrap gap-4">
                                {Object.keys(subCategoryData).map(sub => (
                                        <button 
                                            key={sub} 
                                            onClick={() => setActiveSubCategory(sub)}
                                            className={`px-6 py-2 border transition-colors uppercase tracking-widest text-xs font-bold rounded-sm ${
                                                activeSubCategory === sub 
                                                    ? 'bg-primary text-white border-primary shadow-md' 
                                                    : 'bg-surface-container-lowest border-outline-variant/30 text-primary hover:border-primary'
                                            }`}
                                        >
                                            {sub}
                                        </button>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* Docs Required */}
                                    <div className="space-y-8">
                                        <h3 className="text-lg font-bold text-primary flex items-center gap-3 border-b border-clinical pb-4">
                                            <Icon name="verified_user" size={20} /> Documents Required
                                        </h3>
                                        <div className="space-y-4">
                                            {activeSub.docs.map(doc => (
                                                <button 
                                                    key={doc.id} 
                                                    onClick={() => handleDocInteraction(doc)}
                                                    className="w-full text-left bg-white p-6 rounded-sm shadow-clinical border border-clinical hover:shadow-clinical-hover hover:border-secondary transition-all group flex items-center gap-6"
                                                >
                                                    <div className="w-12 h-12 bg-transparent flex items-center justify-center rounded-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                                        <Icon name={doc.icon} size={24} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-3 mb-1">
                                                            <span className="text-[9px] font-black text-secondary tracking-widest uppercase">{doc.category}</span>
                                                            <span className="h-1 w-1 bg-clinical rounded-full"></span>
                                                            <span className="text-[9px] font-bold text-on-surface-variant/40 tracking-widest uppercase">{doc.subLabel}</span>
                                                        </div>
                                                        <h4 className="text-sm font-black text-primary tracking-tight uppercase">{doc.title}</h4>
                                                    </div>
                                                    <Icon name="chevron_right" size={16} className="text-clinical group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                                            <div>
                                                <h2 className="text-2xl font-headline font-bold text-primary mb-2">{activeSub.fullName}</h2>
                                                <p className="text-sm text-on-surface-variant italic">{activeSub.tagline}</p>
                                            </div>
                                            <button 
                                                onClick={scrollToForm}
                                                className="bg-primary text-white font-label text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-sm shadow-md hover:bg-secondary transition-all flex items-center gap-3 whitespace-nowrap"
                                            >
                                                Start {activeSubCategory} Now <Icon name="arrow_forward" size={14} />
                                            </button>
                                        </div>
                                        <h3 className="text-lg font-bold text-primary mb-2">Registration Stages</h3>
                                        {activeSub.steps.map((step, i) => (
                                            <div key={i} className="flex gap-4 p-4 hover:bg-white hover:shadow-clinical transition-all rounded-sm border border-transparent hover:border-clinical">
                                                <span className="text-2xl font-black text-primary/20">0{i+1}</span>
                                                <div>
                                                    <p className="font-bold text-primary text-sm">{step.title}</p>
                                                    <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{step.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* FAQs Section */}
                                <div className="p-8 border-y border-outline-variant/10">
                                    <h3 className="text-center text-xl font-bold text-primary mb-10">Frequently Asked</h3>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {activeSub.faqs.map((faq, i) => (
                                            <div key={i}>
                                                <p className="font-bold text-sm text-primary mb-2">{faq.q}</p>
                                                <p className="text-xs text-on-surface-variant leading-relaxed">{faq.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-outline-variant/10">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Professional Fee</p>
                                            <p className="text-xl font-headline font-bold text-secondary">{activeSub.price}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Timeline</p>
                                            <p className="text-lg font-bold text-on-surface">{activeSub.timeline}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Liability</p>
                                            <p className="text-lg font-bold text-on-surface">{activeSub.liability}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Min. Partners</p>
                                            <p className="text-lg font-bold text-on-surface">{activeSub.minDirectors}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Inquiry Form Section */}
                                <div ref={formRef} className="bg-white rounded-sm border border-clinical p-10 mt-12 shadow-clinical animate-in fade-in slide-in-from-bottom-6 duration-700">
                                    <div className="max-w-3xl mx-auto text-center mb-12">
                                        <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-4 block">Secured Intake Form</span>
                                        <h2 className="text-3xl font-headline font-bold text-primary mb-4">Start Your {activeSubCategory} Journey</h2>
                                        <p className="text-on-surface-variant text-sm leading-relaxed">Fill out the preliminary details below. Our counsel-led onboarding team will review your requirements and initiate the MCA drafting process within 24 hours.</p>
                                    </div>

                                    <form onSubmit={handleFormSubmit} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Founder / Applicant Name</label>
                                                <input type="text" required placeholder="Full Legal Name" className="w-full bg-white border border-outline-variant/30 rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Proposed Entity Name</label>
                                                <input type="text" placeholder="e.g. Nexus Dynamics" className="w-full bg-white border border-outline-variant/30 rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                                <p className="text-[9px] text-slate-400 italic">Optional: We will perform a name availability check.</p>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Registration Phone</label>
                                                <div className="flex gap-2">
                                                    <div className="w-20 bg-surface-container-low border border-outline-variant/30 rounded-sm px-3 py-3 text-sm text-center">+91</div>
                                                    <input type="tel" required placeholder="Mobile Number" className="flex-1 bg-white border border-outline-variant/30 rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Work Email Address</label>
                                                <input type="email" required placeholder="founder@company.com" className="w-full bg-white border border-outline-variant/30 rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Estimated Project Timeline</label>
                                                <select className="w-full bg-white border border-outline-variant/30 rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none cursor-pointer">
                                                    <option>Immediate (1-2 weeks)</option>
                                                    <option>Upcoming Month</option>
                                                    <option>Planning Phase</option>
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Additional Context</label>
                                                <textarea rows="3" placeholder="Any specific requirements or capital split details..." className="w-full bg-white border border-outline-variant/30 rounded-sm px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"></textarea>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2 pt-6">
                                            <div className="flex items-start gap-3 mb-8 bg-primary/5 p-4 rounded-sm border border-primary/10">
                                                <Icon name="verified_user" size={18} className="text-primary mt-0.5" />
                                                <p className="text-[10px] leading-relaxed text-slate-500">
                                                    By submitting this inquiry, you agree to our <strong>Data Processing Policy</strong>. Your documents and information are stored in our secure, counsel-monitored environment.
                                                </p>
                                            </div>
                                            <button 
                                                type="submit"
                                                className="w-full bg-primary text-white font-headline font-bold text-lg py-5 rounded-sm shadow-xl hover:bg-secondary transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                                            >
                                                Register My {activeSubCategory} Now <Icon name="send" size={20} />
                                            </button>
                                            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-6">
                                                <Icon name="lock" size={12} className="inline mr-1" /> End-to-End Encryption Enabled
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            /*  Bento Grid Card List  */
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
                                {filteredServices.map((service) => (
                                    <div key={service.id} className="group bg-white rounded-sm p-8 transition-all shadow-clinical border border-clinical hover:shadow-clinical-hover flex flex-col items-start animate-in fade-in slide-in-from-bottom-4 duration-500 hover:-translate-y-1 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/[0.02] -mr-12 -mt-12 rounded-full blur-xl group-hover:bg-primary/[0.05] transition-colors"></div>
                                        <div className="w-12 h-12 bg-primary/[0.03] flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary transition-colors duration-300">
                                            <Icon name={service.icon} size={24} className="text-primary group-hover:text-white" />
                                        </div>
                                        <h2 className="font-headline text-xl font-bold mb-4">{service.title}</h2>
                                        <p className="text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">{service.description}</p>
                                        <Link 
                                            to={service.category === 'registration' ? '/service-detail-business-reg' : '#'}
                                            className="text-primary font-bold text-xs uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-all inline-flex items-center gap-2"
                                        >
                                            {service.linkText || 'Learn More'} <Icon name="arrow_forward" size={12} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </React.Fragment>
    );
};

export default ServicesListing;


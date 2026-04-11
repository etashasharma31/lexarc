import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden bg-surface bg-dot-pattern">
        <div className="max-w-[1200px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm mb-6">Institutional Legal Strategy</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary leading-[1.1] tracking-tight mb-8">
              Platform for all your <br />
              <span className="text-secondary">legal protocols.</span>
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-body">
              Experience precision-engineered legal solutions. From corporate governance to intellectual property, LegalSite provides structured digital protocols for modern enterprises.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-gradient-satin text-on-primary px-10 py-4 font-bold rounded-sm shadow-clinical-hover hover:-translate-y-1 transition-all duration-300 uppercase text-[10px] tracking-[0.2em] flex items-center gap-3">Start Service <Icon name="arrow_forward" size={16} /></Link>
              <Link to="/consultation-booking" className="border border-clinical text-primary px-10 py-4 font-bold rounded-sm hover:bg-white hover:shadow-clinical transition-all duration-300 uppercase text-[10px] tracking-[0.2em]">Book Consultation</Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                alt="Modern law office" 
                className="w-full aspect-[4/5] object-cover" 
                data-alt="Modern strategic interior of a prestigious law office with marble textures, soft natural lighting, and professional atmosphere" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk7tustvSETnaoQzKKtgAJhQgIEwe2jFYxflWMAbY7nyoSyf_GvLQ1dDrMboikM-6gCx9IgHniAkDRE3AmKcpOF5_LYUNtXZuj3MOGouHJRoSuWWReYtT4xyJoAGyTFUJB9sqZ2MdUfJ4qrKmA4gJrMF4kj2ktokfxMCxGIYF9xaIBjKfdSj6cM1xL6xQia3cSMsiur27tUQ81cNwWaCvvUf3pzqVmd-TlKUfZBXwenRRoDrvPKNRlFAUJ77nFOfk792-6htMvkoo" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent">
                <div className="flex items-center gap-4 text-on-primary">
                  <span className="text-4xl font-headline font-bold">15+</span>
                  <span className="text-xs uppercase tracking-widest font-bold leading-tight">Years of <br />Expertise</span>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary-fixed-dim/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24 bg-surface border-t border-clinical">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">Comprehensive Legal Strategy</h2>
              <p className="text-on-surface-variant">Tailored frameworks designed to protect and accelerate your commercial interests.</p>
            </div>
            <Link to="/services" className="font-label text-xs font-bold tracking-widest text-primary hover:underline transition-all">VIEW ALL SERVICES →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bento Item 1 */}
            <div className="md:col-span-2 bg-white p-10 rounded-sm shadow-clinical border border-clinical hover:shadow-clinical-hover transition-all group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.01] -mr-32 -mt-32 rounded-full blur-3xl group-hover:bg-primary/[0.03] transition-colors"></div>
              <Icon name="account_balance" size={40} className="text-secondary mb-6" />
              <h3 className="font-headline text-2xl font-bold mb-4">Corporate Governance</h3>
              <p className="text-on-surface-variant mb-8 max-w-md">Master the complexities of board management, shareholder relations, and regulatory compliance with our structured frameworks.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase rounded-sm">Compliance</span>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase rounded-sm">Board Ops</span>
              </div>
            </div>
            {/* Bento Item 2 */}
            <div className="bg-primary text-on-primary p-10 rounded-sm shadow-clinical-hover flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50"></div>
              <div className="relative z-10">
                <Icon name="gavel" size={40} className="text-secondary-container mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-headline text-2xl font-bold mb-4">Litigation Support</h3>
                <p className="text-on-primary/70 text-sm leading-relaxed">Strategic dispute resolution and evidence management for complex commercial cases.</p>
              </div>
              <Link to="/services" className="relative z-10 mt-8 text-secondary-container font-bold text-[10px] uppercase tracking-widest text-left hover:translate-x-1 transition-transform inline-flex items-center gap-2">Explore Services <Icon name="arrow_forward" size={14} /></Link>
            </div>
            {/* Bento Item 3 */}
            <div className="bg-white p-10 rounded-sm shadow-clinical border border-clinical hover:shadow-clinical-hover transition-all">
              <Icon name="verified_user" size={40} className="text-secondary mb-6" />
              <h3 className="font-headline text-xl font-bold mb-4 text-primary">IP Protection</h3>
              <p className="text-on-surface-variant text-sm">Securing your digital and physical assets globally.</p>
            </div>
            {/* Bento Item 4 */}
            <div className="bg-surface-container-lowest p-10 rounded-md shadow-sm hover:shadow-md transition-all">
              <Icon name="description" size={40} className="text-secondary mb-6" />
              <h3 className="font-headline text-xl font-bold mb-4">Contract Design</h3>
              <p className="text-on-surface-variant text-sm">Precision legal drafting for modern business agreements.</p>
            </div>
            {/* Bento Item 5 */}
            <div className="bg-surface-container-lowest p-10 rounded-md shadow-sm hover:shadow-md transition-all">
              <Icon name="business" size={40} className="text-secondary mb-6" />
              <h3 className="font-headline text-xl font-bold mb-4">Business Registration</h3>
              <p className="text-on-surface-variant text-sm">Structuring your enterprise for global scale and local compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-surface border-y border-outline-variant/10">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tight">Engineered for Simplicity</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">Our digital-first methodology removes the friction from traditional legal processes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { id: '01', title: 'Choose Service', desc: 'Select from our catalog of expert legal solutions.', icon: 'category' },
              { id: '02', title: 'Upload Documents', desc: 'Securely transmit your data via our encrypted vault.', icon: 'cloud_upload' },
              { id: '03', title: 'Processing', desc: 'Our strategic protocols and AI work in tandem for precision results.', icon: 'protocol' },
              { id: '04', title: 'Track Progress', desc: 'Real-time updates on your enterprise legal health.', icon: 'analytics' }
            ].map((step, idx) => (
              <div key={idx} className="relative p-8 bg-white border border-clinical shadow-clinical rounded-sm group hover:bg-primary hover:shadow-clinical-hover transition-all duration-500 overflow-hidden">
                <span className="text-6xl font-headline font-black text-primary/[0.03] absolute -top-2 -right-2 group-hover:text-white/[0.05] transition-colors">{step.id}</span>
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-white/20">
                  <Icon name={step.icon} size={24} className="text-primary group-hover:text-on-primary" />
                </div>
                <h3 className="font-headline text-xl font-bold mb-4 group-hover:text-on-primary">{step.title}</h3>
                <p className="text-on-surface-variant text-sm group-hover:text-on-primary/80 transition-colors leading-relaxed">{step.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 translate-x-1/2 translate-y-[-50%] z-10">
                    <Icon name="chevron_right" size={20} className="text-outline-variant" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-tertiary">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-tertiary mb-8 leading-tight">Trusted by Industry <br />Counsel</h2>
            <div className="flex flex-wrap gap-8 opacity-60">
              <img alt="Partner Logo" className="h-8 grayscale brightness-200" data-alt="Minimalist abstract corporate logo in monochrome" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjH0iH1hhWAkzXx-6Kh2Y5_LePtExN4tH_Sa-YAEBHKyGkJGRAmR6ijWl-5DOQhu1QiHEPGe5HBsMOpJlInwbfCbKR-tzOIBAtOTct7gCRv5w1QBnSY1Fvoy2FgSDGj5LMMDHWM_FMZlm9rF3plPSIlTWIW1npOqON0JH11KsYhQUBD46bYiGzTvjgFfBxwCh8SLXI2uJwtyh7pmdz6zmOpuwGTfTCbr6AsDcNC8fZmrVRbXELiwAwWF9VypzAKtcQ0HFtn4ab5QA" />
              <img alt="Partner Logo" className="h-8 grayscale brightness-200" data-alt="Geometric minimalist tech company logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqp4lA-MHExteBKGT0mYc5DWEM4Y7rTCthwgUEDnorpUK5rlwedq2KF6pcOr0qvXAbvQeQZJcVWb8EBgghWY4nKfARUb7rChqXHJvqUHLrtujrckVSXPizTcVlAgDLK_2CDsk594rx1HFZ5ZIxrfP2_KWAs63Ts1SJZTjfq3kLf7QTxTNosIO--sjtVCvMaqfoxSnUa4ndlxOgw68ui_OJmItE3twxxqxcR5tojHZwLkpp0ytfA64pwHyowOrRmuFxEEHhATV1bPw" />
              <img alt="Partner Logo" className="h-8 grayscale brightness-200" data-alt="Clean corporate typography based logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqIfpW54MGE7NZPgNN568EpQKMBDVI-0r3AViVIiHHosCBRp87ttmQEO3AYMp3KhrE0rbIWzD2MQrJyzQHRHKY9zhQZpTNNWkbqoZs14_Qs3b3EdknmCakjGXV6BXnfx0gxJp126mT4j1Slx5-X4oaVO3rpjy1pEEfW6cdf7S3qua9aTFpCDgbxIPWGv78kUT_OYgxQcaoqOait-ayh9Fc7CdRNbuVJRmHdJ_jQNjQEwDd2Sa5A6rEXpn3kZRJusOhuUaIJanRYvE" />
            </div>
          </div>
          <div className="space-y-6">
            {/* Review Card */}
            <div className="bg-tertiary-container p-8 rounded-sm border-l-4 border-secondary shadow-xl">
              <div className="flex mb-4 gap-0.5">
                <Icon name="star" size={20} className="text-secondary-container fill-secondary-container" />
                <Icon name="star" size={20} className="text-secondary-container fill-secondary-container" />
                <Icon name="star" size={20} className="text-secondary-container fill-secondary-container" />
                <Icon name="star" size={20} className="text-secondary-container fill-secondary-container" />
                <Icon name="star" size={20} className="text-secondary-container fill-secondary-container" />
              </div>
              <p className="text-on-tertiary font-body italic text-lg mb-6 leading-relaxed">
                "LegalSite transformed our approach to legal compliance. Their structured, digital-first methodology is exactly what modern enterprise needs."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img alt="User" data-alt="Professional headshot of a business executive in a dark suit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWifCthckEIm-bCgpKuSGfMGyj2mpheMxmqvEdmkwSO_Ydgi-2pGtbOgUNW5kTKBPO3wan8nZhOtgpSvFlfRoUlhigFArGDxM6ao4uTnlyyyfvgt8rNyYac-HRPjcsSudl-zfrrT_TpdfB-SasFtk1UDW-B5KYP39BdD2q04id_csX_noktJixdm4f2S15wm6C2m0vwK1nBn_Okd5fL3GQ3gilberwVsy0QEF_hHj84lpbIPo7LRdY437jS3m55rjB-BHcOaeX170" />
                </div>
                <div>
                  <h5 className="text-on-primary font-bold text-sm">Rajiv Mehra</h5>
                  <p className="text-on-tertiary-container text-xs uppercase tracking-widest font-bold">Co-founder, Nexus Dynamics Pvt Ltd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface bg-dot-pattern border-t border-clinical">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="bg-white rounded-sm overflow-hidden flex flex-col md:flex-row shadow-clinical border border-clinical">
            <div className="p-12 md:p-20 flex-1">
              <h2 className="font-headline text-3xl md:text-5xl font-bold text-primary mb-6">Ready to secure your future?</h2>
              <p className="text-on-surface-variant text-lg mb-10 max-w-lg">Schedule a priority consultation with our senior counsel today.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/consultation-booking" className="bg-gradient-satin text-on-primary px-10 py-4 font-bold rounded-sm shadow-xl hover:-translate-y-1 transition-all duration-300 inline-block text-center">Book Now</Link>
                <Link to="/about" className="text-primary font-bold px-4 py-4 flex items-center gap-2 group">
                  Learn about our process 
                  <Icon name="arrow_forward" size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-primary relative hidden md:block">
              <img alt="Modern boardroom" className="w-full h-full object-cover opacity-50" data-alt="Sleek glass boardroom table with leather chairs in a minimalist corporate office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZRNkLcNkEwE7hNKS0ipE9wCA7ssuXzahKFpgISakvz-Ye21rdx5iiWOpLr-alKPG8erGQ2zg0IU3Q0OijM7ob2nLCGO1ejlTRh9kQ12rUsRuxzIKfqGOFK2FLVKLjhSCWxqFp4og7uimE_v3tjsHe6nSs73CfoWUnd6QSja1KFoE18MwFKdiDbbR7GSNPAiLdCJ7EDdWqWk09ec0c-otPNH5sJ_dYSHTkqIggLD8sNejmwqP8tkNSfLFea5kKaYGN1ue4Vsos-I4" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

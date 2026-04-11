import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const AboutUs = () => {
    return (
        <main className="bg-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center overflow-hidden bg-[#00152a]">
                <div className="absolute inset-0 z-0">
                    <img 
                        className="w-full h-full object-cover opacity-30 grayscale" 
                        data-alt="Monochrome structural shot of a modern courthouse with dramatic shadows and clean lines" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk7tustvSETnaoQzKKtgAJhQgIEwe2jFYxflWMAbY7nyoSyf_GvLQ1dDrMboikM-6gCx9IgHniAkDRE3AmKcpOF5_LYUNtXZuj3MOGouHJRoSuWWReYtT4xyJoAGyTFUJB9sqZ2MdUfJ4qrKmA4gJrMF4kj2ktokfxMCxGIYF9xaIBjKfdSj6cM1xL6xQia3cSMsiur27tUQ81cNwWaCvvUf3pzqVmd-TlKUfZBXwenRRoDrvPKNRlFAUJ77nFOfk792-6htMvkoo" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00152a]"></div>
                </div>
                <div className="max-w-[1200px] mx-auto px-8 w-full relative z-10 text-center">
                    <span className="inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-bold tracking-[0.2em] uppercase rounded-sm mb-6">Our Legacy</span>
                    <h1 className="font-headline text-5xl md:text-7xl font-bold text-white leading-tight tracking-tighter mb-8">
                        Building the <br />
                        <span className="text-secondary-fixed-dim">Future of Justice.</span>
                    </h1>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                <div className="lg:col-span-6">
                    <h2 className="text-4xl font-headline font-bold text-primary mb-8 leading-tight">Precision. Authority. <br />Digital Integrity.</h2>
                    <div className="space-y-6 text-on-surface-variant font-body leading-relaxed text-lg">
                        <p>
                            LegalSite was founded on a singular premise: the practice of law is not just a service—it is a structural discipline. We view legal frameworks as the essential strategy upon which sustainable enterprise is built.
                        </p>
                        <p>
                            At the intersection of ancient precedent and artificial intelligence, we craft protocols that are robust, transparent, and geared for the speed of modern commerce.
                        </p>
                    </div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                    <div className="bg-white p-8 border border-clinical shadow-clinical rounded-sm">
                        <Icon name="policy" size={32} className="text-secondary mb-4" />
                        <h4 className="font-bold text-primary mb-2">Structural Analysis</h4>
                        <p className="text-xs text-on-surface-variant">Deep-dive assessment of corporate risk and governance strategy.</p>
                    </div>
                    <div className="bg-primary p-8 rounded-sm shadow-clinical-hover">
                        <Icon name="verified" size={32} className="text-secondary-fixed-dim mb-4" />
                        <h4 className="font-bold text-on-primary mb-2">Authenticated Results</h4>
                        <p className="text-xs text-on-primary/70">Verified outcomes through rigorous legal and technical validation.</p>
                    </div>
                </div>
            </section>

            {/* Team/Leadership Grid */}
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-headline font-bold text-primary">The Leadership of The Counsel</h2>
                        <p className="text-on-surface-variant mt-4">A multidisciplinary team of senior partners and digital engineers.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: "Dr. Alistair Thorne", role: "Founding Partner & Senior Counsel", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2EPGKg4h9Nlso0lDEmceCWXYC4SPD-ap7MJ9YUqt8utZAPVT7QknJecpAb2iGQ2Q1Gd_QXc-gfhCTDPINkTPoJIbUXeVFxTSirdOYUhFDigbq3Ivw6Jy9wMlNuCOlcDJEoOIz-B7n-MW7oiEedRV7JIfM94XIdwmKVLFWUakFg8ebBzEnD2I-v1iRIp1ER1Nor2j4YVd4oT9xbl-SM6PyCtUkpiVlKXy5k1cgcU9Umei3WVpL-fERnIjlZWSKr6plKkabu55Y2uY" },
                            { name: "Elena Volkov", role: "Chief of Digital Policy", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJKGD0DMWJHAIRC_byQyrR8r_Wk_LFEG8fRXoVHQNhIhf8nq7eu2XYOpKlacdIliZ3ws8US-NZnUSvbGvl4h7iFjFI_ls4d4Tt7_hGpr3rg4u-0Qp2hPBEzu2Lpdw6FXA5jGpFYqlqFtcul6pTrnm1jp_X46p1JSJJ7MNf9Pcyqe65ekOWkypRDZfP-rqOeVdGLNv4uSA0EUjxIBdcpkosv5G-RaYoHgaCclsxyxMEFZ_RpH-PtQ_Y7o_JMhI9YppBs65jAy5BhDE" },
                            { name: "Marcus Sterling", role: "Head of Dispute Strategy", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWifCthckEIm-bCgpKuSGfMGyj2mpheMxmqvEdmkwSO_Ydgi-2pGtbOgUNW5kTKBPO3wan8nZhOtgpSvFlfRoUlhigFArGDxM6ao4uTnlyyyfvgt8rNyYac-HRPjcsSudl-zfrrT_TpdfB-SasFtk1UDW-B5KYP39BdD2q04id_csX_noktJixdm4f2S15wm6C2m0vwK1nBn_Okd5fL3GQ3gilberwVsy0QEF_hHj84lpbIPo7LRdY437jS3m55rjB-BHcOaeX170" }
                        ].map((member, i) => (
                            <div key={i} className="group relative">
                                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                </div>
                                <h3 className="text-xl font-headline font-bold text-primary mb-1">{member.name}</h3>
                                <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-surface border-y border-clinical">
                <div className="max-w-[1200px] mx-auto px-8 text-center">
                    <h2 className="text-3xl font-headline font-bold text-primary mb-6">Experience the Precision</h2>
                    <p className="text-on-surface-variant mb-10">We invite you to engage with a new standard of legal counsel.</p>
                    <Link to="/contact" className="inline-block bg-gradient-satin text-on-primary px-12 py-4 font-bold rounded-sm uppercase tracking-widest text-xs shadow-clinical-hover hover:-translate-y-1 transition-all">Schedule Consultation</Link>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;

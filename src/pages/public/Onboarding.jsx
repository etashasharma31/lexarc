import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const Onboarding = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const steps = [
        { id: 1, title: 'Entity Selection', icon: 'business' },
        { id: 2, title: 'Identity Verification', icon: 'verified_user' },
        { id: 3, title: 'Legal Health Check', icon: 'monitor_heart' },
        { id: 4, title: 'Finalize Setup', icon: 'task_alt' }
    ];

    return (
        <div className="min-h-screen bg-surface bg-dot-pattern pt-8 pb-20 px-4 transition-all duration-700">
            <div className="max-w-[1200px] mx-auto">
                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-3xl font-headline font-bold text-primary tracking-tight">Setup Your Account</h1>
                        <span className="text-sm font-bold text-on-surface-variant opacity-60">Step {step} of 4</span>
                    </div>
                    <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden flex relative">
                        <div className="absolute inset-0 opacity-10 bg-primary blur-[1px]"></div>
                        {steps.map((s) => (
                            <div 
                                key={s.id} 
                                className={`h-full flex-1 transition-all duration-700 relative z-10 ${
                                    s.id <= step ? 'bg-primary' : 'bg-transparent'
                                } border-r border-surface/10 last:border-0`}
                            />
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-md p-10 shadow-clinical border border-clinical min-h-[550px] flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/[0.02] -mr-32 -mt-32 rounded-full blur-3xl pointer-events-none"></div>
                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-grow">
                            <h2 className="text-2xl font-headline font-bold text-primary mb-2">Identify your entity.</h2>
                            <p className="text-on-surface-variant mb-10">Select the primary business structure you intend to register or manage.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {['Private Limited', 'LLP Registration', 'OPC / Sole Proprietorship', 'Partnership Firm'].map(alt => (
                                    <button 
                                        key={alt}
                                        onClick={nextStep}
                                        className="p-8 border border-clinical rounded-sm bg-white hover:shadow-clinical-hover hover:scale-[1.01] hover:border-primary transition-all duration-300 text-left group relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:rotate-12 transition-transform">
                                            <Icon name="business" size={64} />
                                        </div>
                                        <div className="w-12 h-12 bg-primary/[0.05] rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                            <Icon name="business" size={24} className="text-primary group-hover:text-white" />
                                        </div>
                                        <p className="font-headline font-bold text-[1.125rem] text-primary tracking-tight mb-2">{alt}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-secondary"></span>
                                            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant/60">Professional Class</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-grow">
                            <h2 className="text-2xl font-headline font-bold text-primary mb-2">Verified Identity.</h2>
                            <p className="text-on-surface-variant mb-10">Upload official identification to comply with legal platform regulations.</p>
                            
                            <div className="space-y-8">
                                <div className="border border-clinical rounded-sm p-16 flex flex-col items-center justify-center bg-white shadow-clinical hover:shadow-clinical-hover transition-all cursor-pointer group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="w-20 h-20 bg-primary/[0.03] rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                        <Icon name="cloud_upload" size={32} className="text-primary group-hover:text-white" />
                                    </div>
                                    <p className="font-headline font-bold text-primary group-hover:scale-105 transition-transform">Click to upload identity document</p>
                                    <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant/40 mt-4">Automated Verification via LegalSite Auth</p>
                                </div>
                                
                                <div className="flex items-start gap-4 p-6 bg-surface-container-low/50 rounded-sm border-l-4 border-primary">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                        <Icon name="verified_user" size={16} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Encrypted Transfer</p>
                                        <p className="text-[11px] text-on-surface-variant leading-relaxed">Your data is protected with enterprise-grade AES-256 security and is only visible to verified counsel.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-grow">
                            <h2 className="text-2xl font-headline font-bold text-primary mb-2">Legal Health Survey.</h2>
                            <p className="text-on-surface-variant mb-10">Help us build your legal strategy by answering a few quick questions.</p>
                            
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <p className="text-sm font-bold text-primary flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-primary text-white text-[10px] flex items-center justify-center">01</span>
                                        Do you currently hold any registered Intellectual Property?
                                    </p>
                                    <div className="flex gap-4">
                                        <button className="flex-1 py-4 bg-white border border-clinical shadow-clinical hover:shadow-clinical-hover hover:border-primary hover:text-primary transition-all font-bold text-[10px] uppercase tracking-widest rounded-sm">YES</button>
                                        <button className="flex-1 py-4 bg-white border border-clinical shadow-clinical hover:shadow-clinical-hover hover:border-primary hover:text-primary transition-all font-bold text-[10px] uppercase tracking-widest rounded-sm">NO</button>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <p className="text-sm font-bold text-primary flex items-center gap-3">
                                        <span className="w-6 h-6 rounded-full bg-primary text-white text-[10px] flex items-center justify-center">02</span>
                                        What is your current annual revenue bracket?
                                    </p>
                                    <div className="relative">
                                        <select className="w-full bg-white border border-clinical shadow-clinical appearance-none rounded-sm px-6 py-4 text-sm font-bold text-primary focus:ring-1 focus:ring-primary transition-all pr-12">
                                            <option>Pre-revenue / Seed</option>
                                            <option>₹0 – ₹10 Lakhs</option>
                                            <option>₹10 Lakhs – ₹1 Crore</option>
                                            <option>₹1 Crore+</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/40">
                                            <Icon name="unfold_more" size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex-grow flex flex-col items-center justify-center text-center">
                            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-8 shadow-2xl">
                                <Icon name="check" size={48} className="text-on-primary" />
                            </div>
                            <h2 className="text-3xl font-headline font-bold text-primary mb-4">Protocol Complete.</h2>
                            <p className="text-on-surface-variant max-w-sm mb-12">Your profile is now calibrated. You can now access your dashboard and start your first service.</p>
                            
                            <button 
                                onClick={() => navigate('/user-dashboard')}
                                className="w-full bg-gradient-satin text-on-primary py-4 rounded-sm font-bold text-sm tracking-widest shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase"
                            >
                                GO TO DASHBOARD
                            </button>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    {step < 4 && (
                        <div className="flex justify-between items-center mt-auto pt-16 border-t border-clinical/50">
                            {step > 1 ? (
                                <button 
                                    onClick={prevStep}
                                    className="flex items-center gap-3 text-on-surface-variant hover:text-primary font-bold text-[10px] uppercase tracking-[0.2em] transition-all group"
                                >
                                    <Icon name="arrow_back" size={16} className="group-hover:-translate-x-1 transition-transform" /> 
                                    <span>Reverse</span>
                                </button>
                            ) : <div></div>}
                            
                            <button 
                                onClick={nextStep}
                                className="bg-primary text-white px-12 py-4 rounded-sm font-bold text-[10px] tracking-[0.2em] shadow-clinical hover:shadow-clinical-hover hover:-translate-y-0.5 transition-all duration-300 uppercase flex items-center gap-3 active:scale-95"
                            >
                                Continue <Icon name="arrow_forward" size={16} />
                            </button>
                        </div>
                    )}
                </div>
                
                {/* Branding Footer */}
                <div className="mt-12 text-center">
                    <p className="text-[10px] font-bold text-on-surface-variant opacity-30 uppercase tracking-[0.4em]">LegalSite Digital Counsel</p>
                </div>
            </div>
        </div>
    );
};

export default Onboarding;

import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const ErrorPage404 = () => {
    return (
        <React.Fragment>
            <main className="flex-grow flex items-center justify-center relative overflow-hidden px-8 pt-8 pb-24 min-h-screen">
                {/*  Background Structural Motif  */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                    <Icon name="account_balance" size={800} className="rotate-12" />
                </div>
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
                    {/*  Left Side: Editorial Typography  */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="space-y-4">
                            <span className="font-label text-on-surface-variant tracking-[0.2em] uppercase text-xs font-bold block mb-4">Error 404 — Void of Proceeding</span>
                            <h1 className="font-headline text-[3.5rem] leading-[1.1] font-bold tracking-[-0.03em] text-primary">
                                Case Closed: <br/>
                                <span className="text-on-surface-variant font-medium">This page could not be found.</span>
                            </h1>
                            <p className="font-body text-lg text-on-surface-variant max-w-xl leading-relaxed">
                                The document or destination you are seeking has been archived, relocated, or never existed in the current jurisdiction. LegalSite recommends a return to standard proceedings.
                            </p>
                        </div>
                        {/*  Navigation Options (Bento Style)  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            <a className="group flex items-center justify-between p-6 bg-surface-container-lowest border border-outline-variant/15 rounded-md hover:bg-primary hover:text-on-primary transition-all duration-300 editorial-shadow" href="#">
                                <div className="space-y-1">
                                    <h3 className="font-headline font-bold text-lg">Dashboard</h3>
                                    <p className="text-xs opacity-70">Return to case overview</p>
                                </div>
                                <Icon name="arrow_forward" size={16} className="group-hover:translate-x-2 transition-transform" />
                            </a>
                            <a className="group flex items-center justify-between p-6 bg-surface-container-lowest border border-outline-variant/15 rounded-md hover:bg-primary hover:text-on-primary transition-all duration-300 editorial-shadow" href="#">
                                <div className="space-y-1">
                                    <h3 className="font-headline font-bold text-lg">Services</h3>
                                    <p className="text-xs opacity-70">Explore legal strategies</p>
                                </div>
                                <Icon name="arrow_forward" size={16} className="group-hover:translate-x-2 transition-transform" />
                            </a>
                            <a className="group flex items-center justify-between p-6 bg-surface-container-lowest border border-outline-variant/15 rounded-md hover:bg-primary hover:text-on-primary transition-all duration-300 editorial-shadow" href="#">
                                <div className="space-y-1">
                                    <h3 className="font-headline font-bold text-lg">Help Center</h3>
                                    <p className="text-xs opacity-70">Regulatory documentation</p>
                                </div>
                                <Icon name="arrow_forward" size={16} className="group-hover:translate-x-2 transition-transform" />
                            </a>
                            <div className="p-6 bg-surface-container-low rounded-md flex flex-col justify-center">
                                <p className="font-label text-[10px] text-outline uppercase tracking-widest mb-2">Urgent Assistance</p>
                                <p className="font-headline font-bold text-primary">Call Senior Partner</p>
                            </div>
                        </div>
                    </div>
                    {/*  Right Side: Structural Imagery  */}
                    <div className="lg:col-span-5 hidden lg:block">
                        <div className="relative">
                            {/*  Geometric Layering  */}
                            <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary-container/10 -z-10 rounded-sm"></div>
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-outline-variant/20 -z-10 rounded-sm"></div>
                            <div className="overflow-hidden rounded-sm editorial-shadow aspect-[4/5] relative">
                                <img alt="Modern minimalist structural detail" className="w-full h-full object-cover grayscale contrast-125" data-alt="Monochrome structural detail of a high-end minimalist building facade with sharp angles, deep shadows, and clean concrete surfaces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7lOKz4IWlnuIewUxlHct7wYR-gGz3vpr7U5bqh1kDgKnvPWT3fV8iC2LfaL_NDDwvsCdH9IV32UgduUXgRMz5hq3KPWt076ez9u3omZ6ktMTqwwKNKJMgfRVCGieLBXqgFRZedB9vUDrKRvPf09cVQ94Zit0cf8rg4902rl7zoaEnOD5uxHTQXlxyuxaNRpiWJMSNPOaP4dz6kTUU0TR5EBjTOZeL6OKhEQcutu6io32GsnGXtDXeAjZbLqO9Mu1rnrS3EUjsqXc"/>
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent">
                                    <p className="text-on-primary font-headline font-bold italic opacity-90 text-xl tracking-tight">"Justice delayed is justice denied, but a missing page is merely a detour."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
};

export default ErrorPage404;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication redirect
        navigate('/user-dashboard');
    };

    return (
        <React.Fragment>
            <main className="min-h-screen flex items-center justify-center bg-slate-100 p-8 sm:p-12">
                <div className="flex flex-col lg:flex-row max-w-[1200px] w-full bg-white shadow-2xl rounded-sm overflow-hidden min-h-[700px]">
                    {/*  Editorial Image Section  */}
                    <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary">
<div className="absolute inset-0 z-0 scale-105">
<img className="w-full h-full object-cover opacity-60 mix-blend-multiply" data-alt="Luxurious dark wood law office interior with floor-to-ceiling windows overlooking a twilight city skyline, dramatic shadows and premium leather furniture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0VXO8jouw9kithspdvvX0t7QjubKJqYQw4S0BvAK0i5Usu9d969Lb5gjH-qhAxqvTgcBl2Et1QYmOdNRGfmNH0snBQpKpobD49ZZZlmiFB7lV9drir7hr3UDWmRstobKrvHGB9wqbqTho42I875vAhYdIt6MV159m5xGTDpQWnh9NHuFicG3RVlqakE15MFREaVs_lyIvXqgkvVCSCHKNnvAVNl5SWj3SxED7eSimbcGvu9k_fIGDyiIfA2KVhyhxzDzKSvcnERs"/>
</div>
<div className="relative z-10 w-full h-full p-16 flex flex-col justify-between">
<div>
<h1 className="text-white font-headline text-[2.5rem] font-bold leading-none tracking-tight">
                        LegalSite<br/>
<span className="text-on-primary-container">Legal Precision.</span>
</h1>
</div>
<div className="max-w-xl">
<p className="text-surface-variant font-headline text-lg leading-relaxed mb-8">
                        The professional standard for modern legal operations. Secure, authoritative, and clinical in execution.
                    </p>
<div className="flex gap-12 items-center">
<div className="flex flex-col">
<span className="text-surface-container-highest font-label text-xs uppercase tracking-[0.2em] mb-1">Encrypted</span>
<span className="text-white font-headline text-xl font-medium">AES-256</span>
</div>
<div className="w-px h-10 bg-outline-variant/20"></div>
<div className="flex flex-col">
<span className="text-surface-container-highest font-label text-xs uppercase tracking-[0.2em] mb-1">Framework</span>
<span className="text-white font-headline text-xl font-medium">Cloud Private</span>
</div>
</div>
</div>
</div>
{/*  Structural Accent  */}
<div className="absolute bottom-0 right-0 w-64 h-64 border-r-4 border-b-4 border-on-primary-container/20 m-12"></div>
</section>

                    {/*  Login Canvas  */}
                    <section className="flex-1 flex flex-col bg-surface-container-lowest">
{/*  Mobile Header Only  */}
<div className="lg:hidden p-8 flex items-center justify-between">
<span className="text-primary font-headline text-2xl font-black tracking-tighter">LegalSite</span>
</div>
<div className="flex-1 flex items-center justify-center px-8 sm:px-16 lg:px-24">
<div className="w-full max-w-md">
<header className="mb-12">
<h2 className="font-headline text-[1.75rem] font-medium text-primary mb-2 tracking-tight">Protocol Authentication</h2>
<p className="text-on-surface-variant font-body text-sm">Please authenticate to access the case management portal.</p>
</header>
<form className="space-y-6" onSubmit={handleSubmit}>
{/*  Email Field  */}
<div className="space-y-2">
<label className="block font-label text-[0.75rem] font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="email">
                                Identity / Email
                            </label>
<div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                                        <Icon name="mail" size={20} />
                                    </div>
<input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest pl-12 pr-4 py-4 text-sm font-body transition-all duration-200 outline-none rounded-[2px]" id="email" placeholder="name@firm.com" type="email"/>
</div>
</div>
{/*  Password Field  */}
<div className="space-y-2">
<div className="flex justify-between items-center">
<label className="block font-label text-[0.75rem] font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="password">
                                    Security Credential
                                </label>
<a className="text-[10px] font-label font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors" href="#">
                                    Lost Credential?
                                </a>
</div>
<div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                                        <Icon name="lock" size={20} />
                                    </div>
<input className="w-full bg-surface-container-low border-none focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest pl-12 pr-4 py-4 text-sm font-body transition-all duration-200 outline-none rounded-[2px]" id="password" placeholder="••••••••••••" type="password"/>
</div>
</div>
{/*  Login Action  */}
<button className="w-full btn-gradient py-5 px-6 text-white font-label font-bold uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-3 group hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-primary/5 active:scale-[0.98] rounded-[2px]" type="submit">
                             Authenticate
                            <Icon name="arrow_forward" size={18} />
</button>
</form>
{/*  Footer Links  */}
<div className="mt-16 pt-8 border-t border-outline-variant/15 flex flex-col gap-6">
<div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary">
                                    <Icon name="verified_user" size={20} />
                                </div>
<div>
<p className="text-[11px] font-label font-bold uppercase tracking-widest text-on-surface">Secure Session</p>
<p className="text-[10px] text-on-surface-variant">Encrypted with 256-bit military grade SSL</p>
</div>
</div>
<div className="flex justify-between items-center text-[10px] text-outline font-label tracking-wider uppercase">
<span>V4.2.0 Stable Build</span>
<div className="flex gap-4">
<a className="hover:text-primary transition-colors" href="#">Support</a>
<a className="hover:text-primary transition-colors" href="#">Compliance</a>
</div>
</div>
</div>
</div>
</div>

                    </section>
                </div>
            </main>
        </React.Fragment>
    );
};

export default Login;

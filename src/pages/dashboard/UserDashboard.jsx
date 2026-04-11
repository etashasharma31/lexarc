import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import { DASHBOARD_MENU_ITEMS } from '../../constants/navigation';

const UserDashboard = () => {
    return (
        <div className="bg-surface min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8 flex">
                <DashboardSidebar 
                    menuItems={DASHBOARD_MENU_ITEMS} 
                    userName="Anderson Marcus" 
                    userRole="Business Owner"
                />
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern transition-all duration-500">
                    <div className="w-full">
                    {/*  Dashboard Header  */}
                    <div className="mb-12">
                        <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mb-2">Portfolio Overview</h1>
                        <p className="text-on-surface-variant font-body max-w-2xl">Welcome back, Anderson. You have 3 active cases requiring attention and 2 upcoming filing deadlines this week.</p>
                    </div>

                    {/*  Bento Grid Layout  */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/*  Active Cases - Large Left Column  */}
                        <div className="md:col-span-8 space-y-8">
                            <section className="bg-white/50 rounded-sm p-8 border border-transparent">
                                <div className="flex justify-between items-end mb-8">
                                    <h2 className="text-2xl font-headline font-semibold text-primary">Active Services</h2>
                                    <Link to="/user-services" className="text-xs font-bold uppercase tracking-widest text-secondary hover:underline">View All Matters</Link>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/*  Case Card 1  */}
                                    <div className="group border border-transparent p-6 rounded-sm bg-white/60 hover:bg-white hover:border-clinical/20 transition-all duration-300 cursor-pointer relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">In Progress</span>
                                            <span className="text-xs text-on-surface-variant font-mono">#LX-8892</span>
                                        </div>
                                        <h3 className="text-xl font-headline font-bold text-primary mb-2">Business Registration</h3>
                                        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">Enterprise restructuring and Articles of Incorporation for 'Vanguard Tech Solutions'.</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                                            <div className="flex -space-x-2">
                                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                                    <img className="w-full h-full object-cover" data-alt="professional portrait of a senior lawyer in a dark suit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2EPGKg4h9Nlso0lDEmceCWXYC4SPD-ap7MJ9YUqt8utZAPVT7QknJecpAb2iGQ2Q1Gd_QXc-gfhCTDPINkTPoJIbUXeVFxTSirdOYUhFDigbq3Ivw6Jy9wMlNuCOlcDJEoOIz-B7n-MW7oiEedRV7JIfM94XIdwmKVLFWUakFg8ebBzEnD2I-v1iRIp1ER1Nor2j4YVd4oT9xbl-SM6PyCtUkpiVlKXy5k1cgcU9Umei3WVpL-fERnIjlZWSKr6plKkabu55Y2uY" />
                                                </div>
                                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                                    <img className="w-full h-full object-cover" data-alt="professional portrait of a legal counsel woman in a modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJKGD0DMWJHAIRC_byQyrR8r_Wk_LFEG8fRXoVHQNhIhf8nq7eu2XYOpKlacdIliZ3ws8US-NZnUSvbGvl4h7iFjFI_ls4d4Tt7_hGpr3rg4u-0Qp2hPBEzu2Lpdw6FXA5jGpFYqlqFtcul6pTrnm1jp_X46p1JSJJ7MNf9Pcyqe65ekOWkypRDZfP-rqOeVdGLNv4uSA0EUjxIBdcpkosv5G-RaYoHgaCclsxyxMEFZ_RpH-PtQ_Y7o_JMhI9YppBs65jAy5BhDE" />
                                                </div>
                                            </div>
                                            <Icon name="arrow_forward" size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                    
                                    {/*  Case Card 2  */}
                                    <div className="group border border-transparent p-6 rounded-sm bg-white/60 hover:bg-white hover:border-clinical/20 transition-all duration-300 cursor-pointer relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">Pending Review</span>
                                            <span className="text-xs text-on-surface-variant font-mono">#LX-9014</span>
                                        </div>
                                        <h3 className="text-xl font-headline font-bold text-primary mb-2">Trademark Filing</h3>
                                        <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">IP protection and patent strategy for proprietary machine learning framework.</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                                            <div className="flex -space-x-2">
                                                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                                    <img className="w-full h-full object-cover" data-alt="professional portrait of a legal counsel woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJKGD0DMWJHAIRC_byQyrR8r_Wk_LFEG8fRXoVHQNhIhf8nq7eu2XYOpKlacdIliZ3ws8US-NZnUSvbGvl4h7iFjFI_ls4d4Tt7_hGpr3rg4u-0Qp2hPBEzu2Lpdw6FXA5jGpFYqlqFtcul6pTrnm1jp_X46p1JSJJ7MNf9Pcyqe65ekOWkypRDZfP-rqOeVdGLNv4uSA0EUjxIBdcpkosv5G-RaYoHgaCclsxyxMEFZ_RpH-PtQ_Y7o_JMhI9YppBs65jAy5BhDE" />
                                                </div>
                                            </div>
                                            <Icon name="arrow_forward" size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white/50 rounded-sm p-8 border border-transparent">
                                <h2 className="text-xl font-headline font-semibold text-primary mb-6">Recent Documents</h2>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Incorporation_Draft_V2.pdf', date: '2h ago', icon: 'description' },
                                        { name: 'MoA_Final_Signed.pdf', date: 'Yesterday', icon: 'verified' }
                                    ].map((doc, i) => (
                                        <div key={i} className="flex items-center justify-between p-4 hover:bg-white/80 rounded-sm border border-transparent hover:border-clinical/10 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <Icon name={doc.icon} size={20} className="text-primary" />
                                                <div>
                                                    <p className="text-sm font-bold text-primary">{doc.name}</p>
                                                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{doc.date}</p>
                                                </div>
                                            </div>
                                            <button className="text-[10px] font-bold text-secondary uppercase hover:underline">Download</button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/*  Side Rail - Right Column  */}
                        <div className="md:col-span-4 space-y-8">
                            {/* Legal Health Metric Widget */}
                            <section className="bg-white/50 rounded-sm p-8 border border-transparent relative overflow-hidden">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-headline font-bold text-primary">Legal Health</h2>
                                    <span className="text-2xl font-black text-secondary">82%</span>
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <div className="h-1.5 w-full bg-surface-container flex rounded-full overflow-hidden">
                                        <div className="h-full bg-secondary w-[82%]"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex gap-3">
                                            <Icon name="warning" size={16} className="text-error mt-0.5" />
                                            <div>
                                                <p className="text-[10px] font-bold text-error uppercase tracking-widest">High Risk</p>
                                                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Found 2 expired compliance certificates in your vault.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <Icon name="lightbulb" size={16} className="text-secondary mt-0.5" />
                                            <div>
                                                <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Suggestion</p>
                                                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Consider updating your Terms of Service to reflect new guidelines.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full py-4 text-[10px] font-bold text-white bg-primary rounded-sm uppercase tracking-widest mt-4 shadow-md hover:-translate-y-0.5 active:scale-95 transition-all">
                                        Run Full Diagnostic
                                    </button>
                                </div>
                                <Icon name="shield" size={120} className="absolute -bottom-8 -right-8 text-primary/[0.03] -rotate-12" />
                            </section>
                            <section className="bg-white/50 rounded-sm p-8 border border-transparent relative overflow-hidden">
                                <h2 className="text-lg font-headline font-bold text-primary mb-8">Upcoming Deadlines</h2>
                                <div className="relative space-y-10 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-outline-variant/30">
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-error flex items-center justify-center text-white ring-4 ring-white shadow-sm">
                                            <Icon name="priority_high" size={12} strokeWidth={3} />
                                        </div>
                                        <p className="text-[10px] font-bold text-error uppercase tracking-widest mb-1">Oct 24, 2024</p>
                                        <h4 className="font-bold text-sm text-primary">IP Office Response Due</h4>
                                    </div>
                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-white shadow-sm">
                                            <Icon name="event" size={12} strokeWidth={3} />
                                        </div>
                                        <p className="text-[10px] font-bold text-primary-container uppercase tracking-widest mb-1">Oct 28, 2024</p>
                                        <h4 className="font-bold text-sm text-primary">Tax ID Certification</h4>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    </div>
                </main>
            </div>
        </div>
);
};

export default UserDashboard;

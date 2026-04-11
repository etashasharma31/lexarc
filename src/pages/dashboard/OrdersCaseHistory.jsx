import Icon from '../../components/common/Icon';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';

const OrdersCaseHistory = () => {
    const menuItems = [
        { label: 'Overview', path: '/user-dashboard', icon: 'dashboard' },
        { label: 'My Services', path: '/user-services', icon: 'business_center' },
        { label: 'Document Vault', path: '/document-vault', icon: 'folder_shared' },
        { label: 'Compliance', path: '/compliance-calendar', icon: 'event_available' },
        { label: 'Payments', path: '/payments-billing', icon: 'payments' }
    ];

    return (
        <div className="bg-surface min-h-screen">
            <div className="max-w-[1200px] mx-auto px-8 flex">
                <DashboardSidebar 
                    menuItems={menuItems} 
                    userName="Anderson Marcus" 
                    userRole="Business Owner"
                />
            
                <main className="flex-1 pl-12 pt-8 pb-12 bg-dot-pattern transition-all duration-500">
                    <div className="w-full">
                        {/*  Header & Stats  */}
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                            <div>
                                <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mb-2">Order History</h1>
                                <p className="text-on-surface-variant font-body">Review and manage your active filings and legal service history.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-white p-6 min-w-[160px] shadow-clinical border border-clinical">
                                    <p className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] mb-1 uppercase">ACTIVE ORDERS</p>
                                    <p className="text-3xl font-headline font-bold text-primary">04</p>
                                </div>
                                <div className="bg-white p-6 min-w-[160px] shadow-clinical border border-clinical">
                                    <p className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] mb-1 uppercase">PENDING ACTIONS</p>
                                    <p className="text-3xl font-headline font-bold text-error">01</p>
                                </div>
                            </div>
                        </div>
                        {/*  Filters & Search Shell  */}
                        <div className="bg-white p-2 mb-8 flex flex-col md:flex-row gap-4 items-center shadow-clinical border border-clinical">
                            <div className="relative flex-1 w-full">
                                <Icon name="search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary opacity-30" />
                                <input className="w-full pl-12 pr-4 py-3 bg-transparent border-none text-sm font-bold text-primary focus:ring-0 placeholder:text-primary/20" placeholder="Search orders..." type="text" />
                            </div>
                            <div className="flex gap-2 w-full md:w-auto">
                                <select className="bg-surface-container-low border-none rounded-sm text-xs font-bold py-3 px-6 focus:ring-1 focus:ring-primary cursor-pointer uppercase tracking-widest text-primary">
                                    <option>All Statuses</option>
                                    <option>Processing</option>
                                    <option>Action Required</option>
                                    <option>Completed</option>
                                </select>
                                <button className="bg-primary text-white px-8 py-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] active:scale-95 transition-all shadow-clinical">
                                    <Icon name="filter_list" size={16} />
                                    Filter
                                </button>
                            </div>
                        </div>
                        {/*  Bento-ish Grid Layout  */}
                        <div className="grid grid-cols-1 gap-6">
                            {/*  Order Card 1: Action Required  */}
                            <div className="bg-white p-8 flex flex-col md:flex-row items-center gap-8 border-l-4 border-error shadow-clinical hover:shadow-clinical-hover transition-all duration-300 relative overflow-hidden group">>
                                <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:rotate-12 transition-transform">
                                    <Icon name="gavel" size={64} />
                                </div>
                                <div className="border border-error/10 p-6 rounded-sm shrink-0 bg-transparent">
                                    <Icon name="gavel" size={32} className="text-error" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center gap-3">
                                        <span className="border border-error/30 text-error text-[9px] font-bold px-2 py-0.5 tracking-[0.2em] rounded-sm">ACTION REQUIRED</span>
                                        <span className="text-[10px] text-on-surface-variant font-bold opacity-40">#LX-2024-8842</span>
                                    </div>
                                    <h3 className="text-xl font-headline font-bold text-primary">Delaware Business Incorporation</h3>
                                    <p className="text-sm text-on-surface-variant max-w-xl">Finalizing articles of organization and registered agent assignment.</p>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-4">Ordered Oct 12, 2024</p>
                                    <a className="bg-primary text-white px-6 py-3 text-[10px] font-bold tracking-[0.2em] rounded-sm uppercase flex items-center gap-2 group shadow-clinical hover:shadow-clinical-hover" href="#">
                                        Resolve <Icon name="arrow_forward" size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                            {/*  Order Card 2: Processing  */}
                            <div className="bg-white p-8 flex flex-col md:flex-row items-center gap-8 border-l-4 border-secondary shadow-clinical hover:shadow-clinical-hover transition-all duration-300 relative overflow-hidden group">
                                <div className="bg-secondary/[0.03] p-6 rounded-sm shrink-0">
                                    <Icon name="verified_user" size={32} className="text-secondary" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center gap-3">
                                        <span className="bg-secondary text-white text-[9px] font-bold px-2 py-0.5 tracking-[0.2em] rounded-sm">PROCESSING</span>
                                        <span className="text-[10px] text-on-surface-variant font-bold opacity-40">#LX-2024-9103</span>
                                    </div>
                                    <h3 className="text-xl font-headline font-bold text-primary">International Trademark Filing</h3>
                                    <p className="text-sm text-on-surface-variant max-w-xl">Madrid Protocol application under review by local counsel.</p>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-4">Ordered Sep 28, 2024</p>
                                    <button className="border border-clinical text-primary px-6 py-3 text-[10px] font-bold tracking-[0.2em] rounded-sm uppercase flex items-center gap-2 group hover:bg-white hover:shadow-clinical">
                                        Status <Icon name="arrow_forward" size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/*  Case Documents Preview Widget  */}
                        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2 bg-primary p-12 relative overflow-hidden rounded-sm shadow-clinical">
                                <div className="relative z-10">
                                    <h4 className="text-3xl font-headline font-bold text-white mb-4">Secure Vault Storage</h4>
                                    <p className="text-white/70 max-w-md mb-8 italic text-sm">All your case documents and filed orders are archived in our encrypted vault for 10 years as per global compliance standards.</p>
                                    <button className="bg-white text-primary px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] active:scale-95 transition-all shadow-clinical">Access Document Vault</button>
                                </div>
                                <Icon name="shield" size={200} className="absolute -bottom-10 -right-10 text-white/[0.03] rotate-12" />
                            </div>
                            <div className="bg-white p-8 flex flex-col justify-between rounded-sm shadow-clinical border border-clinical">
                                <div>
                                    <p className="text-[10px] font-bold text-on-surface-variant tracking-[0.2em] mb-8 uppercase">UPCOMING DEADLINES</p>
                                    <ul className="space-y-8">
                                        <li className="flex gap-4">
                                            <div className="text-center shrink-0 w-12 h-12 bg-primary/[0.03] rounded-sm flex flex-col items-center justify-center">
                                                <p className="text-lg font-bold text-primary leading-none">24</p>
                                                <p className="text-[8px] font-bold text-primary/40 uppercase tracking-tighter">OCT</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-primary">Signature Due</p>
                                                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">Delaware Incorporation</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="text-center shrink-0 w-12 h-12 bg-primary/[0.03] rounded-sm flex flex-col items-center justify-center">
                                                <p className="text-lg font-bold text-primary leading-none">02</p>
                                                <p className="text-[8px] font-bold text-primary/40 uppercase tracking-tighter">NOV</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-primary">Tax ID Filing</p>
                                                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest opacity-60">Global Expansion Bundle</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mt-12 border-b border-primary/20 pb-1 w-fit hover:border-primary transition-all" href="#">View full calendar</a>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default OrdersCaseHistory;

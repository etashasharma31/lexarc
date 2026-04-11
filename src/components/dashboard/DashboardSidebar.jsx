import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Icon from '../common/Icon';

const DashboardSidebar = ({ menuItems, userName, userRole, userImage }) => {
    const navigate = useNavigate();
    return (
        <aside className="w-64 h-[calc(100vh-80px)] bg-surface-container-lowest border-r border-outline-variant/10 flex flex-col sticky top-0 z-40 overflow-y-auto">
            {/* Navigation Section */}
            <nav className="flex-1 px-4 mt-8 space-y-1">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className="group"
                    >
                        {({ isActive }) => (
                            <div className={`
                                flex items-center gap-3 px-4 py-3 rounded-sm transition-all duration-200
                                ${isActive 
                                    ? 'bg-primary text-on-primary font-bold shadow-lg' 
                                    : 'text-on-surface-variant hover:bg-primary/5 hover:text-primary'}
                            `}>
                                <Icon 
                                    name={item.icon} 
                                    size={20} 
                                    className={isActive ? 'text-on-primary' : 'text-outline group-hover:text-primary'} 
                                />
                                <span className="text-sm tracking-tight">{item.label}</span>
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Profile Section */}
            <div className="p-6 border-t border-outline-variant/10">
                <NavLink to="/user-profile" className="flex items-center gap-3 p-2 border border-clinical/10 rounded-md hover:bg-secondary-container/20 transition-all group/profile">
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-primary flex items-center justify-center text-white shadow-sm group-hover/profile:scale-105 transition-transform">
                        {userImage ? (
                            <img src={userImage} alt={userName} className="w-full h-full object-cover" />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-xs font-bold text-primary truncate group-hover/profile:text-secondary transition-colors">{userName}</p>
                        <p className="text-[10px] uppercase tracking-tighter text-on-surface-variant opacity-60 font-black">Profile Node</p>
                    </div>
                </NavLink>
                
                <button onClick={() => navigate('/login')} className="flex items-center gap-3 px-4 py-3 mt-4 w-full rounded-sm text-on-surface-variant hover:bg-error/5 hover:text-error transition-colors group">
                    <Icon name="logout" size={20} className="text-outline group-hover:text-error" />
                    <span className="text-sm font-medium">Log Out</span>
                </button>
            </div>
        </aside>
    );
};

export default DashboardSidebar;

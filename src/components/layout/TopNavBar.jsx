import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon';

const TopNavBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-8 h-20 max-w-[1200px] mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-headline">
          LegalSite
        </Link>
        <div className="hidden lg:flex items-center space-x-8 font-headline font-medium text-sm tracking-tight">
          <Link to="/services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</Link>
          <Link to="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</Link>
          <Link to="/resource-library" className="text-slate-600 hover:text-slate-900 transition-colors">Resources</Link>
        </div>

        {/* Search Bar - Desktop Only */}
        <div className="hidden xl:flex items-center relative group">
          <Icon name="search" size={16} className="absolute left-3 text-outline group-focus-within:text-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search services, legal guides..." 
            className="bg-transparent border border-clinical/20 rounded-sm pl-10 pr-4 py-2 text-xs w-64 focus:ring-1 focus:ring-primary focus:bg-white transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          {/* Notification Bell */}
          <Link to="/notifications" className="p-2 text-slate-500 hover:text-primary relative hidden md:block">
            <Icon name="notifications" size={20} />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-error rounded-full border border-white"></span>
          </Link>
          
          <div className="flex items-center gap-4 border-l border-clinical pl-4 ml-2">
            <Link to="/user-profile" className="w-10 h-10 border border-clinical/20 rounded-xl flex items-center justify-center text-primary shadow-sm hover:scale-110 active:scale-95 transition-all group" title="Arjun Sharma - View Profile">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <Link to="/login" className="px-5 py-2 text-xs font-bold text-slate-600 hover:bg-surface-container-low transition-all duration-300 uppercase tracking-widest">
            Login
          </Link>
          <Link to="/signup" className="bg-gradient-satin text-on-primary px-6 py-2.5 text-xs font-bold rounded-sm shadow-lg hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;

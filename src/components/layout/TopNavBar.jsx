import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../common/Icon';

const TopNavBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Cmd+K / Ctrl+K and ESC shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fully functional mapped paths for the platform
  const masterIndex = [
    { type: 'Service', title: 'FDI & FEMA Advisory', desc: 'Navigate cross-border investments and RBI regulations', path: '/services' },
    { type: 'Service', title: 'Business Registration', desc: 'Private Limited, LLP, OPC incorporation', path: '/services' },
    { type: 'Template', title: 'Co-Founders Agreement', desc: 'Standard startup equity structural mapping', path: '/templates/founder-agreement' },
    { type: 'Template', title: 'Employment Contract', desc: 'Compliant workforce structuring', path: '/templates/employment' },
    { type: 'Statute', title: 'Companies Act, 2013', desc: 'Core Indian Corporate Law', path: '/statutes' },
    { type: 'Statute', title: 'IT Act, 2000', desc: 'Cyber security and data privacy parameters', path: '/statutes' }
  ];

  const searchResults = masterIndex.filter(res => 
    res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    res.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleResultClick = (path) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(path);
  };

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

        {/* Global Search Interface */}
        <div className="hidden xl:flex items-center relative" ref={searchRef}>
          <div className={`relative group transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-[400px]' : 'w-64'}`}>
            <Icon 
              name="search" 
              size={16} 
              className={`absolute left-4 top-[10px] transition-colors ${isSearchOpen ? 'text-primary' : 'text-outline group-focus-within:text-primary'}`} 
            />
            <input 
              ref={inputRef}
              type="text" 
              placeholder="Search via Elastic node..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full bg-white border border-outline-variant/50 rounded-md pl-11 pr-12 py-2 text-xs font-medium text-slate-700 shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none h-9"
            />
            <div className="absolute right-3 top-[9px] flex items-center justify-center">
              <span className="bg-slate-100 border border-slate-200 text-slate-400 font-bold text-[9px] px-1.5 py-0.5 rounded uppercase tracking-widest pointer-events-none shadow-sm">
                {isSearchOpen ? 'ESC' : '⌘K'}
              </span>
            </div>
          </div>

          {/* Search Dropdown Module */}
          {isSearchOpen && (
            <div className="absolute top-[44px] left-0 w-full bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-clinical rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[100]">
              <div className="px-4 py-2.5 border-b border-clinical bg-slate-50 flex justify-between items-center">
                <span className="text-[9px] font-black text-primary/40 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Icon name="bolt" size={12} className="text-secondary" /> Global Search
                </span>
                <span className="text-[9px] text-slate-400 italic font-mono">{searchQuery ? `${searchResults.length} nodes` : 'awaiting query'}</span>
              </div>
              
              <div className="max-h-[350px] overflow-y-auto">
                {searchQuery ? (
                  searchResults.length > 0 ? (
                    <div className="p-2 space-y-1">
                      {searchResults.map((res, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleResultClick(res.path)}
                          className="w-full text-left px-3 py-3 hover:bg-slate-50 rounded-md transition-all group/item flex gap-4 items-start"
                        >
                          <div className="mt-0.5 bg-white shadow-sm border border-slate-100 p-1.5 rounded-md text-primary/40 group-hover/item:text-secondary group-hover/item:border-secondary/20 transition-colors">
                            <Icon name={res.type === 'Service' ? 'business' : res.type === 'Template' ? 'description' : 'gavel'} size={14} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-[8px] font-black uppercase text-primary/60 tracking-[0.1em]">{res.type}</span>
                            </div>
                            <p className="text-xs font-bold text-slate-800">{res.title}</p>
                            <p className="text-[10px] text-slate-500 leading-snug mt-0.5">{res.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-10 text-center flex flex-col items-center">
                      <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                        <Icon name="search_off" size={20} className="text-slate-400" />
                      </div>
                      <p className="text-xs font-bold text-slate-600">No parameters matched</p>
                      <p className="text-[10px] text-slate-400 mt-1">Try searching for "fdi" or "template"</p>
                    </div>
                  )
                ) : (
                  <div className="p-4">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 px-2">Trending Queries</p>
                    <div className="space-y-1">
                      {[
                        { title: 'Corporate Tax Defensibility', icon: 'trending_up', path: '/services' },
                        { title: 'Series A Term Sheet Draft', icon: 'description', path: '/templates' },
                        { title: 'Privacy Policy (DPDP Act)', icon: 'policy', path: '/statutes' }
                      ].map((item, i) => (
                        <button 
                          key={i} 
                          onClick={() => handleResultClick(item.path)}
                          className="w-full text-left px-2 py-2 text-xs font-medium text-slate-600 hover:text-primary hover:bg-primary/5 rounded-md flex items-center gap-3 transition-colors"
                        >
                          <Icon name={item.icon} size={14} className="opacity-50" /> {item.title}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Auth / Actions */}
        <div className="flex items-center gap-2">
          {/* Notification Bell */}
          <Link to="/notifications" className="p-2 text-slate-500 hover:text-primary relative hidden md:block transition-colors">
            <Icon name="notifications" size={20} />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-error rounded-full shadow-[0_0_0_2px_white] animate-pulse"></span>
          </Link>
          
          <div className="flex items-center gap-4 border-l border-clinical pl-4 ml-2">
            <Link to="/user-profile" className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-primary shadow-sm hover:scale-105 active:scale-95 transition-all group" title="View Profile">
              <Icon name="account_circle" size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
          <Link to="/login" className="px-5 py-2 text-[11px] font-bold text-slate-600 hover:bg-slate-50 rounded-md transition-all uppercase tracking-widest">
            Login
          </Link>
          <Link to="/signup" className="bg-primary text-white px-5 py-2 text-[11px] font-bold rounded-md shadow-md hover:bg-secondary hover:-translate-y-0.5 transition-all uppercase tracking-widest ml-1">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;

import React from 'react';
import { Link } from 'react-router-dom';

const linkClass = "text-slate-500 font-['Inter'] text-xs uppercase tracking-widest font-bold hover:text-slate-900 transition-colors block";

const Footer = () => {
  return (
    <footer className="w-full py-16 border-t border-slate-200 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col justify-between">
          <div>
            <div className="text-lg font-black text-slate-900 mb-2">LegalSite</div>
            <p className="text-slate-400 font-['Inter'] text-[10px] uppercase tracking-widest font-bold mt-16 md:mt-auto">
              © 2024 Digital Counsel
            </p>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-4">
          <Link to="/templates" className={linkClass}>Templates</Link>
          <Link to="/guides" className={linkClass}>Guides</Link>
          <Link to="/resource-library" className={linkClass}>Resource Library</Link>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-4">
          <Link to="/about" className={linkClass}>About Us</Link>
          <Link to="/careers" className={linkClass}>Careers</Link>
          <Link to="/contact" className={linkClass}>Contact</Link>
          <Link to="/reviews-testimonials" className={linkClass}>Testimonials</Link>
        </div>

        {/* Links Column 3 */}
        <div className="space-y-4">
          <Link to="/privacy-policy" className={linkClass}>Privacy Policy</Link>
          <Link to="/terms-conditions" className={linkClass}>Terms of Service</Link>
          <Link to="/refund-policy" className={linkClass}>Refund Policy</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

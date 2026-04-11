import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../components/common/Icon';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simulate sign-up logic
    navigate('/onboarding');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-surface p-8">
      <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 bg-surface-container-low rounded-lg shadow-2xl overflow-hidden">
        {/* Left Side: Illustration / Branding */}
        <div className="bg-primary p-12 text-on-primary flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <Link to="/" className="text-2xl font-headline font-bold mb-12 block">LegalSite</Link>
            <h2 className="text-4xl font-headline font-bold mb-6 leading-tight">Build your legal foundation today.</h2>
            <p className="text-on-primary/70 mb-12">Join thousands of enterprises securing their digital assets and commercial interests with precision protocols.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-transparent p-2 rounded-sm border border-white/20">
                  <Icon name="verified" size={20} className="text-secondary-fixed" />
                </div>
                <div>
                  <p className="font-bold text-sm">Verified Counsel</p>
                  <p className="text-xs text-on-primary/60">Access to elite legal minds and AI protocols.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-transparent p-2 rounded-sm border border-white/20">
                  <Icon name="security" size={20} className="text-secondary-fixed" />
                </div>
                <div>
                  <p className="font-bold text-sm">Data Integrity</p>
                  <p className="text-xs text-on-primary/60">Sovereign protection for your legal documents.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 pt-12 mt-auto border-t border-white/10">
            <p className="text-[10px] uppercase font-bold tracking-widest text-on-primary/40">Strategic Precision in Law</p>
          </div>
          
          {/* Decorative background circle */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl"></div>
        </div>

        {/* Right Side: Form */}
        <div className="p-12 md:p-16">
          <h1 className="text-3xl font-headline font-bold text-primary mb-2">Create Account</h1>
          <p className="text-on-surface-variant text-sm mb-10">Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link></p>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Full Name</label>
              <input 
                type="text" 
                placeholder="Marcus Sterling" 
                className="w-full bg-surface-container-high border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Email Address</label>
              <input 
                type="email" 
                placeholder="marcus@nexus.com" 
                className="w-full bg-surface-container-high border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Role</label>
                <select className="w-full bg-surface-container-high border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
                  <option>Business Owner</option>
                  <option>Legal Professional</option>
                  <option>Compliance Officer</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Account Type</label>
                <select className="w-full bg-surface-container-high border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer">
                  <option>Standard</option>
                  <option>Enterprise</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-surface-container-high border-none rounded-sm px-4 py-3 text-sm focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            
            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" id="terms" className="w-4 h-4 rounded-sm border-none bg-surface-container-highest text-primary focus:ring-0 cursor-pointer" />
              <label htmlFor="terms" className="text-xs text-on-surface-variant">
                I agree to the <Link to="/terms-conditions" className="text-primary font-bold hover:underline">Terms of Service</Link> and <Link to="/privacy-policy" className="text-primary font-bold hover:underline">Privacy Policy</Link>.
              </label>
            </div>
            
            <button 
              type="submit"
              onClick={handleSignUp}
              className="w-full bg-gradient-satin text-on-primary py-4 rounded-sm font-bold text-sm tracking-widest shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase"
            >
              Sign Up
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center justify-center gap-6">
            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant opacity-40">Or sign up with</span>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-transparent border border-clinical flex items-center justify-center hover:bg-white transition-colors">
                <Icon name="google" size={18} className="text-primary" />
              </button>
              <button className="w-10 h-10 rounded-full bg-transparent border border-clinical flex items-center justify-center hover:bg-white transition-colors">
                <Icon name="linkedin" size={18} className="text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

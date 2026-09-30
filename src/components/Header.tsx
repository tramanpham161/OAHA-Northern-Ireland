import React, { useState } from 'react';
import { OahaLogo } from './OahaLogo';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "WHY IT MATTERS", href: "#why-it-matters" },
    { name: "NI CONTEXT", href: "#ni-context" },
    { name: "THE OPPORTUNITY", href: "#the-opportunity" },
    { name: "WHAT WE ARE DOING", href: "#how-we-work" },
    { name: "NI PRIORITIES", href: "#regional-priorities" },
    { name: "EQUALITY & SOCIAL VALUE", href: "#equality-and-social-value" }
  ];

  return (
    <>
      {/* Top 6-Color Brand Stripe */}
      <div className="w-full h-1 flex sticky top-0 z-[60]">
        <div className="flex-1 bg-[#2BB7BA]" />
        <div className="flex-1 bg-[#FF9900]" />
        <div className="flex-1 bg-[#3AB03A]" />
        <div className="flex-1 bg-[#986430]" />
        <div className="flex-1 bg-[#969696]" />
        <div className="flex-1 bg-[#2E536B]" />
      </div>

      <header className="sticky top-[4px] z-50 bg-white/80 backdrop-blur-md border-b border-[#e1e1db]/80 transition-all duration-250">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#top" className="flex items-center gap-2.5 active:scale-95 transition-transform">
              <OahaLogo className="w-11 h-[29px] object-contain flex-shrink-0" />
              <span className="font-sans font-semibold tracking-widest text-[#2E536B] text-sm uppercase">
                OAHA
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#51615a] hover:text-[#2BB7BA] hover:bg-[#edeae4]/45 px-3 py-2 rounded-md text-[10px] xl:text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#be-part"
                className="ml-3 px-4 py-2 text-[10px] xl:text-[11px] font-bold tracking-wider uppercase text-white bg-[#2E536B] hover:bg-[#1B3B54] rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-1 cursor-pointer"
              >
                <span>JOIN US</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#edeae4]/60 text-[#1a2521] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#e1e1db]/60 bg-white px-4 py-4 space-y-2 animate-fade-in shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-[#edeae4]/40 text-sm font-semibold tracking-wider uppercase transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a
                href="#be-part"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-3 px-5 text-sm font-semibold tracking-wider uppercase text-white bg-[#2E536B] hover:bg-[#1B3B54] rounded-xl shadow-md transition-all"
              >
                JOIN US
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import {
  MapPin,
  CircleHelp,
  Sparkles,
  Layers,
  Compass,
  Landmark,
  Scale,
  Handshake,
  HeartHandshake
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
}

export const QuickNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('top');

  const navItems: NavItem[] = [
    { id: 'ni-context', label: 'NI Context', shortLabel: 'Context', icon: <MapPin className="w-3.5 h-3.5" /> },
    { id: 'why-it-matters', label: 'Why It Matters', shortLabel: 'Why Matters', icon: <CircleHelp className="w-3.5 h-3.5" /> },
    { id: 'the-opportunity', label: 'The Opportunity', shortLabel: 'Opportunity', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'how-we-work', label: 'What We Are Doing', shortLabel: 'Activities', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'our-approach', label: 'Our Approach', shortLabel: 'Approach', icon: <Compass className="w-3.5 h-3.5" /> },
    { id: 'regional-priorities', label: 'NI Priorities', shortLabel: 'Priorities', icon: <Landmark className="w-3.5 h-3.5" /> },
    { id: 'equality-and-social-value', label: 'Outcomes & Equality', shortLabel: 'Outcomes', icon: <Scale className="w-3.5 h-3.5" /> },
    { id: 'about-the-partnership', label: 'The Partnership', shortLabel: 'Partnership', icon: <Handshake className="w-3.5 h-3.5" /> },
    { id: 'be-part', label: 'Get Involved', shortLabel: 'Get Involved', icon: <HeartHandshake className="w-3.5 h-3.5" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          return;
        }
      }
      setActiveSection('top');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-14 sm:top-16 z-40 bg-white/95 backdrop-blur-md border-b border-[#e1e1db]/80 shadow-3xs py-2 px-3 sm:px-6 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <span className="hidden xl:inline-block text-[11px] font-mono uppercase tracking-wider text-[#51615a] shrink-0 font-semibold">
          Explore Chapters:
        </span>

        {/* Scrollable Chip Track */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-0.5 w-full xl:w-auto">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2E536B] text-white shadow-2xs font-semibold'
                    : 'bg-[#faf9f6] text-[#51615a] hover:text-[#2E536B] hover:bg-[#edeae4]/70 border border-[#e1e1db]/60'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-[#2E536B]'}>
                  {item.icon}
                </span>
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.shortLabel}</span>
              </a>
            );
          })}
        </div>

        {/* Fast Action CTA in QuickNav */}
        <a
          href="#be-part"
          onClick={(e) => scrollToSection(e, 'be-part')}
          className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#237723] hover:bg-[#1b5f1b] text-white text-xs font-semibold shadow-2xs transition-all shrink-0 cursor-pointer"
        >
          <span>Take Action</span>
        </a>
      </div>
    </div>
  );
};

export default QuickNav;

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { whatWeAreDoingData } from '../data/leedsRegional';
import { Network, Map, Users, Lightbulb, CheckCircle2, Compass } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getPillarIcon = (id: string, className = "w-5 h-5") => {
    switch (id) {
      case 'mapping':
        return <Map className={className} />;
      case 'listening':
        return <Users className={className} />;
      case 'codesigning':
      default:
        return <Lightbulb className={className} />;
    }
  };

  const colorPalettes = [
    {
      theme: 'cyan',
      tabActive: 'border-[#2BB7BA] bg-[#2BB7BA]/5 text-[#2E536B]',
      numBadge: 'bg-[#167478] text-white',
      cardBorder: 'border-t-[#2BB7BA]',
      iconBg: 'bg-[#2BB7BA]/10 text-[#136B6F]',
      tagBg: 'bg-[#2BB7BA]/10 text-[#136B6F]',
      itemIcon: 'text-[#136B6F]'
    },
    {
      theme: 'forest',
      tabActive: 'border-[#3AB03A] bg-[#3AB03A]/5 text-[#2E536B]',
      numBadge: 'bg-[#237723] text-white',
      cardBorder: 'border-t-[#3AB03A]',
      iconBg: 'bg-[#3AB03A]/10 text-[#206E20]',
      tagBg: 'bg-[#3AB03A]/10 text-[#206E20]',
      itemIcon: 'text-[#206E20]'
    },
    {
      theme: 'orange',
      tabActive: 'border-[#FF9900] bg-[#FF9900]/5 text-[#2E536B]',
      numBadge: 'bg-[#A34C00] text-white',
      cardBorder: 'border-t-[#FF9900]',
      iconBg: 'bg-[#FF9900]/10 text-[#A34C00]',
      tagBg: 'bg-[#FF9900]/10 text-[#A34C00]',
      itemIcon: 'text-[#A34C00]'
    }
  ];

  return (
    <section
      id="how-we-work"
      className="scroll-mt-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-[#faf9f6]/40 font-sans text-left"
    >
      {/* Anchor for what-we-are-doing */}
      <span id="what-we-are-doing" className="sr-only" />

      {/* Expanded full container width: max-w-7xl */}
      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-8 sm:mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e1e1db]/80 cursor-default">
            <Network className="w-3.5 h-3.5 text-[#136B6F]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#136B6F]">
              {whatWeAreDoingData.badge}
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {whatWeAreDoingData.title}
          </h2>
        </div>

        {/* 3 Overview Action Cards - Clean, direct focus cards without stage numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {whatWeAreDoingData.pillars.map((pillar, idx) => {
            const palette = colorPalettes[idx];
            const isSelected = activeTab === idx;

            return (
              <div
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-200 border text-left flex flex-col justify-between ${
                  isSelected
                    ? `bg-white shadow-sm border-2 ${palette.tabActive.split(' ')[0]}`
                    : 'bg-white hover:bg-[#faf9f6] border-[#e1e1db]/80 hover:border-[#969696]/40 shadow-3xs'
                }`}
              >
                <div className="space-y-3.5">
                  <div className={`w-9 h-9 rounded-xl ${palette.iconBg} flex items-center justify-center shrink-0`}>
                    {getPillarIcon(pillar.id, "w-4.5 h-4.5")}
                  </div>

                  <h3 className="font-sans font-semibold text-lg text-[#2E536B] tracking-tight leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                    {pillar.lead}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Detail Panel - Clean focus areas */}
        {(() => {
          const currentPillar = whatWeAreDoingData.pillars[activeTab];
          const palette = colorPalettes[activeTab];

          return (
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-[#e1e1db]/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs text-left"
            >
              {/* Pillar Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#e1e1db]/80">
                <div className="space-y-2 max-w-3xl">
                  <h3 className="font-sans font-normal text-xl sm:text-2xl text-[#2E536B] tracking-tight">
                    {currentPillar.title}
                  </h3>
                  <p className="font-sans font-normal text-sm sm:text-base text-[#1a2521] leading-relaxed">
                    {currentPillar.lead}
                  </p>
                </div>

                {/* Scope Label */}
                <div className="shrink-0 self-start lg:self-center">
                  <span className={`inline-block px-3 py-1.5 rounded-xl ${palette.tagBg} text-xs font-medium`}>
                    {currentPillar.listPrompt.replace(':', '')}
                  </span>
                </div>
              </div>

              {/* Grid of Key Focus Areas - Wide, natural capitalization, uncluttered card grid */}
              <div className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
                  {currentPillar.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-[#faf9f6]/80 hover:bg-[#faf9f6] border border-[#e1e1db]/80 rounded-2xl p-4 transition-all duration-150 flex items-start gap-3"
                    >
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${palette.itemIcon}`} />
                      <span className="font-sans text-xs sm:text-sm text-[#334155] leading-relaxed normal-case">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clarifying note or principle statement */}
              {currentPillar.footerNote && (
                <div className="mt-8 pt-5 border-t border-[#e1e1db]/70 flex items-start gap-3 text-left">
                  <Compass className="w-4 h-4 text-[#2E536B] shrink-0 mt-0.5" />
                  <p className="font-sans text-xs sm:text-sm text-[#51615a] leading-relaxed italic max-w-4xl">
                    {currentPillar.footerNote}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
};

export default HowWeWork;

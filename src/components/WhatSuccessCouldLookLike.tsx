import React from 'react';
import { motion } from 'motion/react';
import { whatSuccessCouldLookLikeData } from '../data/leedsRegional';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const WhatSuccessCouldLookLike: React.FC = () => {
  const accentColors = [
    'text-[#136B6F]',
    'text-[#206E20]',
    'text-[#A34C00]',
    'text-[#2E536B]',
    'text-[#986430]',
    'text-[#136B6F]',
    'text-[#206E20]',
    'text-[#A34C00]',
    'text-[#2E536B]'
  ];

  return (
    <section
      id="what-success-could-look-like"
      className="scroll-mt-20 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-[#faf9f6]/50 font-sans text-left"
    >
      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="max-w-4xl space-y-2.5 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e1e1db]/80 cursor-default">
            <Sparkles className="w-3.5 h-3.5 text-[#206E20]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#206E20]">
              {whatSuccessCouldLookLikeData.badge}
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {whatSuccessCouldLookLikeData.title}
          </h2>

          <p className="font-sans font-normal text-sm sm:text-base text-[#1a2521] pt-0.5 leading-relaxed">
            {whatSuccessCouldLookLikeData.lead}
          </p>
        </div>

        {/* 9 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {whatSuccessCouldLookLikeData.outcomes.map((outcome, idx) => {
            const colorClass = accentColors[idx % accentColors.length];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-white border border-[#e1e1db]/90 rounded-xl p-4 sm:p-4.5 flex items-start gap-3 shadow-3xs hover:border-[#2BB7BA]/40 transition-colors"
              >
                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${colorClass}`} />
                <span className="font-sans text-xs sm:text-sm text-[#1a2521] leading-relaxed">
                  {outcome}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatSuccessCouldLookLike;

import React from 'react';
import { motion } from 'motion/react';
import { challengeGap } from '../data/leedsRegional';
import { Eye, Clock, Link as LinkIcon, Heart, TrendingUp, CircleHelp } from 'lucide-react';

export const WhatWeUnderstand: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Eye className="w-4 h-4" />;
      case 1:
        return <Clock className="w-4 h-4" />;
      case 2:
        return <LinkIcon className="w-4 h-4" />;
      case 3:
        return <Heart className="w-4 h-4" />;
      case 4:
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <CircleHelp className="w-4 h-4" />;
    }
  };

  const colorStyles = [
    { topBorder: "md:border-t-[#3AB03A]", leftBorder: "border-l-[#3AB03A]", text: "text-[#3AB03A]", bg: "bg-[#3AB03A]/10" },
    { topBorder: "md:border-t-[#2BB7BA]", leftBorder: "border-l-[#2BB7BA]", text: "text-[#2BB7BA]", bg: "bg-[#2BB7BA]/10" },
    { topBorder: "md:border-t-[#FF9900]", leftBorder: "border-l-[#FF9900]", text: "text-[#FF9900]", bg: "bg-[#FF9900]/10" },
    { topBorder: "md:border-t-[#2E536B]", leftBorder: "border-l-[#2E536B]", text: "text-[#2E536B]", bg: "bg-[#2E536B]/10" },
    { topBorder: "md:border-t-[#986430]", leftBorder: "border-l-[#986430]", text: "text-[#986430]", bg: "bg-[#986430]/10" }
  ];

  return (
    <section id="why-it-matters" className="scroll-mt-20 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-[#faf9f6]/40">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Eyebrow & Title (semi-bold) */}
        <div className="text-center mx-auto mb-8 flex flex-col items-center max-w-4xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e1e1db]/80 cursor-default mb-4">
            <CircleHelp className="w-3.5 h-3.5 text-[#FF9900]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900]">
              THE CHALLENGE GAP
            </span>
          </div>
          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            Why this work matters
          </h2>
          <p className="mt-2.5 font-sans font-normal text-base sm:text-lg text-[#1a2521]">
            {challengeGap.headline}
          </p>
        </div>

        {/* Narrative Paragraphs - Expanded Width */}
        <div className="max-w-5xl mx-auto space-y-3 text-[#51615a] text-sm sm:text-base leading-relaxed mb-7 font-sans text-left">
          <p className="font-normal text-[#51615a]">
            {challengeGap.paragraphs[0]}
          </p>
          <p className="font-normal text-[#51615a]">
            {challengeGap.paragraphs[1]}
          </p>
          <p className="font-normal text-[#51615a]">
            {challengeGap.paragraphs[2]}
          </p>
          <div className="pt-1">
            <p className="font-semibold text-[#0f344a]">
              {challengeGap.paragraphs[3]}
            </p>
          </div>
        </div>

        {/* Redesigned 5 Key Criteria: Compact Single-Row Flow on Desktop, Slim Connected List on Mobile */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
            {challengeGap.bullets.map((bullet, idx) => {
              const style = colorStyles[idx % colorStyles.length];
              const capitalized = bullet.charAt(0).toUpperCase() + bullet.slice(1);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`bg-white border border-[#e1e1db]/80 border-l-4 md:border-l-0 md:border-t-3 ${style.leftBorder} ${style.topBorder} rounded-xl p-3.5 sm:p-4 flex md:flex-col items-center md:items-start gap-3 md:gap-2.5 text-left shadow-2xs hover:shadow-xs hover:border-[#969696]/30 transition-all duration-200 group`}
                >
                  <div className={`w-8 h-8 rounded-lg ${style.bg} flex items-center justify-center shrink-0 ${style.text} transition-transform group-hover:scale-105`}>
                    {getIcon(idx)}
                  </div>

                  <p className="font-sans text-xs sm:text-[13px] font-medium text-[#1a2521] leading-snug flex-1">
                    {capitalized}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeUnderstand;

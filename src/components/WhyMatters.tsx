import React from 'react';
import { motion } from 'motion/react';
import { theOpportunity } from '../data/leedsRegional';
import {
  Sparkles,
  Briefcase,
  GraduationCap,
  BookOpen,
  Landmark,
  Building2,
  Heart,
  Scale,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const WhyMatters: React.FC = () => {
  const getIngredientIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return Briefcase;
      case 'GraduationCap':
        return GraduationCap;
      case 'BookOpen':
        return BookOpen;
      case 'Landmark':
        return Landmark;
      case 'Building2':
        return Building2;
      case 'Heart':
        return Heart;
      case 'Scale':
        return Scale;
      case 'Sparkles':
      default:
        return Sparkles;
    }
  };

  const colorThemes: Record<string, { bg: string; text: string }> = {
    forest: { bg: "bg-[#3AB03A]/10", text: "text-[#3AB03A]" },
    cyan: { bg: "bg-[#2BB7BA]/10", text: "text-[#2BB7BA]" },
    orange: { bg: "bg-[#FF9900]/10", text: "text-[#FF9900]" },
    navy: { bg: "bg-[#2E536B]/10", text: "text-[#2E536B]" },
    brown: { bg: "bg-[#986430]/10", text: "text-[#986430]" }
  };

  return (
    <section id="the-opportunity" className="scroll-mt-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-[#faf9f6]/40 font-sans">
      {/* Anchor alias to support legacy #what-we-explore links */}
      <span id="what-we-explore" className="sr-only" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-6 space-y-2.5 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e1e1db]/80 cursor-default">
            <Sparkles className="w-3.5 h-3.5 text-[#2BB7BA]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2BB7BA]">
              SYSTEM INGREDIENTS & PATHWAYS
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {theOpportunity.title}
          </h2>

          <p className="font-sans font-normal text-base sm:text-lg text-[#1a2521] leading-relaxed">
            {theOpportunity.subtitle}
          </p>
        </div>

        {/* The 8 Regional Assets / Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 mb-8">
          {theOpportunity.ingredients.map((item, idx) => {
            const IconComponent = getIngredientIcon(item.icon);
            const theme = colorThemes[item.color] || colorThemes.navy;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-white border border-[#e1e1db]/90 rounded-xl p-3.5 sm:p-4 flex items-center gap-3 shadow-2xs hover:shadow-xs hover:border-[#969696]/30 transition-all text-left"
              >
                <div className={`w-8 h-8 rounded-lg ${theme.bg} flex items-center justify-center shrink-0 ${theme.text}`}>
                  <IconComponent className="w-4.5 h-4.5" />
                </div>
                <span className="font-sans text-xs sm:text-sm font-medium text-[#1a2521] leading-snug">
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* The Unboxed Connected Journey Flow Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="bg-white border border-[#e1e1db] rounded-2xl p-6 sm:p-8 shadow-xs text-left space-y-6"
        >
          {/* Header of the Journey */}
          <div className="space-y-2 w-full">
            <p className="font-sans font-semibold text-base sm:text-[17px] lg:text-lg text-[#2E536B] leading-snug whitespace-normal xl:whitespace-nowrap">
              {theOpportunity.connectorText}
            </p>
            <p className="font-sans font-normal text-xs uppercase tracking-wider text-[#51615a] pt-1">
              {theOpportunity.journeyPrompt}
            </p>
          </div>

          {/* Desktop Unboxed Timeline Flow (Pure typography and continuous connecting track, NO BOXES) */}
          <div className="hidden md:flex items-start justify-between w-full py-4 px-2">
            {theOpportunity.journeySteps.map((step, idx) => {
              const isLast = idx === theOpportunity.journeySteps.length - 1;
              return (
                <React.Fragment key={idx}>
                  {/* Step Node */}
                  <div className="flex flex-col items-center text-center max-w-[130px] group">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-[#2BB7BA] text-[#2BB7BA] font-mono font-bold text-xs flex items-center justify-center mb-2.5 shadow-2xs group-hover:bg-[#2BB7BA] group-hover:text-white transition-all">
                      0{idx + 1}
                    </div>
                    <span className="font-sans text-xs sm:text-[13px] font-semibold text-[#1a2521] leading-snug">
                      {step}
                    </span>
                  </div>

                  {/* Flow Arrow on Line */}
                  {!isLast && (
                    <div className="flex-1 flex items-center justify-center px-2 mt-4 text-[#2BB7BA]">
                      <div className="w-full h-0.5 bg-[#2BB7BA]/30 relative flex items-center justify-end">
                        <ArrowRight className="w-3.5 h-3.5 text-[#2BB7BA] absolute -right-1" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile Unboxed Vertical Timeline Flow (NO BOXES) */}
          <div className="md:hidden space-y-4 py-2 pl-6 border-l-2 border-[#2BB7BA]/40 ml-4 my-2">
            {theOpportunity.journeySteps.map((step, idx) => (
              <div key={idx} className="relative flex items-center gap-3">
                <div className="absolute -left-[35px] w-6 h-6 rounded-full bg-white border-2 border-[#2BB7BA] text-[#2BB7BA] font-mono font-bold text-[10px] flex items-center justify-center shadow-xs">
                  0{idx + 1}
                </div>
                <span className="font-sans text-xs sm:text-sm font-semibold text-[#1a2521]">
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* Expected Result: Clean, Unboxed Typography */}
          <div className="pt-6 border-t border-[#e1e1db]/80 space-y-3.5 text-left">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#2BB7BA]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2BB7BA]">
                THE EXPECTED RESULT
              </span>
            </div>

            <p className="font-sans font-semibold text-base sm:text-lg text-[#1a2521] leading-relaxed max-w-4xl">
              {theOpportunity.closing}
            </p>

            {/* 3 Outcome Pillars - Clean, Unboxed without surrounding cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-1">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-[#FF9900] block mb-1">
                  01. CLARITY
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#51615a] leading-relaxed font-normal">
                  Where pathways are unclear
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-[#2BB7BA] block mb-1">
                  02. TRANSITIONS
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#51615a] leading-relaxed font-normal">
                  Where handovers are weak
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-[#3AB03A] block mb-1">
                  03. COORDINATION
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#51615a] leading-relaxed font-normal">
                  Where greater coordination improves outcomes
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMatters;

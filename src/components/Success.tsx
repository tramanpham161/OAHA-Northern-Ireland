import React from 'react';
import { motion } from 'motion/react';
import { equalitySocialValueData, whatSuccessCouldLookLikeData } from '../data/leedsRegional';
import {
  Scale,
  ShieldCheck,
  Layers,
  Briefcase,
  CheckCircle2
} from 'lucide-react';

export const Success: React.FC = () => {
  const accentColors = [
    'text-[#2BB7BA]',
    'text-[#3AB03A]',
    'text-[#FF9900]',
    'text-[#2E536B]',
    'text-[#986430]',
    'text-[#2BB7BA]',
    'text-[#3AB03A]',
    'text-[#FF9900]',
    'text-[#2E536B]'
  ];

  return (
    <section
      id="equality-and-social-value"
      className="scroll-mt-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-[#faf9f6]/40 font-sans text-left"
    >
      {/* Anchor for backward compatibility */}
      <span id="success-goals" className="sr-only" />

      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="max-w-4xl space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e1e1db]/80 cursor-default">
            <Scale className="w-3.5 h-3.5 text-[#3AB03A]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#3AB03A]">
              {equalitySocialValueData.badge}
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {equalitySocialValueData.title}
          </h2>

          <p className="font-sans font-normal text-sm sm:text-base text-[#1a2521] pt-0.5">
            {equalitySocialValueData.lead}
          </p>
        </div>

        {/* Section 75 Statutory Duty Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.35 }}
          className="bg-white border border-[#e1e1db]/90 rounded-2xl p-5 sm:p-6 shadow-3xs flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#2E536B]/10 text-[#2E536B] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#2E536B] px-2.5 py-0.5 rounded-full bg-[#2E536B]/5 inline-block">
                Statutory Duty
              </span>
              <p className="font-sans font-medium text-xs sm:text-sm text-[#1a2521] leading-relaxed">
                {equalitySocialValueData.section75.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Two Column Layout: Connected Experiences & Public Procurement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Left Column: Intersecting Experiences (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="lg:col-span-7 bg-white border border-[#e1e1db]/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-3xs text-left"
          >
            <div className="space-y-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FF9900]/10 text-[#FF9900] flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-semibold text-sm sm:text-base text-[#2E536B]">
                  Connected experiences & socio-economic context
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#51615a] leading-relaxed">
                <p className="font-normal">
                  {equalitySocialValueData.socioEconomic.lead}
                </p>
                <p className="font-medium text-[#1a2521]">
                  {equalitySocialValueData.socioEconomic.summary}
                </p>
              </div>

              {/* Intersecting Characteristics Tags */}
              <div className="pt-2">
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#969696] block mb-2">
                  Intersecting dimensions:
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {equalitySocialValueData.socioEconomic.intersectingFactors.map((factor, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2.5 py-1 rounded-lg bg-[#faf9f6] border border-[#e1e1db] text-xs font-medium text-[#2E536B] hover:border-[#2BB7BA]/50 transition-colors"
                    >
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Public Procurement & Social Value (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="lg:col-span-5 bg-white border border-[#e1e1db]/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-3xs text-left"
          >
            <div className="space-y-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#3AB03A]/10 text-[#3AB03A] flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-semibold text-sm sm:text-base text-[#2E536B]">
                  {equalitySocialValueData.socialValueProcurement.title}
                </h3>
              </div>

              <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                {equalitySocialValueData.socialValueProcurement.description}
              </p>

              {/* Benefit Areas List */}
              <div className="pt-2 border-t border-[#f3f2ee] space-y-2">
                <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#969696] block">
                  Connecting public spending with:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {equalitySocialValueData.socialValueProcurement.benefitAreas.map((area, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-center gap-1.5 text-xs font-medium text-[#1a2521] bg-[#faf9f6] px-2.5 py-1.5 rounded-lg border border-[#e1e1db]/70"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3AB03A] shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tangible Outcomes Sub-section (Integrated What Success Could Look Like) */}
        <div id="what-success-could-look-like" className="pt-8 border-t border-[#e1e1db]/80 space-y-4">
          <div className="space-y-1.5 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-[#e1e1db]/80 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3AB03A]" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3AB03A]">
                PRACTICAL OUTCOMES
              </span>
            </div>
            <h3 className="font-sans font-normal text-xl sm:text-2xl text-[#2E536B] tracking-tight">
              {whatSuccessCouldLookLikeData.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#51615a] max-w-3xl leading-relaxed">
              {whatSuccessCouldLookLikeData.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
            {whatSuccessCouldLookLikeData.outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="bg-white border border-[#e1e1db]/90 rounded-xl p-3.5 sm:p-4 flex items-start gap-2.5 shadow-3xs hover:border-[#2BB7BA]/50 transition-colors"
              >
                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${accentColors[idx % accentColors.length]}`} />
                <span className="font-sans text-xs sm:text-sm text-[#1a2521] leading-relaxed">
                  {outcome}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;

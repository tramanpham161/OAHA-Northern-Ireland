import React from 'react';
import { motion } from 'motion/react';
import { niContext } from '../data/leedsRegional';
import { MapPin } from 'lucide-react';

export const Ambition: React.FC = () => {
  const shapingFactors = [
    "Poverty & income",
    "Disability & health",
    "Caring responsibilities",
    "Transport connectivity",
    "Rural isolation",
    "Local labour market gaps"
  ];

  return (
    <section id="ni-context" className="scroll-mt-20 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-white font-sans">
      {/* Anchor alias to support legacy #our-ambition links */}
      <span id="our-ambition" className="sr-only" />

      <div className="max-w-6xl mx-auto">
        {/* Header Eyebrow & Title */}
        <div className="text-left mb-6 sm:mb-7 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6] border border-[#e1e1db]/80 cursor-default mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#2E536B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E536B]">
              REGIONAL REALITY
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {niContext.title}
          </h2>

          <p className="mt-2 font-sans font-normal text-base sm:text-lg text-[#1a2521]">
            {niContext.headline}
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Narrative with Highlighted Stats & Unboxed Closing */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="space-y-3.5 text-[#51615a] text-sm sm:text-base leading-relaxed">
              <p className="font-normal text-[#51615a]">
                In April to June 2026, an estimated <strong className="font-semibold text-[#2E536B]">24,000 young people aged 16–24</strong> were not in education, employment or training. This represented <strong className="font-semibold text-[#FF9900]">11.8%</strong> of all young people in this age group.
              </p>
              <p className="font-normal text-[#51615a]">
                {niContext.paragraphs[1]}
              </p>
              <p className="font-normal text-[#51615a]">
                {niContext.paragraphs[2]}
              </p>
            </div>

            {/* Standalone Unboxed Closing Statement */}
            <p className="font-sans font-semibold text-base sm:text-lg text-[#0f344a] pt-3">
              {niContext.closing}
            </p>
          </div>

          {/* Right Column: Clean, Streamlined & Easy to Grasp Stat Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="bg-[#faf9f6] border border-[#e1e1db] rounded-2xl p-6 sm:p-7 shadow-2xs text-left space-y-5"
            >
              {/* Primary Stat Block */}
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#51615a] block mb-2">
                  Young people out of work or education
                </span>
                <div className="flex items-baseline gap-3">
                  <span className="font-sans font-semibold text-4xl sm:text-5xl text-[#2E536B] tracking-tight">
                    24,000
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FF9900]/15 text-[#FF9900] font-sans font-semibold text-xs sm:text-sm">
                    11.8% (16–24)
                  </span>
                </div>
                <p className="mt-2 text-xs sm:text-sm font-normal text-[#51615a] leading-relaxed">
                  Aged 16–24 not in education, employment or training in Northern Ireland (April–June 2026).
                </p>
              </div>

              {/* Factors Shaping Access - Clean & Digestible */}
              <div className="border-t border-[#e1e1db]/80 pt-4">
                <span className="text-xs font-semibold text-[#1a2521] block mb-2.5">
                  Factors shaping opportunity access:
                </span>
                <div className="flex flex-wrap gap-2">
                  {shapingFactors.map((factor, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#e1e1db] text-xs font-sans font-medium text-[#2E536B] shadow-2xs"
                    >
                      {factor}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambition;

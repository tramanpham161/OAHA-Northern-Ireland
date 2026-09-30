import React from 'react';
import { motion } from 'motion/react';
import { aboutThePartnershipData } from '../data/leedsRegional';
import { Handshake, Building2, Compass } from 'lucide-react';

export const AboutThePartnership: React.FC = () => {
  const photos = [
    {
      filename: 'EL-2-3.jpg',
      widthClass: 'w-64 sm:w-72 lg:flex-[1.35]',
      gradient: 'from-[#1B3B54] via-[#2E536B] to-[#1a2521]'
    },
    {
      filename: 'EL-1-2.jpg',
      widthClass: 'w-44 sm:w-52 lg:flex-[0.95]',
      gradient: 'from-[#2E536B] via-[#3AB03A]/80 to-[#1a2521]'
    },
    {
      filename: 'EL-2-2.jpg',
      widthClass: 'w-56 sm:w-64 lg:flex-[1.15]',
      gradient: 'from-[#2E536B] via-[#2BB7BA]/70 to-[#1B3B54]'
    },
    {
      filename: 'EL-1-3.jpg',
      widthClass: 'w-44 sm:w-52 lg:flex-[0.9]',
      gradient: 'from-[#FF9900]/80 via-[#986430] to-[#1a2521]'
    },
    {
      filename: 'OD-5.jpg',
      widthClass: 'w-60 sm:w-68 lg:flex-[1.25]',
      gradient: 'from-[#2BB7BA]/80 via-[#2E536B] to-[#1a2521]'
    },
    {
      filename: 'OD-4.jpg',
      widthClass: 'w-40 sm:w-48 lg:flex-[0.85]',
      gradient: 'from-[#986430] via-[#FF9900]/70 to-[#1a2521]'
    },
    {
      filename: 'OD-3.jpg',
      widthClass: 'w-52 sm:w-60 lg:flex-[1.05]',
      gradient: 'from-[#3AB03A]/80 via-[#2E536B] to-[#1B3B54]'
    }
  ];

  return (
    <section
      id="about-the-partnership"
      className="scroll-mt-20 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-white font-sans text-left"
    >
      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-7">
        {/* Section Header */}
        <div className="max-w-4xl space-y-2 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6] border border-[#e1e1db]/80 cursor-default">
            <Handshake className="w-3.5 h-3.5 text-[#2E536B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E536B]">
              {aboutThePartnershipData.badge}
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {aboutThePartnershipData.title}
          </h2>
        </div>

        {/* 2 Partner Cards Side by Side - Compact & Matching Main Context Font Size */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-4">
          {/* Lewis Silkin Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.35 }}
            className="bg-[#faf9f6]/70 border border-[#e1e1db] rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-3xs text-left"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#e1e1db]/80">
                <div className="w-7 h-7 rounded-lg bg-[#2E536B]/10 text-[#2E536B] flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-base sm:text-lg text-[#2E536B] tracking-tight">
                    Lewis Silkin
                  </h3>
                  <p className="font-sans text-xs text-[#51615a]">
                    Convening employers & regional stakeholders
                  </p>
                </div>
              </div>

              <div className="pt-0.5">
                <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                  Lewis Silkin is working with OAHA to support the development of this Northern Ireland place-based social mobility initiative, helping to convene employers and wider stakeholders around the shared challenge of widening access to opportunity.
                </p>
              </div>
            </div>
          </motion.div>

          {/* OAHA Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="bg-[#faf9f6]/70 border border-[#e1e1db] rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-3xs text-left"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#e1e1db]/80">
                <div className="w-7 h-7 rounded-lg bg-[#3AB03A]/10 text-[#3AB03A] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-base sm:text-lg text-[#2E536B] tracking-tight">
                    OAHA
                  </h3>
                  <p className="font-sans text-xs text-[#51615a]">
                    Social sustainability & place-based change
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-0.5">
                <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                  OAHA is a social sustainability consultancy that helps organisations turn ambition into measurable action across people, value chains and communities.
                </p>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                  OAHA leads place-based social mobility work that brings employers, education providers, charities, communities and young people together to understand systems, identify gaps and develop practical responses.
                </p>
                <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                  The Northern Ireland initiative will build on learning from OAHA’s work in Wales and Yorkshire while creating an approach shaped specifically by Northern Ireland’s people, places and institutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Small Horizontal Photo Grid of Different Sizes (No names, no explanations) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="pt-2"
        >
          <div className="flex gap-2.5 sm:gap-3 overflow-x-auto pb-2 scrollbar-none snap-x items-center w-full">
            {photos.map((photo, pIdx) => (
              <div
                key={pIdx}
                className={`${photo.widthClass} shrink-0 h-32 sm:h-38 md:h-44 rounded-xl sm:rounded-2xl overflow-hidden border border-[#e1e1db]/80 shadow-3xs relative group bg-[#faf9f6]`}
              >
                <img
                  src={`/images/${photo.filename}`}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Subtle graphic backdrop when image file is pending */}
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.gradient} -z-10 flex items-center justify-center p-3 opacity-90`}>
                  <div className="w-full h-full rounded-lg border border-white/10 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutThePartnership;

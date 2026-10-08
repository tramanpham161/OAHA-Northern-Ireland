import React from 'react';
import { motion } from 'motion/react';
import { aboutThePartnershipData } from '../data/leedsRegional';
import { Handshake, ExternalLink, Sparkles, Landmark } from 'lucide-react';
import { OahaLogo } from './OahaLogo';
import { LewisSilkinLogo } from './LewisSilkinLogo';

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

        {/* 2 Partner Cards Side by Side - Prominent Brand Logos & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {/* Lewis Silkin Card - Initiative Funder & Convener */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.35 }}
            className="bg-white border-2 border-[#004770]/20 hover:border-[#004770]/40 rounded-2xl flex flex-col justify-between shadow-3xs text-left overflow-hidden transition-all group"
          >
            {/* Official Lewis Silkin 9-Color Brand Spectrum Bar */}
            <div className="h-2 w-full flex select-none" aria-hidden="true">
              <div className="flex-1 bg-[#E0CC00]" title="Yellow" />
              <div className="flex-1 bg-[#FF6900]" title="Orange" />
              <div className="flex-1 bg-[#E62612]" title="Red" />
              <div className="flex-1 bg-[#D91785]" title="Pink" />
              <div className="flex-1 bg-[#9678D4]" title="Lilac" />
              <div className="flex-1 bg-[#00619C]" title="Navy" />
              <div className="flex-1 bg-[#00A8E0]" title="Blue" />
              <div className="flex-1 bg-[#00C7B0]" title="Mint" />
              <div className="flex-1 bg-[#96D600]" title="Lime" />
            </div>

            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Brand Header with prominent logo & Funder Tag */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e1e1db]">
                  <div className="space-y-1.5">
                    <a
                      href="https://www.lewissilkin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo block"
                      aria-label="Lewis Silkin Website"
                    >
                      <LewisSilkinLogo className="h-9 sm:h-11 w-auto transition-transform group-hover/logo:scale-[1.02]" />
                    </a>
                    {/* Funder Designation Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#004770]/10 border border-[#004770]/25 text-[#004770] text-[11px] font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-[#007FA9]" />
                      <span>Initiative Funder & Regional Convener</span>
                    </div>
                  </div>

                  <a
                    href="https://www.lewissilkin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#004770] hover:bg-[#00619C] shadow-2xs hover:shadow-xs transition-all shrink-0 self-start sm:self-center cursor-pointer"
                  >
                    <span>lewissilkin.com</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00C7B0]" />
                  </a>
                </div>

                {/* Paragraph 1: Core Convening Mandate */}
                <div>
                  <p className="font-sans font-semibold text-xs sm:text-sm text-[#004770] tracking-wide mb-1.5">
                    Convening employers & regional stakeholders
                  </p>
                  <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                    Lewis Silkin is working with OAHA to support the development of this Northern Ireland place-based social mobility initiative, helping to convene employers and wider stakeholders around the shared challenge of widening access to opportunity.
                  </p>
                </div>

                {/* Paragraph 2: Founder Heritage Inset Box */}
                <div className="rounded-xl bg-[#004770]/[0.03] border border-[#00619C]/20 p-3.5 sm:p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004770]">
                    <Landmark className="w-4 h-4 text-[#00619C] shrink-0" />
                    <span>The Story Behind the Name</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#333333] leading-relaxed">
                    Social mobility has long been part of the firm’s story. We’re named after <strong className="font-semibold text-[#004770]">Lewis Silkin (1889 – 1972)</strong>, whose own story continues to inspire us. His family were refugees from Lithuania and he was brought up in poverty, but qualified as a solicitor before becoming an MP and eventually sitting in the House of Lords.
                  </p>
                </div>

                {/* Paragraph 3: Commitment & Initiatives */}
                <div className="space-y-2.5">
                  <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                    We continue to be committed to improving social mobility through a wide range of initiatives including outreach and mentoring programmes in schools, and work experience and apprenticeship schemes.
                  </p>

                  {/* Initiatives Pills in Lewis Silkin Brand Shades */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#00C7B0]/10 border border-[#007864]/25 text-[#007864] text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C7B0]" />
                      School Outreach & Mentoring
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#00A8E0]/10 border border-[#007FA9]/25 text-[#007FA9] text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00A8E0]" />
                      Work Experience & Apprenticeships
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#00619C]/10 border border-[#004770]/25 text-[#004770] text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00619C]" />
                      Regional Employer Convening
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* OAHA Card - Delivery & Systems Leadership Partner */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="bg-white border-2 border-[#206E20]/20 hover:border-[#206E20]/40 rounded-2xl flex flex-col justify-between shadow-3xs text-left overflow-hidden transition-all group"
          >
            {/* OAHA 4-Color Brand Stripe */}
            <div className="h-2 w-full flex select-none" aria-hidden="true">
              <div className="flex-1 bg-[#2BB7BA]" title="Teal" />
              <div className="flex-1 bg-[#3AB03A]" title="Green" />
              <div className="flex-1 bg-[#FF9900]" title="Orange" />
              <div className="flex-1 bg-[#969696]" title="Grey" />
            </div>

            <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Brand Header with prominent logo & Delivery Partner Tag */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e1e1db]">
                  <div className="space-y-1.5">
                    <a
                      href="https://oaha.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo flex items-center gap-3.5"
                      aria-label="OAHA Website"
                    >
                      <OahaLogo className="w-14 h-10 sm:w-16 sm:h-11 object-contain shrink-0 rounded-md border border-[#e1e1db] shadow-xs transition-transform group-hover/logo:scale-[1.02]" />
                      <div>
                        <span className="font-sans font-bold text-lg sm:text-xl text-[#2E536B] tracking-tight block">
                          OAHA
                        </span>
                        <span className="font-sans text-xs text-[#51615a] block">
                          Social Sustainability
                        </span>
                      </div>
                    </a>
                    {/* Delivery Partner Badge */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#206E20]/10 border border-[#206E20]/25 text-[#206E20] text-[11px] font-bold uppercase tracking-wider">
                      <span>Delivery & Systems Leadership Partner</span>
                    </div>
                  </div>

                  <a
                    href="https://oaha.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#206E20] hover:bg-[#185518] shadow-2xs hover:shadow-xs transition-all shrink-0 self-start sm:self-center cursor-pointer"
                  >
                    <span>oaha.uk</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="space-y-2.5">
                  <p className="font-sans font-semibold text-xs sm:text-sm text-[#206E20] tracking-wide">
                    Social sustainability & place-based change
                  </p>
                  <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                    OAHA is a social sustainability consultancy that helps organisations turn ambition into measurable action across people, value chains and communities.
                  </p>
                  <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                    OAHA leads place-based social mobility work that brings employers, education providers, charities, communities and young people together to understand systems, identify gaps and develop practical responses.
                  </p>
                  <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                    The Northern Ireland initiative will build on learning from OAHA’s work in Wales and Yorkshire while creating an approach shaped specifically by Northern Ireland’s people, places and institutions.
                  </p>

                  {/* OAHA Delivery Action Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#2BB7BA]/10 border border-[#136B6F]/25 text-[#136B6F] text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2BB7BA]" />
                      Ecosystem Mapping & Analysis
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#3AB03A]/10 border border-[#206E20]/25 text-[#206E20] text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3AB03A]" />
                      Place-Based Social Mobility
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#FF9900]/10 border border-[#A34C00]/25 text-[#A34C00] text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                      Cross-Sector Co-Design
                    </span>
                  </div>
                </div>
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

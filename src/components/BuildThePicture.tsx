import React from 'react';
import { motion } from 'motion/react';
import { buildThePictureData } from '../data/leedsRegional';
import {
  ClipboardList,
  UsersRound,
  Briefcase,
  ExternalLink,
  Info
} from 'lucide-react';

export const BuildThePicture: React.FC = () => {
  return (
    <section
      id="build-the-picture"
      className="scroll-mt-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-white font-sans text-left"
    >
      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header - Exactly matching typography & structure of other sections */}
        <div className="max-w-4xl space-y-2.5 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6] border border-[#e1e1db]/80 cursor-default">
            <ClipboardList className="w-3.5 h-3.5 text-[#2E536B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E536B]">
              {buildThePictureData.badge}
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {buildThePictureData.title}
          </h2>

          <p className="font-sans font-normal text-base sm:text-lg text-[#1a2521] pt-1 leading-relaxed max-w-3xl">
            {buildThePictureData.lead}
          </p>
        </div>

        {/* Questionnaire Spotlight - Clean container without individual item boxes */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.3 }}
          className="bg-[#faf9f6] border border-[#e1e1db] rounded-2xl p-6 sm:p-7 shadow-3xs text-left"
        >
          {/* 9 Questionnaire Understanding Points - Clean Unboxed 3-Column Bulleted List */}
          <div className="pb-5 border-b border-[#e1e1db]/80">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2E536B] mb-3">
              {buildThePictureData.prompt}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-xs sm:text-sm text-[#334155] list-none p-0 m-0">
              {buildThePictureData.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2BB7BA] shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reassurance note & CTA Button */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#51615a]">
              <Info className="w-3.5 h-3.5 text-[#2E536B] shrink-0" />
              <span>{buildThePictureData.footerNote}</span>
            </div>

            <div className="shrink-0">
              <a
                href={buildThePictureData.questionnaireUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#2E536B] hover:bg-[#1a384c] text-white px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm shadow-xs transition-all duration-200 active:scale-95 group cursor-pointer"
              >
                <span>{buildThePictureData.ctaText}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#2BB7BA] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2-Column Clean Editorial Layout (No individual boxes, compact & clean) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
          {/* Column 1: Who we want to hear from */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="space-y-3 text-left"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-[#e1e1db]">
              <div className="w-7 h-7 rounded-lg bg-[#3AB03A]/10 text-[#3AB03A] flex items-center justify-center shrink-0">
                <UsersRound className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-semibold text-base sm:text-lg text-[#2E536B] tracking-tight">
                {buildThePictureData.whoWeWantToHearFrom.title}
              </h3>
            </div>

            <p className="font-sans text-xs text-[#51615a]">
              {buildThePictureData.whoWeWantToHearFrom.prompt}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm text-[#334155] list-none p-0 m-0">
              {buildThePictureData.whoWeWantToHearFrom.contributors.map((contrib, cIdx) => (
                <li key={cIdx} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3AB03A] shrink-0 mt-1.5" />
                  <span>{contrib}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: How employers can contribute */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-3 text-left"
          >
            <div className="flex items-center gap-2 pb-2 border-b border-[#e1e1db]">
              <div className="w-7 h-7 rounded-lg bg-[#FF9900]/10 text-[#FF9900] flex items-center justify-center shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="font-sans font-semibold text-base sm:text-lg text-[#2E536B] tracking-tight">
                {buildThePictureData.howEmployersCanContribute.title}
              </h3>
            </div>

            <div className="space-y-0.5">
              <p className="font-sans text-xs text-[#1a2521]">
                {buildThePictureData.howEmployersCanContribute.lead}
              </p>
              <p className="font-sans text-xs text-[#51615a]">
                {buildThePictureData.howEmployersCanContribute.prompt}
              </p>
            </div>

            <ul className="space-y-1.5 text-xs sm:text-sm text-[#334155] list-none p-0 m-0">
              {buildThePictureData.howEmployersCanContribute.waysToSupport.map((way, wIdx) => (
                <li key={wIdx} className="flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900] shrink-0 mt-1.5" />
                  <span>{way}</span>
                </li>
              ))}
            </ul>

            {/* SME Note */}
            <div className="pt-2 text-xs text-[#51615a] leading-relaxed italic border-t border-[#e1e1db]/60">
              <p>{buildThePictureData.howEmployersCanContribute.smeNote}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuildThePicture;

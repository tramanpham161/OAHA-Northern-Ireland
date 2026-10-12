import React from 'react';
import { motion } from 'motion/react';
import { buildThePictureData } from '../data/leedsRegional';
import {
  Compass,
  Briefcase,
  UsersRound,
  Sparkles
} from 'lucide-react';

export const BuildThePicture: React.FC = () => {
  const getAudienceStyle = (theme: string) => {
    switch (theme) {
      case 'cyan':
        return {
          icon: <Briefcase className="w-5 h-5 text-[#136B6F]" />,
          borderTop: 'border-t-[#2BB7BA]',
          tag: 'text-[#136B6F]',
          badgeBg: 'bg-[#2BB7BA]/10 text-[#136B6F]',
          dot: 'bg-[#2BB7BA]'
        };
      case 'forest':
        return {
          icon: <UsersRound className="w-5 h-5 text-[#206E20]" />,
          borderTop: 'border-t-[#3AB03A]',
          tag: 'text-[#206E20]',
          badgeBg: 'bg-[#3AB03A]/10 text-[#206E20]',
          dot: 'bg-[#3AB03A]'
        };
      case 'orange':
      default:
        return {
          icon: <Sparkles className="w-5 h-5 text-[#A34C00]" />,
          borderTop: 'border-t-[#FF9900]',
          tag: 'text-[#A34C00]',
          badgeBg: 'bg-[#FF9900]/10 text-[#A34C00]',
          dot: 'bg-[#FF9900]'
        };
    }
  };

  return (
    <section
      id="build-the-picture"
      className="scroll-mt-20 pt-8 sm:pt-12 pb-2 sm:pb-3 px-4 sm:px-6 lg:px-8 bg-white font-sans text-left"
    >
      {/* Anchor alias to support #build-the-future */}
      <span id="build-the-future" className="sr-only" />

      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="max-w-4xl space-y-2.5 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6] border border-[#e1e1db]/80 cursor-default">
            <Compass className="w-3.5 h-3.5 text-[#2E536B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E536B]">
              {buildThePictureData.badge}
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {buildThePictureData.title}
          </h2>

          <div className="space-y-1 pt-0.5">
            <p className="font-sans font-semibold text-lg sm:text-xl text-[#1a2521] leading-snug">
              {buildThePictureData.headline}
            </p>
            <p className="font-sans font-normal text-sm sm:text-base text-[#51615a] leading-relaxed max-w-3xl">
              {buildThePictureData.lead}
            </p>
          </div>
        </div>

        {/* 3 Contributor Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {buildThePictureData.audiences.map((audience, idx) => {
            const style = getAudienceStyle(audience.theme);
            return (
              <motion.div
                key={audience.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.3, delay: idx * 0.06 }}
                className={`bg-[#faf9f6]/70 border border-[#e1e1db] border-t-4 ${style.borderTop} rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-3xs text-left hover:shadow-2xs transition-shadow`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#e1e1db] flex items-center justify-center shadow-3xs shrink-0">
                      {style.icon}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#595959] font-medium">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans font-semibold text-base sm:text-lg text-[#2E536B] tracking-tight">
                      {audience.title}
                    </h3>
                    <p className={`font-sans font-semibold text-xs sm:text-sm ${style.tag} mt-1 leading-snug`}>
                      {audience.tagline}
                    </p>
                  </div>

                  <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuildThePicture;

import React from 'react';
import { motion } from 'motion/react';
import niCoastImg from '../assets/images/northern_ireland_coast_opt.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="banner-section"
      className="relative min-h-[360px] lg:min-h-[460px] flex items-center bg-[#faf9f6] overflow-hidden py-8 sm:py-12"
    >
      {/* Background Northern Ireland Coast Photo on Right with Mask */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] xs:w-[50%] sm:w-[53%] h-full z-0 select-none pointer-events-none flex items-center justify-end pr-0">
        <div className="h-full relative w-full">
          <motion.img
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.95, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            src={niCoastImg}
            alt="Northern Ireland Coast Landscape"
            className="h-full w-full object-cover"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, transparent 10%, rgba(0, 0, 0, 1) 75%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 10%, rgba(0, 0, 0, 1) 75%)"
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/95 via-[35%] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-[#faf9f6] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#faf9f6] to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Main Hero Typography - Inter (font-sans), font-bold headline, font-normal subtitle */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[280px] xs:max-w-[340px] sm:max-w-xl md:max-w-2xl lg:max-w-[75%] space-y-3 sm:space-y-4 text-left font-bold">
          {/* Main Title: Font Inter (font-sans), font-bold */}
          <h1 className="font-sans font-bold text-xl sm:text-2xl lg:text-[1.6rem] xl:text-[1.85rem] leading-[1.35] tracking-tight text-left">
            <span className="block md:inline-block font-bold">
              <span className="text-[#2E536B] font-bold">Accelerating </span>
              <span className="text-[#3AB03A] font-bold">Social Mobility </span>
            </span>
            <span className="block md:inline-block md:ml-1.5 font-bold">
              <span className="text-[#2E536B] font-bold">in </span>
              <span className="text-[#FF9900] font-bold">Northern Ireland</span>
            </span>
          </h1>

          {/* Sub Title: Font Inter (font-sans), font-normal */}
          <div className="text-[#2E536B] font-sans font-normal text-base sm:text-lg tracking-normal text-left">
            Creating clearer pathways into good work
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

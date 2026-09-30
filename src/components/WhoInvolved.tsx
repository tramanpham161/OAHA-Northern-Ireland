import React from 'react';
import { motion } from 'motion/react';
import { niPrioritiesData } from '../data/leedsRegional';
import {
  Landmark,
  Briefcase,
  TrendingUp,
  Compass,
  GraduationCap,
  BookOpen,
  UsersRound,
  CheckCircle2
} from 'lucide-react';

export const WhoInvolved: React.FC = () => {
  const getIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Compass':
        return <Compass className={className} />;
      case 'GraduationCap':
      default:
        return <GraduationCap className={className} />;
    }
  };

  const getStyleForColor = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          borderTop: 'border-t-[#2BB7BA]',
          iconBg: 'bg-[#2BB7BA]/10 text-[#2BB7BA]',
          dot: 'bg-[#2BB7BA]'
        };
      case 'forest':
        return {
          borderTop: 'border-t-[#3AB03A]',
          iconBg: 'bg-[#3AB03A]/10 text-[#3AB03A]',
          dot: 'bg-[#3AB03A]'
        };
      case 'orange':
        return {
          borderTop: 'border-t-[#FF9900]',
          iconBg: 'bg-[#FF9900]/10 text-[#FF9900]',
          dot: 'bg-[#FF9900]'
        };
      case 'navy':
      default:
        return {
          borderTop: 'border-t-[#2E536B]',
          iconBg: 'bg-[#2E536B]/10 text-[#2E536B]',
          dot: 'bg-[#2E536B]'
        };
    }
  };

  return (
    <section
      id="regional-priorities"
      className="scroll-mt-20 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-white font-sans text-left"
    >
      {/* Anchor for backward compatibility with existing links */}
      <span id="who-is-involved" className="sr-only" />

      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-6 sm:mb-7 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6] border border-[#e1e1db]/80 cursor-default">
            <Landmark className="w-3.5 h-3.5 text-[#2E536B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E536B]">
              {niPrioritiesData.badge}
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {niPrioritiesData.title}
          </h2>
        </div>

        {/* Programme for Government Lead Alignment Card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.35 }}
          className="bg-[#faf9f6]/80 border border-[#e1e1db]/90 rounded-xl p-4 sm:p-5 mb-6 text-left"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="font-sans font-normal text-sm sm:text-base text-[#1a2521] leading-relaxed max-w-4xl">
              {niPrioritiesData.pfgLead}
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3 py-1 rounded-full bg-[#2BB7BA]/10 text-[#2BB7BA] text-xs font-medium">
                People
              </span>
              <span className="px-3 py-1 rounded-full bg-[#3AB03A]/10 text-[#3AB03A] text-xs font-medium">
                Planet
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FF9900]/10 text-[#FF9900] text-xs font-medium">
                Prosperity
              </span>
            </div>
          </div>
        </motion.div>

        {/* Department for the Economy Ambitions */}
        <div className="mb-6 sm:mb-8">
          <p className="font-sans font-medium text-xs sm:text-sm text-[#2E536B] mb-3">
            {niPrioritiesData.economyLead}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {niPrioritiesData.economyAmbitions.map((item, idx) => {
              const style = getStyleForColor(item.color);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  className={`bg-white border border-[#e1e1db]/90 border-t-2 ${style.borderTop} rounded-xl p-3.5 sm:p-4 transition-all duration-200 shadow-3xs hover:shadow-xs flex flex-col justify-between group text-left`}
                >
                  <div className="space-y-2.5">
                    <div className={`w-7 h-7 rounded-lg ${style.iconBg} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105`}>
                      {getIcon(item.iconName, "w-3.5 h-3.5")}
                    </div>

                    <h3 className="font-sans font-semibold text-xs sm:text-sm text-[#1a2521] leading-snug group-hover:text-[#2E536B] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 10x Strategy and Local Delivery Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {/* Card 1: Skills for a 10x Economy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="bg-[#faf9f6]/70 border border-[#e1e1db]/90 rounded-xl p-4 sm:p-5 flex flex-col justify-between text-left"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#2E536B]/10 text-[#2E536B] flex items-center justify-center shrink-0">
                  <BookOpen className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2E536B]">
                  Skills for a 10x Economy
                </span>
              </div>

              <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                {niPrioritiesData.skillsStrategy}
              </p>
            </div>
          </motion.div>

          {/* Card 2: Local Delivery Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className="bg-[#faf9f6]/70 border border-[#e1e1db]/90 rounded-xl p-4 sm:p-5 flex flex-col justify-between text-left"
          >
            <div className="space-y-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#3AB03A]/10 text-[#3AB03A] flex items-center justify-center shrink-0">
                  <UsersRound className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3AB03A]">
                  Local Delivery in Action
                </span>
              </div>

              <p className="font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed">
                {niPrioritiesData.localDelivery}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoInvolved;

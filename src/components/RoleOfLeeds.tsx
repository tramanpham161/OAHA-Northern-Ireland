import React from 'react';
import { motion } from 'motion/react';
import { ourApproachData } from '../data/leedsRegional';
import {
  Compass,
  MapPin,
  Users,
  BarChart3,
  Handshake,
  Target,
  Layers
} from 'lucide-react';

export const RoleOfLeeds: React.FC = () => {
  const getIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className={className} />;
      case 'Users':
        return <Users className={className} />;
      case 'BarChart3':
        return <BarChart3 className={className} />;
      case 'Handshake':
        return <Handshake className={className} />;
      case 'Target':
        return <Target className={className} />;
      case 'Layers':
      default:
        return <Layers className={className} />;
    }
  };

  const getStyleForColor = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          borderTop: 'border-t-[#2BB7BA]',
          iconBg: 'bg-[#2BB7BA]/10 text-[#136B6F]',
          tag: 'text-[#136B6F]'
        };
      case 'forest':
        return {
          borderTop: 'border-t-[#3AB03A]',
          iconBg: 'bg-[#3AB03A]/10 text-[#206E20]',
          tag: 'text-[#206E20]'
        };
      case 'orange':
        return {
          borderTop: 'border-t-[#FF9900]',
          iconBg: 'bg-[#FF9900]/10 text-[#A34C00]',
          tag: 'text-[#A34C00]'
        };
      case 'navy':
        return {
          borderTop: 'border-t-[#2E536B]',
          iconBg: 'bg-[#2E536B]/10 text-[#2E536B]',
          tag: 'text-[#2E536B]'
        };
      case 'brown':
        return {
          borderTop: 'border-t-[#986430]',
          iconBg: 'bg-[#986430]/10 text-[#986430]',
          tag: 'text-[#986430]'
        };
      case 'gray':
      default:
        return {
          borderTop: 'border-t-[#969696]',
          iconBg: 'bg-[#969696]/10 text-[#51615a]',
          tag: 'text-[#51615a]'
        };
    }
  };

  return (
    <section
      id="our-approach"
      className="scroll-mt-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-white font-sans text-left"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-6 sm:mb-8 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6] border border-[#e1e1db]/80 cursor-default">
            <Compass className="w-3.5 h-3.5 text-[#2E536B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E536B]">
              {ourApproachData.badge}
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {ourApproachData.title}
          </h2>
        </div>

        {/* 6 Core Approach Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {ourApproachData.principles.map((principle, idx) => {
            const style = getStyleForColor(principle.color);

            return (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className={`bg-[#faf9f6]/70 hover:bg-white border border-[#e1e1db]/90 border-t-3 ${style.borderTop} rounded-2xl p-6 sm:p-7 transition-all duration-200 shadow-3xs hover:shadow-xs flex flex-col justify-between group`}
              >
                <div className="space-y-3.5">
                  <div className={`w-9 h-9 rounded-xl ${style.iconBg} flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105`}>
                    {getIcon(principle.iconName, "w-4.5 h-4.5")}
                  </div>

                  <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#2E536B] tracking-tight group-hover:text-stone-900 transition-colors">
                    {principle.title}
                  </h3>

                  <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-[#51615a] leading-relaxed">
                    {principle.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="font-sans font-normal">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoleOfLeeds;

import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section className="bg-white border-b border-[#969696]/30 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Full-width Context Narrative */}
        <div className="space-y-4 text-[#51615a] text-sm sm:text-base leading-relaxed text-left">
          <p className="font-normal text-[#51615a]">
            Lewis Silkin and OAHA are bringing together employers, education providers, business networks, community organisations, government and young people to improve access to employment for people from lower socio-economic backgrounds across Northern Ireland.
          </p>
          <p className="font-semibold text-[#1a2521]">
            Our aim is to understand where existing pathways into employment are working, where people are falling through the gaps and where practical, collective action could make the greatest difference.
          </p>
          <p className="font-normal text-[#51615a]">
            This is not about creating another programme or duplicating the work already taking place. It is about connecting the system more effectively, amplifying what works and helping people navigate the journey from education into sustainable, good-quality employment.
          </p>
          <div className="pt-2">
            <p className="font-semibold text-sm sm:text-base">
              <span className="text-[#0f344a]">This is not about duplication. </span>
              <span className="text-[#3AB03A]">It is about collaboration, amplification and collective action.</span>
            </p>
          </div>

          {/* 2 Call to Action Buttons Under the Text, Side by Side */}
          <div className="pt-4 flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 items-center">
            <a
              href="#be-part"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#2E536B] hover:bg-[#1B3B54] text-white text-sm font-medium transition-colors cursor-pointer"
            >
              Complete the questionnaire
            </a>
            <a
              href="#be-part"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white border border-[#2E536B]/30 hover:border-[#2E536B] text-[#2E536B] text-sm font-medium transition-colors cursor-pointer"
            >
              Get involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

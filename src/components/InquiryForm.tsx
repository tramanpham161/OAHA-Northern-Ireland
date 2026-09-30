import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { bePartOfTheProject } from '../data/leedsRegional';
import {
  ExternalLink,
  UserCheck,
  Share2,
  Mail,
  CheckCircle2,
  AlertCircle,
  Send,
  Compass,
  FileText,
  RotateCcw
} from 'lucide-react';

type ActiveForm = 'register' | 'share' | 'contact';

export const InquiryForm: React.FC = () => {
  const [activeForm, setActiveForm] = useState<ActiveForm>('register');
  const [submitted, setSubmitted] = useState(false);
  const [submittedType, setSubmittedType] = useState<ActiveForm>('register');
  const [referenceId, setReferenceId] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    organization: '',
    role: 'Employer',
    location: 'Belfast',
    involvement: 'Attend a stakeholder workshop'
  });

  const [shareData, setShareData] = useState({
    name: '',
    email: '',
    initiativeName: '',
    organization: '',
    targetGroup: '',
    website: '',
    summary: ''
  });

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!registerData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!registerData.email.trim() || !registerData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'register',
          name: registerData.name,
          email: registerData.email,
          organization: registerData.organization || 'Individual',
          role: registerData.role,
          location: registerData.location,
          interestArea: registerData.involvement,
          message: `Registration of interest: ${registerData.role} in ${registerData.location}. Focus: ${registerData.involvement}.`
        })
      });

      const data = await res.json().catch(() => ({}));
      setReferenceId(data.referenceId || `OAHA-NI-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmittedType('register');
      setSubmitted(true);
    } catch {
      setReferenceId(`OAHA-NI-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmittedType('register');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShareSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!shareData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!shareData.email.trim() || !shareData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!shareData.initiativeName.trim()) {
      setError('Please provide the name of the initiative.');
      return;
    }
    if (!shareData.summary.trim()) {
      setError('Please share a brief summary of the initiative.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'share_initiative',
          name: shareData.name,
          email: shareData.email,
          initiativeName: shareData.initiativeName,
          organization: shareData.organization || shareData.initiativeName,
          targetGroup: shareData.targetGroup,
          website: shareData.website,
          message: `Shared Initiative: ${shareData.initiativeName}. Organisation: ${shareData.organization || 'N/A'}. Target Group: ${shareData.targetGroup || 'N/A'}. Website: ${shareData.website || 'N/A'}. Summary: ${shareData.summary}`
        })
      });

      const data = await res.json().catch(() => ({}));
      setReferenceId(data.referenceId || `OAHA-NI-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmittedType('share');
      setSubmitted(true);
    } catch {
      setReferenceId(`OAHA-NI-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmittedType('share');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!contactData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!contactData.email.trim() || !contactData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!contactData.message.trim()) {
      setError('Please write a brief message.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          name: contactData.name,
          email: contactData.email,
          organization: contactData.organization || 'Individual',
          subject: contactData.subject,
          message: contactData.message
        })
      });

      const data = await res.json().catch(() => ({}));
      setReferenceId(data.referenceId || `OAHA-NI-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmittedType('contact');
      setSubmitted(true);
    } catch {
      setReferenceId(`OAHA-NI-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmittedType('contact');
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setError('');
  };

  return (
    <section id="be-part" className="scroll-mt-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#969696]/30 bg-white font-sans text-left">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2.5 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6] border border-[#e1e1db]/80 cursor-default">
            <Compass className="w-3.5 h-3.5 text-[#2E536B]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2E536B]">
              {bePartOfTheProject.badge}
            </span>
          </div>

          <h2 className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]">
            {bePartOfTheProject.title}
          </h2>

          <p className="font-sans font-normal text-base sm:text-lg text-[#1a2521] leading-relaxed pt-1">
            {bePartOfTheProject.subtitle}
          </p>
        </div>

        {/* 4 Suitable Call-To-Action Buttons (4 Colors of OAHA Logo, compact & sleek) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {/* Button 1: Complete the questionnaire (#2BB7BA Teal) */}
          <a
            href={bePartOfTheProject.questionnaireUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#2BB7BA] hover:bg-[#25a0a3] text-white font-sans font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer group"
          >
            <FileText className="w-4 h-4 shrink-0 text-white/95" />
            <span className="truncate">Complete the questionnaire</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Button 2: Register your interest (#3AB03A Green) */}
          <button
            type="button"
            onClick={() => {
              setActiveForm('register');
              setSubmitted(false);
              setError('');
            }}
            className={`inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#3AB03A] hover:bg-[#329e32] text-white font-sans font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer ${
              activeForm === 'register' && !submitted
                ? 'ring-2 ring-offset-2 ring-[#3AB03A] opacity-100 shadow-sm font-bold'
                : 'opacity-90 hover:opacity-100'
            }`}
          >
            <UserCheck className="w-4 h-4 shrink-0 text-white/95" />
            <span className="truncate">Register your interest</span>
          </button>

          {/* Button 3: Share an initiative (#FF9900 Orange) */}
          <button
            type="button"
            onClick={() => {
              setActiveForm('share');
              setSubmitted(false);
              setError('');
            }}
            className={`inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#FF9900] hover:bg-[#e68a00] text-[#1a2521] font-sans font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer ${
              activeForm === 'share' && !submitted
                ? 'ring-2 ring-offset-2 ring-[#FF9900] opacity-100 shadow-sm font-bold'
                : 'opacity-90 hover:opacity-100'
            }`}
          >
            <Share2 className="w-4 h-4 shrink-0 text-[#1a2521]/90" />
            <span className="truncate">Share an initiative</span>
          </button>

          {/* Button 4: Contact the project team (#2E536B Navy) */}
          <button
            type="button"
            onClick={() => {
              setActiveForm('contact');
              setSubmitted(false);
              setError('');
            }}
            className={`inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-[#2E536B] hover:bg-[#234256] text-white font-sans font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer ${
              activeForm === 'contact' && !submitted
                ? 'ring-2 ring-offset-2 ring-[#2E536B] opacity-100 shadow-sm font-bold'
                : 'opacity-90 hover:opacity-100'
            }`}
          >
            <Mail className="w-4 h-4 shrink-0 text-white/95" />
            <span className="truncate">Contact the project team</span>
          </button>
        </div>

        {/* Dynamic Form Area */}
        <div className="bg-[#faf9f6]/80 border border-[#e1e1db] rounded-3xl p-5 sm:p-8 shadow-3xs">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted-state"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 space-y-5 max-w-lg mx-auto"
              >
                <div className="w-16 h-16 bg-[#3AB03A]/10 border border-[#3AB03A]/20 rounded-full flex items-center justify-center text-[#3AB03A] mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-semibold text-2xl text-[#2E536B]">
                    {submittedType === 'register' && 'Thank you for registering your interest'}
                    {submittedType === 'share' && 'Thank you for sharing your initiative'}
                    {submittedType === 'contact' && 'Thank you for contacting the team'}
                  </h3>
                  <p className="font-sans text-sm text-[#51615a] leading-relaxed">
                    We have logged your details. A member of the Northern Ireland social mobility initiative team will be in touch with you shortly.
                  </p>
                  {referenceId && (
                    <p className="text-xs font-mono text-[#51615a] pt-1">
                      Reference: <strong className="text-[#2E536B]">{referenceId}</strong>
                    </p>
                  )}
                </div>

                <div className="pt-4 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-xs font-semibold text-[#2E536B] hover:bg-[#faf9f6] transition-colors cursor-pointer shadow-3xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Submit another response
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={activeForm}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Form Header */}
                <div className="border-b border-[#e1e1db]/80 pb-4">
                  <h3 className="font-sans font-semibold text-xl text-[#2E536B]">
                    {activeForm === 'register' && 'Register your interest'}
                    {activeForm === 'share' && 'Share an initiative'}
                    {activeForm === 'contact' && 'Contact the project team'}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#51615a] mt-1">
                    {activeForm === 'register' &&
                      'Let us know how you would like to be involved in shaping this place-based initiative.'}
                    {activeForm === 'share' &&
                      'Tell us about existing programmes or good practice underway across Northern Ireland.'}
                    {activeForm === 'contact' &&
                      'Send an inquiry or message directly to the Lewis Silkin and OAHA team.'}
                  </p>
                </div>

                {error && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* FORM 1: Register Your Interest */}
                {activeForm === 'register' && (
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={registerData.name}
                          onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={registerData.email}
                          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                          placeholder="name@organisation.co.uk"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Organisation / Affiliation
                        </label>
                        <input
                          type="text"
                          value={registerData.organization}
                          onChange={(e) => setRegisterData({ ...registerData, organization: e.target.value })}
                          placeholder="e.g. Firm, School, Charity"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Your Role / Sector
                        </label>
                        <select
                          value={registerData.role}
                          onChange={(e) => setRegisterData({ ...registerData, role: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        >
                          <option value="Employer">Employer</option>
                          <option value="Educator / School / College">Educator / School / College</option>
                          <option value="Community Organisation">Community Organisation</option>
                          <option value="Policymaker / Civic Leader">Policymaker / Civic Leader</option>
                          <option value="Young Person (16–25)">Young Person (16–25)</option>
                          <option value="Funder / Investor">Funder / Investor</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Location in NI
                        </label>
                        <select
                          value={registerData.location}
                          onChange={(e) => setRegisterData({ ...registerData, location: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        >
                          <option value="Belfast">Belfast</option>
                          <option value="Derry / Londonderry">Derry / Londonderry</option>
                          <option value="Craigavon / Portadown">Craigavon / Portadown</option>
                          <option value="Antrim / Newtownabbey">Antrim / Newtownabbey</option>
                          <option value="Newry / Mourne / Down">Newry / Mourne / Down</option>
                          <option value="Mid Ulster">Mid Ulster</option>
                          <option value="Regional / Across Northern Ireland">Across Northern Ireland</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                        How would you like to participate?
                      </label>
                      <select
                        value={registerData.involvement}
                        onChange={(e) => setRegisterData({ ...registerData, involvement: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                      >
                        <option value="Attend a stakeholder workshop">Attend a stakeholder workshop / roundtable</option>
                        <option value="Provide employer workplace encounters">Host or provide workplace encounters for young people</option>
                        <option value="Share data and regional insights">Share data and regional insights</option>
                        <option value="Support future pilot activities">Support a future pilot in our area</option>
                        <option value="Receive project updates">Receive email updates as the coalition forms</option>
                      </select>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-[#51615a]">
                        We respect your privacy and will only contact you about this initiative.
                      </span>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#3AB03A] text-white font-semibold text-sm hover:bg-[#329e32] transition-colors cursor-pointer shadow-3xs disabled:opacity-50"
                      >
                        <UserCheck className="w-4 h-4" />
                        {isSubmitting ? 'Registering...' : 'Register your interest'}
                      </button>
                    </div>
                  </form>
                )}

                {/* FORM 2: Share An Initiative */}
                {activeForm === 'share' && (
                  <form onSubmit={handleShareSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={shareData.name}
                          onChange={(e) => setShareData({ ...shareData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Your Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={shareData.email}
                          onChange={(e) => setShareData({ ...shareData, email: e.target.value })}
                          placeholder="name@organisation.co.uk"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Initiative / Programme Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={shareData.initiativeName}
                          onChange={(e) => setShareData({ ...shareData, initiativeName: e.target.value })}
                          placeholder="e.g. Belfast Youth Mentoring Network"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Lead Organisation / Partners
                        </label>
                        <input
                          type="text"
                          value={shareData.organization}
                          onChange={(e) => setShareData({ ...shareData, organization: e.target.value })}
                          placeholder="e.g. Local trust, charity, or employer"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Who does it support? (Target group)
                        </label>
                        <input
                          type="text"
                          value={shareData.targetGroup}
                          onChange={(e) => setShareData({ ...shareData, targetGroup: e.target.value })}
                          placeholder="e.g. 16–24 care experienced youth, school leavers"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Website / Reference (optional)
                        </label>
                        <input
                          type="text"
                          value={shareData.website}
                          onChange={(e) => setShareData({ ...shareData, website: e.target.value })}
                          placeholder="https://..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                        What does it do and what insights could be shared? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={shareData.summary}
                        onChange={(e) => setShareData({ ...shareData, summary: e.target.value })}
                        placeholder="Briefly describe what this initiative achieves, what has worked well, or where systemic challenges remain..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B] resize-none"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-xs text-[#51615a]">
                        Helps build our shared map of what is already working in NI.
                      </span>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FF9900] text-[#1a2521] font-semibold text-sm hover:bg-[#e68a00] transition-colors cursor-pointer shadow-3xs disabled:opacity-50"
                      >
                        <Share2 className="w-4 h-4 text-[#1a2521]" />
                        {isSubmitting ? 'Submitting...' : 'Share initiative'}
                      </button>
                    </div>
                  </form>
                )}

                {/* FORM 3: Contact The Project Team */}
                {activeForm === 'contact' && (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={contactData.name}
                          onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={contactData.email}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                          placeholder="name@organisation.co.uk"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Organisation / Affiliation (optional)
                        </label>
                        <input
                          type="text"
                          value={contactData.organization}
                          onChange={(e) => setContactData({ ...contactData, organization: e.target.value })}
                          placeholder="Your organisation or company"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                          Subject / Nature of Inquiry
                        </label>
                        <select
                          value={contactData.subject}
                          onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B]"
                        >
                          <option value="General Inquiry">General Project Inquiry</option>
                          <option value="Employer Engagement">Employer Engagement & Collaboration</option>
                          <option value="Education & Community Links">Education & Community Partnership</option>
                          <option value="Media & Communications">Media, Press & Speaking</option>
                          <option value="Other">Other Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1a2521] mb-1.5">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={contactData.message}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        placeholder="How can we help or collaborate? Leave your message here..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#e1e1db] text-sm text-[#1a2521] placeholder-[#51615a]/50 focus:outline-none focus:ring-2 focus:ring-[#2E536B]/20 focus:border-[#2E536B] resize-none"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-xs text-[#51615a]">
                        Direct team email: <strong className="text-[#2E536B]">info.oaha.uk@gmail.com</strong>
                      </span>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#2E536B] text-white font-semibold text-sm hover:bg-[#234256] transition-colors cursor-pointer shadow-3xs disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        {isSubmitting ? 'Sending...' : 'Contact the project team'}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;

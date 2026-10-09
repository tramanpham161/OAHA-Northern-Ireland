export interface InsightQuestion {
  title: string;
  description: string;
  color: 'forest' | 'cyan' | 'orange' | 'navy' | 'brown' | 'gray';
  icon: string;
}

export interface InquiryNode {
  title: string;
  description: string;
  color: 'forest' | 'cyan' | 'orange' | 'navy' | 'brown' | 'gray';
  iconName: string;
}

export interface CollaboratorCard {
  title: string;
  description: string;
  color: 'forest' | 'cyan' | 'orange' | 'navy' | 'brown' | 'gray';
  iconName: string;
}

export interface ChallengeGap {
  badge: string;
  headline: string;
  paragraphs: string[];
  bullets: string[];
  closing: string;
}

export interface NiContext {
  badge: string;
  title: string;
  headline: string;
  paragraphs: string[];
  closing: string;
  stats: { value: string; label: string }[];
}

export const challengeGap: ChallengeGap = {
  badge: "The Challenge Gap",
  headline: "Opportunity is not equally distributed.",
  paragraphs: [
    "Young people do not experience opportunity through one organisation, one programme or one sector. They experience it as a continuous journey through their education, training and early careers in the places they live.",
    "Across Northern Ireland, huge amounts of energy, funding, dedication and activity exist to improve life chances. From community projects and youth clubs to schools, further education colleges, universities, training providers and committed employers, the commitment is widespread.",
    "Yet too often, these efforts operate in silos. Hand-offs between phases of a young person's life are fragile. Navigating the choices is confusing, especially for those without existing professional networks or family experience of higher-skilled sectors.",
    "The result is that despite goodwill and extensive activity, talent is lost, potential goes unrealised, and regional inequalities persist. Our focus is connecting existing excellence into clear, navigable pathways for every young person."
  ],
  bullets: [
    "unequal access to career networks",
    "fragmented transitions between education and work",
    "hidden local job opportunities",
    "transport and geographic barriers",
    "uncoordinated employer engagement"
  ],
  closing: "Our focus is connecting existing excellence into clear, navigable pathways for every young person."
};

export const niContext: NiContext = {
  badge: "Northern Ireland Focus",
  title: "The Northern Ireland context",
  headline: "A unique landscape with strong community roots and high potential.",
  paragraphs: [
    "Northern Ireland has unique strengths: close-knit communities, world-class universities, a strong network of further education colleges, and burgeoning clusters in tech, advanced manufacturing, creative industries, and green energy.",
    "However, persistent systemic challenges remain. Economic inactivity rates are higher than the UK average, and educational underachievement disproportionately impacts disadvantaged areas and young men from working-class backgrounds.",
    "Young people in rural and border areas face acute transport and connectivity hurdles, while mental health and post-conflict legacies continue to affect confidence and aspiration across generations.",
    "By joining up the existing assets into a coherent, navigable ecosystem, Northern Ireland has an extraordinary opportunity to lead the way in place-based social mobility."
  ],
  closing: "Connecting Northern Ireland's regional assets will turn scattered goodwill into predictable career progression for all.",
  stats: [
    { value: "26.3%", label: "Economic Inactivity (working age, above UK avg)" },
    { value: "6 FE", label: "Regional Colleges anchoring local skills across NI" },
    { value: "Top 3", label: "Global cybersecurity investment hub in Belfast" }
  ]
};

export const theOpportunity = {
  badge: "System Ingredients & Pathways",
  title: "The opportunity",
  subtitle: "Northern Ireland has the key ingredients. The opportunity is to connect them into coherent pathways.",
  ingredients: [
    { title: "Schools & Colleges", icon: "GraduationCap", color: "navy" },
    { title: "Universities & Research", icon: "BookOpen", color: "cyan" },
    { title: "Community Organisations", icon: "Heart", color: "forest" },
    { title: "Local Employers", icon: "Briefcase", color: "orange" },
    { title: "Apprenticeships & Training", icon: "Scale", color: "brown" },
    { title: "Civic & Local Government", icon: "Landmark", color: "navy" },
    { title: "Youth Services", icon: "Building2", color: "forest" },
    { title: "Regional Growth Deals", icon: "Sparkles", color: "cyan" }
  ],
  connectorText: "The opportunity is to connect these assets more effectively around the journeys people actually experience.",
  journeyPrompt: "We want to understand how people move through:",
  journeySteps: [
    "Education",
    "Further education or training",
    "Work experience",
    "Recruitment",
    "Employment",
    "Progression"
  ],
  closing: "This will help us identify where pathways are unclear, where handovers are weak and where greater coordination could improve outcomes."
};

export const whatWeWantToUnderstand: InquiryNode[] = [
  {
    title: "What is already happening",
    description: "Which organisations, programmes, networks and initiatives are already supporting employment pathways across Belfast, Derry / Londonderry and wider Northern Ireland?",
    color: "forest",
    iconName: "Search"
  },
  {
    title: "Where activity is connected",
    description: "Where are there strong examples of collaboration, partnership and shared delivery that could be amplified or replicated?",
    color: "cyan",
    iconName: "Link"
  },
  {
    title: "Where the gaps are",
    description: "Where are people still missing out on support, visibility, confidence, professional networks or clear pathways into opportunity?",
    color: "orange",
    iconName: "Compass"
  },
  {
    title: "Where handoffs are weak",
    description: "Where do people lose momentum as they move between education, further training, vocational routes and good-quality employment?",
    color: "navy",
    iconName: "GitCommit"
  },
  {
    title: "Where employers can contribute",
    description: "How can employers support future talent, social value, mentoring, work experience, apprenticeships, and visible career pathways?",
    color: "brown",
    iconName: "Briefcase"
  },
  {
    title: "What people need",
    description: "What do young people and job seekers themselves say would help them understand, access and thrive in sustainable work?",
    color: "gray",
    iconName: "MessageCircle"
  }
];

export interface WhatWeAreDoingPillar {
  id: string;
  stepNumber: string;
  title: string;
  lead: string;
  listPrompt: string;
  items: string[];
  footerNote: string;
  color: 'cyan' | 'forest' | 'orange';
}

export const whatWeAreDoingData = {
  badge: "DELIVERY PHASES",
  title: "What we are doing",
  pillars: [
    {
      id: "listening",
      stepNumber: "01",
      title: "Listening to young people and communities",
      lead: "People closest to the challenges must help shape the response.",
      listPrompt: "We will work with young people and community partners to understand:",
      items: [
        "How people hear about careers and opportunities",
        "Which sources of information they trust",
        "What makes an opportunity feel accessible",
        "Where practical barriers emerge",
        "How place and personal networks influence decisions",
        "What meaningful employer engagement looks like",
        "What would make pathways into work easier to understand and navigate"
      ],
      footerNote: "",
      color: "forest" as const
    },
    {
      id: "codesigning",
      stepNumber: "02",
      title: "Co-designing practical solutions",
      lead: "We will bring young people, employers, educators, community organisations and wider stakeholders together to prioritise a small number of practical interventions.",
      listPrompt: "These could include:",
      items: [
        "Improving transitions between schools, colleges, training and employment",
        "Creating clearer information about local opportunities",
        "Widening access to meaningful work experience",
        "Strengthening referrals and handovers",
        "Helping employers connect with a broader range of talent",
        "Targeting gaps in particular places or communities",
        "Developing shared measures of progress"
      ],
      footerNote: "The solutions will be shaped by the evidence and by people in Northern Ireland. They will not be predetermined at the outset.",
      color: "orange" as const
    }
  ]
};

// Kept for backward compatibility if referenced elsewhere
export const howWeWillWork = {
  title: "What we are doing",
  subtitle: "This project will be built around collaboration, not duplication.",
  paragraphs: [
    "We will listen to the people and organisations already doing the work, understand where energy and activity already exists, and identify where practical, collective action could make the greatest difference."
  ],
  bullets: [
    "Ecosystem mapping",
    "Partner conversations",
    "Youth and job seeker insight",
    "School and employer engagement",
    "Design-led workshops",
    "Identification of gaps and opportunities",
    "Practical pilot shaping",
    "Storytelling and shared learning"
  ]
};

export interface ApproachPrinciple {
  id: string;
  title: string;
  paragraphs: string[];
  color: 'cyan' | 'forest' | 'orange' | 'navy' | 'brown' | 'gray';
  iconName: string;
}

export const ourApproachData = {
  badge: "OUR APPROACH",
  title: "Our approach",
  principles: [
    {
      id: "place-based",
      title: "Place-based",
      paragraphs: [
        "Northern Ireland is not one uniform labour market. Belfast, Derry/Londonderry, towns, rural areas and border communities have different economies, infrastructure and opportunities.",
        "Our work will recognise these differences rather than assuming one solution will work everywhere."
      ],
      color: "cyan" as const,
      iconName: "MapPin"
    },
    {
      id: "youth-informed",
      title: "Youth-informed",
      paragraphs: [
        "Young people will be involved early, before solutions are designed. Their experiences will help us understand what the system feels like to navigate—not only how it appears on paper."
      ],
      color: "forest" as const,
      iconName: "Users"
    },
    {
      id: "evidence-led",
      title: "Evidence-led",
      paragraphs: [
        "We will bring together data, lived experience and organisational insight to build a fuller picture of the challenges and opportunities."
      ],
      color: "orange" as const,
      iconName: "BarChart3"
    },
    {
      id: "collaborative",
      title: "Collaborative",
      paragraphs: [
        "Employers, educators, community organisations and government each hold part of the solution. The initiative will create opportunities to share insight and work across organisational boundaries."
      ],
      color: "navy" as const,
      iconName: "Handshake"
    },
    {
      id: "practical",
      title: "Practical",
      paragraphs: [
        "The objective is not simply to produce another report. It is to identify practical interventions that partners can test, learn from and develop together."
      ],
      color: "brown" as const,
      iconName: "Target"
    },
    {
      id: "additive",
      title: "Additive",
      paragraphs: [
        "We will build on existing expertise, relationships and programmes. Our aim is to strengthen and connect what is already working—not to duplicate it."
      ],
      color: "gray" as const,
      iconName: "Layers"
    }
  ]
};

export const roleOfLeeds = {
  title: "Our approach",
  paragraphs: [
    "Northern Ireland is not one uniform labour market. Belfast, Derry/Londonderry, towns, rural areas and border communities have different economies, infrastructure and opportunities.",
    "Our work will recognise these differences rather than assuming one solution will work everywhere."
  ]
};

export const niPrioritiesData = {
  badge: "POLICY & STRATEGY",
  title: "Supporting Northern Ireland’s priorities",
  pfgLead: "The initiative aligns with the Northern Ireland Executive’s Programme for Government 2024–2027, including its long-term missions of People, Planet and Prosperity.",
  economyLead: "It also supports the Department for the Economy’s ambitions to:",
  economyAmbitions: [
    {
      title: "Increase the number of good jobs",
      iconName: "Briefcase",
      color: "cyan" as const
    },
    {
      title: "Raise productivity",
      iconName: "TrendingUp",
      color: "forest" as const
    },
    {
      title: "Promote regional balance",
      iconName: "Compass",
      color: "orange" as const
    },
    {
      title: "Help more people develop the skills needed for a changing economy",
      iconName: "GraduationCap",
      color: "navy" as const
    }
  ],
  skillsStrategy: "Northern Ireland’s Skills for a 10x Economy strategy recognises the importance of addressing skills imbalances, supporting lifelong learning and improving access to reliable careers guidance and information about employment pathways.",
  localDelivery: "Our work will explore how these ambitions are experienced locally and how employers, education providers and community organisations can work together to strengthen delivery."
};

export const whoWeNeedInvolved: CollaboratorCard[] = [
  {
    title: "Employers",
    description: "To share future skills needs, open up pathways, offer insight, provide role models and help people understand the world of work.",
    color: "navy",
    iconName: "Building2"
  },
  {
    title: "Schools, Colleges & Training Providers",
    description: "To help connect classroom learning to practical career steps and improve key transition points.",
    color: "cyan",
    iconName: "GraduationCap"
  },
  {
    title: "Universities",
    description: "To broaden access, share regional insights, and bridge high-skill employment pathways across all communities.",
    color: "forest",
    iconName: "BookOpen"
  },
  {
    title: "Community Organisations",
    description: "To represent local voices, build trusted relationships, and ensure initiatives reach people who need them most.",
    color: "orange",
    iconName: "Heart"
  },
  {
    title: "Local Government & Growth Partnerships",
    description: "To align regional economic priorities, support infrastructure, and embed sustainable place-based initiatives.",
    color: "navy",
    iconName: "Landmark"
  },
  {
    title: "Young People & Job Seekers",
    description: "To lead the conversation with lived experience, telling us what works, what doesn't, and what's missing.",
    color: "brown",
    iconName: "Compass"
  },
  {
    title: "Philanthropy & Funders",
    description: "To catalyze bold innovation, scale proven practices, and back collaborative multi-year ecosystem pilots.",
    color: "forest",
    iconName: "Coins"
  }
];

export const equalitySocialValueData = {
  badge: "EQUALITY & SOCIAL VALUE",
  title: "Equality and social value",
  lead: "Northern Ireland has its own distinct equality framework.",
  section75: {
    statute: "Section 75 of the Northern Ireland Act 1998",
    description: "Section 75 of the Northern Ireland Act 1998 places duties on designated public authorities to promote equality of opportunity and good relations."
  },
  socioEconomic: {
    lead: "Socio-economic background is not currently a protected characteristic in Northern Ireland. However, socio-economic disadvantage often intersects with age, disability, race, sex, caring responsibilities, religious background, health and place.",
    summary: "Our approach will consider these connected experiences and examine how they influence access to education, employment and progression.",
    intersectingFactors: [
      "Age",
      "Disability",
      "Race",
      "Sex",
      "Caring responsibilities",
      "Religious background",
      "Health",
      "Place"
    ]
  },
  socialValueProcurement: {
    title: "Public procurement & social value",
    description: "Northern Ireland’s public procurement framework also requires relevant public-sector tenders to include social value within their award criteria. This creates opportunities to connect public spending with local employment, skills, apprenticeships, work experience and community benefit.",
    benefitAreas: [
      "Local employment",
      "Skills development",
      "Apprenticeships",
      "Work experience",
      "Community benefit"
    ]
  }
};

export const successGoals = {
  title: "Equality and social value",
  subtitle: "By working together, we want to create:",
  bullets: [
    "a clearer, shared understanding of what already works across Northern Ireland",
    "stronger connections between schools, colleges, universities, training providers and employers",
    "more young people accessing meaningful work experience and insight into modern careers",
    "simplified, navigable pathways for those who need support most",
    "greater employer confidence and capacity to recruit and nurture diverse local talent",
    "less duplication and more effective referrals across the ecosystem",
    "practical pilots that can be tested, evaluated and scaled across communities",
    "actionable evidence to inform future policy and funding decisions",
    "a sustainable regional network focused on long-term social mobility"
  ],
  closing: [
    "This work is not about creating a new organisation or a competing initiative.",
    "It is about building shared intelligence and practical momentum so that Northern Ireland's existing wealth of ambition and talent translates into accessible pathways into good jobs for everyone."
  ]
};

export const buildThePictureData = {
  badge: "SHAPING PRIORITIES",
  title: "Help us build the picture",
  headline: "Your insight can shape what happens next",
  lead: "Start by sharing what you know. Your insight will help us decide where to focus.",
  ctaText: "Complete the questionnaire",
  questionnaireUrl: "https://forms.gle/ASMTJYBQSSsdE3r2A",
  invitedNote: "Schools, colleges, councils and business networks are also invited to contribute.",
  audiences: [
    {
      id: "employers",
      title: "Employers",
      tagline: "Reach young people whose talent you may be missing.",
      description: "Share your skills needs and experience of recruitment, and help shape practical ways to connect with local communities.",
      theme: "cyan"
    },
    {
      id: "charities",
      title: "Charities and community organisations",
      tagline: "Help shape action around the people and places you know.",
      description: "Tell us what is working, where support is missing and where stronger connections with employers could help.",
      theme: "forest"
    },
    {
      id: "young-people",
      title: "Young people and communities",
      tagline: "Your experience will help set the priorities.",
      description: "Tell us what makes opportunity easier or harder to access, and help design the changes that would make a difference.",
      theme: "orange"
    }
  ]
};

export const whatSuccessCouldLookLikeData = {
  badge: "LONG-TERM VISION",
  title: "What success could look like",
  lead: "Over time, we want to contribute to a Northern Ireland where:",
  outcomes: [
    "People can understand the opportunities available to them",
    "Support is easier to find and navigate",
    "Organisations make stronger referrals and handovers",
    "Young people have meaningful encounters with employers",
    "Employers reach a wider pool of talent",
    "Existing programmes are better connected",
    "Local insight informs investment and social-value decisions",
    "Gaps are identified before new provision is commissioned",
    "More people can access good work, wherever they live"
  ]
};

export const aboutThePartnershipData = {
  badge: "COLLABORATIVE PARTNERSHIP",
  title: "About the partnership",
  partners: [
    {
      name: "Lewis Silkin",
      role: "Initiative Funder & Regional Convener",
      tagline: "Convening employers and regional stakeholders",
      paragraphs: [
        "Lewis Silkin is working with OAHA to support the development of this Northern Ireland place-based social mobility initiative, helping to convene employers and wider stakeholders around the shared challenge of widening access to opportunity.",
        "Social mobility has long been part of the firm’s story. We’re named after Lewis Silkin (1889 – 1972), whose own story continues to inspire us. His family were refugees from Lithuania and he was brought up in poverty, but qualified as a solicitor before becoming an MP and eventually sitting in the House of Lords.",
        "We continue to be committed to improving social mobility through a wide range of initiatives including outreach and mentoring programmes in schools, and work experience and apprenticeship schemes."
      ]
    },
    {
      name: "OAHA",
      tagline: "Social sustainability & place-based change",
      paragraphs: [
        "OAHA is a social sustainability consultancy that helps organisations turn ambition into measurable action across people, value chains and communities.",
        "OAHA leads place-based social mobility work that brings employers, education providers, charities, communities and young people together to understand systems, identify gaps and develop practical responses.",
        "The Northern Ireland initiative will build on learning from OAHA’s work in Wales and Yorkshire while creating an approach shaped specifically by Northern Ireland’s people, places and institutions."
      ]
    }
  ]
};

export const bePartOfTheProject = {
  badge: "GET INVOLVED",
  title: "Be part of the initiative",
  subtitle: "Whether you are an employer, educator, community organisation, policymaker or young person, your insight can help us understand the current system and identify where collective action could make the greatest difference.",
  questionnaireUrl: "https://forms.gle/ASMTJYBQSSsdE3r2A"
};

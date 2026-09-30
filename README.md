# OAHA Northern Ireland — Place-Based Social Mobility Initiative

A collaborative digital platform convening employers, education providers, community organisations, policymakers, and young people to accelerate social mobility and broaden pathways into sustainable, high-quality employment across Northern Ireland.

---

## 🎯 About the Initiative

This project is a place-based initiative convened by **Lewis Silkin** and **OAHA**:

* **Lewis Silkin**: Convening employers, legal networks, and regional civic partners around widening access to opportunity.
* **OAHA**: A social sustainability consultancy bringing systems thinking, community engagement, and cross-sector coalitions together to turn ambition into measurable action.

### Strategic Alignment
The initiative is intentionally aligned with Northern Ireland’s key economic and social strategies:
* **NI Executive Programme for Government (2024–2027)**: Driving outcomes across *People, Planet, and Prosperity*.
* **Department for the Economy’s 10x Skills Strategy**:
  1. Increase the number of good jobs
  2. Raise productivity
  3. Promote regional balance
  4. Help more people develop the skills needed for a changing economy

---

## 🌐 Platform Architecture & Sections

1. **Introduction & Mission**:
   * Outlines the philosophy of *collaboration and amplification without duplication*—building upon existing excellence across NI rather than creating competing programmes.
2. **The Challenge Gap ("Why this work matters")**:
   * Highlights fragmentation, siloed transitions from education to employment, hidden local jobs, and geographical/transport hurdles.
3. **Northern Ireland Context ("Regional Reality")**:
   * Grounded in current data (such as the estimated 24,000 young people aged 16–24 not in education, employment, or training) and unique regional dynamics.
4. **Supporting Northern Ireland’s Priorities**:
   * Clear alignment cards detailing how civic and business partnerships can directly advance the 10x Economy strategy.
5. **About the Partnership**:
   * Outlines the role of Lewis Silkin and OAHA alongside a responsive regional photo strip.
6. **Be Part of the Initiative (Interactive Action Hub)**:
   * **[Complete the questionnaire]** (Teal `#2BB7BA`): External survey for quantitative and qualitative evidence gathering.
   * **[Register your interest]** (Green `#3AB03A`): Inline registration for employers, educators, policymakers, and community leaders.
   * **[Share an initiative]** (Orange `#FF9900`): Direct submission form to map what is already working across NI communities.
   * **[Contact the project team]** (Navy `#2E536B`): Direct inquiry form to reach the project leads.

---

## 🎨 Design Rules & Brand Guidelines

When contributing or updating the site, adhere strictly to the following brand standards:

### 1. The 4 OAHA Logo Brand Colours
The visual language is anchored in the 4 quadrants of the OAHA logo:
* **Teal / Cyan**: `#2BB7BA`
* **Vibrant Green**: `#3AB03A`
* **Warm Orange**: `#FF9900`
* **Deep Navy / Slate**: `#2E536B`
* *Neutral Gray / Accents*: `#969696`, `#faf9f6` (canvas ground), `#e1e1db` (subtle borders), `#51615a` (readable secondary text), `#1a2521` (primary text).

### 2. Typography Rules
* **Headings**: `font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#2E536B]`. Avoid heavy all-caps or exaggerated weights on section titles.
* **Body Narrative**: `font-sans font-normal text-xs sm:text-sm text-[#51615a] leading-relaxed`. Maintain consistent sizing across cards and narratives.
* **Emphasis**: Reserve bold text and brand colors for key stats or structural labels; do not isolate random full paragraphs with arbitrary bright colors.

### 3. Spacing & Proportion Discipline
* **Section Padding**: Standardised at `py-10 sm:py-12` (avoid excessive vertical padding like `py-18` or `py-20`).
* **Card Grids**: Use compact padding (`p-3.5 sm:p-4 rounded-xl` for small cards, `p-4 sm:p-5 rounded-xl` for partner cards) with tight gaps (`gap-2.5 sm:gap-3`).
* **Zero Pill Discipline**: Buttons and tags use neat, rounded rectangles (`rounded-xl` or `rounded-lg`). Keep CTA buttons compact and single-line on desktop.

---

## 📁 Project Structure

```text
├── public/
│   ├── images/              # Photo gallery assets (EL-1-2.jpg, OD-3.jpg, etc.)
│   └── favicon.svg          # OAHA favicon
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Top bar with OAHA brand stripe & navigation
│   │   ├── Hero.tsx         # Hero introduction
│   │   ├── Introduction.tsx # Context narrative & primary CTA triggers
│   │   ├── WhatWeUnderstand.tsx # Challenge gap & 5 key criteria
│   │   ├── Ambition.tsx     # NI economic context & NEET data card
│   │   ├── WhoInvolved.tsx  # Programme for Government & 10x Economy 4-grid
│   │   ├── AboutThePartnership.tsx # Lewis Silkin + OAHA cards & photo gallery
│   │   ├── InquiryForm.tsx  # 4 brand-coloured CTA buttons & interactive forms
│   │   ├── OahaLogo.tsx     # Official OAHA SVG brand mark
│   │   └── Footer.tsx       # Site footer, contact links & legal info
│   ├── data/
│   │   └── leedsRegional.ts # Centralized copy, stats, and initiative content
│   ├── App.tsx              # Main page component
│   └── main.tsx             # React DOM entry point
├── vercel.json              # Visible deployment configuration for Vercel
├── env.example              # Environment variables template
├── gitignore                # Git ignore patterns
├── package.json             # Scripts & dependencies
└── index.html               # Entry point with SEO metadata
```

---

## 🛠️ Local Development & Scripts

### Prerequisites
* Node.js 18+
* npm 9+

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd <repo-folder>

# Install dependencies (respects .npmrc legacy-peer-deps)
npm install
```

### Development Server
```bash
npm run dev
```
The development server will start at `http://localhost:3000`.

### Type Checking & Linting
```bash
npm run lint
```

### Production Build
```bash
npm run build
```
Generates an optimised static production bundle in the `/dist` directory.

---

## 🚀 Deployment (Vercel)

This application is ready for 1-click deployment on **Vercel**:

* **Framework Preset**: Vite
* **Build Command**: `npm run build`
* **Output Directory**: `dist`
* **Install Command**: `npm install` (utilises root `.npmrc` with `legacy-peer-deps=true` to prevent dependency conflicts)

---

## 📬 Contact & Contribution

For inquiries, sharing data, or registering an organisation’s participation:
* **Email**: [info.oaha.uk@gmail.com](mailto:info.oaha.uk@gmail.com)
* **Initiative Leads**: Lewis Silkin & OAHA

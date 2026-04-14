import {
  ArrowRight,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  BrainCircuit,
  CheckCircle2,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  MessageSquareText,
  PenTool,
  Phone,
  Sparkles,
  Star,
  Trophy,
  Workflow,
} from 'lucide-react'
import DemoOne from './demo'

const capabilities = [
  {
    icon: PenTool,
    title: 'UX that starts with behavior',
    description:
      'User research, task analysis, storytelling, and product messaging shape interfaces that feel obvious from the first interaction.',
  },
  {
    icon: Workflow,
    title: 'Systems developers can build',
    description:
      'Wireframes, UI kits, design tokens, and responsive screens are created with implementation quality in mind from day one.',
  },
  {
    icon: BrainCircuit,
    title: 'Clarity for AI-powered products',
    description:
      'AI apps need trust-building UX, readable states, and clean onboarding. That blend of clarity and speed is where Vimal stands out.',
  },
]

const impact = [
  {
    icon: Trophy,
    metric: '60%',
    title: 'Increase in lead conversion',
    copy: 'Delivered through a company website redesign focused on intuitive UI and stronger user experience at Contus Tech.',
  },
  {
    icon: Star,
    metric: '10 mo',
    title: 'Promotion at Tabtree',
    copy: 'Earned a Senior UX Designer role through collaborative execution, delivery speed, and consistent product impact.',
  },
  {
    icon: BadgeCheck,
    metric: '25%',
    title: 'Accessibility improvement',
    copy: 'Lifted platform accessibility by applying WCAG-aware decisions and more inclusive interaction patterns.',
  },
  {
    icon: Layers3,
    metric: '20+',
    title: 'Responsive apps delivered',
    copy: 'Built and handed off more than 20 responsive web and mobile application experiences with clear design systems.',
  },
]

const process = [
  'Translate requirements into wireframes, prototypes, and high-fidelity mockups',
  'Create UI kits, user flows, responsive layouts, and accessible components',
  'Partner closely with developers to implement clean, launch-ready experiences',
]

const experience = [
  {
    role: 'Senior UI/UX Designer',
    company: 'Ideassion',
    location: 'Chennai',
    period: 'Nov 2024 - Sep 2025',
    summary:
      'Converted client requirements into wireframes, prototypes, and high-fidelity mockups while also crafting keynote-level presentations for brands like Colliers and Nippon.',
  },
  {
    role: 'Senior UI/UX Designer',
    company: 'Contus Tech',
    location: 'Chennai',
    period: 'Jun 2024 - Aug 2024',
    summary:
      'Redesigned the company website, increasing lead conversion by 60% and improving accessibility by 25% through WCAG-focused decisions.',
  },
  {
    role: 'Senior UI/UX Designer',
    company: 'Tabtree',
    location: 'Chennai',
    period: 'Mar 2022 - May 2024',
    summary:
      'Designed and delivered 20+ responsive web and mobile apps, cut onboarding time by 25%, and improved project delivery timelines by 20%.',
  },
  {
    role: 'Quality Analyst',
    company: 'Deloitte',
    location: 'Chennai',
    period: 'Oct 2021 - Mar 2022',
    summary:
      'Contributed to profitability improvements and led weekly design reviews that reduced inconsistencies by 35% across teams.',
  },
]

const tools = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'Penpot',
  'Adobe Creative Cloud',
  'Spline',
  'ChatGPT',
  'Framer',
  'Canva',
  'Blender',
  'Notion',
  'Miro',
]

const skillStrip = [
  'User Research',
  'High-Fidelity Visual Design',
  'Accessibility',
  'Design Tokens',
  'Responsive Design',
  'Stakeholder Collaboration',
]

function App() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(circle_at_top,rgba(255,216,181,0.36),transparent_48%),radial-gradient(circle_at_top_right,rgba(157,196,214,0.22),transparent_34%),linear-gradient(180deg,rgba(255,251,247,0.96),rgba(247,243,237,0.66)_42%,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:28px_28px] opacity-[0.08]" />

      <DemoOne />

      <section id="strengths" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[#916050]">
              <Sparkles className="h-4 w-4" />
              Core Strengths
            </div>
            <h2 className="mt-5 font-cabin text-4xl font-semibold tracking-[-0.03em] text-[#1a2333] sm:text-5xl">
              A sharper portfolio story for recruiters, founders, and UI leaders.
            </h2>
          </div>
          <p className="max-w-xl font-inter text-base leading-8 text-[#596274]">
            The site now leads with proof, clarity, and design maturity instead of
            decorative styling alone. That makes the first impression much stronger.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[30px] border border-white/70 bg-white/78 p-7 shadow-glow backdrop-blur-xl transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-[#e7dde1] bg-[#f4f1ed] p-3 text-[#c4603f]">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="font-cabin text-2xl font-semibold tracking-tight text-[#182131]">
                {title}
              </h2>
              <p className="mt-3 max-w-sm font-inter text-base leading-7 text-[#596274]">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {skillStrip.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-[#ded8d2] bg-white/80 px-4 py-2 font-cabin text-sm font-medium text-[#314056]"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="impact" className="relative mx-auto max-w-6xl px-6 py-8 sm:px-8">
        <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[#916050]">
          <Sparkles className="h-4 w-4" />
          Measurable Impact
        </div>
        <h2 className="max-w-3xl font-cabin text-4xl font-semibold tracking-[-0.03em] text-[#1a2333] sm:text-5xl">
          Real outcomes make the portfolio credible faster than visual polish alone.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {impact.map(({ icon: Icon, metric, title, copy }) => (
            <article
              key={title}
              className="group overflow-hidden rounded-[34px] border border-white/70 bg-[#fbfaf8] shadow-glow"
            >
              <div className="relative overflow-hidden p-8 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,214,184,0.42),transparent_34%),linear-gradient(135deg,#fbfaf8_0%,#f2efe8_100%)]" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex rounded-2xl border border-[#e0d6d1] bg-white/90 p-3 text-[#c4603f] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="font-instrument text-5xl italic tracking-[-0.04em] text-[#c4603f] sm:text-6xl">
                      {metric}
                    </div>
                  </div>
                  <h3 className="mt-8 max-w-md font-cabin text-3xl font-semibold tracking-tight text-[#1a2333]">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-lg font-inter text-base leading-7 text-[#596274]">
                    {copy}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="grid gap-8 rounded-[38px] border border-white/70 bg-[#f8f4ee] p-8 shadow-glow lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ddd4ce] bg-white/90 px-4 py-2 font-cabin text-xs font-semibold uppercase tracking-[0.22em] text-[#7a594d]">
              <Bot className="h-4 w-4" />
              About Vimal
            </div>
            <h2 className="mt-6 max-w-xl font-cabin text-4xl font-semibold tracking-[-0.03em] text-[#1a2333] sm:text-5xl">
              A portfolio should feel as thoughtful as the products it claims to design.
            </h2>
            <p className="mt-5 max-w-2xl font-inter text-lg leading-8 text-[#596274]">
              With a Computer Science Engineering background and strong product
              communication skills, Vimal combines visual design, accessibility,
              stakeholder management, and hands-on delivery across fast-moving teams.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[26px] border border-[#ddd5cf] bg-white p-6">
                <div className="font-instrument text-5xl italic text-[#c4603f]">25%</div>
                <p className="mt-3 font-inter text-sm leading-6 text-[#596274]">
                  onboarding reduction and stronger user flows across 20+ products
                </p>
              </div>
              <div className="rounded-[26px] border border-[#ddd5cf] bg-white p-6">
                <div className="font-instrument text-5xl italic text-[#c4603f]">35%</div>
                <p className="mt-3 font-inter text-sm leading-6 text-[#596274]">
                  reduction in cross-team inconsistencies through structured design reviews
                </p>
              </div>
              <div className="rounded-[26px] border border-[#ddd5cf] bg-white p-6 sm:col-span-2">
                <div className="font-cabin text-xs font-semibold uppercase tracking-[0.22em] text-[#7a594d]">
                  Why recruiters will respond better now
                </div>
                <p className="mt-3 font-inter text-sm leading-7 text-[#596274]">
                  The information architecture now answers the right questions in order:
                  who Vimal is, what he has delivered, how he works, and how to contact him.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#121927] p-7 text-white">
            <div className="flex items-center gap-3 font-cabin text-sm uppercase tracking-[0.24em] text-[#b9d2df]">
              <Layers3 className="h-4 w-4" />
              What Teams Get
            </div>
            <div className="mt-8 space-y-4">
              {process.map((step) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-[22px] border border-white/8 bg-white/6 p-4"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f09a76]" />
                  <p className="font-inter text-sm leading-7 text-[#e7edf3]">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[24px] border border-[#2a3345] bg-[#182132] p-5">
              <div className="flex items-center gap-3 font-cabin text-sm font-semibold text-white">
                <MessageSquareText className="h-5 w-5 text-[#f09a76]" />
                Strong fit for your next AI-powered application
              </div>
              <p className="mt-3 font-inter text-sm leading-7 text-[#c4d0dc]">
                Vimal is especially well positioned for AI SaaS, internal tools,
                dashboards, onboarding experiences, and polished web applications
                that need fast product thinking and strong visual execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative mx-auto max-w-6xl px-6 py-6 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[34px] border border-white/70 bg-white/80 p-8 shadow-glow backdrop-blur-xl lg:p-10">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[#916050]">
              <BriefcaseBusiness className="h-4 w-4" />
              Experience Snapshot
            </div>
            <div className="mt-8 space-y-5">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="rounded-[26px] border border-[#ddd7d1] bg-[#faf8f4] p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-cabin text-2xl font-semibold tracking-tight text-[#1a2333]">
                        {item.role}
                      </h3>
                      <p className="mt-2 flex items-center gap-2 font-inter text-sm font-medium uppercase tracking-[0.16em] text-[#c4603f]">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.company} / {item.location}
                      </p>
                    </div>
                    <div className="rounded-full border border-[#ddd6d0] bg-white px-4 py-2 font-cabin text-xs font-semibold uppercase tracking-[0.18em] text-[#576173]">
                      {item.period}
                    </div>
                  </div>
                  <p className="mt-4 font-inter text-base leading-7 text-[#596274]">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[34px] border border-white/60 bg-[#121927] p-8 text-white shadow-glow">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[#b9d2df]">
                <GraduationCap className="h-4 w-4" />
                Education and Certification
              </div>
              <div className="mt-7 rounded-[24px] border border-white/10 bg-white/6 p-5">
                <h3 className="font-cabin text-xl font-semibold">Mailam Engineering College</h3>
                <p className="mt-2 font-inter text-sm leading-7 text-[#e7edf3]">
                  B.E. in Computer Science Engineering, First Class
                </p>
                <p className="mt-1 font-inter text-sm leading-7 text-[#aab9c6]">
                  Aug 2015 - May 2019
                </p>
              </div>
              <div className="mt-4 rounded-[24px] border border-white/10 bg-white/6 p-5">
                <h3 className="font-cabin text-xl font-semibold">Product Management</h3>
                <p className="mt-2 font-inter text-sm leading-7 text-[#e7edf3]">
                  Focused on stakeholder expectations, constraints, and outcome-driven delivery.
                </p>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/70 bg-[#f4efe8] p-8 shadow-glow">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-[#916050]">
                <Sparkles className="h-4 w-4" />
                Tools Expertise
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="rounded-full border border-[#ddd5cf] bg-white px-4 py-2 font-cabin text-sm font-medium text-[#314056]"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-6 pb-24 pt-10 sm:px-8">
        <div className="rounded-[38px] border border-white/70 bg-[linear-gradient(135deg,#fcfaf7_0%,#f2eee8_100%)] p-8 shadow-glow lg:flex lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ddd6d1] bg-white/90 px-4 py-2 font-cabin text-xs font-semibold uppercase tracking-[0.22em] text-[#7a594d]">
              <Sparkles className="h-4 w-4" />
              Available for select projects
            </div>
            <h2 className="mt-6 font-cabin text-4xl font-semibold tracking-[-0.03em] text-[#1a2333] sm:text-5xl">
              Need a UI/UX designer who can bring clarity to your next product?
            </h2>
            <p className="mt-4 font-inter text-lg leading-8 text-[#596274]">
              Reach out for product design, website redesigns, UI systems, or the UX layer of your next AI-powered application.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-4 lg:mt-0 lg:items-end">
            <a
              href="mailto:vimalkumar122333@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-[#121927] px-7 py-4 font-cabin text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d1421]"
            >
              <Mail className="h-4 w-4" />
              vimalkumar122333@gmail.com
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#596274]">
              <a
                href="https://dribbble.com/vimal2610"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#1a2333]"
              >
                Dribbble
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.behance.net/vimalkumar26"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#1a2333]"
              >
                Behance
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vimal-kumar-uiux2610/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#1a2333]"
              >
                LinkedIn
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                +91 99524 26108
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App

import { useState } from 'react'
import { ArrowRight, Maximize2, Minimize2 } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4'

const stats = [
  { label: 'designing intuitive digital products', value: '5+ years' },
  { label: 'responsive web and mobile apps delivered', value: '20+ apps' },
  { label: 'lift in lead conversion from a website redesign', value: '60% growth' },
]

const focusAreas = [
  'UI/UX for AI-powered products and SaaS platforms',
  'Responsive web experiences with strong visual systems',
  'Developer-friendly design handoff and collaboration',
]

const HeroSection = () => {
  const [fullBleed, setFullBleed] = useState(true)

  return (
    <section
      className={`relative w-full overflow-hidden transition-all duration-500 ease-in-out ${
        fullBleed ? 'min-h-screen' : 'py-32 lg:py-40'
      }`}
    >
      <button
        onClick={() => setFullBleed(!fullBleed)}
        aria-label={fullBleed ? 'Switch to fit-to-content' : 'Switch to full-bleed'}
        className="absolute right-4 top-4 z-20 rounded-[10px] border border-white/30 bg-[rgba(41,22,17,0.35)] p-2.5 text-white backdrop-blur-xl transition-all hover:bg-[rgba(41,22,17,0.52)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {fullBleed ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
      </button>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,17,0.22),rgba(8,11,17,0.78))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(248,145,99,0.32),transparent_33%),radial-gradient(circle_at_80%_16%,rgba(122,169,194,0.24),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-8 lg:pb-24 lg:pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[28px] border border-white/18 bg-[rgba(10,14,24,0.46)] px-4 py-3 text-white backdrop-blur-xl sm:rounded-full">
          <a href="#" className="font-cabin text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Vimal Kumar
          </a>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 font-cabin text-sm text-white/90">
            <a href="#strengths" className="transition hover:text-white">
              Strengths
            </a>
            <a href="#impact" className="transition hover:text-white">
              Impact
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
          <a
            href="mailto:vimalkumar122333@gmail.com"
            className="rounded-full border border-white/18 bg-white/14 px-4 py-2 font-cabin text-sm font-medium text-white transition hover:bg-white/20"
          >
            Let's Talk
          </a>
        </div>

        <div className="mt-14 rounded-[34px] border border-white/14 bg-[#0f1729]/42 p-7 shadow-[0_35px_120px_rgba(4,7,15,0.34)] backdrop-blur-2xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_340px] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/14 bg-white/10 px-4 py-2 backdrop-blur-xl">
                <span className="rounded-full bg-primary px-3 py-1 font-cabin text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                  Available
                </span>
                <span className="font-cabin text-sm font-medium tracking-wide text-white/90">
                  Senior UI/UX Designer for modern and AI-powered products
                </span>
              </div>

              <h1 className="mt-7 max-w-5xl font-instrument text-5xl leading-[0.97] tracking-[-0.04em] text-white sm:text-7xl lg:text-[94px]">
                Digital products that feel
                <em className="mx-[0.12em] inline-block italic text-[#ffd6c4]">clear</em>,
                premium, and recruiter-ready.
              </h1>

              <p className="mt-6 max-w-2xl font-inter text-lg leading-8 text-white sm:text-[1.14rem]">
                I am Vimal Kumar, a Chennai-based UI/UX Designer with 5+ years of
                experience turning product requirements into polished interfaces,
                responsive systems, and developer-ready experiences.
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href="mailto:vimalkumar122333@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3.5 font-cabin text-base font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
                >
                  Book a Project Call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://dribbble.com/vimal2610"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/16 bg-white/10 px-8 py-3.5 font-cabin text-base font-medium text-white transition-all hover:bg-white/16"
                >
                  View Dribbble
                </a>
              </div>
            </div>

            <aside className="rounded-[28px] border border-white/14 bg-black/14 p-6 text-white">
              <div className="font-cabin text-xs font-semibold uppercase tracking-[0.24em] text-[#ffd6c4]">
                Current Focus
              </div>
              <div className="mt-5 space-y-4">
                {focusAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-white/12 bg-white/6 p-4"
                  >
                    <p className="font-inter text-sm leading-7 text-white/86">{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-8 rounded-[28px] border border-white/12 bg-white/8 p-6 text-white">
            <div className="font-cabin text-xs font-semibold uppercase tracking-[0.24em] text-[#ffd6c4]">
              Quick Snapshot
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[20px] border border-white/12 bg-black/10 p-4"
                >
                  <div className="font-cabin text-sm font-semibold uppercase tracking-[0.2em] text-white">
                    {item.value}
                  </div>
                  <p className="mt-2 font-inter text-sm leading-6 text-white/78">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }

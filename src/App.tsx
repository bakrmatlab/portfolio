import type { ReactNode } from 'react'

const github = 'https://github.com/bakrmatlab'

function ExternalLink({ className, children }: { className?: string; children: ReactNode }) {
  return <a className={className} href={github} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default function App() {
  return <>
    <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-lime-300 focus:px-4 focus:py-2 focus:text-black" href="#top">Skip to content</a>
    <header className="top shell">
      <a className="brand" href="#top" aria-label="Bakr Matlab, back to top"><span className="brand-mark">B</span><span>BAKR MATLAB</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></nav>
      <div className="top-status mono"><span className="dot" /> CARLETON UNIVERSITY</div>
    </header>
    <main id="top">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">Computer science student / Carleton University</div>
          <h1 id="hero-title"><span>Bakr</span><span className="outline">Matlab</span></h1>
          <p className="intro">I’m a computer science student at <strong>Carleton University</strong> interested in building things from front end to back end.</p>
          <div className="actions">
            <ExternalLink className="button primary">Explore my GitHub <span aria-hidden="true">↗</span></ExternalLink>
            <a className="button secondary" href="#about">Get to know me <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="art-label">BM / 001 / PORTFOLIO</div><div className="orb" /><div className="art-number">B</div><div className="corner">DESIGNED TO KEEP EVOLVING / 2026</div></div>
      </section>
      <div className="ticker" aria-hidden="true"><div className="ticker-inner"><span>FULL STACK DEVELOPMENT</span><span>FRONT END TO BACK END</span><span>ALWAYS BUILDING</span><span>FULL STACK DEVELOPMENT</span><span>FRONT END TO BACK END</span></div></div>
      <section className="section shell" id="about" aria-labelledby="about-title">
        <div className="section-head"><div><div className="index">01 / About</div><h2 id="about-title">The short<br />version.</h2></div></div>
        <div className="about-grid">
          <p className="about-copy">I’m Bakr, a computer science student at Carleton University. I’m drawn to <em>full stack development</em>—the mix of thoughtful interfaces and the systems that make them work.</p>
          <div className="fact-list">
            <div className="fact"><span>Based at</span><span>Carleton University</span></div>
            <div className="fact"><span>Focus</span><span>Full stack development</span></div>
            <div className="fact"><span>Find me</span><span><ExternalLink>GitHub ↗</ExternalLink></span></div>
          </div>
        </div>
      </section>
      <section className="section shell" id="work" aria-labelledby="work-title">
        <div className="section-head"><div><div className="index">02 / Work</div><h2 id="work-title">Selected<br />work.</h2></div><p className="section-note">A project from interface to data layer. More work will join it here as it takes shape.</p></div>
        <article className="work-card money-pal-card">
          <div className="work-copy">
            <div className="index">01 / Full stack application</div>
            <div>
              <h3>MoneyPal</h3>
              <p>A personal finance app for managing multiple wallets, tracking transactions, and seeing spending insights with real-time updates.</p>
              <div className="project-tags" aria-label="Technologies used"><span>React</span><span>Vite</span><span>Convex</span><span>Clerk</span><span>Tailwind CSS</span></div>
              <div className="project-actions">
                <a className="button primary" href="https://money-pal-wheat.vercel.app/" target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a>
                <a className="button secondary" href="https://github.com/bakrmatlab/MoneyPal" target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
          <div className="work-visual money-pal-visual">
            <div className="preview-bar" aria-hidden="true"><span className="preview-dots"><i /><i /><i /></span><span>MoneyPal / visual overview</span></div>
            <div className="preview-window" aria-hidden="true">
              <div className="preview-site-header"><span className="preview-logo">$</span><strong>MoneyPal</strong><span className="preview-pill">Get Started</span></div>
              <div className="preview-site-body"><span className="preview-kicker">PERSONAL FINANCE, SIMPLIFIED</span><div className="preview-title">Your money.<br /><em>In focus.</em></div><div className="preview-caption">Wallets, transactions, and insights in one place.</div><div className="preview-cta">Explore MoneyPal ↗</div></div>
              <div className="preview-orbit preview-orbit-one" /><div className="preview-orbit preview-orbit-two" />
            </div>
          </div>
        </article>
      </section>
      <section className="section shell education-section" id="education" aria-labelledby="education-title">
        <div className="education-heading"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5" /></svg><h2 id="education-title">Education</h2></div>
        <div className="education-grid">
          <div className="education-card"><div className="education-card-top"><div className="education-logo"><img src="/carleton.jpg" alt="Carleton University logo" loading="lazy" /></div><div className="education-details"><h3>Carleton University</h3><p>BSc Computer Science — Cybersecurity stream</p><span>Sep 2025 – Apr 2029</span></div></div></div>
          <div className="education-card"><div className="education-card-top"><div className="education-logo"><img src="/algonquin.png" alt="Algonquin College logo" loading="lazy" /></div><div className="education-details"><h3>Algonquin College</h3><p>Computer Programming</p><span>Sep 2021 – Apr 2023</span></div></div></div>
        </div>
      </section>
      <section className="section shell contact" id="contact" aria-labelledby="contact-title"><div><div className="index">04 / Connect</div><h2 id="contact-title">Let’s<br />connect.</h2></div><div className="contact-links"><a className="button primary" href="mailto:matlab893@gmail.com">Email me <span aria-hidden="true">↗</span></a><a className="button secondary" href="https://www.linkedin.com/in/bakr-matlab/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><ExternalLink className="button secondary">GitHub <span aria-hidden="true">↗</span></ExternalLink></div></section>
    </main>
    <footer className="footer shell"><span>© {new Date().getFullYear()} Bakr Matlab</span><span>Computer science / Carleton University</span><a href="#top">Back to top ↑</a></footer>
  </>
}

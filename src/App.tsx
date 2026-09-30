import type { ReactNode } from 'react'

const github = 'https://github.com/bakrmatlab'
const tickerItems = ['SOFTWARE DEVELOPMENT', 'SYSTEMS & SECURITY', 'ALWAYS LEARNING']
const skillGroups = [
  { title: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL'] },
  { title: 'Frameworks', items: ['React', 'Next.js', 'React Native', 'Spring Boot', 'Express'] },
  { title: 'Data & APIs', items: ['PostgreSQL', 'MySQL', 'GraphQL', 'REST APIs', 'Convex'] },
  { title: 'Tools & platforms', items: ['Git', 'Docker', 'Linux', 'Cloudflare', 'Vercel'] },
]

type IconName = 'school' | 'code' | 'github' | 'mail' | 'linkedin'

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, ReactNode> = {
    school: <><path d="m2 9 10-5 10 5-10 5-10-5Z" /><path d="M6 11v5c0 2 3 4 6 4s6-2 6-4v-5M22 9v7" /></>,
    code: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></>,
    github: <><path d="M9 19c-4 1-4-2-6-2m12 4v-3.2a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.7 4.7 0 0 0 18.4 6 4.3 4.3 0 0 0 18.3 3S17 2.7 15 4.3a11 11 0 0 0-6 0C7 2.7 5.7 3 5.7 3A4.3 4.3 0 0 0 5.6 6a4.7 4.7 0 0 0-1.3 3.5c0 4.7 2.8 5.7 5.5 6A3 3 0 0 0 9 17.8V21" /></>,
    mail: <><rect x="2" y="5" width="20" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.1M11 17v-7h3v1a3 3 0 0 1 5 2.5V17" /></>,
  }
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function ExternalLink({ className, children }: { className?: string; children: ReactNode }) {
  return <a className={className} href={github} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default function App() {
  return <>
    <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-lime-300 focus:px-4 focus:py-2 focus:text-black" href="#top">Skip to content</a>
    <header className="top shell">
      <a className="brand" href="#top" aria-label="Bakr Matlab, back to top"><span className="brand-mark">B</span><span>BAKR MATLAB</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#education">Education</a><a href="#skills">Skills</a><a href="#contact">Contact</a><a href="/Bakr_Matlab_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></nav>
    </header>
    <main id="top">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">Computer science student at Carleton</div>
          <h1 id="hero-title"><span>Bakr</span><span className="outline">Matlab</span></h1>
          <p className="intro">I learn best by building. I’m studying computer science and making projects that let me explore different parts of software.</p>
          <div className="actions">
            <a className="button primary" href="#work">See my work <span aria-hidden="true">↓</span></a>
            <ExternalLink className="button secondary"><Icon name="github" /> GitHub <span aria-hidden="true">↗</span></ExternalLink>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="art-label">BAKR MATLAB / PORTFOLIO</div><div className="orb" /><div className="art-number">B</div><div className="corner">OTTAWA, CANADA / 2026</div></div>
      </section>
      <div className="ticker" aria-hidden="true"><div className="ticker-inner">{[0, 1].map(group => <div className="ticker-group" key={group}>{Array.from({ length: 4 }, (_, repeat) => tickerItems.map((item, index) => <span key={`${repeat}-${index}`}>{item}</span>))}</div>)}</div></div>
      <section className="section shell" id="about" aria-labelledby="about-title">
        <div className="section-head"><div><div className="index">01 / About</div><h2 id="about-title">A little<br />about me.</h2></div></div>
        <div className="about-grid">
          <p className="about-copy">I studied programming at Algonquin and now study computer science at Carleton. Outside class, I build projects like <em>MoneyPal</em>.</p>
          <div className="fact-list">
            <div className="fact"><span><Icon name="school" /> Studying</span><span>Computer science at Carleton</span></div>
            <div className="fact"><span><Icon name="code" /> Interests</span><span>Software, systems, and security</span></div>
            <div className="fact"><span><Icon name="github" /> Code</span><span><ExternalLink>See my GitHub ↗</ExternalLink></span></div>
          </div>
        </div>
      </section>
      <section className="section shell" id="work" aria-labelledby="work-title">
        <div className="section-head"><div><div className="index">02 / Work</div><h2 id="work-title">What I’ve<br />built.</h2></div><p className="section-note">A closer look at one project I’ve taken from idea to working app.</p></div>
        <article className="work-card money-pal-card">
          <div className="work-copy">
            <div className="index">01 / Personal project</div>
            <div>
              <h3>MoneyPal</h3>
              <p>Keep wallets and transactions in one place, then see where the money goes. I built MoneyPal with React, Convex, and Clerk, including live data updates and sign in.</p>
              <div className="project-tags" aria-label="Technologies used"><span>React</span><span>Vite</span><span>Convex</span><span>Clerk</span><span>Tailwind CSS</span></div>
              <div className="project-actions">
                <a className="button primary" href="https://money-pal-wheat.vercel.app/" target="_blank" rel="noopener noreferrer">Live demo <span aria-hidden="true">↗</span></a>
                <a className="button secondary" href="https://github.com/bakrmatlab/MoneyPal" target="_blank" rel="noopener noreferrer">Source code <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </div>
          <div className="work-visual money-pal-visual">
            <div className="preview-bar" aria-hidden="true"><span className="preview-dots"><i /><i /><i /></span><span>MoneyPal / live homepage</span></div>
            <div className="preview-window"><img src="/moneypal-homepage.jpg" alt="Screenshot of the MoneyPal homepage" loading="lazy" /></div>
          </div>
        </article>
      </section>
      <section className="section shell education-section" id="education" aria-labelledby="education-title">
        <div className="section-head"><div><div className="index">03 / Education</div><h2 id="education-title">Where I’ve<br />studied.</h2></div></div>
        <div className="education-grid">
          <article className="education-card">
            <div className="education-card-top"><span className="index">01 / University</span><div className="education-logo"><img src="/carleton.jpg" alt="Carleton University logo" loading="lazy" /></div></div>
            <div className="education-details"><h3>Carleton University</h3><p>Bachelor of Computer Science <span>· Cybersecurity stream</span></p></div>
            <div className="education-coursework"><span>Relevant coursework</span><ul><li>Systems Programming</li><li>Data Types &amp; Algorithms</li><li>Software Engineering</li><li>Web Applications</li></ul></div>
            <div className="education-card-bottom"><span>Current</span><span>Expected Apr 2029</span></div>
          </article>
          <article className="education-card">
            <div className="education-card-top"><span className="index">02 / College</span><div className="education-logo"><img src="/algonquin-wordmark.svg" alt="Algonquin College logo" loading="lazy" /></div></div>
            <div className="education-details"><h3>Algonquin College</h3><p>Computer Programming Diploma</p></div>
            <div className="education-coursework"><span>Relevant coursework</span><ul><li>Object-oriented programming</li><li>Data structures</li><li>Relational databases</li><li>Web development</li></ul></div>
            <div className="education-card-bottom"><span>Completed</span><span>Apr 2023</span></div>
          </article>
        </div>
      </section>
      <section className="section shell" id="skills" aria-labelledby="skills-title">
        <div className="section-head"><div><div className="index">04 / Skills</div><h2 id="skills-title">Skills &amp;<br />tools.</h2></div><p className="section-note">Technologies I’ve used in projects, coursework, and work.</p></div>
        <div className="skills-grid">
          {skillGroups.map(({ title, items }, index) => <div className="skill-group" key={title}>
            <h3 className="index">0{index + 1} / {title}</h3>
            <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>)}
        </div>
      </section>
      <section className="section shell contact" id="contact" aria-labelledby="contact-title"><div><div className="index">05 / Contact</div><h2 id="contact-title">Say<br />hello.</h2><p className="contact-note">Have a project or a question? I’d like to hear from you.</p></div><div className="contact-links"><a className="button primary" href="mailto:matlab893@gmail.com"><Icon name="mail" /> Email me <span aria-hidden="true">↗</span></a><a className="button secondary" href="https://www.linkedin.com/in/bakr-matlab/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" /> LinkedIn <span aria-hidden="true">↗</span></a><ExternalLink className="button secondary"><Icon name="github" /> GitHub <span aria-hidden="true">↗</span></ExternalLink></div></section>
    </main>
    <footer className="footer shell"><span>© {new Date().getFullYear()} Bakr Matlab</span><span>Built by Bakr</span><a href="#top">Back to top ↑</a></footer>
  </>
}

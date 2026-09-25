const github = 'https://github.com/bakrmatlab'

function ExternalLink({ className, children }) {
  return <a className={className} href={github} target="_blank" rel="noopener noreferrer">{children}</a>
}

export default function App() {
  return <>
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
        <div className="section-head"><div><div className="index">02 / Work</div><h2 id="work-title">Work in<br />progress.</h2></div><p className="section-note">I’m building my portfolio as I go. The projects here will grow with the work.</p></div>
        <ExternalLink className="work-card">
          <div className="work-copy"><div className="index">Current work / GitHub</div><div><h3>See what I’m<br />building.</h3><p>My GitHub is the best place to explore my code and follow along as new projects take shape.</p><span className="button secondary">View GitHub <span aria-hidden="true">↗</span></span></div></div>
          <div className="work-visual" aria-hidden="true"><span>&lt;/&gt;</span></div>
        </ExternalLink>
      </section>
      <section className="section shell contact" id="contact" aria-labelledby="contact-title"><div><div className="index">03 / Connect</div><h2 id="contact-title">Let’s<br />connect.</h2></div><ExternalLink className="button primary">Find me on GitHub <span aria-hidden="true">↗</span></ExternalLink></section>
    </main>
    <footer className="footer shell"><span>© {new Date().getFullYear()} Bakr Matlab</span><span>Computer science / Carleton University</span><a href="#top">Back to top ↑</a></footer>
  </>
}

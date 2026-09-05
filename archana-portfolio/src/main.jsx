import React from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Mail, MapPin, Download, ArrowUpRight, CheckCircle2, Code2, Database, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import './styles.css';

const skills = [
  ['JavaScript', 'Programming', Code2], ['React.js', 'Frontend', Code2], ['HTML5 / CSS3', 'Frontend', Code2],
  ['Node.js / Express', 'Backend', Code2], ['PostgreSQL / Prisma', 'Database', Database], ['SQL / MySQL', 'Database', Database],
  ['Postman', 'API Testing', ShieldCheck], ['Cypress', 'Automation', ShieldCheck], ['Jira / Git / GitHub', 'Tools', Code2],
  ['Manual & Regression Testing', 'QA', CheckCircle2], ['JWT / RBAC', 'Security', ShieldCheck], ['AI / ML Fundamentals', 'AI', Sparkles]
];

const nav = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

function App() {
  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#home"><span>AC</span><b>Archana Chavan</b></a>
        <nav>{nav.map(x => <a key={x} href={'#' + x.toLowerCase()}>{x}</a>)}</nav>
        <a className="nav-contact" href="mailto:archana.chavan2@gmail.com">Let's connect</a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">QA ENGINEER · SOFTWARE TESTER · DEVELOPER</p>
            <h1>Building reliable software, <em>one detail at a time.</em></h1>
            <p className="lead">Detail-oriented QA Engineer with hands-on experience in functional testing, API validation, Cypress automation, database testing, and modern JavaScript development.</p>
            <div className="actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={18}/></a>
              <a className="button secondary" href="#contact">Contact me <Mail size={18}/></a>
            </div>
            <div className="quick">
              <span><MapPin size={16}/> Folsom, California</span>
              <span><CheckCircle2 size={16}/> Authorized to work in the U.S.</span>
            </div>
          </div>
          <div className="hero-card">
            <div className="orb"></div>
            <div className="profile-mark">AC</div>
            <p>QA + Full-Stack</p>
            <strong>Quality focused.<br/>Curious by nature.</strong>
            <div className="mini-grid"><span>React</span><span>Node</span><span>SQL</span><span>Cypress</span></div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 — About</div>
          <div>
            <h2>From testing software to building it.</h2>
            <p>I bring a quality-first mindset to software development. My experience spans requirements analysis, manual and automation testing, REST API validation, database verification, defect tracking, and collaboration throughout the SDLC.</p>
            <p>Alongside QA, I have been developing full-stack skills through Code the Dream, working with React, Node.js, Express, PostgreSQL, Prisma, authentication, and reusable application components.</p>
            <div className="stat-row"><div><b>QA</b><span>Testing & automation</span></div><div><b>API</b><span>REST validation</span></div><div><b>WEB</b><span>React development</span></div><div><b>AI</b><span>ML fundamentals</span></div></div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 — Skills</div>
          <div className="wide">
            <h2>Tools I use to solve problems.</h2>
            <div className="skill-grid">{skills.map(([name, cat, Icon]) => <div className="skill" key={name}><Icon size={20}/><div><b>{name}</b><small>{cat}</small></div></div>)}</div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-label">03 — Experience</div>
          <div className="timeline">
            <article className="timeline-item"><div className="dot"></div><div><p className="date">APRIL 2023 — JUNE 2024</p><h3>QA Tester · AiVante Health Solution</h3><p>Performed functional, regression, validation, API, automation, and database testing for healthcare software applications.</p><ul><li>Created and executed Cypress automation scripts with JavaScript.</li><li>Tested REST APIs with Postman and validated request/response data.</li><li>Performed MySQL database validation and data-driven testing using CSV files.</li><li>Identified, documented, and tracked defects while collaborating with developers.</li><li>Participated in SDLC activities including requirement review and quality discussions.</li></ul></div></article>
            <article className="timeline-item"><div className="dot"></div><div><p className="date">2024 — 2026</p><h3>Full-Stack Development Training · Code the Dream</h3><p>Hands-on development training focused on JavaScript, React, Node.js, Express, APIs, PostgreSQL, Prisma, authentication, and modern web development.</p></div></article>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">04 — Projects</div>
          <div className="wide">
            <h2>Featured work.</h2>
            <article className="project-card">
              <div className="project-top"><span className="project-number">01</span><span className="badge">Full Stack</span></div>
              <h3>Neighborhood Helper</h3>
              <p>A community platform connecting people who need help with volunteers. Built with role-based experiences for requesters and volunteers, request management, profiles, messaging, and volunteer workflows.</p>
              <div className="tags"><span>React</span><span>Material UI</span><span>Node.js</span><span>Express</span><span>PostgreSQL</span><span>Prisma</span><span>JWT</span><span>Geoapify</span></div>
              <div className="project-note"><Sparkles size={18}/><span>Team practicum project demonstrating full-stack development, API integration, authentication, validation, and responsive UI work.</span></div>
            </article>
          </div>
        </section>

        <section id="education" className="section education">
          <div className="section-label">05 — Education</div>
          <div className="edu-grid">
            <div className="edu"><p className="date">2024 — 2026</p><h3>Artificial Intelligence & Machine Learning</h3><p>Folsom Lake College · California</p><span>AI fundamentals · machine learning concepts · data preprocessing · model evaluation</span></div>
            <div className="edu"><p className="date">MASTER'S DEGREE</p><h3>Computer Management</h3><p>Pune University · India</p></div>
            <div className="edu"><p className="date">BACHELOR'S DEGREE</p><h3>Science — Chemistry</h3><p>Pune University · India</p></div>
          </div>
        </section>

        <section className="section learning">
          <div className="learning-card"><Sparkles size={25}/><div><p className="eyebrow">CONTINUING EDUCATION</p><h2>Always learning. Always improving.</h2><p>JavaScript · HTML & CSS · React.js · Node.js · Express.js · Prisma · SQL · Postman</p></div></div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">06 — CONTACT</p>
          <h2>Let's build something reliable.</h2>
          <p>I'm open to opportunities in software testing, QA automation, and front-end development.</p>
          <a className="button primary" href="mailto:archana.chavan2@gmail.com">Email Archana <Mail size={18}/></a>
          <div className="socials"><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={19}/> GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={19}/> LinkedIn</a></div>
          <p className="email">archana.chavan2@gmail.com</p>
        </section>
      </main>

      <footer><span>© 2026 Archana Chavan</span><span>QA · Development · AI/ML</span></footer>
    </div>
  );
}
createRoot(document.getElementById('root')).render(<App />);


import { useEffect, useState } from 'react';
import './legacy-style.css'; // Import the original CSS engine for perfection

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [showMoreTimeline, setShowMoreTimeline] = useState(false);

  useEffect(() => {
    // Re-implement the IntersectionObserver for scroll reveals
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));
    
    return () => {
      revealElements.forEach(el => revealObserver.unobserve(el));
    };
  }, [showMoreTimeline, showMoreProjects]);

  return (
    <div className="font-main bg-neoWhite text-neoBlack overflow-x-hidden">
      

  {/*  ===================== NAV =====================  */}
  <nav id="navbar">
    <div className="nav-inner container">
      <a href="#hero" className="nav-logo">SR<span className="nav-logo-dot">.</span></a>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`} id="navLinks">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#master-timeline">Journey</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#awards">Achievements</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact" className="nav-cta">Hire Me →</a></li>
      </ul>
      <button className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  {/*  ===================== HERO =====================  */}
  <section id="hero">
    <div className="container hero-layout">

      <div className="hero-left">
        <div className="hero-tag">
          <span className="blink-dot"></span> Available for Opportunities
        </div>

        <h1 className="hero-name">
          Shubham<br />
          <span className="hero-name-accent">Raj</span>
        </h1>
        <div className="hero-roles">
          <span className="role-pill pill-yellow">Tech &amp; Architecture Core</span>
          <span className="role-pill pill-blue">Growth &amp; Distribution</span>
          <span className="role-pill pill-red">Elite Problem Solver</span>
        </div>

        <p className="hero-bio">
          I am a <strong>results-driven Product manager and a software engineer as well with expertise in AI who knows
            both Development and Distribution</strong>
          I architect scalable systems and build the operational frameworks required to deploy them successfully. As a
          developer-architect and operator and entrepreneur, I lead high-performance teams, automate complex operations,
          and turn
          concepts into robust, profitable products. <strong>TEDx Speaker</strong> · Scaled products to <strong>5,000+
            users</strong> · Impacted <strong>200,000+ people</strong>.
        </p>

        <div className="hero-actions">
          <a href="https://www.linkedin.com/in/shubham-raj-62755628b" target="_blank" id="hero-linkedin"
            className="btn-primary">LinkedIn ↗</a>
          <a href="https://github.com/Shubham-Raj06" target="_blank" id="hero-github" className="btn-outline">GitHub ↗</a>
          <a href="Founders_office.pdf" download id="hero-resume" className="btn-outline">Resume ↓</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-avatar-block">
          <img src="shubham raj photo .JPG" alt="Shubham Raj" className="hero-avatar-img" />
          <div className="avatar-shadow-block"></div>
        </div>

        <div className="stat-cards">
          <div className="stat-card" style={{ "--delay": "0s" }}>
            <span className="stat-num">10K+</span>
            <span className="stat-lbl">LinkedIn Followers</span>
          </div>
          <div className="stat-card" style={{ "--delay": "0.1s" }}>
            <span className="stat-num">30+</span>
            <span className="stat-lbl">Roles &amp; Orgs</span>
          </div>
          <div className="stat-card" style={{ "--delay": "0.2s" }}>
            <span className="stat-num">TEDx</span>
            <span className="stat-lbl">Speaker</span>
          </div>
          <div className="stat-card" style={{ "--delay": "0.3s" }}>
            <span className="stat-num">200K+</span>
            <span className="stat-lbl">People Impacted</span>
          </div>
        </div>
      </div>

    </div>

    <div className="hero-marquee-wrap">
      <div className="hero-marquee">
        <span>TEDx Speaker</span><span className="sep">✦</span>
        <span>Lead Engineer</span><span className="sep">✦</span>
        <span>Google DevGroups Mentor</span><span className="sep">✦</span>
        <span>IIT Delhi Ambassador</span><span className="sep">✦</span>
        <span>IIT Bombay Ambassador</span><span className="sep">✦</span>
        <span>Product Builder</span><span className="sep">✦</span>
        <span>Hackathon Judge</span><span className="sep">✦</span>
        <span>Problem Solver</span><span className="sep">✦</span>
        <span>TEDx Speaker</span><span className="sep">✦</span>
        <span>Lead Engineer</span><span className="sep">✦</span>
        <span>Google DevGroups Mentor</span><span className="sep">✦</span>
        <span>IIT Delhi Ambassador</span><span className="sep">✦</span>
        <span>IIT Bombay Ambassador</span><span className="sep">✦</span>
        <span>Product Builder</span><span className="sep">✦</span>
        <span>Hackathon Judge</span><span className="sep">✦</span>
        <span>Problem Solver</span><span className="sep">✦</span>
      </div>
    </div>
  </section>

  {/*  ===================== ABOUT =====================  */}
  <section id="about">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// THE DEVELOPER-OPERATOR HYBRID</span>
        <h2 className="section-title">Building the code. Driving the <span className="accent-underline">scale.</span></h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I thrive in dynamic, high-stakes environments. I realized early on that a highly scalable architecture is
            the backbone of any massive business. I operate as a true hybrid—a deep technical engineer and a growth
            strategist. First, I architect robust backends to solve hard engineering problems—whether it’s fixing
            latency issues in media streaming or preventing crashes during high-traffic spikes. Then, I build the
            marketing engines and operations to scale the product to thousands of users.
          </p>
          <p>
            <strong>The Tech Builder:</strong> <strong>Problem:</strong> Handling concurrent high-traffic loads and
            system bottlenecks. <strong>Solution:</strong> Architecting CDN-backed full-stack applications with React
            Native and Node.js. From shipping <strong>MicroKahani</strong>'s streaming backend to configuring DevOps
            pipelines, I build for scale, speed, and resilience.
          </p>
          <p>
            <strong>The Growth &amp; Ops Engine:</strong> <strong>Execution:</strong> The best technology requires elite
            distribution. I scaled <strong>CampusMart</strong> to profitability on Day 1, led cross-functional agile
            teams at <strong>Unstop</strong>, and inspired over 200,000+ people through community leadership and public
            speaking.
          </p>

          <div className="about-tags">
            <span>📍 Delhi, India</span>
            <span>🎓 B.Tech IT · MAIT · 2027</span>
            <span>🎙️ TEDx Speaker</span>
            <span>🚀 Tech &amp; Ops Hybrid</span>
            <span>📧 rajshubham556@gmail.com</span>
            <span>📱 +91 8750471736</span>
          </div>
        </div>

        <div className="about-cards-col">
          <div className="about-highlight-card card-red">
            <div className="ahc-icon">🎙️</div>
            <div>
              <div className="ahc-title">TEDx Speaker</div>
              <div className="ahc-sub">TED Conferences · Oct 2024 – Present</div>
            </div>
          </div>
          <div className="about-highlight-card card-blue">
            <div className="ahc-icon">🏛️</div>
            <div>
              <div className="ahc-title">IIT Delhi &amp; IIT Bombay</div>
              <div className="ahc-sub">Campus Ambassador at both IITs</div>
            </div>
          </div>
          <div className="about-highlight-card card-yellow">
            <div className="ahc-icon">🏆</div>
            <div>
              <div className="ahc-title">Smart India Hackathon</div>
              <div className="ahc-sub">Finalist · Entrepreneur of Year · MAIT</div>
            </div>
          </div>
          <div className="about-highlight-card card-green">
            <div className="ahc-icon">💻</div>
            <div>
              <div className="ahc-title">Google Developer Groups</div>
              <div className="ahc-sub">DevOps Mentor · MAIT · Mar 2025–Present</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  ===================== MAJOR EXPERIENCE (RESUME HIGHLIGHTS) =====================  */}
  <section id="experience">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// THE HYBRID IN ACTION</span>
        <h2 className="section-title">Major Resume <span className="accent-underline">Experience.</span></h2>
      </div>

      <div className="exp-list">

        {/*  MicroKahani (Tech Focus)  */}
        <div className="exp-item reveal">
          <div className="exp-badge badge-yellow">2025 → 2026</div>
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">Founding Engineer</div>
                <div className="exp-company">MicroKahani · microkahani.com</div>
                <div className="exp-meta">Remote · Dec 2025 – Apr 2026</div>
              </div>
              <div className="exp-emoji">🎬</div>
            </div>
            <ul className="exp-bullets">
              <li><strong>Tech Problem:</strong> Video streaming suffered from high buffering and latency under heavy
                load.</li>
              <li><strong>Tech Solution:</strong> Architected a robust media delivery pipeline and scalable streaming
                backend using Node.js, optimizing video chunking to achieve sub-second load times.</li>
              <li><strong>Non-Tech Impact:</strong> Directed the founding team to optimize retention loops and launch
                GTM campaigns, successfully scaling the platform to <strong>5,000+ active users</strong>.</li>
            </ul>
            <div className="exp-stack">
              <span>React Native</span><span>Node.js</span><span>MongoDB</span><span>Firebase</span>
            </div>
          </div>
        </div>

        {/*  Careerwill (Product Manager - Scaling & Maintenance)  */}
        <div className="exp-item reveal">
          <div className="exp-badge badge-blue">2024 → Present</div>
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">Product Manager &amp; Tech Lead (App Stability &amp; Scaling)</div>
                <div className="exp-company">Careerwill</div>
                <div className="exp-meta">Remote · Mar 2024 – Present</div>
              </div>
              <div className="exp-emoji">📱</div>
            </div>
            <ul className="exp-bullets">
              <li><strong>Tech Problem:</strong> The app faced a 3.5% production crash rate and backend server
                bottlenecks during live video lectures with <strong>150K+ concurrent students</strong>.</li>
              <li><strong>Tech Solution:</strong> Implemented automated crash monitoring (Firebase/Sentry) and optimized
                CDN caching layers, slashing crash rates to <strong>&lt;0.08%</strong> and achieving 99.9% streaming
                uptime.</li>
              <li><strong>Non-Tech Impact:</strong> Managed cross-functional agile sprints with 15+ developers, QA
                testers, and content managers to ship critical features on strict deadlines.</li>
            </ul>
            <div className="exp-stack">
              <span>Product Management</span><span>App Scaling</span><span>Agile &amp; Scrum</span><span>CDN
                Optimization</span><span>System Stability</span>
            </div>
          </div>
        </div>

        {/*  Unstop (Ops Focus)  */}
        <div className="exp-item reveal">
          <div className="exp-badge badge-purple">2025</div>
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">Product Operations &amp; Delivery Lead</div>
                <div className="exp-company">Unstop</div>
                <div className="exp-meta">Offline · Jul 2025 – Dec 2025</div>
              </div>
              <div className="exp-emoji">🚀</div>
            </div>
            <ul className="exp-bullets">
              <li>Led cross-functional teams of developers, designers, and marketers to build and ship high-impact
                student engagement features.</li>
              <li>Standardized developer-design handoff playbooks, reducing sprint delays by <strong>15%</strong> and
                increasing overall release efficiency by <strong>30%</strong>.</li>
              <li>Built KPI dashboards to track product performance, ensuring zero-defect deployments during peak
                high-traffic student hackathons.</li>
            </ul>
            <div className="exp-stack">
              <span>Agile</span><span>Product Ops</span><span>KPI Dashboards</span><span>Sprint Planning</span>
            </div>
          </div>
        </div>

        {/*  LawSikho (Ops Focus)  */}
        <div className="exp-item reveal">
          <div className="exp-badge badge-red">2024 → 2025</div>
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">Operations &amp; Strategy Lead</div>
                <div className="exp-company">LawSikho</div>
                <div className="exp-meta">Remote · Jul 2024 – Jun 2025</div>
              </div>
              <div className="exp-emoji">⚖️</div>
            </div>
            <ul className="exp-bullets">
              <li><strong>Tech Problem:</strong> Manual student onboarding caused severe data leaks and operational
                delays.</li>
              <li><strong>Tech Solution:</strong> Engineered automated CRM data pipelines and system workflows, reducing
                manual operations overhead by <strong>15%</strong>.</li>
              <li><strong>Non-Tech Impact:</strong> Established SLA standards for mentor assignments, driving a
                <strong>100% on-time delivery rate</strong> using data-driven insights (Power BI).
              </li>
            </ul>
            <div className="exp-stack">
              <span>CRM Automation</span><span>SOP Design</span><span>Power BI</span><span>Excel</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  ===================== MASTER TIMELINE =====================  */}
  <section id="master-timeline" style={{ background: "var(--bg-color)" }}>
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// THE MASTER TIMELINE</span>
        <h2 className="section-title">Speed of <span className="accent-underline">execution.</span></h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {/*  ================= 2026 =================  */}
        <div className="timeline-item reveal">
          <div className="timeline-dot" style={{ background: "var(--blue)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">April 2026</div>
            <h3 className="timeline-role">Judged at IIT Delhi</h3>
            <p className="timeline-desc"><strong>Speaking &amp; Judging:</strong> Evaluated the final round of the B-Plan
              Challenge at IIT Delhi; judged business models, tech feasibility, and GTM strategies. (4,633 impressions
              on LinkedIn)</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="timeline-dot" style={{ background: "var(--purple)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">April 2026</div>
            <h3 className="timeline-role">Launched Intern-Go AI</h3>
            <p className="timeline-desc"><strong>Tech Launch:</strong> Built, shipped, and launched an AI-powered
              application to automate internship sourcing to the Google Play Store.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="timeline-dot" style={{ background: "var(--blue)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">March 2026</div>
            <h3 className="timeline-role">Panelist on Gen AI Education</h3>
            <p className="timeline-desc"><strong>Speaking:</strong> Debated GenAI integration in education with senior
              academics as the youngest panelist on stage at MAIT's International Research Awards. (181 likes, 4,397
              impressions)</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="timeline-dot" style={{ background: "var(--blue)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">March 2026</div>
            <h3 className="timeline-role">AI Panelist at Bennett University</h3>
            <p className="timeline-desc"><strong>Speaking:</strong> Advised on AI strategy and product adoption as an
              industry panelist at Bennett University's INNOVERSE Manthan '26.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="timeline-dot" style={{ background: "var(--purple)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">February 2026</div>
            <h3 className="timeline-role">Founded &amp; Scaled CampusMart</h3>
            <p className="timeline-desc"><strong>Startup Launch:</strong> Coded, launched, and marketed CampusMart,
              onboarding 1,000+ students in 24 hours and achieving profitability on Day 1. (100 likes, 5,125
              impressions)</p>
          </div>
        </div>

        {showMoreTimeline && (<>
          <div className="timeline-item reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="timeline-dot" style={{ background: "var(--blue)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">January 2026</div>
            <h3 className="timeline-role">Spoke at Deep AI Summit 2.0</h3>
            <p className="timeline-desc"><strong>Speaking:</strong> Presented on ethical AI adoption, LLM integrations, and
              product development strategy at EmergeX (NIET Greater Noida).</p>
          </div>
        </div>

        {/*  ================= 2025 =================  */}
        <div className="timeline-item reveal">
          <div className="timeline-dot" style={{ background: "var(--yellow)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">December 2025</div>
            <h3 className="timeline-role">Founding Engineer &amp; CMO</h3>
            <p className="timeline-desc"><strong>Work Experience:</strong> Joined MicroKahani to build the streaming
              platform, and took over as CMO at StylCop to scale user acquisition and marketing pipelines.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="timeline-dot" style={{ background: "var(--purple)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">November 2025</div>
            <h3 className="timeline-role">Launched StylCop Web Platform</h3>
            <p className="timeline-desc"><strong>Tech Launch:</strong> Architected and shipped StylCop's web platform,
              driving digital traffic and initial sales. (944 impressions, 20 likes)</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="timeline-dot" style={{ background: "var(--blue)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">October 2025</div>
            <h3 className="timeline-role">Career Strategy Speaker</h3>
            <p className="timeline-desc"><strong>Speaking:</strong> Led a masterclass on career execution and startup
              building for aspiring tech professionals.</p>
          </div>
        </div>

        <div className="timeline-item reveal">
          <div className="timeline-dot" style={{ background: "var(--yellow)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">July 2025</div>
            <h3 className="timeline-role">Zeber &amp; Unstop Leadership</h3>
            <p className="timeline-desc"><strong>Work Experience:</strong> Appointed CEO at Zeber and Product Operations
              Lead at Unstop, managing engineering sprints, design workflows, and stakeholder alignment.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="timeline-dot" style={{ background: "var(--yellow)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">March 2025</div>
            <h3 className="timeline-role">DevOps Mentor at GDG</h3>
            <p className="timeline-desc"><strong>Work Experience:</strong> Appointed DevOps Mentor for the official Google
              Developer Group community at MAIT, teaching CI/CD, Docker, and cloud deployments.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="timeline-dot" style={{ background: "var(--yellow)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">February 2025</div>
            <h3 className="timeline-role">Founded PYICE</h3>
            <p className="timeline-desc"><strong>Work Experience:</strong> Conceived, launched, and grew PYICE, building the
              core product and managing the operations team.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="timeline-dot" style={{ background: "var(--yellow)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">January 2025</div>
            <h3 className="timeline-role">Product Manager at Careerwill</h3>
            <p className="timeline-desc"><strong>Work Experience:</strong> Promoted to lead EdTech product releases,
              managing engineering sprints, stability optimizations, and release cycles to scale user capacity.</p>
          </div>
        </div>

        {/*  ================= 2024 =================  */}
        <div className="timeline-item reveal">
          <div className="timeline-dot" style={{ background: "var(--blue)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">October 2024</div>
            <h3 className="timeline-role">TEDx Speaker</h3>
            <p className="timeline-desc"><strong>Speaking:</strong> Invited to speak at TED Conferences, sharing insights on
              entrepreneurship, AI, and execution velocity.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="timeline-dot" style={{ background: "var(--yellow)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">September 2024</div>
            <h3 className="timeline-role">President of Geek Room MAIT</h3>
            <p className="timeline-desc"><strong>Work Experience:</strong> Elected Chapter President; led a team of 50+
              members to organize hackathons, coding contests, and bootcamps.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="timeline-dot" style={{ background: "var(--yellow)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">July 2024</div>
            <h3 className="timeline-role">Ops Strategy &amp; E-Cell Ambassador</h3>
            <p className="timeline-desc"><strong>Work Experience:</strong> Joined LawSikho to build operations playbooks,
              and E-Cell IIT Bombay to promote entrepreneurship.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="timeline-dot" style={{ background: "var(--yellow)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">March 2024</div>
            <h3 className="timeline-role">Tech Lead &amp; Marketing Head</h3>
            <p className="timeline-desc"><strong>Work Experience:</strong> Balanced technical architecture as Tech Lead at
              Careerwill and business growth as Marketing Head at Hellosearch.</p>
          </div>
        </div>

        {/*  ================= 2023 =================  */}
        <div className="timeline-item reveal">
          <div className="timeline-dot" style={{ background: "var(--yellow)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">October 2023</div>
            <h3 className="timeline-role">Project Manager at Teachnook</h3>
            <p className="timeline-desc"><strong>Work Experience:</strong> Managed student cohorts and coordinated
              recruitment campaigns for EdTech programs.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="timeline-dot" style={{ background: "var(--yellow)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">September 2023</div>
            <h3 className="timeline-role">Entered MAIT (IT)</h3>
            <p className="timeline-desc"><strong>Milestone:</strong> Began B.Tech in Information Technology, focusing on
              system design and software engineering.</p>
          </div>
        </div>

        <div className="timeline-item reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="timeline-dot" style={{ background: "var(--red)" }}></div>
          <div className="timeline-content">
            <div className="timeline-year">August 2023</div>
            <h3 className="timeline-role">Founded Startup Sphere</h3>
            <p className="timeline-desc"><strong>Work Experience &amp; Award:</strong> Launched Startup Sphere, building the
              online community to 10,000+ members and winning 'Entrepreneur of the Year' at MAIT.</p>
          </div>
        </div>
          </>)}
        </div>
        
        <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "40px" }}>
          <button 
            onClick={() => setShowMoreTimeline(!showMoreTimeline)}
            style={{ cursor: "pointer", padding: "12px 24px", fontWeight: "800", border: "2px solid var(--black)", background: "var(--bg-color)", color: "var(--black)", boxShadow: "4px 4px 0 var(--black)", transition: "all 0.2s", fontFamily: "var(--font-mono)" }}>
            {showMoreTimeline ? "↑ SHOW LESS" : "↓ SHOW MORE"}
          </button>
        </div>

        {/* Additional roles row (kept at bottom of timeline) */}
      <div className="extra-roles-row">
        <div className="extra-role-chip">📱 BASE — Founder, Android Dev (Sep 2023–Present)</div>
        <div className="extra-role-chip">🤝 Coencers — Co-Founder &amp; Mentor (May 2025–Present)</div>
        <div className="extra-role-chip">📡 Tech Vision Alliance — PR Head (Jun 2024–Present)</div>
        <div className="extra-role-chip">🎓 MAIT Alumni Assoc — Sponsorship Head (May 2024–Present)</div>
        <div className="extra-role-chip">🌍 Young Leaders Global — BDM &amp; Startup Mentor (2024)</div>
        <div className="extra-role-chip">🏢 15FORTEEN — Managing Director (Jul–Dec 2024)</div>
        <div className="extra-role-chip">💼 TheDigitalRooms — Co-Founder (Mar–Jul 2024)</div>
        <div className="extra-role-chip">🌱 NayePankh Foundation — HR &amp; Marketing (NGO · 2022)</div>
      </div>

    </div>
  </section>

  {/*  ===================== PROJECTS =====================  */}
  <section id="projects">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// WHAT I'VE BUILT</span>
        <h2 className="section-title">Selected <span className="accent-underline">Projects.</span></h2>
      </div>

      <div className="projects-grid">

        {/*  Project: ZEBER AI  */}
        <div className="project-card pc-blue reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            01 — 2023</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://zeber.in/" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>ZEBER AI ↗</a>
          </h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>AI Workflow &
            Automation Startup</div>
          <p className="pc-desc" style={{ flex: "1" }}>Democratizing AI technology by providing accessible workflow automation,
            CRM, sales pipelines, and chatbot solutions for businesses. Engineered scalable full-stack architectures.
          </p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Live Automation Solutions ·
              Scalable Infrastructure</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>AI</span><span>Automation</span><span>CRM</span><span>Node.js</span>
            </div>
          </div>
        </div>

        {/*  Project: CAMPUSMART  */}
        <div className="project-card pc-red reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            02 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://www.campusmart.store/" target="_blank"
              style={{ color: "inherit", textDecoration: "none" }}>CAMPUSMART ↗</a></h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Founder · Live
            E-Commerce App</div>
          <p className="pc-desc" style={{ flex: "1" }}>Founded and shipped an end-to-end e-commerce marketplace for college
            students. Engineered real-time NodeJS/MongoDB backend for synchronized checkout.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: 2.5K+ Users · 1K+
              Transactions · 3 Colleges</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Next.js</span><span>Node.js</span><span>Redis</span>
            </div>
          </div>
        </div>

        {/*  Project: INTERN-GO AI  */}
        <div className="project-card pc-green reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            03 — 2026</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://intern-go.com/" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>INTERN-GO AI
              ↗</a></h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>AI Internship
            Sourcer</div>
          <p className="pc-desc" style={{ flex: "1" }}>Built, shipped, and launched an AI-powered application to automate
            internship sourcing directly to the Google Play Store.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Live on Google Play</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>AI</span><span>React Native</span><span>Full-Stack</span>
            </div>
          </div>
        </div>

        {/*  Project: COLLEGE PAGLU  */}
        <div className="project-card pc-yellow reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            04 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://collegepaglu.com/" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>COLLEGE
              PAGLU ↗</a></h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Advanced Campus
            Super App</div>
          <p className="pc-desc" style={{ flex: "1" }}>Advanced college-focused super app combining social community feeds,
            assignment printing requests, and food/snacks delivery. Handled complex microservices routing.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Live Product · Unified
              Architecture</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Super App</span><span>Full-Stack</span><span>UX/UI</span>
            </div>
          </div>
        </div>

        {/*  Project: PYICE  */}
        <div className="project-card pc-purple reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            05 — 2023</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://pyice.com/" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>PYICE ↗</a></h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Data Processing
            Engine</div>
          <p className="pc-desc" style={{ flex: "1" }}>Conceived, launched, and grew PYICE. Built the core product and scaled the
            operations team from the ground up for massive data ingestion.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: End-to-End Product Lead
            </div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Startup</span><span>Data Eng</span><span>NLP</span>
            </div>
          </div>
        </div>

        {/*  Project: EDUVERSE  */}
        <div className="project-card pc-blue reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            06 — 2023</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://metashala-five.vercel.app/dashboard" target="_blank"
              style={{ color: "inherit", textDecoration: "none" }}>EDUVERSE ↗</a></h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Immersive
            Virtual Classroom</div>
          <p className="pc-desc" style={{ flex: "1" }}>A revolutionary EdTech platform equipped with computer vision and
            AI-powered attendance tracking for seamless operations.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Funded Project · High
              Engagement</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>EdTech</span><span>Computer Vision</span><span>Python</span>
            </div>
          </div>
        </div>

        {/*  Project: STYLCOP  */}
        {showMoreProjects && (<>
          <div className="project-card pc-red reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            07 — 2023</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://www.stylcop.com/" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>STYLCOP
              ↗</a></h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Web Platform &
            GTM</div>
          <p className="pc-desc" style={{ flex: "1" }}>Architected and shipped StylCop's web platform. Transitioned into a CMO
            role to scale user acquisition and marketing pipelines.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Launched & Scaled</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Web Dev</span><span>GTM Strategy</span><span>Growth</span>
            </div>
          </div>
        </div>

        {/*  Project: CODE SPIRIT  */}
        <div className="project-card pc-green reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            08 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://codespirite.com/" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>CODE SPIRIT
              ↗</a></h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Developer
            Community Hub</div>
          <p className="pc-desc" style={{ flex: "1" }}>Spearheaded a developer community focused on open-source, hackathons, and
            elite engineering. Hosted large scale challenges and workshops.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: 11K+ Members · Live
              Community</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Community Building</span><span>Workshops</span><span>Open Source</span>
            </div>
          </div>
        </div>

        {/*  Project: SANGRAKSHAN  */}
        <div className="project-card pc-yellow reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            09 — 2023</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>SANGRAKSHAN</h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>AI + VR Disaster
            Response Training</div>
          <p className="pc-desc" style={{ flex: "1" }}>Production-grade training platform for India's National Disaster Response
            Force. Started as a Smart India Hackathon winner—backed by ₹2.7M+ government funding and deployed in real
            NDRF environments. This is the project I'm most proud of: an idea on a whiteboard that now trains people who
            save lives.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: ₹2.7M Funded · NDRF Deployed
              · 40% Faster Training Setup</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Node.js</span><span>Kafka</span><span>Redis</span><span>PostgreSQL</span><span>VR</span><span>AI/ML</span><span>Microservices</span>
            </div>
          </div>
        </div>

        {/*  Project: MICROKAHANI  */}
        <div className="project-card pc-purple reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            10 — 2025</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://microkahani.com/" target="_blank" style={{ color: "inherit", textDecoration: "none" }}>MICROKAHANI
              ↗</a></h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Distributed OTT
            Micro-Drama Platform</div>
          <p className="pc-desc" style={{ flex: "1" }}>Built and scaled the technical backbone of a micro-drama streaming
            platform for Digital Kalakaar. HLS adaptive streaming, high-traffic burst handling, creator tooling, and
            analytics systems.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: 15M+ Followers · 200M+
              Monthly Views</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Node.js</span><span>Redis</span><span>HLS</span><span>TypeScript</span><span>Analytics</span>
            </div>
          </div>
        </div>

        {/*  Project: ACCESSWAY  */}
        <div className="project-card pc-blue reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            11 — 2025</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>ACCESSWAY</h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>AI-driven
            Accessibility Analytics</div>
          <p className="pc-desc" style={{ flex: "1" }}>Designed accessibility scoring model with crowdsourced validation
            datasets. Improved navigation reliability for differently-abled through data-driven optimization and AR
            integration.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Global Best M-Gov Award 2025
              – Bronze · UAE VP Honored</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Python</span><span>Data Pipelines</span><span>AR Integration</span>
            </div>
          </div>
        </div>

        {/*  Project: HEAL-O-VERSE  */}
        <div className="project-card pc-red reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            12 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>HEAL-O-VERSE
          </h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Metaverse Doctor
            Consultancy</div>
          <p className="pc-desc" style={{ flex: "1" }}>VR platform for immersive doctor consultations and intern training.
            MediaPipe-powered physiotherapy posture tracking, metaverse waiting rooms, and multi-language support.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: 1st Runner-Up · Hack4Purpose
              IIT Delhi</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Unity</span><span>MERN</span><span>MediaPipe</span><span>NLP</span><span>Firebase</span>
            </div>
          </div>
        </div>

        {/*  Project: PATHSHALA  */}
        <div className="project-card pc-green reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            13 — 2025</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>PATHSHALA</h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>XR Learning
            Mobile App</div>
          <p className="pc-desc" style={{ flex: "1" }}>Smartphone-first XR education for inclusive learners. Offline AI tutors
            via Gemini, headset-free AR STEM labs, neuro-inclusive UI with dyslexic-friendly fonts and high contrast.
          </p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: 1st Prize · HackBMU 2025 ·
              500+ Teams</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Flutter</span><span>Unity</span><span>OpenXR</span><span>Gemini API</span><span>Firebase</span>
            </div>
          </div>
        </div>

        {/*  Project: NAV YUVA CHETNA  */}
        <div className="project-card pc-yellow reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            14 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>NAV YUVA CHETNA
          </h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Anti-Drug Abuse
            Metaverse</div>
          <p className="pc-desc" style={{ flex: "1" }}>Metaverse platform combating drug abuse through AR content blocking, VR
            decision-making games, AI humanoid counseling avatars, and Web3-powered anonymous support chat.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Top 10 · Haryana Police
              Hackathon 2024</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Unity</span><span>Flutter</span><span>Ethereum</span><span>Solidity</span><span>Firebase</span>
            </div>
          </div>
        </div>

        {/*  Project: CRYPTXCHANGE  */}
        <div className="project-card pc-purple reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            15 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>CRYPTXCHANGE
          </h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>DeFi Platform +
            Metaverse Hub</div>
          <p className="pc-desc" style={{ flex: "1" }}>Decentralized crypto exchange with AI fraud detection, smart contract
            token swaps, AI-driven investment insights, and a beginner-friendly metaverse EdTech learning hub.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Top 3 / 5000+ · Scale+91
              Fintech 2024</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Solidity</span><span>Web3.js</span><span>Flutter</span><span>TensorFlow</span><span>MongoDB</span>
            </div>
          </div>
        </div>

        {/*  Project: BHARATVERSE  */}
        <div className="project-card pc-blue reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            16 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>BHARATVERSE</h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Cultural
            Heritage Metaverse</div>
          <p className="pc-desc" style={{ flex: "1" }}>Virtual tours of Indian heritage sites with AI companion \"Disha\" for
            cultural insights, gamified eco-sustainability challenges, and customizable avatars in traditional attire.
          </p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Cultural Immersion · Apr
              2024</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Unreal Engine</span><span>Oculus SDK</span><span>ChatGPT
                API</span><span>MERN</span><span>Firebase</span>
            </div>
          </div>
        </div>

        {/*  Project: WAVEWISE  */}
        <div className="project-card pc-red reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            17 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://wave-wise.vercel.app/" target="_blank"
              style={{ color: "inherit", textDecoration: "none" }}>WAVEWISE ↗</a></h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Ocean Literacy
            Platform</div>
          <p className="pc-desc" style={{ flex: "1" }}>Gamified ocean conservation education with real-time multiplayer cleanup
            games, AI-powered sustainability tips assistant, and expert-led conservation webinars.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Live · wave-wise.vercel.app
            </div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>React.js</span><span>Three.js</span><span>Unity</span><span>Python</span><span>GPT-3</span>
            </div>
          </div>
        </div>

        {/*  Project: HERBAL-REET  */}
        <div className="project-card pc-green reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            18 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}><a
              href="https://herbal-reet.vercel.app/" target="_blank"
              style={{ color: "inherit", textDecoration: "none" }}>HERBAL-REET ↗</a></h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Ayurvedic
            Metaverse</div>
          <p className="pc-desc" style={{ flex: "1" }}>Explore 3D medicinal plants in metaverse with AI-guided botany, AR plant
            visualization, yoga sessions with real-time posture feedback, and gamified certifications.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Live ·
              herbal-reet.vercel.app</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Unity</span><span>Blender</span><span>MERN</span><span>Gemini LLM</span><span>Spark AR</span>
            </div>
          </div>
        </div>

        {/*  Project: VIDYALAYA  */}
        <div className="project-card pc-yellow reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            19 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>VIDYALAYA</h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Gamified EdTech
            Metaverse</div>
          <p className="pc-desc" style={{ flex: "1" }}>Metaverse EdTech platform with AR/VR classrooms, adaptive learning
            pathways, multiplayer quizzes, 3D virtual science labs, and cross-device compatibility.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Best All-Freshers Team ·
              BITBOX 4.0 JIIT</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Unity</span><span>Blender</span><span>MERN</span><span>Flutter</span><span>Gemini API</span>
            </div>
          </div>
        </div>

        {/*  Project: HERITAGÉSPHERE  */}
        <div className="project-card pc-purple reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            20 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>HERITAGÉSPHERE
          </h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Cultural
            Preservation Platform</div>
          <p className="pc-desc" style={{ flex: "1" }}>Metaverse platform for virtual heritage tours and artisan support.
            Blockchain rewards for eco-actions, AR historical overlays on monuments, and artisan marketplace.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Heritage Preservation · Dec
              2024</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Unreal Engine</span><span>Solidity</span><span>ARCore</span><span>MERN</span><span>MediaPipe</span>
            </div>
          </div>
        </div>

        {/*  Project: WISEWASTE  */}
        <div className="project-card pc-blue reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            21 — 2024</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>WISEWASTE</h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Circular Economy
            Platform</div>
          <p className="pc-desc" style={{ flex: "1" }}>Community-driven app to reduce waste through AR-guided composting
            tutorials, NGO partnership dashboards, and tokenized incentive rewards for eco-actions.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Sustainability · Nov 2024
            </div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Flutter</span><span>ARCore</span><span>Firebase</span><span>Solidity</span><span>Python</span>
            </div>
          </div>
        </div>

        {/*  Project: LOGIGREEN  */}
        <div className="project-card pc-red reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            22 — 2025</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>LOGIGREEN</h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Sustainable
            Logistics Platform</div>
          <p className="pc-desc" style={{ flex: "1" }}>AI-driven logistics optimization for eco-friendly packaging and route
            planning. AR-guided packaging simulations and sustainability certification system for businesses.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Green Logistics · Jan 2025
            </div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>React.js</span><span>Node.js</span><span>TensorFlow</span><span>ARCore</span><span>Solidity</span>
            </div>
          </div>
        </div>

        {/*  Project: SAARTHI  */}
        <div className="project-card pc-green reveal project-item"
          style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
          <div
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", fontWeight: "700", color: "#555", marginBottom: "10px" }}>
            23 — 2025</div>
          <h3 className="pc-name"
            style={{ fontSize: "1.8rem", fontWeight: "800", textTransform: "uppercase", marginBottom: "5px" }}>SAARTHI</h3>
          <div style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--accent)", marginBottom: "15px" }}>Offline-First
            EdTech</div>
          <p className="pc-desc" style={{ flex: "1" }}>Multilingual education app for underserved communities. Offline STEM
            courses, NGO-sponsored device donation program, and gamified regional content in local languages.</p>
          <div style={{ marginTop: "20px", paddingTop: "15px", borderTop: "2px solid rgba(0,0,0,0.1)" }}>
            <div style={{ fontWeight: "800", fontSize: "0.85rem", marginBottom: "10px" }}>IMPACT: Inclusive Education · Dec
              2025</div>
            <div className="pc-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span>Flutter</span><span>SQLite</span><span>GPT-3</span><span>Firebase</span><span>REST APIs</span>
            </div>
          </div>
        </div>
      
          </>)}
        </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button onClick={() => setShowMoreProjects(!showMoreProjects)} id="show-more-projects-btn" className="primary-btn reveal"
          style={{ cursor: "pointer", padding: "12px 24px", fontWeight: "800", border: "2px solid var(--black)", background: "var(--bg-color)", color: "var(--black)", boxShadow: "4px 4px 0 var(--black)", transition: "all 0.2s", fontFamily: "var(--font-mono)" }}>
          {showMoreProjects ? "↑ SHOW LESS" : "↓ SHOW MORE"}
        </button>
      </div>

    </div>
  </section>

  {/*  ===================== SKILLS =====================  */}
  <section id="skills">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// HARDTECH &amp; DISTRIBUTION TOOLKIT</span>
        <h2 className="section-title">Built to build. Built to <span className="accent-underline">scale.</span></h2>
      </div>

      <div className="skills-wrapper" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {/* 60% TECH CORE */}
        <div style={{ marginBottom: "32px" }}>
          <h3
            style={{ marginBottom: "20px", fontSize: "1.4rem", fontWeight: "800", borderBottom: "3px solid var(--black)", paddingBottom: "10px", display: "inline-block" }}>
            Tech &amp; Architecture Core <span
              style={{ fontSize: "1rem", fontWeight: "500", fontFamily: "var(--font-mono)", color: "#666", marginLeft: "10px" }}>//
              Code &amp; Infrastructure</span></h3>
          <div className="skills-grid" >
            <div className="skill-block sb-yellow reveal">
              <div className="sb-header">
                <span className="sb-icon">⚡</span>
                <span className="sb-title">Full-Stack Frontend</span>
              </div>
              <div className="sb-tags">
                <span>React.js</span><span>Next.js</span><span>React Native</span>
                <span>TypeScript</span><span>Tailwind CSS</span>
              </div>
            </div>

            <div className="skill-block sb-blue reveal" style={{ "--reveal-delay": "0.1s" }}>
              <div className="sb-header">
                <span className="sb-icon">🛠️</span>
                <span className="sb-title">Backend &amp; Infrastructure</span>
              </div>
              <div className="sb-tags">
                <span>Node.js</span><span>Express.js</span><span>REST APIs</span>
                <span>PostgreSQL</span><span>MongoDB</span><span>Firebase</span>
              </div>
            </div>

            <div className="skill-block sb-green reveal" style={{ "--reveal-delay": "0.2s" }}>
              <div className="sb-header">
                <span className="sb-icon">🤖</span>
                <span className="sb-title">AI &amp; Automation Engineering</span>
              </div>
              <div className="sb-tags">
                <span>Gemini API</span><span>OpenAI API</span><span>AI Scripting</span>
                <span>Inngest</span>
              </div>
            </div>
          </div>
        </div>

        {/*  40% SCALE ENGINE  */}
        <div>
          <h3
            style={{ marginBottom: "20px", fontSize: "1.4rem", fontWeight: "800", borderBottom: "3px solid var(--black)", paddingBottom: "10px", display: "inline-block" }}>
            Growth, Ops &amp; Sales Engine <span
              style={{ fontSize: "1rem", fontWeight: "500", fontFamily: "var(--font-mono)", color: "#666", marginLeft: "10px" }}>//
              Distribution &amp; Operations</span></h3>
          <div className="skills-grid" >
            <div className="skill-block sb-red reveal">
              <div className="sb-header">
                <span className="sb-icon">📊</span>
                <span className="sb-title">Data &amp; Revenue Analytics</span>
              </div>
              <div className="sb-tags">
                <span>Power BI</span><span>Tableau</span><span>Advanced Excel</span>
                <span>SQL</span><span>KPI Frameworks</span>
              </div>
            </div>

            <div className="skill-block sb-purple reveal" style={{ "--reveal-delay": "0.1s" }}>
              <div className="sb-header">
                <span className="sb-icon">🏗️</span>
                <span className="sb-title">Operations &amp; CRM Automation</span>
              </div>
              <div className="sb-tags">
                <span>Zapier</span><span>Make</span><span>Postman</span>
                <span>Linear</span><span>HubSpot</span>
              </div>
            </div>

            <div className="skill-block sb-orange reveal" style={{ "--reveal-delay": "0.2s" }}>
              <div className="sb-header">
                <span className="sb-icon">🎯</span>
                <span className="sb-title">Growth, Sales &amp; GTM Strategy</span>
              </div>
              <div className="sb-tags">
                <span>Startup Ops</span><span>Agile (CSM)</span>
                <span>Community Building</span><span>GTM Strategy</span>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  </section>

  {/*  ===================== ACHIEVEMENTS & AWARDS =====================  */}
  <section id="awards">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// RECOGNITION &amp; MILESTONES</span>
        <h2 className="section-title">Achievements &amp; <span className="accent-underline">Awards.</span></h2>
      </div>

      <div className="speaking-grid">

        {/*  Item 1: TEDx Speaker  */}
        <div className="speaking-item reveal">
          <div className="si-icon">🎙️</div>
          <div>
            <div className="si-venue">TED Conferences · Oct 2024</div>
            <div className="si-title">Keynote TEDx Speaker</div>
            <div className="si-detail">Delivered a keynote talk on the intersection of artificial intelligence, rapid
              startup execution, and builder speed.</div>
          </div>
        </div>

        {/*  Item 2: Smart India Hackathon  */}
        <div className="speaking-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="si-icon">🏆</div>
          <div>
            <div className="si-venue">Ministry of Ayush · SIH 2023</div>
            <div className="si-title">Smart India Hackathon Finalist</div>
            <div className="si-detail">Recognized among the top teams in India for engineering innovative digital solutions
              for government ministries.</div>
          </div>
        </div>

        {/*  Item 3: Entrepreneur of the Year  */}
        <div className="speaking-item reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="si-icon">🥇</div>
          <div>
            <div className="si-venue">MAIT Startup Ecosystem · 2023</div>
            <div className="si-title">Entrepreneur of the Year</div>
            <div className="si-detail">Awarded top honors for founding Startup Sphere, growing it to 10K+ members, and
              mentoring 20+ student startups.</div>
          </div>
        </div>

        {/*  Item 4: Eduverse Project Award  */}
        <div className="speaking-item reveal">
          <div className="si-icon">💰</div>
          <div>
            <div className="si-venue">MAIT / Microsoft Evaluators</div>
            <div className="si-title">₹10,000 Special Innovation Grant</div>
            <div className="si-detail">Awarded a monetary grant for developing a virtual Eduverse classroom equipped with
              AI-powered attendance tracking.</div>
          </div>
        </div>

        {/*  Item 5: Keynote Guest Speaker  */}
        <div className="speaking-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="si-icon">🏫</div>
          <div>
            <div className="si-venue">IIT Delhi, DPSG, Christ Univ.</div>
            <div className="si-title">Keynote Guest Speaker</div>
            <div className="si-detail">Invited to speak at elite institutions on time management, career velocity, and
              entrepreneurial execution.</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  ===================== COMMUNITIES & LEADERSHIP =====================  */}
  <section id="communities" style={{ background: "var(--bg-color)" }}>
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// COMMUNITY &amp; IMPACT</span>
        <h2 className="section-title">Communities &amp; <span className="accent-underline">Leadership.</span></h2>
      </div>

      <div className="about-cards-col"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", display: "grid", gap: "20px" }}>
        <div className="about-highlight-card card-blue reveal">
          <div className="ahc-icon">🏛️</div>
          <div>
            <div className="ahc-title">Startup Sphere</div>
            <div className="ahc-sub">President</div>
            <p style={{ fontSize: "0.9rem", marginTop: "5px" }}>Led the college society, scaling the community to 10,000+
              members and mentoring multiple student startups.</p>
          </div>
        </div>

        <div className="about-highlight-card card-red reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="ahc-icon">🚀</div>
          <div>
            <div className="ahc-title">Startup Club India</div>
            <div className="ahc-sub">Community Founder / Lead</div>
            <p style={{ fontSize: "0.9rem", marginTop: "5px" }}>Built a thriving network uniting founders, builders, and
              operators across India.</p>
          </div>
        </div>

        <div className="about-highlight-card card-green reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="ahc-icon">💻</div>
          <div>
            <div className="ahc-title"><a href="https://codespirite.com/" target="_blank"
                style={{ color: "inherit", textDecoration: "none" }}>Code Spirit Community ↗</a></div>
            <div className="ahc-sub">Founder / Lead</div>
            <p style={{ fontSize: "0.9rem", marginTop: "5px" }}>Spearheaded a developer community focused on open-source,
              hackathons, and elite engineering.</p>
          </div>
        </div>

        <div className="about-highlight-card card-yellow reveal" style={{ "--reveal-delay": "0.3s" }}>
          <div className="ahc-icon">🌐</div>
          <div>
            <div className="ahc-title">Google Developer Groups</div>
            <div className="ahc-sub">DevOps Mentor</div>
            <p style={{ fontSize: "0.9rem", marginTop: "5px" }}>Mentored engineering students in cloud deployment, CI/CD, and
              system architecture.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  ===================== SPEAKING & JUDGING ENGAGEMENTS =====================  */}
  <section id="speaking-engagements">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// THOUGHT LEADERSHIP &amp; MENTORSHIP</span>
        <h2 className="section-title">Speaking &amp; Judging <span className="accent-underline">Engagements.</span></h2>
      </div>

      <div className="speaking-grid">

        {/*  IIT Delhi BECON  */}
        <div className="speaking-item reveal">
          <div className="si-icon">🧠</div>
          <div>
            <div className="si-venue">IIT Delhi · BECON</div>
            <div className="si-title">Judge: B-Plan CEO Challenge</div>
            <div className="si-detail">Evaluated sharp startup ideas and business models from top student founders in the
              final round of the CEO Challenge.</div>
          </div>
        </div>

        {/*  BVCOE Delhi  */}
        <div className="speaking-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="si-icon">📊</div>
          <div>
            <div className="si-venue">BVCOE Delhi · IQ Elevate’25</div>
            <div className="si-title">Judge: Flagship Ideathon</div>
            <div className="si-detail">Evaluated groundbreaking ideas ranging from fintech innovations to
              sustainability-driven startups.</div>
          </div>
        </div>

        {/*  Gargi College  */}
        <div className="speaking-item reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="si-icon">⚖️</div>
          <div>
            <div className="si-venue">Gargi College (DU) · BizGrow</div>
            <div className="si-title">Startup Pitch Judge</div>
            <div className="si-detail">Evaluated startup pitches, business models, and founder execution mindsets.</div>
          </div>
        </div>

        {/*  Int. Awards  */}
        <div className="speaking-item reveal">
          <div className="si-icon">🌟</div>
          <div>
            <div className="si-venue">Int. Research &amp; Innovation Awards 2026</div>
            <div className="si-title">Panelist: Education in Gen AI Age</div>
            <div className="si-detail">The youngest panelist on stage, shaping conversations around ethical and scalable AI
              adoption.</div>
          </div>
        </div>

        {/*  Deep AI Summit  */}
        <div className="speaking-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="si-icon">🤖</div>
          <div>
            <div className="si-venue">NIET Greater Noida · Deep AI Summit 2.0</div>
            <div className="si-title">Global AI Speaker &amp; Panelist</div>
            <div className="si-detail">Explored the rapid evolution of Generative AI, real-world adoption gaps, and the
              future of technology.</div>
          </div>
        </div>

        {/*  Bennett University  */}
        <div className="speaking-item reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="si-icon">🎙️</div>
          <div>
            <div className="si-venue">Bennett University · INNOVERSE ’26</div>
            <div className="si-title">Panelist: Future of AI &amp; Startups</div>
            <div className="si-detail">Joined thought leaders and industry experts to discuss AI-powered digital
              transformation and entrepreneurship.</div>
          </div>
        </div>

      </div>
    </div>
  </section>


  {/*  ===================== EXTRACURRICULARS & ATHLETICS =====================  */}
  <section id="extracurriculars" style={{ background: "var(--bg-color)" }}>
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// BEYOND THE CODE</span>
        <h2 className="section-title">Extracurriculars &amp; <span className="accent-underline">Athletics.</span></h2>
      </div>

      <div className="speaking-grid">

        {/*  Debate  */}
        <div className="speaking-item reveal">
          <div className="si-icon">🎙️</div>
          <div>
            <div className="si-venue">KVS National Championships</div>
            <div className="si-title">National Level Debate Champion</div>
            <div className="si-detail">Won the National Level Debate Championships, mastering articulation, persuasion, and
              public speaking.</div>
          </div>
        </div>

        {/*  Badminton  */}
        <div className="speaking-item reveal" style={{ "--reveal-delay": "0.1s" }}>
          <div className="si-icon">🏸</div>
          <div>
            <div className="si-venue">National Sports Meet</div>
            <div className="si-title">Badminton (National Level)</div>
            <div className="si-detail">Competed at the national level, showcasing elite agility, strategy, and high-pressure
              performance.</div>
          </div>
        </div>

        {/*  Athletics  */}
        <div className="speaking-item reveal" style={{ "--reveal-delay": "0.2s" }}>
          <div className="si-icon">🏃‍♂️</div>
          <div>
            <div className="si-venue">KV Delhi Cantt</div>
            <div className="si-title">Athletics (National Level)</div>
            <div className="si-detail">Represented KV Delhi at the national level in track and field events, proving
              physical endurance.</div>
          </div>
        </div>

        {/*  Football & Cricket  */}
        <div className="speaking-item reveal" style={{ "--reveal-delay": "0.3s" }}>
          <div className="si-icon">⚽</div>
          <div>
            <div className="si-venue">Regional Championships</div>
            <div className="si-title">Football &amp; Cricket (Regionals)</div>
            <div className="si-detail">Played competitively at the regional level in both football and cricket, thriving in
              team dynamics.</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  ===================== LINKEDIN SOCIAL PROOF =====================  */}
  <section id="linkedin-proof">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// LINKEDIN</span>
        <h2 className="section-title">Building in <span className="accent-underline">public.</span></h2>
      </div>

      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div className="linkedin-profile-card reveal">
          <div className="lpc-top">
            <img src="shubham raj photo .JPG" alt="Shubham Raj" className="lpc-avatar-img" />
            <div className="lpc-info">
              <div className="lpc-name">Shubham Raj</div>
              <div className="lpc-headline">Product Manager @ Careerwill · Founding Engineer MicroKahani · TEDx Speaker ·
                Developer-Operator Hybrid</div>
              <div className="lpc-location">📍 Delhi, India · Hybrid / Remote</div>
            </div>
          </div>
          <div className="lpc-stats">
            <div className="lpc-stat">
              <span className="lpc-stat-val">10,169</span>
              <span className="lpc-stat-lbl">Followers</span>
            </div>
            <div className="lpc-stat">
              <span className="lpc-stat-val">807</span>
              <span className="lpc-stat-lbl">Profile Views/week</span>
            </div>
            <div className="lpc-stat">
              <span className="lpc-stat-val">390</span>
              <span className="lpc-stat-lbl">Search Appearances/week</span>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/shubham-raj-62755628b" target="_blank" className="lpc-btn">
            View LinkedIn Profile ↗
          </a>
        </div>
      </div>
    </div>
  </section>

  {/*  ===================== TESTIMONIALS =====================  */}
  <section id="testimonials" style={{ background: "var(--black)", borderBottom: "3px solid var(--black)" }}>
    <div className="container">
      <div className="section-header">
        <span className="section-tag" style={{ color: "#888" }}>// WHAT PEOPLE SAY</span>
        <h2 className="section-title" style={{ color: "var(--white)" }}>Built on <span className="accent-underline">trust.</span></h2>
      </div>

      <div className="testimonials-grid">

        <div className="testimonial-card reveal">
          <div className="tcard-quote">“Working with Shubham Raj has been nothing short of an exhilarating experience. He’s
            a driven and visionary individual — truly a ‘crazy man with big ambitions’ in the best possible way. His
            dedication, work ethic, and unwavering support make him an incredible teammate and leader. Building two
            startups alongside him has been a journey filled with learning, growth, and a lot of fun. If you’re looking
            for someone who brings energy, clarity, and relentless execution to the table — Shubham is that person.”
          </div>
          <div className="tcard-author">
            <div className="tcard-avatar">SS</div>
            <div>
              <div className="tcard-name">Shubham Solanki</div>
              <div className="tcard-role">Founding Engineer @ MicroKahani · Full-Stack AI Developer</div>
              <div className="tcard-context">Worked together on the same team · Aug 2025</div>
            </div>
          </div>
        </div>

        <div className="testimonial-card card-light reveal" style={{ "--reveal-delay": "0.15s", background: "var(--yellow)" }}>
          <div className="tcard-quote">“A very dedicated and hardworking individual. Never loses motivation. Has excellent
            team handling skills and strong managerial calibre.”</div>
          <div className="tcard-author">
            <div className="tcard-avatar" style={{ background: "var(--black)", color: "var(--yellow)" }}>TR</div>
            <div>
              <div className="tcard-name">TUSHIKA RAWAT</div>
              <div className="tcard-role">YouTuber (10L+) · Founder @15forteen · Business Consultant</div>
              <div className="tcard-context">Managed Shubham directly · Sep 2024</div>
            </div>
          </div>
        </div>

        <div className="testimonial-card card-light reveal" style={{ "--reveal-delay": "0.3s", background: "var(--blue-light)" }}>
          <div className="tcard-quote">“From building communities to evaluating early-stage ideas — Shubham’s journey is
            evolving. The best teams he judged weren’t the ones with fanciest ideas, they were the ones who understood
            the problem deeply. That’s the lens he applies to everything.”</div>
          <div className="tcard-author">
            <div className="tcard-avatar" style={{ background: "var(--black)", color: "var(--white)" }}>IIT</div>
            <div>
              <div className="tcard-name">IIT Delhi Community</div>
              <div className="tcard-role">171 reactions · 4,633 LinkedIn impressions</div>
              <div className="tcard-context">BECON CEO Challenge Judge · 2026</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  ===================== EDUCATION & CERTS =====================  */}
  <section id="education">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// EDUCATION &amp; CERTS</span>
        <h2 className="section-title">Always <span className="accent-underline">learning.</span></h2>
      </div>

      <div className="edu-grid">
        <div className="edu-left-col">
          <div className="edu-card reveal">
            <div className="edu-emoji">🎓</div>
            <div className="edu-degree">Bachelor of Technology — Information Technology</div>
            <div className="edu-school">Maharaja Agrasen Institute of Technology (MAIT)</div>
            <div className="edu-period">Delhi, India · Sep 2023 – Present · Expected 2027</div>
            <div className="edu-awards">
              <span className="edu-award">🏆 Smart India Hackathon Finalist</span>
              <span className="edu-award">🥇 Entrepreneur of the Year · MAIT 2023</span>
              <span className="edu-award">🏅 Startup Sphere Founder · 10K+ Members</span>
            </div>
          </div>

          <div className="edu-card reveal" style={{ "--reveal-delay": "0.1s", background: "var(--blue-light)" }}>
            <div className="edu-emoji">🏫</div>
            <div className="edu-degree">High School Diploma — Computer Science</div>
            <div className="edu-school">Kendriya Vidyalaya No. 2 Delhi Cantt</div>
            <div className="edu-period">Delhi, India · Jun 2017 – Jun 2023 · 1st Division</div>
            <div className="edu-awards">
              <span className="edu-award">🏆 National Level Debate Champion</span>
              <span className="edu-award">🎽 National Level Athletics</span>
              <span className="edu-award">🌿 Regional: Badminton, Football, Cricket</span>
            </div>
          </div>
        </div>

        <div className="certs-card reveal" style={{ "--reveal-delay": "0.15s" }}>
          <div className="certs-title">Certifications</div>
          <div className="cert-list">
            <div className="cert-item">
              <span className="cert-ico">📜</span>
              <div>
                <div className="cert-name">Certified ScrumMaster (CSM)</div>
                <div className="cert-issuer">Scrum Alliance</div>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-ico">📜</span>
              <div>
                <div className="cert-name">Google Project Management Certificate</div>
                <div className="cert-issuer">Google / Coursera</div>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-ico">📜</span>
              <div>
                <div className="cert-name">Advanced Excel for Business Analytics</div>
                <div className="cert-issuer">Udemy</div>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-ico">📜</span>
              <div>
                <div className="cert-name">Data Visualization with Tableau</div>
                <div className="cert-issuer">Coursera</div>
              </div>
            </div>
            <div className="cert-item">
              <span className="cert-ico">📜</span>
              <div>
                <div className="cert-name">Fundamentals of Digital Marketing</div>
                <div className="cert-issuer">Google Digital Garage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  ===================== CONTACT =====================  */}
  <section id="contact">
    <div className="container">
      <div className="section-header centered">
        <span className="section-tag">// GET IN TOUCH</span>
        <h2 className="section-title">Let's build <span className="accent-underline">together.</span></h2>
        <p className="contact-sub">Whether it's a product, partnership, speaking invite, or just a good conversation — I'm
          always open.</p>
      </div>

      <div className="contact-grid">
        <a href="mailto:rajshubham556@gmail.com" className="contact-card cc-yellow" id="contact-email">
          <div className="cc-icon">✉️</div>
          <div className="cc-label">Email</div>
          <div className="cc-value">rajshubham556@gmail.com</div>
        </a>
        <a href="https://www.linkedin.com/in/shubham-raj-62755628b" target="_blank" className="contact-card cc-blue"
          id="contact-linkedin">
          <div className="cc-icon">💼</div>
          <div className="cc-label">LinkedIn</div>
          <div className="cc-value">shubham-raj-62755628b</div>
        </a>
        <a href="https://github.com/Shubham-Raj06" target="_blank" className="contact-card cc-red" id="contact-github">
          <div className="cc-icon">🐙</div>
          <div className="cc-label">GitHub</div>
          <div className="cc-value">Shubham-Raj06</div>
        </a>

      </div>

      <div className="brutalist-form-wrapper reveal">
        <form className="brutalist-form" action="https://formsubmit.co/rajshubham556@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New Lead from Portfolio Website!" />
            <input type="hidden" name="_captcha" value="false" />
          <div className="form-group">
            <label>YOUR NAME</label>
            <input type="text" name="name" placeholder="John Doe" required />
          </div>
          <div className="form-group">
            <label>YOUR EMAIL</label>
            <input type="email" name="email" placeholder="john@example.com" required />
          </div>
          <div className="form-group">
            <label>YOUR MESSAGE</label>
            <textarea name="message" placeholder="What are you building?" required></textarea>
          </div>
          <button type="submit" className="form-submit-btn">SEND MESSAGE &rarr;</button>
        </form>
      </div>

      <div className="contact-cta-row">
        <a href="Founders_office.pdf" download className="btn-primary btn-xl" id="contact-resume">Download Resume
          ↓</a>
      </div>
    </div>
  </section>

  {/*  ===================== FOOTER =====================  */}
  <footer>
    <div className="container footer-inner">
      <div className="footer-logo">SR<span>.</span></div>
      <div className="footer-text">
        Built with ♥ · Delhi, India · 2026
      </div>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/shubham-raj-62755628b" target="_blank">LinkedIn</a>
        <a href="https://github.com/Shubham-Raj06" target="_blank">GitHub</a>
        <a href="mailto:rajshubham556@gmail.com">Email</a>
      </div>
    </div>
  </footer>

  

    </div>
  );
}

export default App;

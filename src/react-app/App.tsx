import { useState } from "react";
import "./App.css";

const courses = [
  {
    number: "01",
    icon: "▦",
    category: "DIGITAL FOUNDATIONS",
    title: "IT Skills",
    subtitle: "Office applications & AI productivity",
    description:
      "Build practical skills in documents, spreadsheets, presentations, databases, and email—with an introduction to productivity and automation using artificial intelligence.",
    tags: ["Office applications", "AI productivity", "Practical skills"],
  },
  {
    number: "02",
    icon: "⌘",
    category: "STEM · FOR KIDS & BEGINNERS",
    title: "STEM Robotics",
    subtitle: "A journey from block coding to ROS",
    description:
      "Explore robotics through fun, interactive activities. Learners move from block-based coding to robotics concepts and ROS at a pace that suits them.",
    tags: ["Block coding", "Robotics", "STEM learning"],
  },
  {
    number: "03",
    icon: "✳",
    category: "EMERGING TECHNOLOGY",
    title: "Applied Artificial Intelligence",
    subtitle: "For business, development & digital transformation",
    description:
      "A hands-on introduction to applying artificial intelligence in business and development, with a focus on useful skills and real-world possibilities.",
    tags: ["Applied AI", "Digital transformation", "Hands-on"],
  },
  {
    number: "04",
    icon: "</>",
    category: "CODING & DEVELOPMENT",
    title: "Full-Spectrum Python",
    subtitle: "From data and web to AI, ERP & IoT",
    description:
      "Grow your Python skills across programming, web development, data, artificial intelligence, ERP, and the Internet of Things.",
    tags: ["Python", "Web development", "Data & IoT"],
  },
];

const footerGroups = [
  {
    title: "Learn with us",
    links: ["Trainings", "ICT Tutorials", "ICT Guides", "ICT Guides in Urdu", "ICT Exam Prep", "O/A Level Tuition"],
  },
  {
    title: "Explore technology",
    links: ["ICT Security", "STEM Robotics", "For Kids", "For Educators", "ICT Engineering", "Artificial Intelligence", "Data Engineering", "Data Analytics"],
  },
  {
    title: "Projects & ideas",
    links: ["Autonomous Vehicle", "Robotic Arm", "Quadcopter", "ICT Trends", "Quantum Computing", "Semiconductor Tech"],
  },
  {
    title: "Community",
    links: ["ICT Genius", "Quran.com", "Live Makkah", "Live Madinah", "Contact"],
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" /></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" /></svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-shell" id="home">
      <div className="announcement-bar">
        <span className="announcement-dot" />
        <span>Curiosity today. Capability tomorrow.</span>
        <a href="#trainings">Explore our trainings <Arrow /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="ICT Club home">
          <span className="brand-symbol" aria-hidden="true">i<span>c</span></span>
          <span className="brand-copy"><strong>ICT Club</strong><small>LEARN · BUILD · GROW</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#trainings" onClick={closeMenu}>Trainings</a>
          <a href="#community" onClick={closeMenu}>Blogs</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="header-cta" href="#trainings">Explore classes <Arrow diagonal /></a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <div className="eyebrow"><span /> A community for curious minds</div>
            <h1 id="hero-title">Skills for a world that keeps <em>moving.</em></h1>
            <p className="hero-description">
              An online community club advancing IT skills, STEM robotics, artificial intelligence, and programming education for learners of all ages.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#trainings">Discover our trainings <Arrow /></a>
              <a className="button-text" href="#about">Get to know ICT Club <Arrow diagonal /></a>
            </div>
            <div className="hero-proof"><span className="proof-icon">✳</span><span>Learn by doing. Build skills for life.</span></div>
          </div>
          <div className="hero-art" role="img" aria-label="Abstract illustration of connected ideas and technology">
            <div className="art-grid" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit-core"><span>ICT</span><small>COMMUNITY<br />CLUB</small></div>
            <div className="orbit-node node-code"><span>&lt;/&gt;</span><small>CODE</small></div>
            <div className="orbit-node node-ai"><span>✳</span><small>AI</small></div>
            <div className="orbit-node node-robot"><span>⌘</span><small>ROBOTICS</small></div>
            <div className="orbit-node node-data"><span>▥</span><small>IT SKILLS</small></div>
            <div className="art-caption"><span className="caption-line" /> LEARN · BUILD · GROW</div>
            <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✳</span>
          </div>
        </section>

        <section className="intro-band" id="about">
          <div className="intro-label"><span className="section-index">01</span><span>ABOUT ICT CLUB</span></div>
          <div className="intro-copy">
            <h2>Technology is better<br />when we learn it <em>together.</em></h2>
            <p>ICT Community Club is an online learning community based in Bahria Town, Lahore, Pakistan. We help learners build practical computer and technology skills through guided sessions, tuition, tutorials, and approachable learning resources.</p>
            <a className="underlined-link" href="#contact">Meet the community <Arrow /></a>
          </div>
          <div className="intro-stat"><strong>01<span>—</span></strong><p>A place to explore, learn, and make things.</p></div>
        </section>

        <section className="training-section" id="trainings" aria-labelledby="training-title">
          <div className="section-topline"><div className="eyebrow"><span /> LEARN SOMETHING NEW</div><span className="section-index">02 / TRAININGS</span></div>
          <div className="training-heading">
            <div><h2 id="training-title">Build skills.<br /><em>Build what’s next.</em></h2></div>
            <p>Expert-led 1:1 and group-based online IT, robotics, and coding classes. Interactive, practical learning designed to help kids and professionals move forward with confidence.</p>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <article className="course-card" key={course.number}>
                <div className="course-card-top"><span className="course-number">{course.number}</span><span className="course-icon" aria-hidden="true">{course.icon}</span></div>
                <div className="course-category">{course.category}</div>
                <h3>{course.title}</h3>
                <h4>{course.subtitle}</h4>
                <p>{course.description}</p>
                <div className="course-tags">{course.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="course-link" href="#contact">Read more <Arrow /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="learning-section" aria-labelledby="learning-title">
          <div className="learning-visual">
            <div className="learning-photo" role="img" aria-label="A creative workspace ready for hands-on learning">
              <div className="photo-note"><span>IDEAS INTO ACTION</span><strong>Make it.<br /><em>Understand it.</em></strong></div>
              <span className="photo-orbit" aria-hidden="true">✳</span>
            </div>
            <div className="photo-footnote"><span>ICT COMMUNITY CLUB</span><span>BAHRIA TOWN · LAHORE</span></div>
          </div>
          <div className="learning-copy">
            <div className="eyebrow"><span /> LEARNING THAT FITS YOUR LIFE</div>
            <h2 id="learning-title">Learn it today.<br />Use it <em>tomorrow.</em></h2>
            <p>Take the first step toward stronger skills in IT, programming, STEM robotics, or artificial intelligence. Our guided, hands-on sessions help you turn curiosity into practical knowledge.</p>
            <ul className="benefit-list">
              <li><span className="benefit-check">✓</span><span><strong>Experienced trainer</strong><small>Learn from a professional with deep expertise in computer courses.</small></span></li>
              <li><span className="benefit-check">✓</span><span><strong>Hands-on practical training</strong><small>Build projects and apply what you learn—not just theory.</small></span></li>
              <li><span className="benefit-check">✓</span><span><strong>Flexible schedule</strong><small>Evening and weekend online classes to fit your routine.</small></span></li>
            </ul>
            <a className="button button-primary" href="#contact">Find your next class <Arrow /></a>
          </div>
        </section>

        <section className="schedule-section">
          <div className="schedule-icon" aria-hidden="true"><span>◷</span></div>
          <div className="schedule-main"><div className="eyebrow"><span /> MAKE LEARNING WORK FOR YOU</div><h2>Good skills.<br /><em>On your schedule.</em></h2></div>
          <div className="schedule-detail"><h3>Evenings & weekends</h3><p>Our flexible online training sessions are held on evenings or weekends, so students and professionals can learn without disrupting their weekly routine.</p><a className="underlined-link" href="#contact">Ask about the schedule <Arrow /></a></div>
          <span className="schedule-decoration" aria-hidden="true">✳</span>
        </section>

        <section className="closing-cta" id="contact">
          <div className="closing-ornament" aria-hidden="true">ICT<span>.</span></div>
          <div className="eyebrow"><span /> YOUR NEXT CHAPTER STARTS HERE</div>
          <h2>Curiosity is a great<br />place to <em>start.</em></h2>
          <p>Ready to grow your skills? Explore ICT Club trainings and take your next step in technology.</p>
          <a className="button button-light" href="mailto:hello@e-updates.com">Get in touch <Arrow /></a>
        </section>
      </main>

      <footer className="site-footer" id="community">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="brand footer-brand" href="#home" aria-label="ICT Club home"><span className="brand-symbol" aria-hidden="true">i<span>c</span></span><span className="brand-copy"><strong>ICT Club</strong><small>LEARN · BUILD · GROW</small></span></a>
            <p>The ICT Community Club, Bahria Town Lahore, Pakistan, advances ICT, STEM robotics, artificial intelligence, and programming skills through tuition, tutorials, guides, and hands-on learning.</p>
            <address>ICT Club, Nishtar Commercial,<br />Sector E, Violet Block, Bahria Town,<br />Lahore, 53720, Pakistan.</address>
            <div className="social-links" aria-label="Social media"><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://www.tiktok.com/" aria-label="TikTok">♪</a><a href="https://www.youtube.com/" aria-label="YouTube">▶</a><a href="https://www.pinterest.com/" aria-label="Pinterest">p</a></div>
          </div>
          {footerGroups.map((group) => (
            <div className="footer-link-group" key={group.title}><h3>{group.title}</h3>{group.links.map((link) => <a href={link === "Contact" ? "#contact" : "#trainings"} key={link}>{link}</a>)}</div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 ICT Club · e-updates.com</span>
          <p><strong>GDPR & privacy.</strong> We collect only the personal data needed to provide educational services, respond to inquiries, and improve your experience. We do not sell or share your information with third parties. You may request access to, correction of, or deletion of your data by contacting us.</p>
          <a href="mailto:hello@e-updates.com">Privacy enquiries <Arrow diagonal /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;

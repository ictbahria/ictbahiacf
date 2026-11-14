import "./App.css";

const navItems = ["Home", "About", "Trainings", "Blogs", "Contact"] as const;

const trainingCards = [
  {
    number: "01",
    title: "IT Skills",
    badge: "Office Applications",
    description:
      "Productivity and automation with artificial intelligence. Practical training in documents, spreadsheets, presentations, databases, and emails.",
  },
  {
    number: "02",
    title: "STEM Robotics",
    badge: "From Block Coding to ROS",
    description:
      "A fun and interactive STEM robotics course in Bahria Town for kids and beginners, guiding learners from block coding to robotics thinking and real-world problem solving.",
  },
  {
    number: "03",
    title: "Applied Artificial Intelligence",
    badge: "Business, Development & Digital Transformation",
    description:
      "Hands-on applied AI training for business, development, and digital transformation, designed with practical learning outcomes that matter in real life.",
  },
  {
    number: "04",
    title: "Full-Spectrum Python",
    badge: "Data, Web, AI, ERP & IoT",
    description:
      "Coding and web development training for tech learners, covering Python applications across data, web, AI, ERP, and IoT projects.",
  },
];

const resourceLinks = [
  "ICT Club Home",
  "ICT Club Trainings",
  "ICT Tutorials",
  "ICT Guides",
  "ICT Guides in Urdu",
  "ICT Security",
  "STEM Robotics",
  "For Kids",
  "For Educators",
  "ICT Engineering",
  "Artificial Intelligence",
  "Data Engineering",
  "Data Analytics",
  "ICT Projects",
  "Autonomous Vehicle",
  "Robotic Arm",
  "Quadcopter",
  "ICT Emerging",
  "ICT Trends",
  "Quantum Computing",
  "Semiconductor Tech",
  "ICT Preparation",
  "ICT Genius",
  "ICT Exam Prep",
  "O/A Level Tuition",
  "Community",
  "Quran.com",
  "Live Makkah",
  "Live Madinah",
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3.5 10h12m-5-5 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  return (
    <div className="page-shell">
      <div className="topbar">
        <span>Professional online IT, robotics, coding, STEM and AI learning</span>
        <a href="#contact">Book a free consultation <ArrowIcon /></a>
      </div>

      <header className="header">
        <a href="#home" className="brand" aria-label="ICT Club home">
          <span className="brand-mark">ICT</span>
          <span className="brand-copy">
            <strong>ICT Club</strong>
            <small>Learn · Build · Grow</small>
          </span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="primary-button header-button">
          Enroll now <ArrowIcon />
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span /> ICT Community Club</div>
            <h1>
              Learn technology with<br />
              confidence and <em>purpose.</em>
            </h1>
            <p>
              An online community club dedicated to advancing IT skills, STEM robotics,
              artificial intelligence, and programming education for learners of all ages.
            </p>

            <div className="hero-actions">
              <a href="#trainings" className="primary-button">
                Explore classes <ArrowIcon />
              </a>
              <a href="#about" className="secondary-link">
                Why choose ICT Club <ArrowIcon />
              </a>
            </div>

            <ul className="feature-list" aria-label="Key benefits">
              <li>1:1 &amp; group-based learning</li>
              <li>Flexible evening / weekend classes</li>
              <li>Practical hands-on training</li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="Technology learning illustration">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="orb-core">
              <span>ICT</span>
              <small>COMMUNITY CLUB</small>
            </div>
            <div className="chip chip-code">&lt;/&gt;</div>
            <div className="chip chip-ai">AI</div>
            <div className="chip chip-robot">ROBOTICS</div>
            <div className="chip chip-skills">IT SKILLS</div>
            <div className="visual-banner">LEARN · BUILD · THRIVE</div>
          </div>
        </section>

        <section className="stats-band" aria-label="Key learning statistics">
          <div>
            <strong>1:1</strong>
            <span>Personalized learning</span>
          </div>
          <div>
            <strong>Online</strong>
            <span>Flexible sessions</span>
          </div>
          <div>
            <strong>STEM</strong>
            <span>Robotics + coding</span>
          </div>
          <div>
            <strong>AI</strong>
            <span>Applied thinking</span>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="section-heading">
            <div className="eyebrow"><span /> About us</div>
            <h2>Expert 1:1 / group-based online IT, robotics and coding classes.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                Unlock your potential with ICT Club’s live, interactive STEM tutoring. We offer personalized 1:1 or group-based online technology classes—including coding, robotics, and IT tuition—designed to give learners a competitive edge.
              </p>
              <p>
                Built on a proven STEM framework, our expert-led trainings equip learners with the essential latest technical and problem-solving skills they need to thrive.
              </p>
            </div>
            <div className="about-highlight">
              <span className="mini-tag">Why choose us</span>
              <strong>Practical learning. Real-world confidence.</strong>
              <p>
                Whether you’re a child, student, or professional, our guided sessions make technology approachable, exciting, and future-ready.
              </p>
            </div>
          </div>
        </section>

        <section id="trainings" className="training-section">
          <div className="section-heading training-heading">
            <div className="eyebrow"><span /> Trainings</div>
            <h2>Technology pathways built for tomorrow.</h2>
          </div>

          <div className="course-grid">
            {trainingCards.map((card) => (
              <article className="course-card" key={card.title}>
                <span className="course-number">{card.number}</span>
                <span className="course-badge">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href="#contact" className="course-link">
                  Read more <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="info-band">
          <div className="section-heading left-heading">
            <div className="eyebrow"><span /> Online learning</div>
            <h2>Online IT, robotics, artificial intelligence and coding classes for kids and professionals.</h2>
          </div>
          <p>
            Take the first step toward enhancing your skills. Whether you want to advance in IT,
            programming, STEM robotics, or artificial intelligence, ICT Community Club facilitates
            hands-on learning and guided sessions to help you build real-world computer and technology skills.
          </p>
        </section>

        <section className="why-section" aria-labelledby="why-title">
          <div className="why-copy">
            <div className="eyebrow"><span /> Why choose ICT Club?</div>
            <h2 id="why-title">The right support for serious learning.</h2>
            <ul>
              <li>
                <strong>Experienced Trainer:</strong> Learn from professionals with deep expertise in computer courses.
              </li>
              <li>
                <strong>Hands-on practical training:</strong> Build actual projects instead of just reading theories.
              </li>
              <li>
                <strong>Flexible Schedule:</strong> Evening / weekend online IT classes tailored to your routine.
              </li>
            </ul>
          </div>

          <div className="why-panel">
            <div className="panel-card">
              <span>Weekend schedule</span>
              <strong>Flexible evening / weekend online classes in Bahria Town Lahore</strong>
              <p>
                Our training sessions are held on evenings or weekends to ensure students and professionals can learn without affecting their weekly routine.
              </p>
            </div>
          </div>
        </section>

        <section id="blogs" className="resources-section">
          <div className="section-heading left-heading">
            <div className="eyebrow"><span /> Resources</div>
            <h2>IT tutorials, guides, preparation and emerging technology insights.</h2>
          </div>

          <div className="resource-list" aria-label="Resource links">
            {resourceLinks.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="cta-section">
          <div className="cta-copy">
            <div className="eyebrow light"><span /> Get started</div>
            <h2>Let’s build your next skill with confidence.</h2>
          </div>
          <a href="mailto:hello@e-updates.com" className="primary-button light-button">
            Contact ICT Club <ArrowIcon />
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand footer-brand-link" aria-label="ICT Club home">
              <span className="brand-mark">ICT</span>
              <span className="brand-copy">
                <strong>ICT Club</strong>
                <small>Learn · Build · Grow</small>
              </span>
            </a>
            <p>
              ICT Club, Nishtar Commercial, Sector E, Violet Block, Bahria Town, Lahore, 53720.
              The ICT Community Club, Bahria Town Lahore, Pakistan, focuses on advancing ICT,
              STEM Robotics, Artificial Intelligence and programming skills through tuition,
              tutorials and guides.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h3>Quick links</h3>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#trainings">Trainings</a>
              <a href="#blogs">Blogs</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h3>Connect</h3>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok</a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>ICT Club © 2026 · e-updates.com</span>
          <p>
            All rights reserved. GDPR Policy: We value your privacy. We collect only the necessary personal data (such as name, email, and contact information) to provide educational services, respond to inquiries, and improve user experience. We do not sell or share your information with third parties. All data is stored securely and used in compliance with the General Data Protection Regulation (GDPR). You may request access to, correction of, or deletion of your data at any time by contacting us.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

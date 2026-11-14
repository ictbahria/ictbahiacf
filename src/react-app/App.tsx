import { useMemo, useState } from "react";
import "./App.css";

type Story = {
  category: string;
  title: string;
  summary: string;
  readTime: string;
  image: string;
  imageAlt: string;
};

const stories: Story[] = [
  {
    category: "Digital life",
    title: "A calmer, clearer way to manage software updates",
    summary:
      "A practical routine for knowing what needs attention, what can wait, and where to get updates safely.",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=960&q=85",
    imageAlt: "A bright, organized workspace with a laptop and notebook",
  },
  {
    category: "How-to guides",
    title: "The small settings that make your accounts safer",
    summary:
      "Simple, worthwhile checks to help protect your everyday accounts without adding more complexity.",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=960&q=85",
    imageAlt: "People working together around a laptop",
  },
  {
    category: "Tech explained",
    title: "What happens when you update an app?",
    summary:
      "A plain-language look at new features, bug fixes, and why a little maintenance matters.",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=960&q=85",
    imageAlt: "A close-up of a thoughtfully designed electronic circuit board",
  },
];

const categories = ["All stories", "Digital life", "How-to guides", "Tech explained"];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" fill="none">
        <rect x="1" y="1" width="34" height="34" rx="12" fill="currentColor" />
        <path d="M10 19.2 15.4 24 26 12" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 12.5h5" stroke="white" strokeOpacity=".7" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All stories");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredStories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return stories.filter((story) => {
      const matchesCategory = activeCategory === "All stories" || story.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        `${story.title} ${story.summary} ${story.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <span className="announcement-dot" />
        Thoughtful reads for a more confident digital life
        <a href="#stories" className="announcement-link">
          Explore the latest <ArrowIcon />
        </a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="E-Updates home">
          <BrandMark />
          <span className="brand-name">e-updates<span>.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#stories" onClick={() => setMenuOpen(false)}>Latest stories</a>
          <a href="#topics" onClick={() => setMenuOpen(false)}>Explore topics</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
          <a className="nav-cta" href="#stories" onClick={() => setMenuOpen(false)}>
            Find your next read <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> THE GOOD SIDE OF WHAT'S NEW</div>
            <h1 id="hero-title">Stay in the know.<br /><span>Stay at ease.</span></h1>
            <p className="hero-description">
              Clear, useful perspectives on technology and the digital world—so you can make the most of what’s next.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#stories">Explore the stories <ArrowIcon /></a>
              <a className="text-link" href="#about">A little about us <ArrowIcon diagonal /></a>
            </div>
            <div className="hero-note">
              <span className="note-icon" aria-hidden="true">✳</span>
              Made for curious people. Written to make sense.
            </div>
          </div>
          <div className="hero-art" aria-label="A calm, light-filled desk with a laptop">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=88"
              alt="A sunlit modern workspace with plants and a desk"
              fetchPriority="high"
            />
            <div className="hero-image-wash" />
            <div className="hero-sticker"><span>GOOD TO</span><strong>know</strong><i>✳</i></div>
            <div className="feature-card">
              <div className="feature-topline"><span className="feature-label">A GOOD PLACE TO START</span><span className="feature-number">01 / 03</span></div>
              <h2>A little more clarity.<br />A lot less noise.</h2>
              <a href="#stories" aria-label="Read our latest stories">Discover the latest <ArrowIcon /></a>
            </div>
            <span className="hero-caption">A fresh perspective, whenever you need one.</span>
          </div>
        </section>

        <section className="value-strip" aria-label="What you can expect">
          <div className="value-inner">
            <div className="value-item"><span className="value-icon">✳</span><span><strong>Useful by design</strong><small>Ideas you can put to work</small></span></div>
            <div className="value-item"><span className="value-icon value-icon-outline">↗</span><span><strong>Easy to understand</strong><small>Good information, simply told</small></span></div>
            <div className="value-item"><span className="value-icon value-icon-leaf">✺</span><span><strong>Made for real life</strong><small>Technology, in human terms</small></span></div>
            <div className="value-tag">A BETTER KIND OF UPDATE <span>→</span></div>
          </div>
        </section>

        <section className="stories-section section-wrap" id="stories" aria-labelledby="stories-title">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> THE LATEST</div>
              <h2 id="stories-title">A little something <em>new.</em></h2>
              <p>Fresh ideas and helpful guides for the things you do every day.</p>
            </div>
            <label className="search-box">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.6" /><path d="m13.2 13.2 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              <input
                type="search"
                aria-label="Search stories"
                placeholder="Search stories"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <span className="search-shortcut">⌕</span>
            </label>
          </div>

          <div className="category-tabs" id="topics" role="group" aria-label="Filter stories by topic">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? "category-tab active" : "category-tab"}
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredStories.length > 0 ? (
            <div className="story-grid">
              {filteredStories.map((story, index) => (
                <article className={`story-card${index === 0 ? " story-card-featured" : ""}`} key={story.title}>
                  <a className="story-image" href="#about" aria-label={`Read: ${story.title}`}>
                    <img src={story.image} alt={story.imageAlt} loading="lazy" />
                    <span className="image-arrow"><ArrowIcon diagonal /></span>
                  </a>
                  <div className="story-meta"><span>{story.category}</span><span>{story.readTime}</span></div>
                  <h3><a href="#about">{story.title}</a></h3>
                  <p>{story.summary}</p>
                  <a className="story-read-link" href="#about">Read the story <ArrowIcon /></a>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state" role="status">
              <span>✳</span><h3>No stories found just yet.</h3><p>Try a different search or choose another topic.</p>
              <button className="text-link" type="button" onClick={() => { setQuery(""); setActiveCategory("All stories"); }}>Show all stories <ArrowIcon /></button>
            </div>
          )}
          <div className="stories-footer"><span>GOOD THINGS TAKE A LITTLE CURIOSITY.</span><a href="#topics">Explore all topics <ArrowIcon /></a></div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="about-inner section-wrap">
            <div className="about-decoration" aria-hidden="true"><span>e</span><i>✳</i></div>
            <div className="about-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> A NOTE FROM US</div>
              <h2 id="about-title">The digital world moves fast.<br /><em>Understanding it can feel easy.</em></h2>
              <p>E-Updates is a place for thoughtful, approachable reads about technology and everyday digital life. No jargon, no overwhelm—just useful ideas to help you feel a little more informed.</p>
              <a className="button button-light" href="#stories">Get to know our stories <ArrowIcon /></a>
            </div>
            <div className="about-quote"><span>“</span><p>Good information should make life feel simpler, not louder.</p><div className="quote-rule" />E-UPDATES EDITORIAL</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand-block">
            <a className="brand brand-footer" href="#home"><BrandMark /><span className="brand-name">e-updates<span>.</span></span></a>
            <p>A brighter take on the digital world.<br />Useful updates, made human.</p>
          </div>
          <div className="footer-links"><span>TAKE A LOOK</span><a href="#stories">Latest stories</a><a href="#topics">Explore topics</a><a href="#about">About E-Updates</a></div>
          <div className="footer-note"><span>STAY CURIOUS</span><p>Come back anytime for a fresh perspective and a little more clarity.</p><a href="#home">Back to the top ↑</a></div>
        </div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} E-Updates. All rights reserved.</span><span>Made for curious people, everywhere.</span><a href="#home">e-updates.com</a></div>
      </footer>
    </div>
  );
}

export default App;

import { useMemo, useState, type FormEvent } from "react";
import "./App.css";

type Story = {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  author: string;
  readTime: string;
  featured?: boolean;
};

const stories: Story[] = [
  {
    category: "Technology",
    title: "The small technologies making a big difference in everyday life",
    excerpt:
      "A closer look at the thoughtful tools and ideas changing how we work, connect, and make time for what matters.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A bright, modern workspace with a laptop and notebook",
    author: "Maya Bennett",
    readTime: "6 min read",
    featured: true,
  },
  {
    category: "Ideas",
    title: "A more considered way to keep up with the world",
    excerpt:
      "When everything asks for our attention, a little perspective can make all the difference.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Sunlit shared studio with a long wooden table",
    author: "Oliver James",
    readTime: "4 min read",
  },
  {
    category: "Business",
    title: "What the next generation of independent businesses gets right",
    excerpt:
      "From stronger communities to more intentional growth, a new playbook is taking shape.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    imageAlt: "A small team sharing ideas around a table",
    author: "Amara Cole",
    readTime: "5 min read",
  },
  {
    category: "Living",
    title: "Making room for a little more outside in the everyday",
    excerpt:
      "Simple, practical ways to bring the restorative feeling of nature closer to home.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Warm afternoon light filtering through a green forest",
    author: "Nina Patel",
    readTime: "3 min read",
  },
];

const categories = ["All stories", "Technology", "Ideas", "Business", "Living"];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All stories");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [signupMessage, setSignupMessage] = useState("");

  const filteredStories = useMemo(() => {
    const query = search.trim().toLowerCase();
    return stories.filter((story) => {
      const matchesCategory =
        activeCategory === "All stories" || story.category === activeCategory;
      const matchesSearch =
        !query ||
        `${story.title} ${story.excerpt} ${story.category} ${story.author}`
          .toLowerCase()
          .includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSignupMessage("Thanks for your interest. Newsletter sign-up is coming soon.");
    setEmail("");
  }

  return (
    <div className="site-shell">
      <div className="topline">
        <p>A little more perspective, every day.</p>
        <a href="#latest">Discover the latest <ArrowIcon /></a>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="E-Updates home">
          <span className="wordmark-mark">e<span>.</span></span>
          <span className="wordmark-name">updates</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#latest" onClick={() => setMenuOpen(false)}>Latest</a>
          <a href="#latest" onClick={() => { setActiveCategory("Technology"); setMenuOpen(false); }}>Technology</a>
          <a href="#latest" onClick={() => { setActiveCategory("Ideas"); setMenuOpen(false); }}>Ideas</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <a className="header-cta" href="#newsletter">Get the weekly edit <ArrowIcon diagonal /></a>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> The thoughtful read</div>
            <h1 id="hero-title">A fresh take on what’s <em>happening.</em></h1>
            <p className="hero-intro">
              Good stories. New perspectives. A more considered way to stay in the know.
            </p>
            <a className="olive-button" href="#latest">Explore the latest <ArrowIcon /></a>
            <div className="hero-note"><span className="note-dot" /> Curiosity, with a little more clarity.</div>
          </div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=85"
              alt="A winding path through a sunlit landscape"
            />
            <div className="image-caption"><span>LOOK CLOSER</span><span>Find a new point of view</span></div>
            <div className="hero-stamp" aria-hidden="true"><span>READ</span><span>WELL</span><i>✳</i></div>
          </div>
        </section>

        <section className="featured-strip" aria-label="Our approach">
          <p>For the curious, the thoughtful, and the always learning.</p>
          <div><span>01</span> Interesting ideas</div>
          <div><span>02</span> Fresh perspectives</div>
          <div><span>03</span> Room to think</div>
        </section>

        <section className="latest-section" id="latest" aria-labelledby="latest-title">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> The reading list</div>
              <h2 id="latest-title">Worth your <em>attention.</em></h2>
            </div>
            <label className="search-box">
              <span className="visually-hidden">Search stories</span>
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.5"/><path d="m13.2 13.2 4 4" stroke="currentColor" strokeWidth="1.5"/></svg>
              <input
                type="search"
                placeholder="Find a story"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
          </div>

          <div className="category-tabs" role="group" aria-label="Filter stories by category">
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
              {filteredStories.map((story) => (
                <article className={story.featured ? "story-card story-card-featured" : "story-card"} key={story.title}>
                  <a className="story-image" href="#about" aria-label={`Read: ${story.title}`}>
                    <img src={story.image} alt={story.imageAlt} loading="lazy" />
                    <span className="image-arrow"><ArrowIcon diagonal /></span>
                  </a>
                  <div className="story-content">
                    <div className="story-meta"><span>{story.category}</span><span>{story.readTime}</span></div>
                    <h3><a href="#about">{story.title}</a></h3>
                    <p>{story.excerpt}</p>
                    <div className="story-byline"><span className="author-avatar">{story.author.split(" ").map((part) => part[0]).join("")}</span> By {story.author}</div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="empty-state">No stories match that search. Try another topic or keyword.</p>
          )}
        </section>

        <section className="newsletter" id="newsletter" aria-labelledby="newsletter-title">
          <div className="newsletter-decoration" aria-hidden="true">e.</div>
          <div className="newsletter-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> A good thing in your inbox</div>
            <h2 id="newsletter-title">Make space for <em>something good.</em></h2>
            <p>A thoughtful weekly edit of stories and ideas worth carrying into your week.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label className="visually-hidden" htmlFor="newsletter-email">Your email address</label>
            <div className="email-field">
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button type="submit" aria-label="Join the newsletter"><ArrowIcon /></button>
            </div>
            <p aria-live="polite">{signupMessage || "No noise. Just a little inspiration, once a week."}</p>
          </form>
        </section>

        <section className="about-section" id="about">
          <span className="about-mark" aria-hidden="true">✳</span>
          <div><div className="eyebrow"><span className="eyebrow-line" /> A note from us</div><h2>Stay informed.<br /><em>Stay open.</em></h2></div>
          <p>E-Updates is a home for ideas, stories, and perspectives that make the everyday a little more interesting. Take what resonates, follow your curiosity, and come back whenever you need a fresh point of view.</p>
          <a className="text-link" href="#home">Back to the top <ArrowIcon diagonal /></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home" aria-label="E-Updates home"><span className="wordmark-mark">e<span>.</span></span><span className="wordmark-name">updates</span></a>
        <p>Curiosity looks good on you.</p>
        <div className="footer-links"><a href="#about">About</a><a href="mailto:hello@e-updates.com">Contact</a><a href="#newsletter">Newsletter</a></div>
        <small>© {new Date().getFullYear()} E-Updates. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;

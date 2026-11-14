import { useMemo, useState, type FormEvent } from "react";
import "./App.css";

type Category = "AI & Tech" | "Security" | "Productivity" | "Guides";
type Article = {
  category: Category;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readTime: string;
  date: string;
  featured?: boolean;
};

const articles: Article[] = [
  {
    category: "AI & Tech",
    title: "The useful AI shift: from impressive demos to everyday work",
    excerpt: "A practical look at the new generation of AI tools—and where they can genuinely give your day back.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Abstract digital network representing modern artificial intelligence",
    readTime: "6 min read",
    date: "Editor’s pick",
    featured: true,
  },
  {
    category: "Security",
    title: "A calmer, smarter way to protect your accounts",
    excerpt: "Small changes to passwords, passkeys, and recovery options can make a meaningful difference.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Glowing digital security interface",
    readTime: "5 min read",
    date: "Security",
  },
  {
    category: "Productivity",
    title: "Your digital workspace deserves a spring clean",
    excerpt: "A simple reset for notifications, files, and apps that helps make room for focused work.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Laptop and notebook on a clean desk",
    readTime: "4 min read",
    date: "Productivity",
  },
  {
    category: "Guides",
    title: "What to check before you install a software update",
    excerpt: "A straightforward checklist for backing up, verifying, and updating your devices with confidence.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Person using a laptop at a desk",
    readTime: "7 min read",
    date: "The essentials",
  },
];

const categories = ["All stories", "AI & Tech", "Security", "Productivity", "Guides"] as const;
type FilterCategory = (typeof categories)[number];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All stories");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = activeCategory === "All stories" || article.category === activeCategory;
      const matchesQuery = !normalizedQuery || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <span className="announcement-dot" />
        <span>Clear thinking for a fast-moving digital world</span>
        <a href="#latest">Explore the latest <ArrowIcon /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="E-Updates home">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span className="brand-word">e<span>updates</span><i>.</i></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <a href="#latest" onClick={() => setMenuOpen(false)}>Latest</a>
          <a href="#topics" onClick={() => setMenuOpen(false)}>Topics</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
          <a className="nav-cta" href="#newsletter" onClick={() => setMenuOpen(false)}>Get the briefing <ArrowIcon diagonal /></a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> THE DIGITAL WORLD, MADE CLEAR</p>
            <h1 id="hero-title">Stay curious.<br />Stay <em>informed.</em></h1>
            <p className="hero-description">Technology moves quickly. We make it easier to understand what matters, what’s changing, and what to do next.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#latest">Discover the latest <ArrowIcon /></a>
              <a className="text-link" href="#about">What we’re about <ArrowIcon diagonal /></a>
            </div>
            <div className="hero-note"><span className="note-avatars" aria-hidden="true"><i>E</i><i>U</i><i>+</i></span><span>Thoughtful reads. No noise.</span></div>
          </div>
          <div className="hero-art" aria-label="Featured story: Making sense of the next wave of technology">
            <div className="hero-image" />
            <div className="hero-image-shade" />
            <div className="hero-art-top"><span className="live-dot" /> THE BIG PICTURE <span>01 / 04</span></div>
            <div className="hero-art-caption">
              <span className="caption-kicker">A BETTER WAY TO KEEP UP</span>
              <p>Make sense of<br />what’s next.</p>
              <a href="#featured" aria-label="Read the featured story"><ArrowIcon /></a>
            </div>
            <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
            <span className="hero-side-label">IDEAS FOR WHAT’S NEXT</span>
          </div>
          <div className="hero-bottomline"><span>INDEPENDENT PERSPECTIVES</span><span>USEFUL IDEAS, EVERY WEEK</span><span>BUILT FOR THE CURIOUS</span></div>
        </section>

        <section className="latest-section" id="latest" aria-labelledby="latest-title">
          <div className="section-wrap">
            <div className="section-heading">
              <div><p className="eyebrow"><span className="eyebrow-line" /> THE EDIT</p><h2 id="latest-title">A little more <em>in the know.</em></h2></div>
              <p className="section-intro">Fresh perspectives and practical guides to help you navigate what’s happening in tech.</p>
            </div>
            <div className="story-tools" id="topics">
              <div className="category-tabs" role="group" aria-label="Filter stories by topic">
                {categories.map((category) => <button key={category} className={activeCategory === category ? "is-active" : ""} type="button" aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>{category}</button>)}
              </div>
              <label className="search-box"><svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.5"/><path d="m13.2 13.2 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg><span className="sr-only">Search stories</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search stories" /></label>
            </div>
            {filteredArticles.length > 0 ? (
              <div className={`story-grid${activeCategory === "All stories" && !query ? " has-featured" : ""}`}>
                {filteredArticles.map((article, index) => <article className={`story-card${article.featured && activeCategory === "All stories" && !query ? " story-card-featured" : ""}`} key={article.title} id={article.featured ? "featured" : undefined}>
                  <a className="story-image-link" href="#newsletter" aria-label={`Read ${article.title}`}>
                    <img src={article.image} alt={article.imageAlt} loading={index === 0 ? "eager" : "lazy"} />
                    <span className="image-arrow"><ArrowIcon diagonal /></span>
                  </a>
                  <div className="story-meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                  <h3><a href="#newsletter">{article.title}</a></h3>
                  <p>{article.excerpt}</p>
                  <div className="story-footer"><span>{article.date}</span><a href="#newsletter" aria-label={`Read ${article.title}`}><ArrowIcon /></a></div>
                </article>)}
              </div>
            ) : <p className="empty-state">No stories match that search. Try another topic or keyword.</p>}
          </div>
        </section>

        <section className="manifesto" id="about" aria-labelledby="manifesto-title">
          <div className="section-wrap manifesto-inner">
            <div className="manifesto-mark" aria-hidden="true"><span>e</span><i>.</i></div>
            <div className="manifesto-copy"><p className="eyebrow"><span className="eyebrow-line" /> WHY E-UPDATES</p><h2 id="manifesto-title">Less noise.<br /><em>More know-how.</em></h2></div>
            <div className="manifesto-detail"><p>We believe staying informed shouldn’t feel like a full-time job. E-Updates brings together approachable explainers, useful ideas, and thoughtful perspectives—so you can keep up on your terms.</p><a className="text-link" href="#newsletter">A smarter way to stay current <ArrowIcon /></a></div>
          </div>
        </section>

        <section className="newsletter section-wrap" id="newsletter" aria-labelledby="newsletter-title">
          <div className="newsletter-decoration" aria-hidden="true"><span /><span /><span /></div>
          <div className="newsletter-copy"><p className="eyebrow"><span className="eyebrow-line" /> THE WEEKLY BRIEFING</p><h2 id="newsletter-title">A fresh perspective,<br /><em>straight to your inbox.</em></h2><p>One thoughtful email with the ideas and updates worth your time.</p></div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label className="sr-only" htmlFor="newsletter-email">Your email address</label>
            <div className="email-field"><input id="newsletter-email" type="email" autoComplete="email" required placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} /><button type="submit" aria-label="Sign up for the weekly briefing"><ArrowIcon /></button></div>
            <p aria-live="polite">{subscribed ? "Thanks for your interest. Newsletter sign-up is coming soon." : "No spam. Just the good stuff, once a week."}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-main">
          <a className="brand footer-brand" href="#home" aria-label="E-Updates home"><span className="brand-mark" aria-hidden="true"><span /><span /><span /></span><span className="brand-word">e<span>updates</span><i>.</i></span></a>
          <p>Curiosity, clearly delivered.</p>
          <nav aria-label="Footer navigation"><a href="#latest">Latest</a><a href="#topics">Topics</a><a href="#about">About</a><a href="mailto:hello@e-updates.com">Contact</a></nav>
        </div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} E-Updates. All rights reserved.</span><span>Made for the curious.</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

export default App;

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Music2, Compass, Instagram, Menu, X, MessageCircle, Users } from "lucide-react";
import { Logo, Phone, MapVisual } from "../components/tovo-ui";

export default function Home() {
  const [menu, setMenu] = useState(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container nav-inner"><Logo/><nav className={menu ? "navigation open" : "navigation"} aria-label="Main navigation"><a href="#discover" onClick={() => setMenu(false)}>Discover</a><a href="#about" onClick={() => setMenu(false)}>About</a><a href="mailto:tovo.app.contact@gmail.com" onClick={() => setMenu(false)}>Contact</a></nav><button className="menu-toggle" aria-label={menu ? "Close menu" : "Open menu"} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div></header>
    <main id="main">
      <section className="hero"><div className="container hero-inner">
        <div className="hero-copy"><h1>Your <span className="world-pink">world</span><br/><span className="highlight">unfolding.</span></h1><p>Discover what's happening around you.<br className="desktop-break"/> Find parties, explore events and connect<br className="desktop-break"/> with your local scene.<br/><span className="hero-launch-line">see you in march 2027</span></p><div className="hero-actions"><a className="text-link" href="#discover">Discover Tovo <ArrowDown size={16}/></a></div></div>
        <div className="hero-art"><div className="hero-orbit"/><Phone screen="map" className="hero-map-phone"/><Phone screen="events" className="hero-event-phone"/><span className="preview-label">App preview</span></div>
      </div></section>

      <section className="features section" id="discover"><div className="container"><div className="section-heading"><div><h2>Good things happen<br/>when you <span className="underlined">get out.</span></h2></div></div>
        <div className="feature-grid">
          <article className="feature"><div className="feature-visual map-feature"><MapVisual compact/></div><h3>Discover events<br/>around you.</h3><p>See what's nearby. Turn your surroundings into your next plan.</p></article>
          <article className="feature"><div className="feature-visual party-feature"><img src="/images/night.webp" alt="A crowd enjoying a live outdoor concert" loading="lazy"/></div><h3>Find your next<br/>favourite party.</h3><p>From a new dance floor to a familiar vibe. Find a party that feels like you.</p></article>
          <article className="feature"><div className="feature-visual scene-feature"><div className="scene-card scene-card-one"><span className="scene-card-icon"><Music2 size={18}/></span><div><b>Live music</b></div><ArrowUpRight size={16}/></div><div className="scene-card scene-card-two"><span className="scene-card-icon"><Compass size={18}/></span><div><b>Your local scene</b></div><ArrowUpRight size={16}/></div></div><h3>See what's happening<br/>in your scene.</h3><p>Explore the events and places that bring your local scene to life.</p></article>
        </div>
      </div></section>

      <section className="showcase" aria-labelledby="showcase-title"><div className="container showcase-inner"><div className="showcase-copy"><h2 id="showcase-title">Your next plan.<br/>In your hands.</h2><p>Explore the map. Discover an event.<br/>See where the night takes you.</p><span className="showcase-note">Illustrative app preview. Event details are examples.</span></div><div className="showcase-art"><Phone screen="events" className="showcase-event-phone"/><Phone screen="map" className="showcase-map-phone"/></div></div></section>

      <section className="ai-section section" id="tovo-ai" aria-labelledby="ai-title"><div className="container ai-inner"><div className="ai-copy"><h2 id="ai-title">Not sure where to go?<br/><span>Just ask Tovo.</span></h2><p>Tovo will have an AI assistant to help you decide where to go — and find out where your friends are planning to go.</p></div><div className="ai-preview" aria-label="Example questions for Tovo’s future AI assistant"><div className="ai-preview-header"><img src="/images/tovo-symbol.png" alt=""/><span>Tovo AI</span></div><div className="ai-question"><MessageCircle size={20} aria-hidden="true"/><p>Where should I go tonight?</p></div><div className="ai-question ai-question-friends"><Users size={20} aria-hidden="true"/><p>Where are my friends going?</p></div></div></div></section>

      <section className="brand section" id="about"><div className="container brand-inner"><div className="brand-photo"><img src="/images/concert.webp" alt="Friends and music fans sharing a moment at a concert" loading="lazy"/></div><div className="brand-copy"><h2>More than just<br/>a <span>night out.</span></h2><p>Tovo brings people, places and unforgettable moments together.</p></div></div></section>

      <section className="final-section" id="coming-soon"><div className="container"><h2>Something<br/>is coming<span className="final-dot">.</span></h2><p>Your World, Unfolding, March 2027.</p></div></section>
    </main>
    <footer className="footer" id="contact"><div className="container"><div className="footer-top"><Logo/><div className="footer-links"><a href="https://www.instagram.com/tovo.app_?xtok=MWYxbmZhYnY5a3c3aA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram Tovo — opens in a new tab"><Instagram size={15}/> Instagram</a><a href="mailto:tovo.app.contact@gmail.com">Contact <ArrowUpRight size={14}/></a><a href="/privacy">Privacy Policy</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tovo</span><a href="#main">Back to top ↑</a></div></div></footer>
  </>;
}
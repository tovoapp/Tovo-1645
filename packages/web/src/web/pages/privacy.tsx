import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Logo } from "../components/tovo-ui";

export default function Privacy() {
  useEffect(() => { document.title = "Privacy Policy — Tovo"; window.scrollTo(0, 0); return () => { document.title = "Tovo — Your world unfolding."; }; }, []);
  return <>
    <header className="site-header"><div className="container nav-inner"><Logo/><a className="text-link" href="/"><ArrowLeft size={16}/> Back to Tovo</a></div></header>
    <main className="privacy-page container">
      <h1>Privacy Policy</h1>
      <p className="privacy-intro">This is an informational website for the upcoming Tovo app, not the app itself. This notice covers the website only.</p>
      <h2>No accounts or signup collection</h2>
      <p>The Tovo website has no registration, login, newsletter form or live AI chat. Its application code does not write visitor information to a database or use cookies, localStorage, sessionStorage or IndexedDB to retain visitor data. Menu state exists only in memory while the page is open.</p>
      <p>The app screens and AI questions are illustrative previews. This website does not request your location, contacts or friends’ activity.</p>
      <h2>Platform analytics and hosting</h2>
      <p>The site includes Runable’s platform analytics script. It can transmit page-view information, the page address, referring page and campaign parameters to the analytics endpoint at r.lilstts.com. Network requests also expose technical information, such as an IP address, to the receiving infrastructure.</p>
      <p>This means the website should not be described as collecting absolutely no data. The analytics script reviewed does not use browser cookies or persistent browser storage, but the hosting and analytics services’ server-side retention has not been independently verified.</p>
      <h2>Contacting us</h2>
      <p>Contact links open your email application; they do not submit a website form. If you email us, your email address and message will be received in our Gmail inbox and used to respond. Your email provider and Google’s privacy practices also apply.</p>
      <h2>Instagram</h2>
      <p>The Instagram link opens Tovo’s profile in a new tab. There is no Instagram embed on this website. Your use of Instagram is subject to Instagram’s privacy policy.</p>
      <h2>Your requests</h2>
      <p>To ask about information you have shared with us, or request its deletion, contact <a href="mailto:tovo.app.contact@gmail.com">tovo.app.contact@gmail.com</a>.</p>
      <h2>Before the app launches</h2>
      <p>The future app will need a separate privacy notice reflecting its actual features and data practices, including any AI and social features. Those features do not run on this presentation website.</p>
      <a className="button button-dark" href="/"><ArrowLeft size={17}/> Back to Tovo</a>
    </main>
  </>;
}
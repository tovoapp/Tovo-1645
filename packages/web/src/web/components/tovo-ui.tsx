import { ArrowUpRight, Compass, MapPin, Music2, Search, Signal, BatteryFull, Wifi, X } from "lucide-react";
import { useRef, useEffect } from "react";

export function Logo({ light = false }: { light?: boolean }) {
  return <a className={`logo ${light ? "logo-light" : ""}`} href="/" aria-label="Tovo home"><img src="/images/tovo-symbol.png" alt="" width="30" height="33" /><span>Tovo</span></a>;
}

export function MapVisual({ compact = false }: { compact?: boolean }) {
  return <div className={`map-visual ${compact ? "compact-map" : ""}`}>
    <svg viewBox="0 0 320 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="420" fill="#eaece4"/>
      <path d="M-10 50L100 20 132 118 25 150zM197 4L340 4 340 85 218 110zM18 206L106 176 145 287 28 317zM190 254L327 224 349 399 233 430z" fill="#dde4d4"/>
      <path d="M-20 351Q90 285 183 327T340 288" fill="none" stroke="#b7d6d6" strokeWidth="34"/>
      <g fill="none" stroke="#fff" strokeWidth="10"><path d="M-30 188L347 75M65 -25L210 450M-15 281L330 177M179 -20L303 449M-20 90L354 -11M-2 408L348 297"/></g>
      <g fill="none" stroke="#fff" strokeWidth="4"><path d="M12 -20L145 441M122 -20L258 444M-11 226L340 125M-10 125L340 20M-30 321L337 215"/></g>
      <g fontFamily="Manrope, sans-serif" fontSize="8" fill="#80877b"><text x="25" y="66" transform="rotate(-17 25 66)">GARDEN DISTRICT</text><text x="181" y="206" transform="rotate(-17 181 206)">CENTRAL AVENUE</text><text x="35" y="260">RIVERSIDE</text><text x="191" y="384">DOWNTOWN</text></g>
    </svg>
    <span className="map-pin pin-one"><Music2 size={15}/></span><span className="map-pin pin-two"><Music2 size={15}/></span><span className="map-pin pin-three"><MapPin size={15}/></span><span className="map-location"><i/></span>
  </div>;
}

function PhoneNav() {
  return <div className="phone-nav"><span className="active"><Compass size={17}/>Discover</span><span><MapPin size={17}/>Map</span><span><Music2 size={17}/>Your scene</span></div>;
}

export function Phone({ screen, className = "" }: { screen: "map" | "events"; className?: string }) {
  return <figure style={{ margin: 0 }} className={`phone ${screen === "events" ? "dark-phone" : ""} ${className}`} aria-label={screen === "map" ? "Tovo app concept showing an event map and nearby event card" : "Tovo app concept showing local party and event cards"}>
    <div className="phone-screen">
      <div className="phone-status"><b>9:41</b><span><Signal size={11}/><Wifi size={12}/><BatteryFull size={16}/></span></div><div className="dynamic-island"/>
      <div className="phone-header"><span className="phone-wordmark">Tovo<span>.</span></span><span className="phone-location"><MapPin size={10}/> Around you</span></div>
      {screen === "map" ? <><div className="map-app-title"><h3>Your city.<br/>A little closer.</h3><div className="phone-search"><Search size={12}/>Discover around you</div></div><MapVisual/><div className="map-event"><img src="/images/concert.webp" alt=""/><div><small>NEARBY</small><b>Under the stars</b><span>Music · Riverside</span></div><ArrowUpRight size={18}/></div></> : <>
        <div className="events-app-title"><h3>Find your<br/><span>next moment.</span></h3></div>
        <div className="phone-chips"><span className="selected">For you</span><span>Parties</span><span>Events</span></div>
        <div className="phone-event"><img src="/images/concert.webp" alt=""/><span className="event-category">LIVE MUSIC</span><div className="phone-event-caption"><b>Under the stars</b><span><MapPin size={10}/> Riverside</span></div></div>
        <div className="phone-event second-event"><img src="/images/live.webp" alt=""/><span className="event-category">PARTY</span><div className="phone-event-caption"><b>After hours</b><span><MapPin size={10}/> Downtown</span></div></div>
      </>}
      <PhoneNav/><div className="home-indicator"/>
    </div>
  </figure>;
}

export function LaunchDialog({ kind, onClose }: { kind: "launch" | "instagram" | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (kind && !ref.current?.open) ref.current?.showModal(); if (!kind && ref.current?.open) ref.current.close(); }, [kind]);
  return <dialog ref={ref} className="launch-dialog" aria-label={kind === "instagram" ? "Tovo Instagram coming soon" : "Tovo is coming soon"} onCancel={onClose}>
    <div className="dialog-content"><button className="dialog-close" onClick={onClose} aria-label="Close"><X size={22}/></button><img className="dialog-symbol" src="/images/tovo-symbol.png" alt=""/><h2>{kind === "instagram" ? "See you soon." : "Something is coming."}</h2><p>{kind === "instagram" ? "Our Instagram is on its way. In the meantime, you can reach us directly." : "Tovo is coming soon. Your next favourite event is closer than you think."}</p><a className="button button-dark" href={`mailto:tovo.app.contact@gmail.com?subject=${encodeURIComponent("Hello Tovo")}`}>Get in touch <ArrowUpRight size={17}/></a></div>
  </dialog>;
}
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const Arrow = ({ diagonal = false }) => <svg aria-hidden="true" viewBox="0 0 20 20" className="arrow"><path d={diagonal ? 'M5 15 15 5M6 5h9v9' : 'M3 10h13m-5-5 5 5-5 5'} /></svg>
const Spark = () => <svg aria-hidden="true" viewBox="0 0 40 40" className="spark"><path d="M20 1c1.8 10.4 4.6 13.2 19 19-14.4 5.8-17.2 8.6-19 19C18.2 28.6 15.4 25.8 1 20 15.4 14.2 18.2 11.4 20 1Z" /></svg>
const Mark = () => <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>

function Header({ onBook }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="topbar">
    <a className="brand" href="#home" onClick={close}><Mark /><span>lundance<span className="brand-dot">.</span></span></a>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
      <a href="#classes" onClick={close}>Classes</a><a href="#about" onClick={close}>Our story</a><a href="#teacher" onClick={close}>Teacher</a><a href="#visit" onClick={close}>Find us</a>
      <button className="nav-cta" onClick={() => { close(); onBook() }}>Book a class <Arrow diagonal /></button>
    </nav>
  </header>
}

function SectionLabel({ children }) { return <div className="section-label"><span />{children}</div> }

function BookingModal({ selected, onClose }) {
  const [done, setDone] = useState(false)
  const [city, setCity] = useState('Lund')
  const [course, setCourse] = useState(selected || 'Single class')
  function submit(e) { e.preventDefault(); setDone(true) }
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
    <section className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <button className="modal-close" aria-label="Close booking form" onClick={onClose}>×</button>
      {done ? <div className="success-state"><span className="success-icon">✓</span><SectionLabel>YOU'RE ON YOUR WAY</SectionLabel><h2 id="booking-title">That was a good move.</h2><p>Your demo request for <strong>{course}</strong> in <strong>{city}</strong> is ready. In a real site, the studio would follow up to confirm your spot.</p><button className="button button-dark" onClick={onClose}>Back to the studio <Arrow /></button></div> : <>
        <SectionLabel>YOUR FIRST STEP</SectionLabel><h2 id="booking-title">Save your spot.</h2><p className="modal-intro">Pick a package and tell us where you'd like to dance. No payment needed for this demo.</p>
        <form onSubmit={submit}>
          <label>Your name<input required name="name" placeholder="e.g. Alex Andersson" autoComplete="name" /></label>
          <label>Email address<input required type="email" name="email" placeholder="you@example.com" autoComplete="email" /></label>
          <div className="form-row"><label>Package<select value={course} onChange={e => setCourse(e.target.value)}><option>Single class</option><option>10-class pass</option></select></label><label>City<select value={city} onChange={e => setCity(e.target.value)}><option>Lund</option><option>Malmö</option></select></label></div>
          <button className="button button-dark submit-button" type="submit">Request a class <Arrow /></button>
        </form><p className="form-note">Demo form only · Your details aren't sent or stored</p>
      </>}
    </section>
  </div>
}

function App() {
  const [booking, setBooking] = useState(null)
  const openBooking = (pkg = 'Single class') => setBooking(pkg)
  const closeBooking = () => setBooking(null)
  return <>
    <div className="site-shell" id="home">
      <Header onBook={() => openBooking()} />
      <main>
        <section className="hero">
          <div className="hero-copy"><SectionLabel>YOUR NEW HAPPY PLACE</SectionLabel>
            <h1>Find your<br /><span>rhythm.</span></h1>
            <p className="hero-lede">Big K-pop energy. Zero pressure. Learn the moves, find your people, and leave with a song stuck in your head.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => openBooking()}>Find your class <Arrow /></button><a className="text-link" href="#about">Get to know us <Arrow diagonal /></a></div>
            <div className="hero-note"><span className="note-star">✳</span><span>All levels welcome<br /><strong>Especially beginners</strong></span></div>
          </div>
          <div className="hero-art" aria-label="Illustration of dancers moving to music">
            <div className="art-sun" /><div className="art-ring ring-one" /><div className="art-ring ring-two" />
            <span className="art-word word-top">FEEL IT</span><span className="art-word word-bottom">MOVE WITH IT</span>
            <div className="dancer dancer-one"><div className="d-head" /><div className="d-hair" /><div className="d-body" /><div className="d-arm arm-left" /><div className="d-arm arm-right" /><div className="d-leg leg-left" /><div className="d-leg leg-right" /></div>
            <div className="dancer dancer-two"><div className="d-head" /><div className="d-hair" /><div className="d-body" /><div className="d-arm arm-left" /><div className="d-arm arm-right" /><div className="d-leg leg-left" /><div className="d-leg leg-right" /></div>
            <span className="art-spark spark-a"><Spark /></span><span className="art-spark spark-b"><Spark /></span>
            <div className="art-caption"><span>POP · MOVE · REPEAT</span><span>55°42' N — 13°11' E</span></div>
          </div>
          <div className="hero-bottom"><span>BASED IN LUND & MALMÖ</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="ticker" aria-label="Class highlights"><div className="ticker-track"><span>LEARN THE CHORUS</span><b>✳</b><span>BRING YOUR ENERGY</span><b>✳</b><span>NO EXPERIENCE NEEDED</span><b>✳</b><span>LEARN THE CHORUS</span><b>✳</b><span>BRING YOUR ENERGY</span><b>✳</b></div></section>

        <section className="intro section-pad" id="about"><div className="intro-aside"><SectionLabel>SO, WHAT IS K-POP DANCE?</SectionLabel><div className="intro-aside-note">A little practice.<br />A lot of <em>personality.</em></div></div><div className="intro-content"><h2>It’s the kind of dance that makes you feel like the <span>main character.</span></h2><p>K-pop choreography blends sharp moves, expressive storytelling, and seriously catchy music. At Lundance, we break it down one step at a time. You don’t need a dance background—just curiosity and comfy shoes.</p><a className="text-link" href="#classes">See what you can join <Arrow /></a></div></section>

        <section className="classes-section section-pad" id="classes"><div className="section-heading"><div><SectionLabel>MAKE IT YOURS</SectionLabel><h2>One song or<br /><em>ten? You choose.</em></h2></div><p>Come once to try it out, or grab a pass and make dancing your new thing. Every class is 55 minutes of good music and zero judgement.</p></div>
          <div className="package-grid">
            <article className="package-card"><div className="package-top"><span className="package-index">01 / DROP IN</span><span className="package-icon">↗</span></div><h3>One class</h3><p>A little taste of the dance floor. Pick a class, learn a chorus, see how it feels.</p><div className="price"><strong>250</strong><span>SEK <small>/ person</small></span></div><div className="package-foot"><span>1 class pass</span><button aria-label="Book one class" onClick={() => openBooking('Single class')}><Arrow /></button></div></article>
            <article className="package-card package-featured"><div className="package-top"><span className="package-index">02 / THE REGULAR</span><span className="package-badge">SAVE 100 SEK</span></div><h3>10-class pass</h3><p>Find your flow with ten classes to use at your own pace. More practice, more confidence.</p><div className="price"><strong>2,400</strong><span>SEK <small>/ person</small></span></div><div className="package-foot"><span>10 classes · 240 SEK each</span><button aria-label="Book ten class pass" onClick={() => openBooking('10-class pass')}><Arrow /></button></div></article>
          </div>
          <p className="package-fineprint">Classes are booked in advance. Ask us about availability in Lund or Malmö.</p>
        </section>

        <section className="teacher-section" id="teacher"><div className="teacher-photo" aria-label="Abstract portrait illustration of the dance teacher"><div className="portrait-sun" /><div className="portrait-head"><span className="portrait-hair" /><span className="portrait-face" /><span className="portrait-neck" /><span className="portrait-body" /></div><div className="portrait-stamp">YOUR<br />TEACHER<br /><Spark /></div><span className="portrait-caption">ALWAYS FRONT ROW ENERGY</span></div><div className="teacher-copy"><SectionLabel>THE PERSON BEHIND THE PLAYLIST</SectionLabel><h2>Meet <em>Jamie.</em></h2><p className="teacher-role">DANCE TEACHER · CHOREO LOVER · HYPE PERSON</p><p>Jamie believes the best part of dancing isn’t getting every move perfect—it’s the moment the music clicks and everyone in the room is smiling. Expect patient breakdowns, a big playlist, and plenty of encouragement.</p><p>Classes are open to curious beginners and seasoned dancers alike. Jamie keeps the pace friendly, the energy up, and the focus on having a good time.</p><button className="text-link" onClick={() => openBooking()}>Come dance with Jamie <Arrow /></button><span className="fictional-note">Jamie is a fictional teacher created for this project.</span></div></section>

        <section className="visit-section section-pad" id="visit"><div className="visit-title"><SectionLabel>COME AS YOU ARE</SectionLabel><h2>Two cities.<br /><em>One dance floor.</em></h2><p>Find the studio that works for you. Classes run every day, so there’s always a time to move.</p></div><div className="locations"><article className="location-card"><span className="location-no">01</span><div><h3>Lund</h3><p>Central Lund · Studio address shared with booking confirmation</p><a href="mailto:hello@lundance.example?subject=Lund%20classes">Ask about Lund <Arrow diagonal /></a></div><span className="location-pin">L</span></article><article className="location-card"><span className="location-no">02</span><div><h3>Malmö</h3><p>Central Malmö · Studio address shared with booking confirmation</p><a href="mailto:hello@lundance.example?subject=Malm%C3%B6%20classes">Ask about Malmö <Arrow diagonal /></a></div><span className="location-pin">M</span></article><div className="hours"><span>STUDIO HOURS</span><strong>Every day</strong><strong>16:00 — 22:00</strong><span className="hours-note">Class times vary by location.</span></div></div></section>

        <section className="cta-band"><div className="cta-spark"><Spark /></div><SectionLabel>YOUR SONG IS WAITING</SectionLabel><h2>Ready to make<br /><em>some moves?</em></h2><p>Pick a class, show up, and see where the music takes you.</p><button className="button button-light" onClick={() => openBooking()}>Let’s dance <Arrow /></button><span className="cta-orbit orbit-a" /><span className="cta-orbit orbit-b" /></section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><Mark /><span>lundance<span className="brand-dot">.</span></span></a><span className="footer-tag">FIND YOUR RHYTHM. FIND YOUR PEOPLE.</span><div className="footer-contact"><a href="mailto:hello@lundance.example">hello@lundance.example</a><span>+46 70 000 00 00</span></div><span className="footer-copy">© 2026 Lundance · fictional project contact details</span></footer>
    </div>
    {booking && <BookingModal key={booking} selected={booking} onClose={closeBooking} />}
  </>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)

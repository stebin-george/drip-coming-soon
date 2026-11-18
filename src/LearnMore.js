import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LearnMore.css';

const Arrow = ({ strokeWidth = 2 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

function Brand() {
  const navigate = useNavigate();

  return (
    <a className="brand" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
      drip..<sup>®</sup>
    </a>
  );
}

export function SiteHeader() {
  return (
    <nav>
      <div className="container">
        <Brand />
        <a className="pill" href="mailto:team@drip.live">
          Work With Us <Arrow />
        </a>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  const navigate = useNavigate();
  const go = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer>
      <div className="container">
        <div className="frow">
          <Brand />
          <div className="vr" />
          <div className="social">
            <a href="https://instagram.com/dripdotlive" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://x.com/dripdotlive" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z" />
              </svg>
            </a>
            <span>@dripdotlive</span>
            <span>•</span>
            <a href="mailto:team@drip.live">team@drip.live</a>
          </div>
        </div>
        <div className="fbottom">
          <div className="legal-links">
            <a href="/terms" onClick={go('/terms')}>Terms of Use</a>
            <a href="/privacy" onClick={go('/privacy')}>Privacy Policy</a>
            <a href="/refunds" onClick={go('/refunds')}>Refund &amp; Cancellation Policy</a>
          </div>
          <p className="copy">
            pwrd. by DAMN, XOXO Inc. •{' '}
            <svg className="flag" viewBox="0 0 200 100" role="img" aria-label="Canada">
              <rect width="200" height="100" fill="#fff" />
              <rect width="50" height="100" fill="#d52b1e" />
              <rect x="150" width="50" height="100" fill="#d52b1e" />
              <polygon
                transform="translate(72.5 6) scale(.55 .98)"
                fill="#d52b1e"
                points="50,5 56,17 63,14 60,35 72,24 75,30 87,27 83,40 90,44 70,60 73,68 53,65 53.5,90 46.5,90 47,65 27,68 30,60 10,44 17,40 13,27 25,30 28,24 40,35 37,14 44,17"
              />
            </svg>
          </p>
        </div>
      </div>
    </footer>
  );
}

// The previous Google Form was deleted, so sign-ups go to team@drip.live by email
// until a new form or email list is connected here.
function submitSignup({ name, email, organization }) {
  const body = `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || '-'}`;
  window.location.href = `mailto:team@drip.live?subject=${encodeURIComponent(
    'Stay in the Loop sign-up'
  )}&body=${encodeURIComponent(body)}`;
}

function LoopForm() {
  const empty = { name: '', email: '', organization: '' };
  const [formData, setFormData] = useState(empty);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitSignup(formData);
    setFormData(empty);
    setSent(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" aria-label="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" aria-label="Email" value={formData.email} onChange={handleChange} required />
        <input
          type="text"
          name="organization"
          placeholder="Organization (optional)"
          aria-label="Organization"
          value={formData.organization}
          onChange={handleChange}
        />
        <button type="submit">
          REGISTER <Arrow strokeWidth={2.4} />
        </button>
      </form>
      <p className="fine">Early access • Future beta experiences • Updates</p>
      {sent && <p className="thanks">Thanks! Send the email that just opened to join the list.</p>}
    </>
  );
}

function LearnMore() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'drip.live - Immersive Live Experiences';
  }, []);

  return (
    <div className="dl">
      <SiteHeader />

      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container">
          <div className="hero-copy">
            <h1>
              <span className="grad nowrap">Building the Future of</span>
              <br />
              <span className="accent">Immersive</span> Live
              <br />
              <span className="grad">Experiences</span>
            </h1>
            <div className="rule" />
            <p className="lead">Connecting people, spaces and culture through performance, streaming and XR.</p>
            <a className="pill" href="#signal">
              Explore the Roadmap <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="container">
          <h2>Why It Matters</h2>
          <p className="sub">A step toward connected experiences where sound, space, and audience interaction converge.</p>
        </div>
      </section>

      <section className="signal" id="signal">
        <div className="container">
          <h2>Signal</h2>
          <div className="steps">
            <div className="step">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="2" y="6" width="14" height="12" rx="2.5" />
                  <path d="M17 10.5l5-3v9l-5-3z" />
                </svg>
              </div>
              <div className="num">01</div>
              <h3>A/V Capture</h3>
              <div className="status live">
                <span className="dot" />
                LIVE
              </div>
            </div>
            <div className="step">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9.5c0-1.4 1.1-2.5 2.5-2.5h13c1.4 0 2.5 1.1 2.5 2.5v3.2c0 1.8-1.5 3.3-3.3 3.3h-1.4c-1.1 0-2.1-.6-2.6-1.6l-.5-.9a1.4 1.4 0 0 0-2.4 0l-.5.9c-.5 1-1.5 1.6-2.6 1.6H6.3C4.5 16 3 14.5 3 12.7z" />
                </svg>
              </div>
              <div className="num">02</div>
              <h3>AR Interaction</h3>
              <div className="status live">
                <span className="dot" />
                LIVE
              </div>
            </div>
            <div className="step">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 12a8 8 0 0 1-14.3 4.9M4 12A8 8 0 0 1 18.3 7.1" />
                  <path d="M18.5 3v4.3h-4.3M5.5 21v-4.3h4.3" />
                </svg>
              </div>
              <div className="num">03</div>
              <h3>Synchronization</h3>
              <div className="status dev">
                <span className="dot" />
                IN DEV
              </div>
            </div>
            <div className="step">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M2.5 8.8a14 14 0 0 1 19 0M5.6 12.2a9.5 9.5 0 0 1 12.8 0M8.7 15.5a5 5 0 0 1 6.6 0" />
                  <circle cx="12" cy="19" r="1.3" fill="currentColor" />
                </svg>
              </div>
              <div className="num">04</div>
              <h3>Connectivity</h3>
              <div className="status next">
                <span className="dot" />
                NEXT
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="loop">
        <div className="container">
          <h2>Stay in the Loop</h2>
          <p className="sub">Updates on new experiences and events.</p>
          <LoopForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default LearnMore;

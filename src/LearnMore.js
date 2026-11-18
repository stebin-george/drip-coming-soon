import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LearnMore.css';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSft794ivftHfS9Dce_KHn0CChkmI-a-qp9iFECI47-eJPzevA';

const FORM_FIELDS = {
  email: 'entry.1040340738',
  name: 'entry.1726547516',
  city: 'entry.1433977636',
};

const Logo = () => (
  <>
    drip..<sup>®</sup>
  </>
);

function RegisterForm({ fields, tags = true }) {
  const empty = Object.fromEntries(fields.map((f) => [f.name, '']));
  const [formData, setFormData] = useState(empty);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const body = new URLSearchParams();
      fields.forEach((f) => {
        if (f.entry) body.append(FORM_FIELDS[f.entry], formData[f.name]);
      });

      await fetch(`${FORM_URL}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      setStatus('success');
      setFormData(empty);
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map((f) => (
        <input
          key={f.name}
          type={f.type || 'text'}
          name={f.name}
          placeholder={f.placeholder}
          aria-label={f.placeholder}
          value={formData[f.name]}
          onChange={handleChange}
          required={f.required}
          disabled={status === 'sending'}
        />
      ))}
      <button type="submit" className="pillbtn solid full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Register →'}
      </button>
      {tags && <p className="small">Early access • Future beta experiences • Updates</p>}
      {status === 'success' && <p className="status success">You're in! We'll be in touch.</p>}
      {status === 'error' && <p className="status error">Something went wrong. Try again.</p>}
    </form>
  );
}

function OperatorForm() {
  const [formData, setFormData] = useState({ org: '', email: '', place: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Organization: ${formData.org}\nWork email: ${formData.email}\nPlace you operate: ${formData.place}`;
    window.location.href = `mailto:team@drip.live?subject=${encodeURIComponent(
      'Operator access'
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="org" placeholder="Organization" aria-label="Organization" value={formData.org} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Work email" aria-label="Work email" value={formData.email} onChange={handleChange} required />
      <input name="place" placeholder="Place you operate" aria-label="Place you operate" value={formData.place} onChange={handleChange} />
      <button type="submit" className="pillbtn solid full">
        Request access →
      </button>
    </form>
  );
}

const PinIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16 28s8-7.5 8-14a8 8 0 0 0-16 0c0 6.5 8 14 8 14z" />
    <circle cx="16" cy="14" r="3" />
  </svg>
);

const WaveIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M3 16h3M8 11v10M12 7v18M16 12v8M20 9v14M24 13v6M27 16h2" />
  </svg>
);

const Row = ({ icon, title, text }) => (
  <div className="row">
    <div className="ic">{icon}</div>
    <div>
      <h3>{title}</h3>
      <p className="t">{text}</p>
    </div>
  </div>
);

function Learn() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <div className="copy">
            <h1>
              Building the Future of <em>Immersive</em> Live Experiences
            </h1>
            <p className="lead">
              We are developing immersive live experience infrastructure connecting people, spaces and
              culture through performance, streaming, audience interaction and future XR environments.
            </p>
            <hr className="rule" />
            <h2>Sonic Mixer</h2>
            <p>
              Our first performance environment, where live music became the proving ground for <Logo />.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap why">
        <h2>Why It Matters</h2>
        <p>A step toward connected experiences where sound, space, and audience interaction converge.</p>
      </section>

      <section className="wrap prog">
        <div>
          <div className="eyebrow">Signal</div>
          <h2>Our Progress</h2>
          <p>From live events to a connected ecosystem, building the next generation of immersive experiences.</p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="circ">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <rect x="4" y="9" width="16" height="14" rx="3" />
                <path d="M20 14l8-4v12l-8-4z" />
              </svg>
            </div>
            <div className="n">01</div>
            <h3>A/V Capture</h3>
            <p className="d">Live, validated through Sonic Mixer</p>
            <span className="pill live">
              <i />
              LIVE
            </span>
          </div>
          <div className="step">
            <div className="circ">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M4 14c0-2 1.5-3.5 3.5-3.5h17c2 0 3.5 1.5 3.5 3.5v2c0 3-2 5-5 5h-3c-1.5 0-2.5-1-3-2h-2c-.5 1-1.5 2-3 2H9c-3 0-5-2-5-5z" />
              </svg>
            </div>
            <div className="n">02</div>
            <h3>AR Interaction</h3>
            <p className="d">Live</p>
            <span className="pill live">
              <i />
              LIVE
            </span>
          </div>
          <div className="step dev">
            <div className="circ">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M25 12a9 9 0 0 0-16-3M7 20a9 9 0 0 0 16 3" />
                <path d="M9 4v5h5M23 28v-5h-5" />
              </svg>
            </div>
            <div className="n">03</div>
            <h3>Synchronization</h3>
            <p className="d">In development</p>
            <span className="pill dev">
              <i />
              IN DEV
            </span>
          </div>
          <div className="step next">
            <div className="circ">
              <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M4 13a17 17 0 0 1 24 0M9 18a10 10 0 0 1 14 0M13.5 22.5a4 4 0 0 1 5 0" />
                <circle cx="16" cy="26" r="1" fill="currentColor" />
              </svg>
            </div>
            <div className="n">04</div>
            <h3>Connectivity</h3>
            <p className="d">Next</p>
            <span className="pill next">
              <i />
              NEXT
            </span>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div>
            <h2>Work With Us</h2>
            <p className="s">For operators ready to build immersive experiences.</p>
            <a className="pillbtn solid" href="mailto:team@drip.live?subject=Discovery%20call">
              Book a Discovery Call →
            </a>
          </div>
          <div className="form">
            <h2>Stay in the Loop</h2>
            <p className="form-intro">Updates on new experiences and events.</p>
            <RegisterForm
              fields={[
                { name: 'name', placeholder: 'Name', entry: 'name', required: true },
                { name: 'email', type: 'email', placeholder: 'Email', entry: 'email', required: true },
                { name: 'org', placeholder: 'Organization (optional)', entry: 'city' },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Experience() {
  const [sub, setSub] = useState('join');

  return (
    <main>
      <div className="wrap exp">
        <div className="seg" role="tablist" aria-label="Audience">
          <button role="tab" aria-selected={sub === 'join'} onClick={() => setSub('join')}>
            Join
          </button>
          <button role="tab" aria-selected={sub === 'operate'} onClick={() => setSub('operate')}>
            Operate
          </button>
        </div>

        {sub === 'join' ? (
          <div>
            <h1>
              Step into the <em>layer</em>
            </h1>
            <p className="lead">Find drops in real places. Join live moments. Hear the music that plays through them.</p>
            <div className="feat">
              <div className="im" />
              <div className="in">
                <h3>[Experience name]</h3>
                <div className="m">[Place] · [Dates]</div>
                <a className="pillbtn solid" href="#join-form">
                  Join this experience →
                </a>
              </div>
            </div>
            <Row icon={<PinIcon />} title="Find" text="Drops are placed in real places around you." />
            <Row
              icon={
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <rect x="9" y="3" width="14" height="26" rx="3" />
                  <path d="M14 25h4" />
                </svg>
              }
              title="Open"
              text="Discover them on your phone."
            />
            <Row icon={<WaveIcon />} title="Hear" text="Live music plays through the layer." />
            <hr id="join-form" />
            <h2>Join</h2>
            <p className="form-intro">Be among the first in.</p>
            <RegisterForm
              fields={[
                { name: 'name', placeholder: 'Name', entry: 'name', required: true },
                { name: 'email', type: 'email', placeholder: 'Email', entry: 'email', required: true },
              ]}
            />
          </div>
        ) : (
          <div>
            <h1>
              Run a place on the <em>layer</em>
            </h1>
            <p className="lead">Operators place drops, host live moments and see what worked.</p>
            <hr />
            <Row
              icon={
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <rect x="5" y="7" width="22" height="18" rx="3" strokeDasharray="3 3" />
                  <circle cx="16" cy="16" r="3" />
                </svg>
              }
              title="Claim a place"
              text="Your space becomes part of the layer."
            />
            <Row icon={<PinIcon />} title="Place a drop" text="An AR hunt, an object, a live stream or music." />
            <Row icon={<WaveIcon />} title="Add music" text="Bring live music to any place." />
            <Row
              icon={
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <rect x="4" y="8" width="24" height="16" rx="3" />
                  <path d="M14 12.5l6 3.5-6 3.5z" />
                </svg>
              }
              title="See the results"
              text="People, time and a recap video."
            />
            <hr />
            <h2>Become an operator</h2>
            <p className="form-intro">We confirm with a short call.</p>
            <OperatorForm />
          </div>
        )}
      </div>
    </main>
  );
}

export function SiteHeader({ tab }) {
  const navigate = useNavigate();

  return (
    <header>
      <div className="wrap">
        <a className="logo" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          <Logo />
        </a>
        <nav role="tablist" aria-label="Pages">
          <button role="tab" aria-selected={tab === 'learn'} onClick={() => navigate('/learn-more')}>
            Learn more
          </button>
          <button role="tab" aria-selected={tab === 'experience'} onClick={() => navigate('/experience')}>
            Experience
          </button>
        </nav>
        <a className="pillbtn" href="mailto:team@drip.live?subject=Discovery%20call">
          Work With Us →
        </a>
      </div>
    </header>
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
      <div className="wrap">
        <div className="logo">
          <Logo />
        </div>
        <div className="soc">
          <a href="https://x.com/dripdotlive" aria-label="X" target="_blank" rel="noopener noreferrer">
            X
          </a>
          <span>@dripdotlive · team@drip.live</span>
        </div>
        <div className="links">
          <a href="/terms" onClick={go('/terms')}>Terms of Use</a>
          <a href="/privacy" onClick={go('/privacy')}>Privacy Policy</a>
          <a href="/refunds" onClick={go('/refunds')}>Refund &amp; Cancellation Policy</a>
        </div>
        <div className="legal">pwrd. by DAMN, XOXO Inc. · Toronto, Ontario, Canada</div>
      </div>
    </footer>
  );
}

function LearnMore() {
  const { pathname } = useLocation();
  const tab = pathname === '/experience' ? 'experience' : 'learn';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);

  return (
    <div className="dl">
      <SiteHeader tab={tab} />
      {tab === 'experience' ? <Experience /> : <Learn />}
      <SiteFooter />
    </div>
  );
}

export default LearnMore;

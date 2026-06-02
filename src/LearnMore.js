import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LearnMore.css';

function LearnMore() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', city: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSft794ivftHfS9Dce_KHn0CChkmI-a-qp9iFECI47-eJPzevA';

      await fetch(`${formUrl}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'entry.1040340738': formData.email,
          'entry.1726547516': formData.name,
          'entry.1433977636': formData.city,
        }),
      });

      setStatus('success');
      setFormData({ name: '', email: '', city: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="lm-page">
      <div className="lm-container">
        <button className="lm-back" onClick={() => navigate('/')}>
          ← Back
        </button>

        <div className="lm-logo-wrap">
          <img src="/logo2.png" alt="Drip" className="lm-logo" />
        </div>

        <h1 className="lm-headline">Building the Future of<br />Immersive Live Music</h1>

        <p className="lm-body">
          drip.live is developing immersive live experience infrastructure connecting
          performance, streaming, audience interaction, and future XR environments.
        </p>

        <div className="lm-divider" />

        <h2 className="lm-section-title">Sonic Mixer</h2>
        <p className="lm-body">
          The first performance environment powering the foundation of drip.live.
        </p>

        <div className="lm-divider" />

        <h2 className="lm-section-title">Why It Matters</h2>
        <p className="lm-body">
          A step toward connected experiences where sound, space, and audience interaction converge.
        </p>

        <div className="lm-divider" />

        <div className="lm-roadmap">
          <div className="lm-milestone">
            <span className="lm-milestone-tag done">Signal 01</span>
            <div>
              <h3 className="lm-milestone-title">A/V Capture</h3>
              <p className="lm-milestone-desc">Validated through Sonic Mixer</p>
            </div>
          </div>

          <div className="lm-milestone">
            <span className="lm-milestone-tag">Signal 02</span>
            <div>
              <h3 className="lm-milestone-title">AR Interaction Layer</h3>
              <p className="lm-milestone-desc">In development</p>
            </div>
          </div>

        </div>

        <div className="lm-divider" />

        <div className="lm-register">
          <h2 className="lm-section-title">Register Interest</h2>
          <p className="lm-body">Be among the first to hear what comes next.</p>
          <form className="lm-form-vertical" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="lm-input"
              placeholder="eg: John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            />
            <input
              type="email"
              name="email"
              className="lm-input"
              placeholder="johndoe@drip.live"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            />
            <input
              type="text"
              name="city"
              className="lm-input"
              placeholder="Ibiza"
              value={formData.city}
              onChange={handleChange}
              disabled={status === 'sending'}
            />
            <button type="submit" className="lm-submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Register'}
            </button>
          </form>
          {status === 'success' && <p className="lm-status success">You're in! We'll be in touch.</p>}
          {status === 'error' && <p className="lm-status error">Something went wrong. Try again.</p>}
        </div>

        <div className="lm-divider" />

        <div className="lm-contact">
          <a
            href="https://instagram.com/dripdotlive"
            target="_blank"
            rel="noopener noreferrer"
            className="lm-link"
          >
            @dripdotlive
          </a>
          <a href="mailto:team@drip.live" className="lm-link">
            team@drip.live
          </a>
        </div>

        <p className="lm-powered-by">pwrd. by DAMN, XOXO INC</p>
      </div>
    </div>
  );
}

export default LearnMore;

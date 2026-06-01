import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LearnMore.css';

function LearnMore() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSft794ivftHfS9Dce_KHn0CChkmI-a-qp9iFECI47-eJPzevA';
      const entryId = 'entry.1040340738';

      await fetch(`${formUrl}/formResponse`, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ [entryId]: email }),
      });

      setStatus('success');
      setEmail('');
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
          drip.live is developing immersive XR music and live experience infrastructure
          that connects performance, streaming, and interactive audience environments
          across venues and remote spaces.
        </p>

        <div className="lm-divider" />

        <p className="lm-body">
          Our first major technical milestone has now been successfully validated through{' '}
          <span className="lm-highlight">Sonic Mixer</span>, our sound-first performance environment.
        </p>

        <p className="lm-body">
          Using professional club-standard DJ hardware, we validated stable synchronized
          audio and video capture, reliable device connection, and input verification
          before recording in a live performance setup.
        </p>

        <p className="lm-body">
          This milestone moves drip.live from concept into real-world technical validation
          and brings us closer to building connected immersive experiences across multiple spaces.
        </p>

        <div className="lm-divider" />

        <h2 className="lm-section-title">What is Sonic Mixer?</h2>
        <p className="lm-body">
          Sonic Mixer is being developed as the performance engine behind drip.live. It is
          designed to support live music capture, immersive audience experiences, and future
          connected performance environments across venues and remote audiences.
        </p>

        <div className="lm-divider" />

        <h2 className="lm-section-title">Why this matters</h2>
        <p className="lm-body">
          This is an important step toward a new format of live experience — one where sound,
          space, streaming, and immersive technology work together across physical and digital environments.
        </p>

        <div className="lm-divider" />

        <div className="lm-register">
          <h2 className="lm-section-title">Register your interest</h2>
          <p className="lm-body">Be the first to know when we launch. Join our loyalty program.</p>
          <form className="lm-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="lm-email-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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

        <p className="lm-updates">More updates are coming soon.</p>

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
      </div>
    </div>
  );
}

export default LearnMore;

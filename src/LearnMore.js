import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LearnMore.css';

function LearnMore() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', city: '', interest: '' });
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
          'entry.880172497': formData.interest,
        }),
      });

      setStatus('success');
      setFormData({ name: '', email: '', city: '', interest: '' });
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

        <h2 className="lm-section-title">Map ahead</h2>
        <div className="lm-roadmap">
          <div className="lm-milestone">
            <span className="lm-milestone-tag">M 1</span>
            <div>
              <h3 className="lm-milestone-title">A/V Capture</h3>
              <p className="lm-milestone-desc">Sonic Mixer, live</p>
            </div>
          </div>
          <div className="lm-milestone">
            <span className="lm-milestone-tag">M 2</span>
            <div>
              <h3 className="lm-milestone-title">AR Interaction Layer</h3>
              <p className="lm-milestone-desc">Immersive audience engagement and experiences</p>
            </div>
          </div>
          <div className="lm-milestone">
            <span className="lm-milestone-tag">M 3</span>
            <div>
              <h3 className="lm-milestone-title">Connectivity Infrastructure</h3>
              <p className="lm-milestone-desc">Connected experiences across spaces and souls</p>
            </div>
          </div>
          <div className="lm-milestone">
            <span className="lm-milestone-tag">M 4</span>
            <div>
              <h3 className="lm-milestone-title">Hardware Integration</h3>
              <p className="lm-milestone-desc">Immersive XR experience deployments</p>
            </div>
          </div>
        </div>

        <div className="lm-divider" />

        <div className="lm-register">
          <h2 className="lm-section-title">Help Shape the Future of Immersive Live Music</h2>
          <p className="lm-body">
            We're currently building the next generation of connected live experiences.
          </p>
          <p className="lm-body">Join our early access list to:</p>
          <ul className="lm-benefits">
            <li>receive platform updates</li>
            <li>access future beta programs</li>
            <li>hear about upcoming deployments</li>
            <li>stay informed as new cities launch</li>
          </ul>

          <h3 className="lm-section-title">Register Interest</h3>
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
              placeholder="johndoe@example.com"
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
            <div className="lm-interest-group">
              <p className="lm-interest-label">I am interested as:</p>
              <label className="lm-radio">
                <input
                  type="radio"
                  name="interest"
                  value="User"
                  checked={formData.interest === 'User'}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
                <span>User</span>
              </label>
              <label className="lm-radio">
                <input
                  type="radio"
                  name="interest"
                  value="Artist"
                  checked={formData.interest === 'Artist'}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
                <span>Artist</span>
              </label>
            </div>
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

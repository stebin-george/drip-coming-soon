import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LearnMore.css';

function LearnMore() {
  const navigate = useNavigate();

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
          DRIP.LIVE is developing immersive XR music and live experience infrastructure
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
          This milestone moves DRIP.LIVE from concept into real-world technical validation
          and brings us closer to building connected immersive experiences across multiple spaces.
        </p>

        <div className="lm-divider" />

        <h2 className="lm-section-title">What is Sonic Mixer?</h2>
        <p className="lm-body">
          Sonic Mixer is being developed as the performance engine behind DRIP.LIVE. It is
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

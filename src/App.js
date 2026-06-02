import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const audio = new Audio('/intro-sound.wav');
    audio.play().catch(() => {});
    navigate('/learn-more');
  };

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Comprehensive browser detection
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAndroid = /Android/.test(navigator.userAgent);
      const isOldBrowser = /MSIE|Trident/.test(navigator.userAgent);
      
      console.log('Browser detected:', { isMobile, isIOS, isAndroid, isOldBrowser });

      const playVideo = async () => {
        try {
          // Set all possible attributes for maximum compatibility
          video.muted = true;
          video.playsInline = true;
          video.setAttribute('webkit-playsinline', 'true');
          video.setAttribute('x5-playsinline', 'true');
          video.setAttribute('x5-video-player-type', 'h5');
          video.setAttribute('x5-video-player-fullscreen', 'false');
          video.setAttribute('x5-video-orientation', 'landscape');
          
          // iOS specific
          if (isIOS) {
            video.setAttribute('webkit-playsinline', 'true');
            video.setAttribute('playsinline', 'true');
          }
          
          // Android specific
          if (isAndroid) {
            video.setAttribute('x5-video-player-type', 'h5-page');
          }
          
          await video.play();
          console.log('✅ Video autoplay successful');
        } catch (error) {
          console.log('⚠️ Video autoplay failed:', error.message);
          
          // Fallback: play on user interaction
          const handleInteraction = () => {
            video.play().then(() => {
              console.log('✅ Video started on user interaction');
            }).catch(console.log);
            
            // Remove listeners
            ['touchstart', 'click', 'touchend', 'mousedown'].forEach(event => {
              document.removeEventListener(event, handleInteraction);
            });
          };
          
          // Add multiple interaction listeners
          ['touchstart', 'click', 'touchend', 'mousedown'].forEach(event => {
            document.addEventListener(event, handleInteraction, { once: true });
          });
          
          console.log('📱 Video will play on user interaction');
        }
      };

      // Multiple ways to trigger video play
      video.addEventListener('loadeddata', playVideo);
      video.addEventListener('canplay', playVideo);
      video.addEventListener('loadedmetadata', playVideo);
      
      // Fallback timeout
      setTimeout(playVideo, 2000);
    }
  }, []);

  const handleVideoLoad = () => {
    console.log('✅ Video loaded successfully');
  };

  const handleVideoError = (error) => {
    console.error('❌ Video error:', error);
  };

  const handleVideoPlay = () => {
    console.log('✅ Video started playing');
  };

  return (
    <div className="App">
      <video 
        ref={videoRef}
        className="background-video" 
        autoPlay 
        muted 
        loop 
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
        preload="auto"
        style={{ opacity: 0.3 }}
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onPlay={handleVideoPlay}
      >
        <source src="/background-video.mp4" type="video/mp4" />
        {/* Fallback for older browsers */}
        <source src="/background-video.webm" type="video/webm" />
        <source src="/background-video.ogv" type="video/ogg" />
        <p>Your browser does not support the video tag.</p>
      </video>
      <div className="coming-soon-container">
        <div className="logo-container">
          <img src="/logo2.png" alt="Logo" className="logo" />
        </div>
        <h1 className="coming-soon-title">coming soon</h1>
        <button className="learn-more-btn" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
      <p className="powered-by">pwrd. by DAMN, XOXO INC</p>
    </div>
  );
}

export default App;

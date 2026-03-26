# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start        # Dev server at localhost:3000
npm run build    # Production build → build/
npm test         # Run tests in watch mode
npm test -- --watchAll=false  # Run tests once (CI mode)
```

## Architecture

Single-page React app (Create React App) deployed on Vercel. The entire UI is one component: `src/App.js`.

**Layout:** Full-viewport black background with a looping MP4 video (`public/background-video.mp4`) at 30% opacity as a background layer (z-index: -1), overlaid by a centered logo (`public/logo2.png`) and "coming soon" text.

**Video autoplay strategy:** `App.js` uses a `useRef` + `useEffect` to handle cross-browser autoplay restrictions. It sets mobile-specific attributes (webkit-playsinline, x5-playsinline for WeChat/Android), attempts `video.play()` on `loadeddata`/`canplay`/`loadedmetadata` events plus a 2s timeout fallback, and falls back to playing on first user interaction (touchstart/click/mousedown) if autoplay is blocked.

**Deployment:** `vercel.json` configures CRA build with a catch-all rewrite to `index.html` for client-side routing.

**Styling:** All styles in `src/App.css`. Uses `clamp()` for responsive font sizing and has breakpoints at 768px and 480px.

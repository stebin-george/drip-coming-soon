import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import LearnMore from './LearnMore';
import LegalPage from './LegalPage';
import { terms, privacy, refunds } from './legalContent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/terms" element={<LegalPage doc={terms} />} />
        <Route path="/privacy" element={<LegalPage doc={privacy} />} />
        <Route path="/refunds" element={<LegalPage doc={refunds} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

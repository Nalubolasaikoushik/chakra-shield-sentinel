
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';

// In a real production environment, we would have a dedicated server
// For the demo, we'll import and start the server in development mode only
if (import.meta.env.DEV) {
  import('./server/index.js')
    .then(() => {
      console.log('API server started in development mode');
    })
    .catch((error) => {
      console.error('Failed to load the API server:', error);
    });
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>
);

import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoveAccept from './LoveAccept.jsx';
import Accept from './Accept.jsx';
import Loader from './Loader.jsx';

// Lazy load App
const App = lazy(() => import("./App"));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Suspense wraps Routes or the lazy-loaded element */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/love" element={<LoveAccept />} />
          <Route path="/accept" element={<Accept />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);

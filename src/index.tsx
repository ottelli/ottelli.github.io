import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import App from './App';

import Welcome from "./pages/Welcome/Welcome";
import Contact from "./pages/Contact/Contact";
import Persistence from "./pages/Persistence/Persistence";
import Patches from "./pages/Patches/Patches";
import Sense from "./pages/Sense/Sense";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Welcome />} />
          <Route path="contact" element={<Contact />} />
          <Route path="persistence" element={<Persistence />} />
          <Route path="patches" element={<Patches />} />
          <Route path="sense" element={<Sense />} />
          <Route path="*" element={<h5>404 - Nothing here</h5>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
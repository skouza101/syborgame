import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx'
import Browse from './router/Browse.jsx'
import Details from './router/Details.jsx'
import Stream from './router/Stream.jsx'
import Profile from './router/Profile.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/details" element={<Details />} />
        <Route path="/streams" element={<Stream />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


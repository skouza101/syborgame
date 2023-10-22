import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route , Routes , BrowserRouter} from "react-router-dom"
import Browse from './router/Browse.jsx'
import Details from './router/Details.jsx'
import Stream from './router/Stream.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} loader={"hello"} />
        <Route path="/Browse" element={<Browse />} />
        <Route path="/details" element={<Details />} />
        <Route path="/streams" element={<Stream />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

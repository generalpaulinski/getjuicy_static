import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermsOfService from "./components/TermsOfService";
import Home from "./components/Home";
import "./App.css";
import Imprint from "./components/Imprint";

function App() {

  return (
    <div className="App">

      {/* Header with logo and buttons */}
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <a href="/">
            <img src="/images/logo.png" alt="Logo" className="header-logo" />
            </a>
            <div className="header-buttons">
              <a href={"https://3dtube.xxx/search/ai-porn/"}><button className="header-button">Login</button></a>
              <a href={"https://3dtube.xxx/search/ai-porn/"}><button className="header-button">Sign Up</button></a>
            </div>
          </div>
        </div>
      </header>

      <Router>
        <Routes>
          {/* Other routes */}
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>


      {/* Footer Section */}
      <footer>
        <div className="container">
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          <p>&copy; 2025 Juicy AI. All rights reserved.</p>
          <a href="/terms-of-service" className="footer-link">
            Terms of Service
          </a>
          <a href="/imprint" className="footer-link">
            Imprint
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

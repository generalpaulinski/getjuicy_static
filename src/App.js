import React, { useState, useEffect } from "react";
import "./App.css";

// Carousel images (replace with your own image URLs)
const carouselImages = [
  {
    url: "/images/gallery1.webp",
    description: "Personalized AI Conversations",
  },
  {
    url: "/images/gallery2.webp",
    description: "State-of-the-Art AI Models",
  },
  {
    url: "/images/gallery3.webp",
    description: "24/7 Availability",
  },
  {
    url: "/images/gallery4.webp",
    description: "Interactive AI Experiences",
  },
  {
    url: "/images/gallery5.webp",
    description: "Cutting-Edge Technology",
  },
];

// First Feature Section (3 features)
const featureItems = [
  {
    image: "/images/feature1.webp",
    title: "Personalized Conversations",
    description: "Our AI adapts to your preferences for a tailored experience.",
    link: "#",
  },
  {
    image: "/images/feature2.webp",
    title: "Advanced AI Models",
    description: "State-of-the-art technology for realistic interactions.",
    link: "#",
  },
  {
    image: "/images/feature3.webp",
    title: "24/7 Availability",
    description: "Always ready to chat, anytime, anywhere.",
    link: "#",
  },
];

// Second Feature Section (5 features)
const additionalFeatureItems = [
  {
    image: "/images/feature4.webp",
    title: "Real-Time Analytics",
    description: "Track and analyze user interactions in real-time for better insights.",
    link: "#",
  },
  {
    image: "/images/feature5.webp",
    title: "Customizable AI",
    description: "Tailor the AI to meet your specific needs and preferences.",
    link: "#",
  },
  {
    image: "/images/feature6.webp",
    title: "Multi-Language Support",
    description: "Communicate with users in multiple languages seamlessly.",
    link: "#",
  },
  {
    image: "/images/feature7.webp",
    title: "Secure & Private",
    description: "Your data is safe with our advanced security protocols.",
    link: "#",
  },
  {
    image: "/images/feature8.webp",
    title: "Scalable Solutions",
    description: "Grow your AI capabilities as your business expands.",
    link: "#",
  },
];

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Show the pop-up when the component mounts
    setShowPopup(true);
  }, []);

  // Auto-move carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleConfirmAge = () => {
    setShowPopup(false); // Hide the pop-up
  };

  const handleExitSite = () => {
    window.location.href = "https://www.google.com"; // Redirect to a safe site
  };

  // Get the indices for the 5 visible images (current, previous, and next)
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentImageIndex + i + carouselImages.length) % carouselImages.length;
      indices.push(index);
    }
    return indices;
  };

  return (
    <div className="App">
      {/* 18+ Pop-up */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>18+ Age Verification</h2>
            <p>This website contains adult content. You must be 18 years or older to enter.</p>
            <button onClick={handleConfirmAge}>I am 18 or older</button>
            <button onClick={handleExitSite}>Exit</button>
          </div>
        </div>
      )}

      {/* Header with logo and buttons */}
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <img src="/images/logo.png" alt="Logo" className="header-logo" />
            <div className="header-buttons">
              <button className="header-button">Login</button>
              <button className="header-button">Sign Up</button>
            </div>
          </div>
        </div>
      </header>

      {/* Header Section with Background Image */}
      <header className="header-with-bg">
        <div className="container">
          <h1>Juicy AI</h1>
          <p>Your AI Companion for Fun and Entertainment</p>
          {/* New button on top of the background image */}
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="carousel">
        <div className="carousel-container">
          {getVisibleIndices().map((index, i) => (
            <div
              key={index}
              className={`carousel-slide ${i === 2 ? "active" : ""}`}
              style={{
                transform: `scale(${i === 2 ? 1 : 0.7})`, // Scale down side images
                opacity: i === 2 ? 1 : 0.6, // Fade out side images
                zIndex: i === 2 ? 1 : 0, // Bring active image to the front
              }}
            >
              <img
                src={carouselImages[index].url}
                alt="Carousel"
                className="carousel-image"
              />
              <div className="carousel-overlay"></div>
              <div className="carousel-description">
                {carouselImages[index].description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* First Feature Section (3 features) */}
      <section id="features" className="features">
        <div className="container">
          <h2>Core Features</h2>
          <div className="feature-list">
            {featureItems.map((feature, index) => (
              <div key={index} className="feature-item">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="feature-image"
                />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href={feature.link} className="feature-link">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Feature Section (5 features) */}
      <section id="additional-features" className="additional-features">
        <div className="container">
          <h2>Advanced Features</h2>
          <div className="additional-feature-list">
            {additionalFeatureItems.map((feature, index) => (
              <div key={index} className="additional-feature-item">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="additional-feature-image"
                />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <a href={feature.link} className="additional-feature-link">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          <p>&copy; 2025 Juicy AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

// Carousel images (replace with your own image URLs)
const carouselImages = [
  {
    url: "/images/gallery1.webp",
    description: "promt: portrait view, two women (ebony and blonde), kitchen, in front of window, nudity, lesbian",
  },
  {
    url: "/images/gallery2.webp",
    description: "promt: beautiful girl, naked, ginger, irish, curvy, tattoos, blushing, large breasts, big ass, long hair",
  },
  {
    url: "/images/gallery3.webp",
    description: "promt: japanese girl, naked, small boobs, petite, in the bed, legs open, bukkake",
  },
  {
    url: "/images/gallery4.webp",
    description: "promt: nico robin, huge breasts, full body",
  },
  {
    url: "/images/gallery5.webp",
    description: "promt: k-pop idol, blonde hair, on stage, fishnet thong, erect nipples",
  },
  {
    url: "/images/gallery6.webp",
    description: "promt: naked brazilian woman, fingering her vagina, muscular physique, steamy sauna, legs spread, smiling naughtily, sweaty skin",
  },
  {
    url: "/images/gallery7.webp",
    description: "promt: beautiful white women, big tits, big round ass",
  },
  {
    url: "/images/gallery8.webp",
    description: "promt: dominant, goth, ass",
  },
  {
    url: "/images/gallery9.webp",
    description: "promt: beautiful women, firefighter helmet, stripping, inside fire department",
  },
  {
    url: "/images/gallery10.webp",
    description: "promt: naked, tattooed, big tits, goth, threesome",
  },
  {
    url: "/images/gallery11.webp",
    description: "promt: hot curvy milf, curly, brunette, moaning",
  },
  {
    url: "/images/gallery12.webp",
    description: "promt: natural breasted brunette, pubic hair, wet all over, in the shower",
  },
  {
    url: "/images/gallery13.webp",
    description: "promt: beautiful girl, naked, rainbow hair, huge breasts, oiled skin, kneeling in a pool",
  },
  {
    url: "/images/gallery14.webp",
    description: "promt: full-length shot of a beautiful girl, short blue hair, naked, spaceship bedroom",
  },
];

// First Feature Section (3 features)
const featureItems = [
  {
    image: "/images/feature1.webp",
    title: "Generate custom AI porn in seconds",
    description: "Our free AI porn generator lets your imagination run wild! Enjoy uncensored AI porn galleries full of hentai, photorealistic, asian, undress and hyperreal ai generated images. Get inspired and create your own perfect AI porn pics with getjuicy.ai endless customization features.",
    link: "#",
  },
  {
    image: "/images/feature2.webp",
    title: "Create your own hentai porn images",
    description: "Generate unique hentai art based on your favorite anime and game characters with our ai hentai generator. Unlock the juiciest results with the most advanced ai models for ai NSFW art, hentai, furry, and anime character generation, enabling you to create your perfect ai waifu!",
    link: "#",
  },
  {
    image: "/images/feature3.webp",
    title: "Undress celebrities and characters",
    description: "Uncover new perspectives of your favorite celebrities or characters with our undress AI. Use our free undress AI and nudify technology and get your customized AI nudes in an instant. Explore the full range of our deepnude possibilities.",
    link: "#",
  },
];

// Second Feature Section (5 features)
const additionalFeatureItems = [
  {
    image: "/images/feature4.webp",
    title: "FETISH AND POSING",
    description: "Try different NSFW AI poses and fetishes",
    link: "#",
  },
  {
    image: "/images/feature5.webp",
    title: "LEARN AND COPY OTHER PROMPTS",
    description: "Replicate images and enhance them to masterpieces",
    link: "#",
  },
  {
    image: "/images/feature6.webp",
    title: "DEEP NUDE IMAGES",
    description: "Undress your favorite celebrities and characters and modify their attributes",
    link: "#",
  },
  {
    image: "/images/feature7.webp",
    title: "CREATIVE PORN AI",
    description: "Discover different art styles and models",
    link: "#",
  },
  {
    image: "/images/feature8.webp",
    title: "HD QUALITY PORN IMAGES",
    description: "Details matter, we focus high quality porn images",
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
          <h1>The juiciest AI porn you will generate.</h1>
          <p>Over 500,000 thousand AI porn pictures generated with your favorite AI porn generator.</p>
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
                  Get started
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

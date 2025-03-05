import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

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
    link: "https://3dtube.xxx/search/ai-porn/",
  },
  {
    image: "/images/feature2.webp",
    title: "Create your own hentai porn images",
    description: "Generate unique hentai art based on your favorite anime and game characters with our ai hentai generator. Unlock the juiciest results with the most advanced ai models for ai NSFW art, hentai, furry, and anime character generation, enabling you to create your perfect ai waifu!",
    link: "https://3dtube.xxx/search/ai-porn/",
  },
  {
    image: "/images/feature3.webp",
    title: "Undress celebrities and characters",
    description: "Uncover new perspectives of your favorite celebrities or characters with our undress AI. Use our free undress AI and nudify technology and get your customized AI nudes in an instant. Explore the full range of our deepnude possibilities.",
    link: "https://3dtube.xxx/search/ai-porn/",
  },
];

// Second Feature Section (5 features)
const additionalFeatureItems = [
  {
    image: "/images/feature4.webp",
    title: "FETISH AND POSING",
    description: "Try different NSFW AI poses and fetishes",
    link: "https://3dtube.xxx/search/ai-porn/",
  },
  {
    image: "/images/feature5.webp",
    title: "LEARN AND COPY OTHER PROMPTS",
    description: "Replicate images and enhance them to masterpieces",
    link: "https://3dtube.xxx/search/ai-porn/",
  },
  {
    image: "/images/feature6.webp",
    title: "DEEP NUDE IMAGES",
    description: "Undress your favorite celebrities and characters and modify their attributes",
    link: "https://3dtube.xxx/search/ai-porn/",
  },
  {
    image: "/images/feature7.webp",
    title: "CREATIVE PORN AI",
    description: "Discover different art styles and models",
    link: "https://3dtube.xxx/search/ai-porn/",
  },
  {
    image: "/images/feature8.webp",
    title: "HD QUALITY PORN IMAGES",
    description: "Details matter, we focus high quality porn images",
    link: "https://3dtube.xxx/search/ai-porn/",
  },
];


const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Show the pop-up when the component mounts
    setShowPopup(true);
  }, []);

  const handleConfirmAge = () => {
    setShowPopup(false); // Hide the pop-up
  };

  const handleExitSite = () => {
    window.location.href = "https://www.google.com"; // Redirect to a safe site
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formRef = useRef(null);

  // Auto-move carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Get the indices for the 5 visible images (current, previous, and next)
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentImageIndex + i + carouselImages.length) % carouselImages.length;
      indices.push(index);
    }
    return indices;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form data
    fetch("https://script.google.com/macros/s/AKfycby1u1Kprogg5PLY-j1roRxHG5oC_5XyiMnQUyKBIr-NiTskIdvQnBWz17_sNtXr2Q46cQ/exec", {
      method: 'POST',
      body: new FormData(formRef.current),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log(data);

        // Clear the input field after successful submission
        formRef.current.reset(); // Reset the entire form
      })
      .catch(err => {
        console.error('There was a problem with the fetch operation:', err);
      });
  };

  return (
    <div className="body">
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

      {/* Header Section with Background Image */}
      <header className="header-with-bg">
        <div className="container">
          <h1>The juiciest AI porn you will generate.</h1>
          <p>Over 500,000 thousand AI porn pictures generated with your favorite AI porn generator.</p>
          {/* New button on top of the background image */}
          <a href={"https://3dtube.xxx/search/ai-porn/"}><button className="cta-button">Get Started</button></a>
        </div>
      </header>

      <section className="carousel">
        <div className="carousel-container">
          {getVisibleIndices().map((index, i) => (
            <div
              key={index}
              className={`carousel-slide ${i === 1 ? "active" : ""}`} // Center image is active
              style={{
                transform: `scale(${i === 1 ? 1 : 0.7})`, // Scale down side images
                opacity: i === 1 ? 1 : 0.6, // Fade out side images
                zIndex: i === 1 ? 1 : 0, // Bring center image to the front
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
      <Container
        style={{
          width: "100%", // Full page width
          height: "40vh", // Reduced height
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#1a1a1a", // Dark background
          color: "#fff", // White text
        }}
      >
        <Form
          style={{
            textAlign: "left",
            backgroundColor: "#2a2a2a", // Slightly lighter dark background
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)", // Subtle shadow
            width: "100%", // Full width of the container
            maxWidth: "800px", // Wider form for input and button in one row
          }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h3 style={{ marginBottom: "20px", color: "#fff", fontWeight: "600" }}>
            Want more AI Porn? Subscribe here to get the latest news & insights!
          </h3>
          <Form.Group className="mb-3" controlId="formBasicEmail" style={{ display: "flex", gap: "10px" }}>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="Email"
              required
              style={{
                borderRadius: "25px", // Rounded corners
                border: "1px solid #444", // Dark border
                padding: "12px 20px", // Padding for better input feel
                width: "70%", // Input takes 70% of the row
                backgroundColor: "#333", // Dark input background
                color: "#fff", // White text
              }}
            />
            <Button
              style={{
                borderRadius: "25px", // Rounded corners
                padding: "12px 30px", // Padding for better button feel
                background: "linear-gradient(90deg, #ff7e5f, #feb47b)", // Gradient background
                border: "none", // Remove default border
                fontWeight: "500", // Slightly bold text
                transition: "background 0.3s ease", // Smooth hover transition
                color: "#fff", // White text
                width: "30%", // Button takes 30% of the row
              }}
              variant="success"
              type="submit"
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
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

    </div>
  );
};

export default Home;

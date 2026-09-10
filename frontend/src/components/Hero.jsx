import "./Hero.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Explore The Beauty Of
            <span> Munnar</span>
          </h1>

          <p>
            Premium Tours • Luxury Resorts • Adventure Camping • Cab Services
          </p>

          <div className="hero-buttons">
            <Link to="/booking" className="hero-btn">
              Book Now
            </Link>

            <a
              href="tel:8848738997"
              className="hero-btn secondary"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
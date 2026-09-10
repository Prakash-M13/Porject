import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">
          <h2>Travel Your Way</h2>

          <p>
            Explore Munnar with premium tour packages,
            luxury resorts, adventure camping and
            comfortable cab services.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/tours">Tours</Link>
          <Link to="/camping">Camping</Link>
          <Link to="/resorts">Resorts</Link>
          <Link to="/cabs">Cabs</Link>
        </div>

        {/* Services */}

        <div className="footer-box">
          <h3>Services</h3>

          <p>Tour Packages</p>
          <p>Adventure Camping</p>
          <p>Luxury Resorts</p>
          <p>Cab Booking</p>
        </div>

        {/* Contact */}

        <div className="footer-box">
          <h3>Contact</h3>

          <p>📞 +91 88487 38997</p>
          <p>📧 travelyourwayholidays@gmail.com</p>
          <p>📍 Munnar, Kerala</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Travel Your Way Holidays.
          All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
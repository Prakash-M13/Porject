import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-left">
        <span>CONTACT US</span>

        <h2>Plan Your Dream Trip Today</h2>

        <p>
          Get in touch with us for tour packages,
          camping adventures, resort bookings and
          cab services in Munnar.
        </p>

        <div className="contact-info">
          <div>
            <h4>📞 Phone</h4>
            <p>+91 88487 38997</p>
          </div>

          <div>
            <h4>📧 Email</h4>
            <p>travelyourwayholidays@gmail.com</p>
          </div>

          <div>
            <h4>📍 Location</h4>
            <p>Munnar, Kerala, India</p>
          </div>
        </div>
      </div>

      <div className="contact-right">

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <textarea
            rows="5"
            placeholder="Tell us about your trip..."
          ></textarea>

          <button type="submit">
            Send Inquiry
          </button>

        </form>

      </div>

    </section>
  );
}

export default ContactSection;
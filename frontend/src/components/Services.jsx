import "./Services.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import tourImg from "../assets/images/tour.jpg";
import campingImg from "../assets/images/camping.jpg";
import resortImg from "../assets/images/resort.jpg";
import cabImg from "../assets/images/cab.jpg";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Tour Packages",
      desc: "Explore the breathtaking beauty of Munnar with our curated tour experiences.",
      image: tourImg,
      path: "/tours",
    },

    {
      title: "Adventure Camping",
      desc: "Camp under the stars with trekking, bonfires and sunrise views.",
      image: campingImg,
      path: "/camping",
    },

    {
      title: "Luxury Resorts",
      desc: "Stay in premium resorts surrounded by mountains and tea gardens.",
      image: resortImg,
      path: "/resorts",
    },

    {
      title: "Cab Services",
      desc: "Comfortable travel with experienced drivers and clean vehicles.",
      image: cabImg,
      path: "/cabs",
    },
  ];

  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="services">

      <div className="service-heading">
        <span>WHAT WE OFFER</span>
        <h2>Our Services</h2>
        <p>
          Everything you need for a perfect Munnar holiday.
        </p>
      </div>

      <div className="services-layout">

        {/* LEFT SIDE */}

        <div className="service-list">

          {services.map((service) => (
            <div
              key={service.title}
              className={`service-item ${
                activeService.title === service.title
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveService(service)
              }
            >

              <div>
                <h3>{service.title}</h3>

                <p>
                  {service.desc}
                </p>
              </div>

              <span className="arrow">
                →
              </span>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}

        <div
          className="service-preview"
          onClick={() =>
            navigate(activeService.path)
          }
        >

          <img
            src={activeService.image}
            alt={activeService.title}
          />

          <div className="preview-overlay">

            <h3>
              {activeService.title}
            </h3>

            <p>
              {activeService.desc}
            </p>

            <button>
              Explore Now
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;
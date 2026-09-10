import "./Gallery.css";
import { useNavigate } from "react-router-dom";

import mainImg from "../assets/images/gallery-main.jpg";
import teaImg from "../assets/images/gallery-tea.jpg";
import fallsImg from "../assets/images/gallery-falls.jpg";
import campingImg from "../assets/images/gallery-camping.jpg";
import resortImg from "../assets/images/gallery-resort.jpg";
import cabImg from "../assets/images/gallery-cab.jpg";

function Gallery() {
  const navigate = useNavigate();

  return (
    <section className="gallery">

      <div className="gallery-heading">
        <span>EXPLORE MUNNAR</span>
        <h2>Travel Gallery</h2>
        <p>
          Discover breathtaking destinations,
          luxury resorts, adventure camping and
          unforgettable travel experiences.
        </p>
      </div>

      <div className="gallery-layout">

        {/* Main Image */}

        <div
          className="gallery-main"
          onClick={() => navigate("/tours")}
        >
          <img src={mainImg} alt="Munnar" />

          <div className="gallery-overlay">
            <h3>Discover Munnar</h3>
            <p>
              Explore tea plantations, waterfalls
              and breathtaking viewpoints.
            </p>

            <button>Explore Tours</button>
          </div>
        </div>

        {/* Right Side */}

        <div className="gallery-side">

          <div
            className="gallery-card"
            onClick={() => navigate("/tours")}
          >
            <img src={teaImg} alt="" />
            <div className="gallery-card-overlay">
              <h3>Tea Gardens</h3>
            </div>
          </div>

          <div
            className="gallery-card"
            onClick={() => navigate("/tours")}
          >
            <img src={fallsImg} alt="" />
            <div className="gallery-card-overlay">
              <h3>Waterfalls</h3>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Cards */}

      <div className="gallery-bottom">

        <div
          className="gallery-bottom-card"
          onClick={() => navigate("/camping")}
        >
          <img src={campingImg} alt="" />
          <div className="gallery-card-overlay">
            <h3>Camping</h3>
          </div>
        </div>

        <div
          className="gallery-bottom-card"
          onClick={() => navigate("/resorts")}
        >
          <img src={resortImg} alt="" />
          <div className="gallery-card-overlay">
            <h3>Luxury Resorts</h3>
          </div>
        </div>

        <div
          className="gallery-bottom-card"
          onClick={() => navigate("/cabs")}
        >
          <img src={cabImg} alt="" />
          <div className="gallery-card-overlay">
            <h3>Cab Tours</h3>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Gallery;
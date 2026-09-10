import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Tours() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      setLoading(true);

      const res = await API.get("/tours");

      setTours(res.data.data);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Unable to load tour packages.");
    } finally {
      setLoading(false);
    }
  };
  const filteredTours = tours.filter(
  (tour) =>
    tour.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    tour.location
      .toLowerCase()
      .includes(search.toLowerCase())
);

  return (
    <div className="page">
      <h1>Tour Packages</h1>
      <input
  type="text"
  placeholder="Search Tours..."
  className="search-box"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
/>

      {loading && <div className="loader"></div>}

      {error && <h2 className="error">{error}</h2>}

      {!loading && !error && tours.length === 0 && (
        <h2 className="empty-message">
          No Tour Packages Available
        </h2>
      )}

      {!loading && !error && tours.length > 0 && (
        <div className="cards">
          {filteredTours.map((tour) => (
            <div className="tour-card" key={tour._id}>
              <img src={tour.image} alt={tour.title} />

              <h2>{tour.title}</h2>

              <p>{tour.location}</p>

              <h3>₹{tour.price}</h3>

              <p>{tour.description}</p>

              <button
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      packageName: tour.title,
                      serviceType: "Tour",
                    },
                  })
                }
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tours;
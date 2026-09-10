import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Resorts() {
  const [resorts, setResorts] =
    useState([]);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] =
    useState("");
  const [search, setSearch] = 
    useState("");


  const navigate = useNavigate();

  useEffect(() => {
    fetchResorts();
  }, []);

  const fetchResorts = async () => {
    try {
      setLoading(true);

      const res = await API.get("/resorts");

      setResorts(res.data.data);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Unable to load resorts.");
    } finally {
      setLoading(false);
    }
  };
  const filteredResorts =
  resorts.filter(
    (resort) =>
      resort.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      resort.location
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Resort Booking</h1>
      <input
  type="text"
  placeholder="Search Resorts..."
  className="search-box"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
/>

      {loading && <div className="loader"></div>}

      {error && <h2 className="error">{error}</h2>}

      {!loading &&
        !error &&
        resorts.length === 0 && (
          <h2 className="empty-message">
            No Resorts Available
          </h2>
        )}

      {!loading &&
        !error &&
        resorts.length > 0 && (
          <div className="tour-grid">
            {filteredResorts.map((resort) => (
              <div
                className="tour-card"
                key={resort._id}
              >
                <img
                  src={resort.image}
                  alt={resort.name}
                />

                <h2>{resort.name}</h2>

                <p>{resort.location}</p>

                <p>
                  ⭐ {resort.rating}
                </p>

                <h3>
                  ₹
                  {resort.pricePerNight}
                  / Night
                </h3>

                <p>
                  {resort.description}
                </p>

                <button
                  onClick={() =>
                    navigate("/booking", {
                      state: {
                        packageName:
                          resort.name,
                        serviceType:
                          "Resort",
                      },
                    })
                  }
                >
                  Book Resort
                </button>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

export default Resorts;
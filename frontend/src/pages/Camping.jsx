import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Camping() {
  const [campings, setCampings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");


  const navigate = useNavigate();

  useEffect(() => {
    fetchCampings();
  }, []);

  const fetchCampings = async () => {
    try {
      setLoading(true);

      const res = await API.get("/campings");

      setCampings(res.data.data);
      setError("");
    } catch (error) {
      console.log(error);
      setError(
        "Unable to load camping packages."
      );
    } finally {
      setLoading(false);
    }
  };
  const filteredCampings = campings.filter(
  (camp) =>
    camp.title
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    camp.location
      .toLowerCase()
      .includes(search.toLowerCase())
);

  return (
    <div className="page">
      <h1>Adventure Camping</h1>
      <input
  type="text"
  placeholder="Search Camping..."
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
        campings.length === 0 && (
          <h2 className="empty-message">
            No Camping Packages Available
          </h2>
        )}

      {!loading &&
        !error &&
        campings.length > 0 && (
          <div className="tour-grid">
            {filteredCampings.map((camp) => (
              <div
                className="tour-card"
                key={camp._id}
              >
                <img
                  src={camp.image}
                  alt={camp.title}
                />

                <h2>{camp.title}</h2>

                <p>{camp.location}</p>

                <h3>₹{camp.price}</h3>

                <p>{camp.description}</p>

                <button
                  onClick={() =>
                    navigate("/booking", {
                      state: {
                        packageName:
                          camp.title,
                        serviceType:
                          "Camping",
                      },
                    })
                  }
                >
                  Book Camping
                </button>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

export default Camping;
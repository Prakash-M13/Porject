import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Cabs() {
  const [cabs, setCabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");


  const navigate = useNavigate();

  useEffect(() => {
    fetchCabs();
  }, []);

  const fetchCabs = async () => {
    try {
      setLoading(true);

      const res = await API.get("/cabs");

      setCabs(res.data.data);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Unable to load cab services.");
    } finally {
      setLoading(false);
    }
  };
  const filteredCabs = cabs.filter(
  (cab) =>
    cab.vehicleName
      .toLowerCase()
      .includes(search.toLowerCase()) ||
    cab.vehicleType
      .toLowerCase()
      .includes(search.toLowerCase())
);

  return (
    <div className="page">
      <h1>Cab Services</h1>
      <input
  type="text"
  placeholder="Search Cabs..."
  className="search-box"
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
/>

      {loading && <div className="loader"></div>}

      {error && <h2 className="error">{error}</h2>}

      {!loading && !error && cabs.length === 0 && (
        <h2 className="empty-message">
          No Cab Services Available
        </h2>
      )}

      {!loading && !error && cabs.length > 0 && (
        <div className="tour-grid">
          {filteredCabs.map((cab) => (
            <div className="tour-card" key={cab._id}>
              <img
                src={cab.image}
                alt={cab.vehicleType + " - " + cab.vehicleName}
              />

              <h2>{cab.vehicleName}</h2>

              <p>{cab.vehicleType}</p>

              <h3>
                ₹{cab.pricePerKm} / KM
              </h3>

              <button
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      packageName:
                        cab.VehicleName +
                        " - " +
                        cab.vehicleType +
                        " Cab",
                      serviceType: "Cab",
                    },
                  })
                }
              >
                Book Cab
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cabs;
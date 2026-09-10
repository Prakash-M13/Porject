import { useEffect, useState } from "react";
import API from "../../services/api";

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [tours, setTours] = useState([]);
  const [campings, setCampings] = useState([]);
  const [cabs, setCabs] = useState([]);
  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const bookingRes = await API.get("/bookings");
      const tourRes = await API.get("/tours");
      const campingRes = await API.get("/campings");
      const cabRes = await API.get("/cabs");
      const resortRes = await API.get("/resorts");

      setBookings(bookingRes.data.data || []);
      setTours(tourRes.data.data || []);
      setCampings(campingRes.data.data || []);
      setCabs(cabRes.data.data || []);
      setResorts(resortRes.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const pending = bookings.filter(
    (b) => b.status === "Pending"
  ).length;

  const confirmed = bookings.filter(
    (b) => b.status === "Confirmed"
  ).length;

  const cancelled = bookings.filter(
    (b) => b.status === "Cancelled"
  ).length;

  return (
    <div>

      <h1>Dashboard</h1>

      <div className="dashboard-grid">

        <div className="dash-card">
          <h2>{bookings.length}</h2>
          <p>Total Bookings</p>
        </div>

        <div className="dash-card">
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>

        <div className="dash-card">
          <h2>{confirmed}</h2>
          <p>Confirmed</p>
        </div>

        <div className="dash-card">
          <h2>{cancelled}</h2>
          <p>Cancelled</p>
        </div>

        <div className="dash-card">
          <h2>{tours.length}</h2>
          <p>Tours</p>
        </div>

        <div className="dash-card">
          <h2>{campings.length}</h2>
          <p>Camping</p>
        </div>

        <div className="dash-card">
          <h2>{cabs.length}</h2>
          <p>Cabs</p>
        </div>

        <div className="dash-card">
          <h2>{resorts.length}</h2>
          <p>Resorts</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
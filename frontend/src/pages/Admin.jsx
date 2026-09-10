import { useState } from "react";

import Dashboard from "../components/admin/Dashboard";
import BookingManager from "../components/admin/BookingManager";
import TourManager from "../components/admin/TourManager";
import CampingManager from "../components/admin/CampingManager";
import CabManager from "../components/admin/CabManager";
import ResortManager from "../components/admin/ResortManager";

import "./Admin.css";

function Admin() {
  const [page, setPage] = useState("dashboard");

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <Dashboard />;

      case "bookings":
        return <BookingManager />;

      case "tours":
        return <TourManager />;

      case "camping":
        return <CampingManager />;

      case "cabs":
        return <CabManager />;

      case "resorts":
        return <ResortManager />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="admin-layout">

      <aside className="sidebar">

        <h2>Travel Admin</h2>

        <button onClick={() => setPage("dashboard")}>
          📊 Dashboard
        </button>

        <button onClick={() => setPage("bookings")}>
          📋 Bookings
        </button>

        <hr />

        <button onClick={() => setPage("tours")}>
          🧳 Tours
        </button>

        <button onClick={() => setPage("camping")}>
          🏕 Camping
        </button>

        <button onClick={() => setPage("cabs")}>
          🚖 Cabs
        </button>

        <button onClick={() => setPage("resorts")}>
          🏨 Resorts
        </button>

        <hr />

        <button disabled>
          ⭐ Reviews
        </button>

        <button disabled>
          👥 Customers
        </button>

        <button disabled>
          ⚙ Settings
        </button>

      </aside>

      <main className="admin-main">
        {renderPage()}
      </main>

    </div>
  );
}

export default Admin;
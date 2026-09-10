import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { FaWhatsapp } from "react-icons/fa";

import Home from "./pages/Home";
import Camping from "./pages/Camping";
import Cabs from "./pages/Cabs";
import Tours from "./pages/Tours";
import Resorts from "./pages/Resorts";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Admin from "./pages/Admin";

import "./App.css";

function Layout() {
  const location = useLocation();

  const isAdmin = location.pathname === "/admin";

  return (
    <>
      <ScrollToTop />

      {!isAdmin && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camping" element={<Camping />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {!isAdmin && (
        <>
          <a
            href="https://wa.me/918848738997?text=Hello%20TravelYourWay%20Holidays"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
          </a>

          <a href="tel:8848738997" className="call-btn">
            📞
          </a>

          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
}

export default App;
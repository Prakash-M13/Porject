import { useState } from "react";
import API from "../services/api";
import { useLocation } from "react-router-dom";

function Booking() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    serviceType:
      location.state?.serviceType || "Tour",
    packageName:
      location.state?.packageName || "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post(
        "/bookings",
        formData
      );

      alert(
        "Booking Submitted Successfully!"
      );

      setFormData({
        customerName: "",
        phone: "",
        email: "",
        serviceType: "Tour",
        packageName: "",
      });
    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-page">
      <h1>Book Your Trip</h1>

      <form
        onSubmit={handleSubmit}
        className="booking-form"
      >
        <input
          type="text"
          name="customerName"
          placeholder="Your Name"
          value={
            formData.customerName
          }
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="serviceType"
          value={
            formData.serviceType
          }
          onChange={handleChange}
        >
          <option value="Tour">
            Tour
          </option>

          <option value="Camping">
            Camping
          </option>

          <option value="Cab">
            Cab
          </option>

          <option value="Resort">
            Resort
          </option>
        </select>

        <input
          type="text"
          name="packageName"
          placeholder="Package Name"
          value={
            formData.packageName
          }
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Submitting..."
            : "Submit Booking"}
        </button>
      </form>
    </div>
  );
}

export default Booking;
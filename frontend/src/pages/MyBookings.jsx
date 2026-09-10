import { useState } from "react";
import API from "../services/api";

function MyBookings() {
  const [phone, setPhone] =
    useState("");

  const [bookings, setBookings] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const findBookings = async () => {
    if (!phone) {
      setMessage(
        "Please enter your phone number."
      );
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await API.get(
        `/bookings/phone/${phone}`
      );

      setBookings(res.data.data);

      if (res.data.data.length === 0) {
        setMessage(
          "No bookings found."
        );
      }
    } catch (error) {
      console.log(error);

      setMessage(
        "Unable to fetch bookings."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>My Bookings</h1>

      <div className="my-bookings-box">
        <input
          type="tel"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <button
          onClick={findBookings}
        >
          Find My Bookings
        </button>
      </div>

      {loading && (
        <div className="loader"></div>
      )}

      {message && (
        <h3 className="empty-message">
          {message}
        </h3>
      )}

      {bookings.map((booking) => (
        <div
          className="booking-card"
          key={booking.packageName}
        >
          <h3>
            {booking.packageName}
          </h3>

          <p>
            <strong>Name:</strong>{" "}
            {
              booking.customerName
            }
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {booking.phone}
          </p>

          <p>
            <strong>Service:</strong>{" "}
            {
              booking.serviceType
            }
          </p>

          <p>
            <strong>
              Booking Date:
            </strong>{" "}
            {new Date(
              booking.bookingDate
            ).toLocaleDateString()}
          </p>

          <p>
            <strong>
              Status:
            </strong>

            <span
              className={booking.status.toLowerCase()}
            >
              {" "}
              {booking.status}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyBookings;
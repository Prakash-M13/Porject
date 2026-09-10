import { useEffect, useState } from "react";
import API from "../../services/api";

function BookingManager() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/bookings/${id}/status`, {
        status,
      });

      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this booking?")) return;

    try {
      await API.delete(`/bookings/${id}`);
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchName = booking.customerName
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchService =
      filter === "All" ||
      booking.serviceType === filter;

    return matchName && matchService;
  });

  return (
    <div>

      <h1>Booking Manager</h1>

      <div style={{display:"flex",gap:"15px",marginBottom:"20px",flexWrap:"wrap"}}>

        <input
          type="text"
          placeholder="Search Customer..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Tour</option>
          <option>Camping</option>
          <option>Cab</option>
          <option>Resort</option>
        </select>

      </div>

      {filteredBookings.map((booking)=>(

        <div
          className="booking-card"
          key={booking._id}
        >

          <h3>{booking.customerName}</h3>

          <p>
            <strong>Phone :</strong>{" "}
            {booking.phone}
          </p>

          <p>
            <strong>Email :</strong>{" "}
            {booking.email}
          </p>

          <p>
            <strong>Service :</strong>{" "}
            {booking.serviceType}
          </p>

          <p>
            <strong>Package :</strong>{" "}
            {booking.packageName}
          </p>

          <p>
            <strong>Date :</strong>{" "}
            {new Date(
              booking.bookingDate
            ).toLocaleDateString()}
          </p>

          <br />

          <select
            value={booking.status}
            onChange={(e)=>
              updateStatus(
                booking._id,
                e.target.value
              )
            }
          >
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Cancelled</option>
          </select>

          <button
            style={{
              marginLeft:"15px",
              background:"red",
              color:"white",
              border:"none",
              padding:"10px 18px",
              borderRadius:"8px",
              cursor:"pointer"
            }}
            onClick={()=>
              deleteBooking(booking._id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default BookingManager;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const campingRoutes = require("./routes/campingRoutes");
require("dotenv").config();
const cabRoutes = require("./routes/cabRoutes");
const tourRoutes = require("./routes/tourRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const resortRoutes = require("./routes/resortRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/bookings", bookingRoutes);
app.use("/api/campings", campingRoutes);
app.use("/api/cabs", cabRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/resorts", resortRoutes);


app.get("/", (req, res) => {
  res.send("Travel Booking API Running");
});

const PORT = process.env.PORT || 5000;
console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
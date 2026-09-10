import "./Reviews.css";

import review1 from "../assets/images/review1.jpg";
import review2 from "../assets/images/review2.jpg";
import review3 from "../assets/images/review3.jpg";

function Reviews() {
  const reviews = [
    {
      name: "Rahul Kumar",
      place: "Chennai",
      image: review1,
      review:
        "Amazing camping experience at Kolukkumalai. The sunrise view was unforgettable and the arrangements were excellent.",
    },

    {
      name: "Priya Sharma",
      place: "Bangalore",
      image: review2,
      review:
        "Booked a cab and resort package. Everything was perfectly managed and very professional.",
    },

    {
      name: "Arjun Nair",
      place: "Kochi",
      image: review3,
      review:
        "One of the best Munnar trips I've had. Friendly staff, beautiful locations and excellent service.",
    },
  ];

  return (
    <section className="reviews">

      <div className="reviews-heading">
        <span>TESTIMONIALS</span>
        <h2>What Our Guests Say</h2>
        <p>
          Real experiences from travelers who explored Munnar with us.
        </p>
      </div>

      <div className="reviews-grid">

        {reviews.map((review, index) => (
          <div className="review-card" key={index}>

            <img
              src={review.image}
              alt={review.name}
              className="review-img"
            />

            <div className="stars">
              ★★★★★
            </div>

            <p className="review-text">
              "{review.review}"
            </p>

            <h3>{review.name}</h3>

            <span className="review-place">
              {review.place}
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Reviews;
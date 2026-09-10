function Testimonials() {
  const reviews = [
    {
      name: "Arun",
      city: "Chennai",
      review:
        "Amazing Munnar trip! Everything was perfectly organized.",
    },
    {
      name: "Priya",
      city: "Bangalore",
      review:
        "Excellent cab service and friendly drivers.",
    },
    {
      name: "Karthik",
      city: "Coimbatore",
      review:
        "The camping experience was unforgettable!",
    },
  ];

  return (
    <section className="reviews-section">
      <h2>What Our Customers Say</h2>

      <div className="reviews-grid">
        {reviews.map((item, index) => (
          <div
            className="review-card"
            key={index}
          >
            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>"{item.review}"</p>

            <h3>{item.name}</h3>

            <span>{item.city}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
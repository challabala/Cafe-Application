function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card card">
      <div className="testimonial-top">
        <img src={testimonial.avatar} alt={testimonial.name} className="avatar" loading="lazy" />
        <div>
          <h3>{testimonial.name}</h3>
          <div className="stars" aria-label={`${testimonial.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={index < testimonial.rating ? "star filled" : "star"}>
                {"\u2605"}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p>{testimonial.review}</p>
    </article>
  );
}

export default TestimonialCard;

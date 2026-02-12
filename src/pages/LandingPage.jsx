import { useMemo, useState } from "react";
import { ambienceImages, menuItems, testimonials } from "../assets/content";
import MenuCard from "../components/MenuCard";
import Reveal from "../components/Reveal";
import TestimonialCard from "../components/TestimonialCard";

function LandingPage() {
  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  const handleBookingChange = (event) => {
    const { name, value } = event.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setBookingData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
    });
  };

  return (
    <>
      <section className="hero section">
        <div className="container hero-content">
          <p className="eyebrow">Cozy. Crafted. Memorable.</p>
          <h1>Where Every Cup Tells a Story</h1>
          <p className="hero-subtitle">
            Freshly brewed coffee, handcrafted desserts, and warm conversations.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-primary">
              Explore Menu
            </a>
            <a href="#booking" className="btn btn-outline">
              Reserve Your Spot
            </a>
          </div>
        </div>
      </section>

      <Reveal className="section section-soft" id="menu">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Menu Highlights</p>
            <h2>Our Most-Loved Picks</h2>
            <p>From classic coffee to indulgent desserts, each item is prepared with care.</p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Ambience</p>
            <h2>A Cozy Escape in the City</h2>
            <p>
              Sunlit corners, earthy textures, and mellow music come together to create a space
              where every visit feels calm and personal.
            </p>
          </div>
          <div className="ambience-grid">
            {ambienceImages.map((image) => (
              <figure key={image.id} className="ambience-card">
                <img src={image.image} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section section-soft testimonials-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Testimonials</p>
            <h2>Guests Love Brew Haven</h2>
            <p>Real stories from people who made Brew Haven part of their routine.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="section section-emphasis booking-section" id="booking">
        <div className="container booking-layout">
          <div className="booking-copy">
            <p className="eyebrow">Table Booking</p>
            <h2>Plan Your Next Coffee Moment</h2>
            <p>
              Whether it is a casual catch-up or focused work session, reserve your table and we
              will have everything ready for you.
            </p>
          </div>
          <form className="booking-form card" onSubmit={handleBookingSubmit}>
            <label htmlFor="booking-name">Name</label>
            <input
              id="booking-name"
              type="text"
              name="name"
              value={bookingData.name}
              onChange={handleBookingChange}
              required
            />

            <label htmlFor="booking-phone">Phone</label>
            <input
              id="booking-phone"
              type="tel"
              name="phone"
              value={bookingData.phone}
              onChange={handleBookingChange}
              pattern="[0-9+\\-\\s]{8,15}"
              required
            />

            <div className="form-grid">
              <div>
                <label htmlFor="booking-date">Date</label>
                <input
                  id="booking-date"
                  type="date"
                  name="date"
                  min={minDate}
                  value={bookingData.date}
                  onChange={handleBookingChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="booking-time">Time</label>
                <input
                  id="booking-time"
                  type="time"
                  name="time"
                  value={bookingData.time}
                  onChange={handleBookingChange}
                  required
                />
              </div>
            </div>

            <label htmlFor="booking-guests">Number of Guests</label>
            <select
              id="booking-guests"
              name="guests"
              value={bookingData.guests}
              onChange={handleBookingChange}
              required
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>

            <button className="btn btn-primary submit-btn" type="submit">
              Submit Request
            </button>

            {isSubmitted ? (
              <p className="success-message">
                Your table request has been received. We cannot wait to serve you!
              </p>
            ) : null}
          </form>
        </div>
      </Reveal>
    </>
  );
}

export default LandingPage;

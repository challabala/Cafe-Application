import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Brew Haven Cafe</h3>
          <p>
            A warm neighborhood cafe for crafted coffee, fresh pastries, and meaningful
            conversations.
          </p>
          <div className="footer-social" aria-label="Social media links">
            <a className="social-link" href="https://www.instagram.com" target="_blank" rel="noreferrer">
              IG
            </a>
            <a className="social-link" href="https://www.facebook.com" target="_blank" rel="noreferrer">
              FB
            </a>
            <a className="social-link" href="https://www.twitter.com" target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/#menu">Menu</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Visit</h4>
          <p>24 Oak Street, Indiranagar, Bengaluru 560038</p>
          <p>Mon - Fri: 8:00 AM - 10:00 PM</p>
          <p>Sat - Sun: 8:00 AM - 11:00 PM</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>+91 98765 43210</p>
          <p>hello@brewhavencafe.com</p>
          <ul className="footer-legal">
            <li>
              <a href="/#">Privacy Policy</a>
            </li>
            <li>
              <a href="/#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{"\u00A9"} {new Date().getFullYear()} Brew Haven Cafe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

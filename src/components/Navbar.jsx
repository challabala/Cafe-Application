import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleBookTable = () => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const booking = document.getElementById("booking");
      if (booking) {
        booking.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    navigate("/#booking");
  };

  return (
    <header className="site-navbar">
      <nav className="navbar-inner container" aria-label="Main Navigation">
        <NavLink to="/" className="brand" aria-label="Brew Haven Cafe Home">
          Brew Haven Cafe
        </NavLink>

        <button
          type="button"
          className={`hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="site-nav-panel"
        >
          <span />
          <span />
          <span />
        </button>

        <div id="site-nav-panel" className={`nav-panel ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`.trim()}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`.trim()}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`.trim()}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button type="button" className="btn btn-primary nav-cta" onClick={handleBookTable}>
            Book a Table
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

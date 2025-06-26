import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import { useTheme } from "../../context/ThemeContext";
import "../../styles/components/navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, setIsDarkMode } = useTheme();
  const navigate = useNavigate(); // Add this

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 110);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add this function to handle logo click
  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <header className={`header ${scrolled ? "header-active" : ""}`}>
      <div className="container">
        <div className="logo">
          <a onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            Travelling.
          </a>
        </div>
        <nav className={`navbar-links ${isActive ? "active" : ""}`}>
          <ul className="nav-items">
            <li className="nav-item">
              <a href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a href="#explore">Explore</a>
            </li>
            <li className="nav-item">
              <a href="#travel">Travel</a>
            </li>
            <li className="nav-item">
              <a href="#blogs">Blog</a>
            </li>
            <li className="nav-item">
              <Link to="/login" className="auth-link">Login</Link>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="theme-toggle"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </nav>
        <div className="nav-toggle" onClick={() => setIsActive(!isActive)}>
          <span className="bar bar-a"></span>
          <span className="bar bar-b"></span>
          <span className="bar bar-c"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
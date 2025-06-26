import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SpecialOffers from "./components/SpecialOffers/SpecialOffers";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import PopularDestinations from "./components/Destinations/PopularDestinations";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import OfferDetails from './components/SpecialOffers/OfferDetails';

import "./styles/index.css";
import "./styles/darkMode.css";

// Creating component for the home page content
const HomeContent = () => {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <SpecialOffers />
      <Blog />
      <Gallery />
      <Footer />
    </>
  );
};

// Layout component that includes Navbar
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

// Create a separate component for the app content with theme handling
const AppContent = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/offer/:id" element={<OfferDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

// Main App component
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
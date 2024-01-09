import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home.jsx";
import ModelsPage from "./pages/Vehicles.jsx";
import TestimonialsPage from "./pages/Testimonials.jsx";
import ContactPage from "./pages/Contact.jsx";
import "./App.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/Booking.css";
import "./styles/PlanTrip.css";
import "./styles/PickCar.css";
import "./styles/CarBox.css";
import "./styles/Banner.css";
import "./styles/WhyChooseUs.css";
import "./styles/Testimony.css";
import "./styles/Footer.css";
import "./styles/AboutPage.css";
import "./styles/ContactForm.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="models" element={<ModelsPage />} />
        <Route path="testimonial" element={<TestimonialsPage />} />
        <Route path="models" element={<ModelsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/about";
import Navbar from "./components/Navbar";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ThemeToggle from "./components/theme";

function App() {
  return (
    <Router basename="/Portfolio">
      <Navbar />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

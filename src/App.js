import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Drinks from "./pages/Drinks";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Menu from "./pages/Menu";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Drinks" element={<Drinks />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

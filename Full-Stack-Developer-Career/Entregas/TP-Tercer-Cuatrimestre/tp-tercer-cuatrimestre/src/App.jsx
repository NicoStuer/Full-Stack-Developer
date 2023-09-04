import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import TemporaryRentals from "./components/temporary-rentals/TemporaryRentals";
import PermanentRentals from "./components/permanent-rentals/PermanentRentals";
import Footer from './components/footer/Footer'
import FeaturedPosts from "./components/featured-posts/FeaturedPosts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/temporary-rentals" element={<TemporaryRentals />} />
        <Route path="/permanent-rentals" element={<PermanentRentals />} />
      </Routes>
      <FeaturedPosts/>
      <Footer/>
    </>
  );
}

export default App;

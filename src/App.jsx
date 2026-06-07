import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Offers from "./pages/Offers";
import BookSession_beginner from "./pages/BookSession_beginner";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/book_bg" element={<BookSession_beginner/>} />
        </Routes>
      </main>
    </>
  )
}

export default App

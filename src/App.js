import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import Home from "./pages/HomePage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

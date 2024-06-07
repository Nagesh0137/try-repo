import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog2 from "./Blog2";
import Topnav from "./Topnav";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Jobs2 from "./Jobs2";
import Cart from "./Section_comp";
import Cartificate from "./Componet/Cartificate";
import Batchs from "./Componet/Batchs";
export default function App() {
  return (
    <>
      <Router>
        <Topnav para="New Full Stack Web Developer Batch Start On 26 March 2024" />
        <Navbar img="https://www.a2zithub.org/training/uploads/170375695842637743.png" />
        <Routes>
          <Route path="/placement" element={<Cart />} />
          <Route path="/job" element={<Jobs2 />} />
          <Route path="/Blog2" element={<Blog2></Blog2>} />
          <Route path="/Certificate" element={<Cartificate></Cartificate>} />
          <Route path="/Batchs" element={<Batchs></Batchs>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

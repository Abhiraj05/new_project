import { useEffect, useState } from "react";
import Home from "./pages/Home"
import InputBox from "./pages/InputBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
    <>
    <Router>
      <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/generate" element={<InputBox/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

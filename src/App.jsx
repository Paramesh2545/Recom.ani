import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./components/Nav";
import "./App.css";
import Search from "./Pages/Search";
import Details from "./Pages/Details";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

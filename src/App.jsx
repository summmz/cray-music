import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Callback from "./pages/Callback";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
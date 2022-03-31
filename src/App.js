import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Navbar/>   */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" />
        <Route path="/register" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

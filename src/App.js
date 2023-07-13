import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import MainPage from "./Components/Main Page/MainPage";
import Services from "./Components/Services/Services";
import Workshop from "./Components/Workshop/Workshop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

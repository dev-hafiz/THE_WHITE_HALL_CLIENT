import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Booking from "./Pages/Booking/Booking";
import Contact from "./Pages/Contact/Contact";
import Galary from "./Pages/Galary/Galary";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Packages from "./Pages/Packages/Packages";
import Services from "./Pages/Services/Services";
import Header from "./Pages/Shared/Header/Header";


function App() {
  return (
  <div>
  {/* Router SetUp  */}
    <BrowserRouter>
             
<Header></Header>
       <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="/about" element={<About />} /> 
       <Route path="/services" element={<Services />} /> 
       <Route path="/packages" element={<Packages />} /> 
       <Route path="/booking" element={<Booking />} /> 
       <Route path="/galary" element={<Galary />} /> 
       <Route path="/contact" element={<Contact />} /> 
       <Route path="/login" element={<Login />} /> 
  
       </Routes>
      
    </BrowserRouter>
  </div>
  );
}

export default App;
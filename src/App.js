import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import AllPackages from "./Pages/AllPackages/AllPackages";
import Booking from "./Pages/Booking/Booking";
import Contact from "./Pages/Contact/Contact";
import Galary from "./Pages/Galary/Galary";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Packages from "./Pages/Packages/Packages";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
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
       <Route path="/allpackages" element={<AllPackages />} /> 
       <Route path="/booking" element={<Booking />} /> 
       <Route path="/galary" element={<Galary />} /> 
       <Route path="/contact" element={<Contact />} /> 
       <Route path="/login" element={<Login />} /> 
       <Route path="/register" element={<Register />} /> 
       <Route path="*" element={<PageNotFound />} /> 
  
       </Routes>
       <Footer></Footer>
      
    </BrowserRouter>
  </div>
  );
}

export default App;
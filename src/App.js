import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import About from "./Pages/About/About";
import Admin from "./Pages/Admin/Admin/Admin";
import AllPackages from "./Pages/AllPackages/AllPackages";
import Contact from "./Pages/Contact/Contact";
import CustomerDashboard from "./Pages/CustomerDashboard/CustomerDashboard";
import Galary from "./Pages/Galary/Galary";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Packages from "./Pages/Packages/Packages";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <div>
      {/* Router SetUp  */}
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/allpackages" element={<AllPackages />} />
            <Route path="/galary" element={<Galary />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/placeOrder/:id"
              element={
                <PrivateRoute>
                  <PlaceOrder />
                </PrivateRoute>
              }
            />
            <Route path="/customerdashboard" element={<CustomerDashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

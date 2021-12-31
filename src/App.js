import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";


function App() {
  return (
  <div>
  {/* Router SetUp  */}
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} /> 
       </Routes>
       <Routes>
       <Route path="/login" element={<Login />} /> 
       </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";


function App() {
  return (
  <div>
  {/* Router SetUp  */}
    <BrowserRouter>
       <Routes>
       <Route path="/" element={<Home />} /> 
       </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;

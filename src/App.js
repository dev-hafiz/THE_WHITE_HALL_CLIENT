import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";


function App() {
  return (

       <BrowserRouter>
       <Route path="/" element={<Home />} /> 
        </BrowserRouter>
 
  );
}

export default App;

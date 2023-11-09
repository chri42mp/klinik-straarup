import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Webshop from "./pages/Webshop";
import Prices from "./pages/Prices";
import Login from "./pages/Login";
import Treatments from "./pages/Treatments";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/webshop" element={<Webshop />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/login" element={<Login />} />
        <Route path="/treatments" element={<Treatments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

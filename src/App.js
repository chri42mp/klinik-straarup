import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Frontpage from "./pages/Frontpage";
import About from "./pages/About";
import Webshop from "./pages/Webshop";
import Prices from "./pages/Prices";
import Login from "./pages/Login";
import Fillers from "./pages/Fillers";
import Botox from "./pages/Botox";
import Laser from "./pages/Laser";
import Contact from "./pages/Contact";
import Basket from "./pages/Basket";
import Sclerosis from "./pages/Sclerosis";
import Skinbooster from "./pages/Skinbooster";
import WebshopCategory from "./pages/WebshopCategory";
import Product from "./pages/Product";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import Shipping from "./pages/Shipping";
import TradeConditions from "./pages/TradeConditions";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/about" element={<About />} />
          <Route path="/webshop" element={<Webshop />} />
          <Route
            path="/webshopcategory/:category"
            element={<WebshopCategory />}
          />
          <Route path="/product/:uid" element={<Product />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/fillers" element={<Fillers />} />
          <Route path="/botox" element={<Botox />} />
          <Route path="/sclerosis" element={<Sclerosis />} />
          <Route path="/skinbooster" element={<Skinbooster />} />
          <Route path="/laser" element={<Laser />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/tradeconditions" element={<TradeConditions />} />
          <Route path="*" element={<NotFound status={404} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

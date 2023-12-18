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
import AddProduct from "./pages/AddProduct";
import WebshopCategory from "./pages/WebshopCategory";
import Product from "./pages/Product";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Checkout from "./pages/Checkout";
import Shipping from "./pages/Shipping";
import TradeConditions from "./pages/TradeConditions";
import Confirmation from "./pages/Confirmation";
import NotFound from "./pages/NotFound";
import AdminAllProducts from "./pages/AdminAllProducts";
import AdminOrders from "./pages/AdminOrders";
import { useEffect, useState } from "react";
import CookieBox from "./components/CookieBox";

function App() {
  const [showCookieBox, setShowCookieBox] = useState(false);
  const [isCookieAccepted, setIsCookieAccepted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCookieBox(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCookieAcceptance = (cookieTypes, allTypesAccepted) => {
    if (allTypesAccepted) {
      setIsCookieAccepted(true);
      // Add the manually-toggled class to hide the overlay
      document.querySelector(".overlay").classList.add("manually-toggled");
      setShowCookieBox(false); // Remove the cookie box
    } else {
      setIsCookieAccepted(true);
    }
  };

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          {!isCookieAccepted && (
            <>
              <div className="overlay"></div>
              <CookieBox onAccept={handleCookieAcceptance} />
            </>
          )}
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

            <Route
              path="/addproduct"
              element={
                <ProtectedRoute>
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/allproducts"
              element={
                <ProtectedRoute>
                  <AdminAllProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/allorders"
              element={
                <ProtectedRoute>
                  <AdminOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/userdashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound status={404} />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

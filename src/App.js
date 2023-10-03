import "./App.css";
import FooterComponent from "./pages/FooterComponent";
import HeaderComponent from "./pages/HeaderComponent";
import BodyHomeComponent from "./pages/BodyHomeComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutComponent from "./pages/AboutComponent";
import SingleProductComponent from "./pages/SingleProductComponent";
import ContactComponent from "./pages/ContactComponent";
import ShopComponent from "./pages/ShopComponent";
import CartComponent from "./pages/CartComponent";
function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route path="/" exact element={<BodyHomeComponent />} />
        <Route path="/home" element={<BodyHomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route
          path="/single-product/:productId"
          element={<SingleProductComponent />}
        />

        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/shop" element={<ShopComponent />} />
        <Route path="/cart" element={<CartComponent />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;

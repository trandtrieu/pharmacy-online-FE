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
        <Route path="/" exact Component={BodyHomeComponent} />
        <Route path="/home" Component={BodyHomeComponent} />
        <Route path="/about" Component={AboutComponent} />
        <Route
          path="/single-product/:productId"
          Component={SingleProductComponent}
        />
        <Route path="/contact" Component={ContactComponent} />
        <Route path="/shop" Component={ShopComponent} />
        <Route path="/cart" Component={CartComponent} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;

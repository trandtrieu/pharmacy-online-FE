import "./App.css";
import FooterComponent from "./pages/FooterComponent";
import HeaderComponent from "./pages/HeaderComponent";
import BodyHomeComponent from "./pages/BodyHomeComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutComponent from "./pages/AboutComponent";
import SingleProductComponent from "./pages/SingleProductComponent";
import ContactComponent from "./pages/ContactComponent";
import ShopComponent from "./pages/ShopComponent";
import CartComponent from "./pages/CartComponent";
import WishListComponent from "./pages/WishListComponent";

import "react-tooltip/dist/react-tooltip.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <ToastContainer />

      <Switch>
        {/* <HeaderComponent /> */}

        <Route path="/" exact component={BodyHomeComponent} />
        <Route path="/home" component={BodyHomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route
          path="/single-product/:productId"
          component={SingleProductComponent}
        />
        <Route path="/contact" component={ContactComponent} />
        <Route path="/shop" component={ShopComponent} />
        <Route path="/cart" component={CartComponent} />
        <Route path="/wishlist" component={WishListComponent} />
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;

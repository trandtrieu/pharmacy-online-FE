import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/pharmacy-online/products";
const CART_API_BASE_URL = "http://localhost:8080/pharmacy-online/cart";

class ProductServices {
  getProducts() {
    return axios.get(PRODUCT_API_BASE_URL);
  }

  getProductById(productId) {
    return axios.get(PRODUCT_API_BASE_URL + "/" + productId);
  }

  addToCart(accountId, productId, quantity) {
    return axios.post(
      CART_API_BASE_URL +
        "/add-cart?accountId=" +
        accountId +
        "&productId=" +
        productId +
        "&quantity=" +
        quantity
    );
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductServices();

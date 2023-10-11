import axios from "axios";
const CART_API_BASE_URL = "http://localhost:8080/pharmacy-online/cart";

class CartServices {
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

  getListCartByAccountId(accountId) {
    return axios.get(CART_API_BASE_URL + "/get-cart?accountId=" + accountId);
  } //http://localhost:8080/pharmacy-online/cart/get-cart?accountId=5
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CartServices();

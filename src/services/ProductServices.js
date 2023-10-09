import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/pharmacy-online/products";
const WISHLIST_API_BASE_URL = "http://localhost:8080/pharmacy-online";

class ProductServices {
  getProducts() {
    return axios.get(PRODUCT_API_BASE_URL);
  }

  getProductById(productId) {
    return axios.get(PRODUCT_API_BASE_URL + "/" + productId);
  }

  addToWishlist(accountId, productId) {
    const url = `${WISHLIST_API_BASE_URL}/add-wishlist?accountId=${accountId}&productId=${productId}`;
    return axios.post(url);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductServices();

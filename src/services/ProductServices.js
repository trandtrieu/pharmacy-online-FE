import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/pharmacy-online/products";

class ProductServices {
  getProducts() {
    return axios.get(PRODUCT_API_BASE_URL);
  }

  getProductById(productId) {
    return axios.get(PRODUCT_API_BASE_URL + "/" + productId);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductServices();

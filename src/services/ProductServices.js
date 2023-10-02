import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/pharmacy-online/products";

class ProductServices {
  getProducts() {
    return axios.get(PRODUCT_API_BASE_URL);
  }
}

export default new ProductServices();

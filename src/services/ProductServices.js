import axios from "axios";

const PRODUCT_API_BASE_URL = "http://localhost:8080/pharmacy-online/products";
const PRODUCT_API_BASE_URL2 =
  "http://localhost:8080/pharmacy-online/products/abc";
const PRODUCT_API_BASE_URL3 =
  "http://localhost:8080/pharmacy-online/products/image";
class ProductServices {
  getProducts() {
    return axios.get(PRODUCT_API_BASE_URL);
  }

  getProducts2() {
    return axios.get(PRODUCT_API_BASE_URL2);
  }

  getProducts3() {
    return axios.get(PRODUCT_API_BASE_URL3);
  }
}

export default new ProductServices();

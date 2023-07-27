import axios from "axios";
const API_URL = "http://localhost:8080/api";

class ProductService {
  saveProduct(product) {
    return axios.post(API_URL + "/add", product);
  }

  getProducts() {
    return axios.get(API_URL + "/get");
  }

  getProductById(id) {
    return axios.get(API_URL + "/" + id);
  }

  deleteProduct(id) {
    return axios.delete(API_URL + "/" + id);
  }

  editProduct(product, id) {
    return axios.put(API_URL + "/" + id, product);
  }
}

export default new ProductService();

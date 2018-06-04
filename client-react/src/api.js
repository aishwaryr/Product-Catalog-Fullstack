import axios from "axios";

import { loadProducts } from "./actionCreators";
const BASE_URL = "http://localhost:7777";

export function fetchProductsFromDB() {
  const pageNo = 1; // page hard coded for now
  return dispatch => {
    axios
      .get(`${BASE_URL}/get-products/${pageNo}`)
      .then(response => {
        // console.log(response.data);
        dispatch(loadProducts(response.data));
      })
      .catch(error => {
        console.error("axios error", error); // eslint-disable-line no-console
      });
  };
}

export function deleteProductFromDB(id) {
  return axios
    .post(`${BASE_URL}/delete-product/${id}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("axios error", error); // eslint-disable-line no-console
    });
}

export function updateProductInDB(id, product) {
  const url = `${BASE_URL}/update-product/${id}`;
  const request = axios.post(url, product);
  request
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("axios error", error); // eslint-disable-line no-console
    });
  return request;
}

export function addProductToDB(product) {
  const url = `${BASE_URL}/add-product`;
  const request = axios.post(url, product);
  request
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("axios error", error); // eslint-disable-line no-console
    });
  return request;
}

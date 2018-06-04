import { SET_SEARCH_TERM, LOAD_PRODUCTS } from "./actions";

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addProducts(productsData) {
  return { type: LOAD_PRODUCTS, payload: productsData };
}

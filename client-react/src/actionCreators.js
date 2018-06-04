import { LOAD_PRODUCTS } from "./actions";

export function loadProducts(productsData) {
  return { type: LOAD_PRODUCTS, payload: productsData };
}

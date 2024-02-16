
export const initialState = {
    products: [],
    product: {}
};

const typesProducts = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCT: "GET_PRODUCT"
};

export const { GET_PRODUCTS, GET_PRODUCT } = typesProducts;

export const routesApp = {
  products: "http://localhost:5000/api/products",
};

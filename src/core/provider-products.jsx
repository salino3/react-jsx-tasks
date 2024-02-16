import React from "react";
import { ContextProduct, GET_PRODUCTS, ProductReducer, initialState, routesApp } from ".";


export const ProductProvider = ({children}) => {

    const [state, dispatch] = React.useReducer(ProductReducer, initialState);

    const fetchData = async () => {
      const response = await fetch(
        `${routesApp.products}`
      );
      const res = await response.json();
      dispatch({
        type: GET_PRODUCTS,
        payload: res,
      });
    };

      React.useEffect(() => {
        fetchData();
    }, [dispatch]);
    
      React.useEffect(() => {
        console.log(state.products);
      }, [state.products]);
    

    return (
        <ContextProduct.Provider value={{state, dispatch}}>
            {children}
        </ContextProduct.Provider>
    )
}
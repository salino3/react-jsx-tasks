import React from "react";
import { ContextProduct, GET_PRODUCTS, ProductReducer, initialState, routesApp } from ".";


export const ProductProvider = ({children}) => {

    const [state, dispatch] = React.useReducer(ProductReducer, initialState);

    const fetchData = React.useCallback(async () => {
      try {
        
        const response = await fetch(
          `${routesApp.products}`
          );
          if (response.status === 404) {
            console.log(response.statusText);
            return;
          };

          const res = await response.json();
          
          dispatch({
            type: GET_PRODUCTS,
            payload: res,
          });
        } catch (error) {
          console.log(error);
        }
    }, [dispatch]);

    
      React.useEffect(() => {
        fetchData();
      }, [dispatch]);
    
      React.useEffect(() => {
        console.log(state.products);
      }, [state.products]);
    

    return (
        <ContextProduct.Provider value={{state, dispatch, fetchData}}>
            {children}
        </ContextProduct.Provider>
    )
}
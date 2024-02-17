import React from "react";
import { ContextProduct } from "@/core";
import { CardProduct } from "@/common-app";
import './list-products.styles.css';


export const ListProducts = () => {

    const {state} = React.useContext(ContextProduct);
    const{products} = state || {};
    console.log(products);

    return (
      <div className="listProducts">
        {!products || products?.lenght < 1 ? (
          <h3>Thera are not products..</h3>
        ) : (
          products.map((item) => <CardProduct 
          key={item?.id}
           item={item}
            />)
        )}
      </div>
    );
}
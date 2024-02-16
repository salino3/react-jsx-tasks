import React from "react";
import { ContextProduct } from "@/core";



export const ListProducts = () => {

    const {state} = React.useContext(ContextProduct);
    const{products} = state || {};
    console.log(products)

    return (
        <div>
            {!products || products.lenght < 1 ? <h3>Thera are not products..</h3>
            : products.map((item) => (
                <div>
                    {item.name}
                </div>
            ))
             }
        </div>
    )
}
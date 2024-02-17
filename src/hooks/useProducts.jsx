import React from 'react';
import Axios from 'axios';
import { routesApp, ContextProduct } from '@/core';


export const useProducts = () => {

 const {fetchData} = React.useContext(ContextProduct);

 //
 const createProduct = async (item) => {
  await Axios.post(routesApp.products, item)
  .then(async (res) => {
    
    if (res.status === 404) {
      console.log(res.data.message);
    };

    if(res.status === 200) {
      console.log(res.data.message);
      console.log(res.data.newData);
      await fetchData();
    };
  })
  .catch((error) => {
    console.error(error);
  });
 };

 //
 const deleteProduct = async (id) => {

  await Axios.delete(`${routesApp.products}/${id}`)
  .then(async (res) => {
    
    if(res.status === 200) {
      console.log(res.data.message);
      await fetchData();
    };
    
  })
  .catch((error) => {
       console.error("Error deleting product:", error.message);
  });
 };

 const areAllParamsFilled = (obj) => {
    return Object.values(obj).every((value) => value !== null && value !== undefined && value !== '');
};

    return {
      createProduct,
      areAllParamsFilled,
      deleteProduct,
    };
};
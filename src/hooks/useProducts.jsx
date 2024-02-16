import React from 'react';
import Axios from 'axios';
import { routesApp, ContextProduct } from '@/core';


export const useProducts = () => {

 const {fetchData} = React.useContext(ContextProduct);

 const createProduct = async (item) => {
  await Axios.post(routesApp.products, item)
  .then(async (res) => {
    console.log(res.data);
    await fetchData();
    return res.data;
  })
  .catch((error) => {
    console.error(error);
  });
 };


 const areAllParamsFilled = (obj) => {
    return Object.values(obj).every((value) => value !== null && value !== undefined && value !== '');
};

    return {
        createProduct,
        areAllParamsFilled
    }
};
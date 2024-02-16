import Axios from 'axios';
import { routesApp } from '@/core';


export const useProducts = () => {

 const createProduct = async (item) => {
  await Axios.post(routesApp.products, item)
  .then((res) => {
    console.log(res.data);
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
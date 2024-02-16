import React from "react";
import { ContextProduct } from "@/core";
import { FormField } from "@/common-app";
import './form-new-product.styles.css';

export const FormNewProduct = () => {

  const {areAllParamsFilled} = React.useContext(ContextProduct);

  
  const [companyArray, setCompanyArray] = React.useState({
    companyName: "",
    city: "",
    country: ""
  });
  const [productData, setProductData] = React.useState({
    name: "",
    code: "",
    quantity: "",
    price: ""
  });
  
  let isDisabled = !areAllParamsFilled(companyArray) || !areAllParamsFilled(productData);
    
  const handleChange = (event) => {
  
       let { name, value } = event.target;

       if (
         (name === "quantity" && parseInt(value) < 0) ||
         (name === "price" && parseInt(value) < 0)
       ) {
         value = 0;
       };
         setProductData({ ...productData, [name]: value });
    
    };

    const handleChangeCompany = (event) => {
            const { name, value } = event.target;
       setCompanyArray({ ...companyArray, [name]: value });
    }

const handleSubmit = (event) => {
    event.preventDefault();
    let stringCompany = Object.values(companyArray).join(", ");
    console.log({...productData, company: stringCompany});
};

React.useEffect(() => {

}, [productData?.company])


  return (
    <div className="containerForm">
      <div className="contentForm">
        <form onSubmit={handleSubmit} id="newProductForm">
          <FormField
            type="text"
            txtLabel="Name"
            idName="name"
            handleChange={handleChange}
            value={productData?.name}
            pl="Name Product.."
          />
          <FormField
            type="number"
            txtLabel="Quantity"
            idName="quantity"
            handleChange={handleChange}
            value={productData?.quantity || ""}
            pl="Quantity.."
          />
          <FormField
            type="text"
            txtLabel="Code"
            idName="code"
            handleChange={handleChange}
            value={productData?.code}
            pl="Code Product.."
          />
          <FormField
            type="number"
            txtLabel="Price"
            idName="price"
            handleChange={handleChange}
            value={productData?.price}
            pl="Price.."
          />
          <FormField
            type="text"
            txtLabel="Company (Name)"
            idName="companyName"
            handleChange={handleChangeCompany}
            value={companyArray.companyName.trim()}
            pl="Company.."
          />
          <FormField
            type="text"
            txtLabel="Company (City)"
            idName="city"
            handleChange={handleChangeCompany}
            value={companyArray.city.trim()}
            pl="City.."
          />
          <FormField
            type="text"
            txtLabel="Company (Country)"
            idName="country"
            handleChange={handleChangeCompany}
            value={companyArray.country.trim()}
            pl="Country.."
          />
          <div>
            <button
              disabled={isDisabled}
              className={`btnForm ${!isDisabled && "btnFormActive"}`}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

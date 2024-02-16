import { FormField } from "@/common-app";
import './form-new-product.styles.css';

export const FormNewProduct = () => {
  return (
    <div className="containerForm">
      <div className="contentForm">
        <form id="newProductForm">
          <FormField
            type="text"
            txtLabel="Name"
            idName="name"
            handleChange={() => {}}
            value={""}
            pl="Name Product.."
          />
          <FormField
            type="number"
            txtLabel="Quantity"
            idName="quantity"
            handleChange={() => {}}
            value={""}
            pl="Quantity.."
          />
          <FormField
            type="text"
            txtLabel="Code"
            idName="code"
            handleChange={() => {}}
            value={""}
            pl="Code Product.."
          />
          <FormField
            type="number"
            txtLabel="Price"
            idName="price"
            handleChange={() => {}}
            value={""}
            pl="Pice.."
          />
          <FormField
            type="text"
            txtLabel="Company"
            idName="company"
            handleChange={() => {}}
            value={""}
            pl="Company.."
          />
          <div>
            <button className="btnForm" type="submit">
                Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

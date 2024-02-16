import { FormField } from "@/common-app";

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
            //  value={''}
            pl="Name Product.."
          />
        </form>
      </div>
    </div>
  );
};

import { ContextProduct, ProductReducer, initialState } from ".";


export const ProductProvider = ({children}) => {

    const [state, dispatch] = React.useReducer(ProductReducer, initialState);

    const areAllParamsFilled = (obj) => {
        return Object.values(obj).every((value) => value !== null && value !== undefined && value !== '');
};

    return (
        <ContextProduct.Provider value={{state, dispatch, areAllParamsFilled}}>
            {children}
        </ContextProduct.Provider>
    )
}
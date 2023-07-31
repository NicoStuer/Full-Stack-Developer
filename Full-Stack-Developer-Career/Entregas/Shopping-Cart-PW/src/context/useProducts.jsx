import { useContext } from "react";
import { ProductsContext } from "./ProductsProvider";

export const useProducts = () => {
    const products = useContext(ProductsContext)

    if (products === undefined){
        throw new Error('UseCart must be used within a CartProvider')
    }
    return products
}
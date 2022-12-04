import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

const useProducts = () => {
  const context = useContext(ProductContext);

  console.log(context);

  return context;
};

export default useProducts;

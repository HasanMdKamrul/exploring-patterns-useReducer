import React, { createContext, useEffect, useReducer } from "react";
import {
  DATA_FETCHING,
  ERROR,
  LOADING_START,
} from "../Reducers/Actions/actions";
import {
  initialState,
  productsReducer,
} from "../Reducers/ProductsReducer/ProductReducer";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      try {
        dispatch({ type: LOADING_START });
        const response = await fetch("products.json");
        const data = await response.json();
        dispatch({ type: DATA_FETCHING, payload: data });
      } catch (error) {
        dispatch({ type: ERROR });
      }
    };
    loadData();
  }, []);

  const value = { state, dispatch };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;

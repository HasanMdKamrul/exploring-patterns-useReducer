import React from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../Hooks/useProducts";

const TopRated = () => {
  const { state } = useProducts();

  const { fetchingData: products, loading, error } = state;

  console.log(products);

  let content;

  if (loading) {
    content = <div>Loading.....</div>;
    return content;
  }
  if (error) {
    content = <div>Someting Went Wrong</div>;
    return content;
  }

  if (!loading && !error && products.length < 0) {
    content = <div>Page is empty</div>;
    return content;
  }
  if (!loading && !error && products.length > 0) {
    content = (
      <div className="grid grid-cols-4 gap-5">
        {products
          .filter((product) => product.rating >= 4)
          .map((product) => (
            <ProductCard product={product} />
          ))}
      </div>
    );
    return content;
  }

  return <div>{content}</div>;
};

export default TopRated;

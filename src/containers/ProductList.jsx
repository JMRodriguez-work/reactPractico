import React from "react";
import useGetProducts from "../hooks/useGetProducts";
import { ProductItem } from "../components";
import Spinner from '../assets/Spinner';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const {products, loading, error} = useGetProducts(API);
  
  return (
    <section className="main-container">
      {error && <p>ERROR!</p>}
      {loading && <Spinner />}
      <div className="ProductList">
        {products.map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export { ProductList };

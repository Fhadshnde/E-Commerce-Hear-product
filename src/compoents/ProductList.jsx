import React from "react";
import { useCart } from "../conText/store";
import dummyData from '../data'
import Navbar from "./Navbar";

const ProductCard = ({ title, description, price, image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ title, description, price, image });
  };

  return (
    <div className="border rounded-lg shadow-md bg-white flex flex-col md:flex-row items-center p-4">
      <img src={image} alt={title} className="w-full md:w-1/3 h-48 object-cover rounded-lg" />
      <div className="p-4 flex flex-col justify-between w-full md:w-2/3">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-lg font-semibold text-yellow-500">{price ? `$${price.toFixed(2)}` : "Price not available"}</p>
        <button
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">Best Selling Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

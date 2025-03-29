import { useCart } from "../conText/store";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const CartPage = () => {
  const { cartItems, updateQuantity, handleDelete } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex flex-col items-center">
      <Navbar />
      <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-5">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-center text-gray-600 text-lg">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li key={index} className="flex flex-col md:flex-row items-center bg-white shadow rounded-lg p-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                <div className="ml-4 flex-1 text-center md:text-left">
                  <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-lg font-medium text-gray-900 mt-2">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                  <p className="text-lg font-bold text-blue-800">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() => updateQuantity(item.title, -1)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() => updateQuantity(item.title, 1)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleDelete(item.title)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-white shadow rounded-lg p-6 flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Total Price</h2>
            <p className="text-2xl font-bold text-blue-600">${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

const Navbar = () => {
  return (
    <div className="h-16 w-full bg-orange-100 flex justify-center items-center px-6 shadow-md sticky top-0 z-50">
      <RouterLink to="/" className="text-lg font-bold">
        Home
      </RouterLink>
    </div>
  );
};

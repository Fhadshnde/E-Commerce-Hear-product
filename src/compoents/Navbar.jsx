import React, { useState } from "react";
import { IoIosBasket } from "react-icons/io";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"; 
import { useCart } from "../conText/store";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { cartItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-16 w-full bg-orange-100 flex justify-between items-center px-6 shadow-md sticky top-0 z-50">
      <ScrollLink           to="home"
          smooth={true}
          duration={500}
          className="text-lg font-bold">
        Tonder Store
      </ScrollLink>

      <div className="hidden md:flex space-x-4">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="hover:text-orange-600 cursor-pointer"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="hover:text-orange-600 cursor-pointer"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="products"
          smooth={true}
          duration={500}
          className="hover:text-orange-600 cursor-pointer"
        >
          Products
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-orange-600 cursor-pointer"
        >
          Contact
        </ScrollLink>
      </div>

      <div className="relative flex items-center space-x-4">
        <div className="relative">
          <RouterLink to="/cart">
            <IoIosBasket size={24} className="text-gray-700 hover:text-orange-600" />
          </RouterLink>
          {cartItems.length > 0 && (
            <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </div>
          )}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-orange-600 cursor-pointer text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-orange-600 cursor-pointer text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="products"
              smooth={true}
              duration={500}
              className="hover:text-orange-600 cursor-pointer text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-orange-600 cursor-pointer text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </ScrollLink>
            <RouterLink
              to="/cart"
              className="hover:text-orange-600 cursor-pointer text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Cart
            </RouterLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


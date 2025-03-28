import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social Media Icons

const Footer = () => {
  return (
    <div className="bg-green-500 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 space-y-8 md:space-y-0">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">Tonder Store</h2>
          <p className="text-sm mt-2 max-w-xs">
            Discover quality products at unbeatable prices. Your satisfaction is our priority!
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Help & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#terms" className="hover:underline">Terms</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#support" className="hover:underline">Customer Support</a></li>
            </ul>
          </div>
        </div>
        <div className="text-sm">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="mb-2">Phone: +123 456 789</p>
          <p className="mb-2">Email: info@tonderstore.com</p>
          <p>Address: 123 Green Lane, City, Country</p>
        </div>
      </div>
      <div className="mt-10 text-center border-t border-white pt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Tonder Store. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

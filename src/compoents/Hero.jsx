import React from "react";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <div className="bg-orange-100 min-h-screen flex flex-col md:flex-row items-center p-10">
      <div className="flex-1 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <div className="h-1 w-16 bg-green-500"></div>
          <p className="text-green-500 text-lg">Also Soothing</p>
        </div>
        <h1 className="text-green-500 text-[100px] md:text-[150px] font-bold">Tonder</h1>
        <p className="text-gray-700 max-w-lg mx-auto md:mx-0 mb-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis veritatis repellat voluptate ipsa.
        </p>
        <ScrollLink
          to="products" 
          smooth={true}
          duration={500}
          className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg mt-10 hover:bg-green-600 transition duration-300 cursor-pointer"
        >
          Buy Now
        </ScrollLink>
      </div>

      <div className="flex-1 flex justify-center">
        <img src="/1.jpg" alt="Sample" className="w-[300px] md:w-[500px] h-auto rounded-lg shadow-lg mt-2" />
      </div>
    </div>
  );
};

export default Hero;

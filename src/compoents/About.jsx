import React from "react";

const About = () => {
  return (
    <div className="bg-orange-100 min-h-screen p-8 flex flex-col w-full">
      <div className="flex-1 bg-[#f6bd67] flex flex-wrap justify-around items-center p-6">
        <div className="max-w-md">
          <h1 className="text-xl font-bold">What Does It Do For You?</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            veritatis repellat voluptate ipsa.
          </p>
        </div>
        <div className="w-[150px] h-[150px] rounded-full bg-orange-200 overflow-hidden">
          <img src="/f2.png" alt="Description" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-md">
          <h1 className="text-xl font-bold">Full List Of Ingredients</h1>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex-1 bg-[#dea04ed7] flex flex-wrap justify-between items-center p-6">
        <img src="/people.jpg" alt="People" className="w-full max-w-md h-auto" />
        <div className="max-w-xl p-5">
          <h1 className="text-xl font-bold mb-4">Why Choose Us?</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            veritatis repellat voluptate ipsa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

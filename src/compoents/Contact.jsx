import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-orange-100 flex flex-col items-center py-16 px-6">
      <h1 className="text-[50px] font-bold text-green-500 mb-6">Get In Touch</h1>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl">
        We’d love to hear from you! Whether you have a question about products, pricing, or anything else, our team is ready to help.
      </p>
      
      <form className="bg-white shadow-xl rounded-lg p-8 w-full max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-green-500 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-green-500 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
          <textarea
            id="message"
            className="w-full border border-green-500 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-green-500"
            rows="5"
            placeholder="Write your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

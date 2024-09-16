import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Service() {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={img1}
              alt="Service 1"
              className="w-full h-48 object-cover rounded-t-lg mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Premium Quality Products
            </h2>
            <p className="text-gray-600 mb-4">
              Explore our wide range of high-quality products, carefully
              selected to meet your needs.
            </p>
            <a
              href="#nooo"
              className="text-primeColor font-semibold hover:underline"
            >
              Shop Now &rarr;
            </a>
          </div>
          {/* Service 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={img2}
              alt="Service 2"
              className="w-full h-48 object-cover rounded-t-lg mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Fast & Reliable Shipping
            </h2>
            <p className="text-gray-600 mb-4">
              We ensure that your orders are delivered quickly and reliably,
              with full tracking available.
            </p>
            <a
              href="#xoo"
              className="text-primeColor font-semibold hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>
          {/* Service 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={img3}
              alt="Service 3"
              className="w-full h-48 object-cover rounded-t-lg mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Exceptional Customer Support
            </h2>
            <p className="text-gray-600 mb-4">
              Our customer support team is here to assist you with any inquiries
              or issues, ensuring a smooth shopping experience.
            </p>
            <a
              href="#xoooo"
              className="text-primeColor font-semibold hover:underline"
            >
              Contact Us &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;

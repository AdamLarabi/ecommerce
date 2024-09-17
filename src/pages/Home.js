import React from "react";
import img4 from "../assets/img4.jpg";
import { FaLock, FaRocket, FaCog, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  {
    id: 1,
    icon: <FaLock className="text-blue-500 text-4xl mb-4" />,
    title: "Secure",
    description:
      "Our platform ensures top-notch security with advanced encryption protocols to protect your data.",
  },
  {
    id: 2,
    icon: <FaRocket className="text-red-500 text-4xl mb-4" />,
    title: "Fast",
    description:
      "Experience lightning-fast performance with optimized systems and low latency to keep you ahead.",
  },
  {
    id: 3,
    icon: <FaCog className="text-green-500 text-4xl mb-4" />,
    title: "Customizable",
    description:
      "Tailor the platform to your needs with a wide range of customization options and settings.",
  },
];

function Home() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const buttonText = document.getElementById("button-text");
    const button = document.getElementById("order-button");
    const icon = document.getElementById("menu-icon");

    buttonText.style.display = "none";
    icon.classList.remove("hidden");
    icon.classList.add("animate-menu-icon");
    button.style.background = "none";
    button.classList.remove("rounded-lg", "shadow-lg");

    // Delay navigation until the animation finishes
    setTimeout(() => {
      navigate("/priceInquiry");
    }, 2000);
  };

  return (
    <div>
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={img4}
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
        <div className="relative z-1 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Welcome to Our Site
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in delay-200">
            Discover our amazing features and services.
          </p>
          <div className="flex space-x-4">
            <a
              href="#features"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105 animate-fade-in delay-400"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-500 transition-transform transform hover:scale-105 animate-fade-in delay-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 animate-fade-in">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in"
              >
                <div className="text-center mb-4 justify-center items-center flex">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
            What Our Customers Say
          </h2>
          <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-fade-in">
              <p className="text-lg mb-4">
                "Amazing service! The team was very professional and helpful."
              </p>
              <p className="font-semibold">John Doe</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-fade-in delay-200">
              <p className="text-lg mb-4">
                "Great experience from start to finish. Highly recommend!"
              </p>
              <p className="font-semibold">Jane Smith</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 animate-fade-in delay-400">
              <p className="text-lg mb-4">
                "The support was fantastic. Will definitely use their services
                again."
              </p>
              <p className="font-semibold">Alice Johnson</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Ready to Make an Order?
        </h2>
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-transform transform relative"
          id="order-button"
        >
          <span id="button-text">Make an Order</span>
          <FaBars
            className="hidden absolute text-5xl text-black top-1 right-1"
            id="menu-icon"
          />
        </button>
      </section>
    </div>
  );
}

export default Home;

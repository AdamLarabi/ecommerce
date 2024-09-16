import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          About Us
        </h1>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* About Section */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              At [Your Company Name], our mission is to deliver exceptional
              value to our customers through innovative solutions and
              unparalleled service. We strive to make a positive impact in our
              industry and community by fostering a culture of excellence and
              integrity.
            </p>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>
                Customer Satisfaction: We prioritize our customers' needs and
                work diligently to exceed their expectations.
              </li>
              <li>
                Innovation: We embrace creativity and continuously seek new ways
                to improve our products and services.
              </li>
              <li>
                Integrity: We uphold the highest standards of honesty and
                transparency in all our dealings.
              </li>
              <li>
                Collaboration: We believe in the power of teamwork and value the
                contributions of every member of our team.
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our History
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2018,
              <span className="text-black text-xl text-clip uppercase">
                {" "}
                ab robotics{" "}
              </span>{" "}
              has grown from a small startup to a leader. Over the years, we
              have achieved numerous milestones. Our journey has been driven by
              a passion for excellence and a commitment to our customers.
            </p>
            <a
              href="#csdf"
              className="text-primeColor font-semibold hover:underline"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

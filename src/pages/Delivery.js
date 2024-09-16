// src/components/Delivery.js
import React, { useState, useEffect } from "react";

function Delivery({ onConfirm, initialValues }) {
  const [deliveryDetails, setDeliveryDetails] = useState(
    initialValues || {
      address: "",
      city: "",
      postalCode: "",
    }
  );

  useEffect(() => {
    if (initialValues) {
      setDeliveryDetails(initialValues);
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails({ ...deliveryDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(deliveryDetails);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center mt-5">
        Delivery Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex , justify-center items-center"
      >
        <div className="flex flex-col">
          <div className="mt-3">
            <label className="block font-medium">Address:</label>
            <input
              type="text"
              name="address"
              value={deliveryDetails.address}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mt-3">
            <label className="block font-medium">City:</label>
            <input
              type="text"
              name="city"
              value={deliveryDetails.city}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mt-3">
            <label className="block font-medium">Postal Code:</label>
            <input
              type="text"
              name="postalCode"
              value={deliveryDetails.postalCode}
              onChange={handleChange}
              className="mt-1 block w-full border-black rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Confirm Delivery
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Delivery;

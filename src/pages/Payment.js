import React, { useState } from "react";

function Payment({ onPaymentSuccess, onPaymentFailure }) {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    amount: 0,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate a payment process
      await simulatePayment();
      onPaymentSuccess(); // Call this if payment is successful
    } catch (err) {
      setError("Payment failed. Please try again."); // Handle error
      onPaymentFailure(); // Call this if payment fails
    } finally {
      setIsProcessing(false);
    }
  };

  const simulatePayment = () => {
    // Simulate a payment process with a timeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.1 ? resolve() : reject();
      }, 2000); // Simulate network delay
    });
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block font-medium">Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Expiration Date:</label>
          <input
            type="text"
            name="expirationDate"
            value={paymentDetails.expirationDate}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium">CVV:</label>
          <input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Amount:</label>
          <input
            type="number"
            name="amount"
            value={paymentDetails.amount}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Payment;

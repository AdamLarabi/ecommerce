import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";

function OrderConfirmation() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="text-center mb-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-500 rounded-full mb-4"
        >
          <CheckCircleIcon className="w-12 h-12" />
        </motion.div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Commande Confirmée!
        </h1>
        <p className="text-lg text-gray-700">
          Merci pour votre commande! Vous recevrez un e-mail de confirmation
          avec les détails de votre commande et la livraison.
        </p>
      </div>
    </div>
  );
}

export default OrderConfirmation;

// src/pages/OrderProcess.js
import React, { useState } from "react";
import ProductSelection from "../pages/ProductSelection";
import DevisReview from "../pages/DevisReview";
import InvoiceGeneration from "../pages/InvoiceGeneration";
import Delivery from "../pages/Delivery";
import Payment from "../pages/Payment";
import OrderConfirmation from "../pages/OrderConfirmation";

function OrderProcess() {
  const [step, setStep] = useState(0);
  const [products, setProducts] = useState([]);
  const [deliveryDetails, setDeliveryDetails] = useState(null);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleProductSelection = (selectedProducts) => {
    setProducts(selectedProducts);
    nextStep();
  };

  const handleDevisReview = () => nextStep();

  const handleInvoiceGeneration = () => nextStep();

  const handleDeliveryConfirmation = (details) => {
    setDeliveryDetails(details);
    nextStep();
  };

  const handleDeleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handlePaymentSuccess = () => nextStep();

  return (
    <div>
      {step === 0 && <ProductSelection onNext={handleProductSelection} />}
      {step === 1 && (
        <DevisReview
          products={products}
          onValidate={handleDevisReview}
          onBack={prevStep}
          onDeleteProduct={handleDeleteProduct}
        />
      )}
      {step === 2 && (
        <InvoiceGeneration
          products={products}
          onNext={handleInvoiceGeneration}
        />
      )}
      {step === 3 && (
        <Delivery
          onConfirm={handleDeliveryConfirmation}
          initialValues={deliveryDetails} // Optional: if you want to pre-fill the form
        />
      )}
      {step === 4 && (
        <Payment
          deliveryDetails={deliveryDetails}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
      {step === 5 && <OrderConfirmation />}
    </div>
  );
}

export default OrderProcess;

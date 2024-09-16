import React, { useState } from "react";
import { jsPDF } from "jspdf";

function PriceInquiry() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    product_name: "",
    quantity: "",
    unit_price: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleAddProduct = () => {
    if (
      currentProduct.product_name &&
      currentProduct.quantity &&
      currentProduct.unit_price
    ) {
      setProducts([...products, currentProduct]);
      setCurrentProduct({ product_name: "", quantity: "", unit_price: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Date and time
    const date = new Date();
    const today = date.toLocaleDateString();
    const time = date.toLocaleTimeString();

    // Ticket number
    const ticketNumber = "0001";

    // Total and stamp duty
    const total = products.reduce(
      (sum, product) => sum + product.quantity * product.unit_price,
      0
    );
    const stampDuty = 0.11;
    const totalTTC = total + stampDuty;

    // Header
    doc.setFontSize(20);
    doc.text("AB ROBOTICS", 105, 20, { align: "center" });
    doc.setFontSize(14);
    doc.text("Easy Commerce", 105, 30, { align: "center" });
    doc.text("Casablanca Abdelmoumen", 105, 35, { align: "center" });

    // Date, Time, and Ticket number
    doc.setFontSize(12);
    doc.text(`Date: ${today}`, 20, 50);
    doc.text(`Time: ${time}`, 20, 55);
    doc.text(`N° Ticket: ${ticketNumber}`, 160, 50);

    // Product table header
    doc.text("Nom du produit", 20, 70);
    doc.text("Quantité", 100, 70);
    doc.text("Prix Total (DH)", 150, 70);

    // Products
    products.forEach((product, index) => {
      doc.text(product.product_name, 20, 80 + index * 10);
      doc.text(product.quantity.toString(), 100, 80 + index * 10);
      doc.text(
        (product.quantity * product.unit_price).toFixed(2) + " DH",
        150,
        80 + index * 10
      );
    });

    // Total
    doc.setFontSize(14);
    doc.text("Total:", 120, 110 + products.length * 10);
    doc.setFontSize(12);
    doc.text(total.toFixed(2) + " DH", 160, 110 + products.length * 10);

    // Stamp duty and Total TTC
    doc.text("Droits de timbre:", 120, 115 + products.length * 10);
    doc.text(stampDuty.toFixed(2) + " DH", 162, 115 + products.length * 10);
    doc.setFontSize(14);
    doc.text("TOTAL TTC:", 120, 125 + products.length * 10);
    doc.text(totalTTC.toFixed(2) + " DH", 160, 125 + products.length * 10);

    // Footer
    doc.setFontSize(12);
    doc.text("Merci de votre visite", 105, 150 + products.length * 10, {
      align: "center",
    });
    doc.text("Patente : 00001", 105, 155 + products.length * 10, {
      align: "center",
    });

    doc.save("devis.pdf");
  };

  const handleGeneratePdf = (e) => {
    e.preventDefault();
    generatePDF();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (products.length > 0) {
      setSubmitted(true);
    } else {
      alert("Please add at least one product.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Price Inquiry</h1>

      {!submitted ? (
        <>
          {products.map((product, index) => (
            <div key={index} className="mb-4 p-2 border rounded bg-gray-100">
              <p className="font-semibold">Product {index + 1}</p>
              <p>Name: {product.product_name}</p>
              <p>Quantity: {product.quantity}</p>
              <p>Unit Price: {product.unit_price}</p>
            </div>
          ))}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Product Name:</label>
              <input
                type="text"
                name="product_name"
                value={currentProduct.product_name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block font-medium">Quantity:</label>
              <input
                type="number"
                name="quantity"
                value={currentProduct.quantity}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block font-medium">Unit Price:</label>
              <input
                type="number"
                name="unit_price"
                value={currentProduct.unit_price}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={handleAddProduct}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Add New Product
              </button>
              <input
                type="submit"
                value="Valider produits"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              />
            </div>
          </form>
        </>
      ) : (
        <>
          <div>
            <h2 className="text-xl font-bold mb-4">Submitted Products</h2>
            {products.map((product, index) => (
              <div key={index} className="mb-4 p-2 border rounded bg-gray-100">
                <p className="font-semibold">Product {index + 1}</p>
                <p>Name: {product.product_name}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Unit Price: {product.unit_price}</p>
                <p>Total Price: {product.quantity * product.unit_price}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 "
              onClick={handleGeneratePdf}
            >
              Télécharger le devis
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PriceInquiry;

// src/components/DevisReview.js
import React from "react";

function DevisReview({
  products,
  onValidate,
  onBack,
  onUpdateProduct,
  onDeleteProduct,
}) {
  const total = products.reduce(
    (sum, product) => sum + product.quantity * product.unit_price,
    0
  );
  const stampDuty = 0.11;
  const totalTTC = total + stampDuty;

  const handleChange = (index, field, value) => {
    onUpdateProduct(index, { ...products[index], [field]: value });
  };

  const handleDelete = (index) => {
    onDeleteProduct(index);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Révision du Devis</h1>

      {products.map((product, index) => (
        <div key={index} className="mb-4 p-2 border rounded bg-gray-100">
          <p className="font-semibold">Produit {index + 1}</p>
          <div className="flex flex-col mb-2">
            <label>Nom:</label>
            <input
              type="text"
              value={product.product_name}
              onChange={(e) =>
                handleChange(index, "product_name", e.target.value)
              }
              className="mt-1 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Quantité:</label>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleChange(index, "quantity", e.target.value)}
              className="mt-1 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label>Prix Unitaire:</label>
            <input
              type="number"
              value={product.unit_price}
              onChange={(e) =>
                handleChange(index, "unit_price", e.target.value)
              }
              className="mt-1 border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <p>Prix Total: {product.quantity * product.unit_price} DH</p>
          <button
            onClick={() => handleDelete(index)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-2"
          >
            Supprimer
          </button>
        </div>
      ))}

      <div className="text-right mt-4">
        <p>Total: {total.toFixed(2)} DH</p>
        <p>Droits de Timbre: {stampDuty.toFixed(2)} DH</p>
        <p className="font-bold">TOTAL TTC: {totalTTC.toFixed(2)} DH</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={onBack}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >
          Retour
        </button>
        <button
          onClick={onValidate}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Valider le Devis
        </button>
      </div>
    </div>
  );
}

export default DevisReview;

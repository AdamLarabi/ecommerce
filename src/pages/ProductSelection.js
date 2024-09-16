// src/components/ProductSelection.js
import React, { useState } from "react";

function ProductSelection({ onNext }) {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    product_name: "",
    quantity: "",
    unit_price: "",
  });

  const handleAddProduct = () => {
    if (
      currentProduct.product_name &&
      currentProduct.quantity &&
      currentProduct.unit_price
    ) {
      setProducts([...products, currentProduct]);
      setCurrentProduct({ product_name: "", quantity: "", unit_price: "" });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleNext = () => {
    if (products.length > 0) {
      onNext(products);
    } else {
      alert("Veuillez ajouter au moins un produit.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sélection des Produits</h1>

      {products.map((product, index) => (
        <div key={index} className="mb-4 p-2 border rounded bg-gray-100">
          <p className="font-semibold">Produit {index + 1}</p>
          <p>Nom: {product.product_name}</p>
          <p>Quantité: {product.quantity}</p>
          <p>Prix Unitaire: {product.unit_price}</p>
        </div>
      ))}

      <form className="space-y-4">
        <div>
          <label className="block font-medium">Nom du Produit:</label>
          <input
            type="text"
            name="product_name"
            value={currentProduct.product_name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block font-medium">Quantité:</label>
          <input
            type="number"
            name="quantity"
            value={currentProduct.quantity}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block font-medium">Prix Unitaire:</label>
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
            Ajouter un Produit
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductSelection;

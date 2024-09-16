// src/components/InvoiceGeneration.js
import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Importer la bibliothèque autotable
import logo from "../assets/logo.png";

function InvoiceGeneration({ products, clientName, clientPhone, onNext }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Date and time
    const date = new Date();
    const today = date.toLocaleDateString();

    // Invoice details
    const invoiceNumber = "DV0102023";

    // Total calculations
    const totalHT = products.reduce((sum, product) => {
      const unitPrice = parseFloat(product.unit_price); // Convertir en nombre
      if (isNaN(unitPrice)) {
        console.error(
          `Invalid unit price for product: ${product.product_name}`
        );
        return sum; // Ignore les produits avec un prix invalide
      }
      return sum + product.quantity * unitPrice;
    }, 0);
    const taxRate = 0.2; // 20% TVA
    const totalTTC = totalHT * (1 + taxRate);

    // Add logo
    doc.addImage(logo, "PNG", 10, 10, 50, 20); // Logo en haut à gauche

    // Header
    doc.setFontSize(27); // Taille plus grande
    doc.setFont("helvetica", "bolditalic"); // Police en gras
    doc.setTextColor(0, 0, 128); // Couleur bleu foncé
    doc.text("AB ROBOTICS", 190, 20, { align: "right" }); // Aligner à droite

    doc.setFontSize(14);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);

    // Client information
    doc.setFontSize(12);
    doc.text(`Client: ${clientName}`, 20, 60);
    doc.text(`Phone: ${clientPhone}`, 20, 65);
    doc.text(`Invoice N°: ${invoiceNumber}`, 160, 60);
    doc.text(`Date: ${today}`, 160, 65);

    // Product table header
    doc.autoTable({
      startY: 80, // Positionnement du tableau
      head: [["Désignation", "Qté", "P.U. HT (DH)", "Mont. HT (DH)"]],
      body: products.map((product) => {
        const unitPrice = parseFloat(product.unit_price); // Convertir en nombre
        return [
          product.product_name,
          product.quantity,
          unitPrice.toFixed(2),
          (product.quantity * unitPrice).toFixed(2),
        ];
      }),
    });

    // Totals
    const finalY = doc.lastAutoTable.finalY || 60; // Positionnement en bas du tableau
    doc.setFontSize(14);
    doc.text("Total HT:", 120, finalY + 10);
    doc.text(totalHT.toFixed(2) + " DH", 160, finalY + 10);

    doc.setFontSize(12);
    doc.text("TVA 20%:", 120, finalY + 15);
    doc.text((totalHT * taxRate).toFixed(2) + " DH", 160, finalY + 15);

    doc.setFontSize(14);
    doc.text("Total TTC:", 120, finalY + 25);
    doc.text(totalTTC.toFixed(2) + " DH", 160, finalY + 25);

    // Footer with legal info and product descriptions
    const footerY = finalY + 50;
    doc.setFontSize(10);

    // Première ligne du footer
    doc.text(
      "ICE: 002091130000086    I.F.: 252 825 73    R.C.: 405 041 Casablanca    Patente: 347 953 68    C.N.S.S.: 100 57 07",
      20,
      footerY
    );

    doc.text(
      "Capital 100000.00 Dh    Adresse: Rue Soumaya Res Shehrazade 3 Etg 5 N 22 Palmiers 20340 Casablanca",
      20,
      footerY + 5
    );

    doc.text(
      "Téléphone: 05 22 03 45 11    GSM: 06 71 23 36 05    Web: www.abrobotics.net    Email: info@abrobotics.net",
      20,
      footerY + 10
    );

    // Save the PDF
    doc.save(`invoice_${invoiceNumber}.pdf`);

    // Proceed to next step
    onNext();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center mt-5">
        Invoice Generation
      </h2>
      <div className="flex justify-center">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={generatePDF}
        >
          Generate Invoice
        </button>
      </div>
    </div>
  );
}

export default InvoiceGeneration;

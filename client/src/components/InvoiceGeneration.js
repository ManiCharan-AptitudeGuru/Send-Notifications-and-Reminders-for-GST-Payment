import React from "react";
import styled from "styled-components";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { generateInvoice, downloadInvoice } from "../utils/api";

const InvoiceContainer = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
`;

const InvoiceGeneration = ({ recruiterId, onInvoiceGenerated }) => {
  const handleGenerateInvoice = async () => {
    try {
      const response = await generateInvoice({ recruiterId, amount: 1000 }); // Example amount
      onInvoiceGenerated(response.data.invoice);
    } catch (error) {
      console.error("Error generating invoice:", error);
    }
  };

  const handleDownloadInvoice = async (invoiceId) => {
    try {
      await downloadInvoice(invoiceId);
      alert("Invoice downloaded successfully");
    } catch (error) {
      console.error("Error downloading invoice:", error);
    }
  };

  return (
    <InvoiceContainer>
      <h2>
        <FaFileInvoiceDollar /> Invoice Generation
      </h2>
      <Button onClick={handleGenerateInvoice}>Generate Invoice</Button>
    </InvoiceContainer>
  );
};

export default InvoiceGeneration;

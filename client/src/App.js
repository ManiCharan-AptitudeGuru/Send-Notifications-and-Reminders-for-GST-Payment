import React, { useState } from "react";
import styled from "styled-components";
import GSTRegistration from "./components/GSTRegistration";
import InvoiceGeneration from "./components/InvoiceGeneration";
import NotificationSystem from "./components/NotificationSystem";

const AppContainer = styled.div`
  padding: 20px;
`;

const App = () => {
  const [recruiter, setRecruiter] = useState(null);
  const [invoice, setInvoice] = useState(null);

  const handleRegister = (recruiterData) => {
    setRecruiter(recruiterData);
  };

  const handleInvoiceGenerated = (invoiceData) => {
    setInvoice(invoiceData);
  };

  return (
    <AppContainer>
      <h1>GST Management System</h1>

      {!recruiter && <GSTRegistration onRegister={handleRegister} />}

      {recruiter && (
        <>
          <InvoiceGeneration
            recruiterId={recruiter._id}
            onInvoiceGenerated={handleInvoiceGenerated}
          />
          {invoice && (
            <div>
              <h3>Generated Invoice</h3>
              <p>Invoice Number: {invoice.invoiceNumber}</p>
              <p>Amount: ${invoice.amount}</p>
              <p>GST: ${invoice.gst}</p>
              <p>Total: ${invoice.total}</p>
            </div>
          )}
          <NotificationSystem recruiterId={recruiter._id} />
        </>
      )}
    </AppContainer>
  );
};

export default App;

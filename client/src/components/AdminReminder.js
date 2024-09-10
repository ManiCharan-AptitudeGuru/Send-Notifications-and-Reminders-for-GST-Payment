import React from "react";
import styled from "styled-components";
import { FaExclamationTriangle } from "react-icons/fa";

const ReminderContainer = styled.div`
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
`;

const AdminReminder = ({ dueDate, amount }) => {
  return (
    <ReminderContainer>
      <h3>
        <FaExclamationTriangle /> Admin GST Payment Reminder
      </h3>
      <p>
        GST payment of ${amount} is due on {dueDate}.
      </p>
      <p>Please ensure timely payment to the government.</p>
    </ReminderContainer>
  );
};

export default AdminReminder;

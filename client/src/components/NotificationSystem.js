import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaBell } from "react-icons/fa";
import { getNotifications } from "../utils/api";

const NotificationContainer = styled.div`
  margin: 20px 0;
`;

const NotificationItem = styled.div`
  background-color: ${(props) => (props.read ? "#f8f9fa" : "#e9ecef")};
  border: 1px solid #dee2e6;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const NotificationSystem = ({ recruiterId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await getNotifications(recruiterId);
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
    // Set up polling for new notifications
    const interval = setInterval(fetchNotifications, 60000); // Poll every minute

    return () => clearInterval(interval);
  }, [recruiterId]);

  return (
    <NotificationContainer>
      <h2>
        <FaBell /> Notifications
      </h2>
      {notifications.map((notification) => (
        <NotificationItem key={notification._id} read={notification.read}>
          <p>{notification.message}</p>
          <small>{new Date(notification.date).toLocaleString()}</small>
        </NotificationItem>
      ))}
    </NotificationContainer>
  );
};

export default NotificationSystem;

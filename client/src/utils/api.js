import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const registerGST = (recruiterData) =>
  axios.post(`${API_URL}/recruiters/register`, recruiterData);
export const generateInvoice = (invoiceData) =>
  axios.post(`${API_URL}/invoices/generate`, invoiceData);
export const downloadInvoice = (invoiceId) =>
  axios.get(`${API_URL}/invoices/download/${invoiceId}`);
export const getNotifications = (recruiterId) =>
  axios.get(`${API_URL}/notifications/${recruiterId}`);

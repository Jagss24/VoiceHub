import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = (payload) => api.post("authenticate/sendOtp", payload);

export const verifyOtp = (payload) =>
  api.post("authenticate/verifyOtp", payload);

export const getUSer = (userId) =>
  api.get(`authenticate/getUser?userId=${userId}`);

export const activate = (data) => api.post("authenticate/activate", data);
export default api;

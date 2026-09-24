import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

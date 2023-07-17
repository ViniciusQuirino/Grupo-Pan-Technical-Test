import axios from "axios";

const api = axios.create({
	baseURL: "https://deploy-ew5c.onrender.com",
	timeout: 15000,
});

export default api;

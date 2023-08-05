import axios from "axios";

const api = axios.create({
	baseURL: "https://db-php.onrender.com",
	// baseURL: "http://localhost",
	timeout: 15000,
});

export default api;

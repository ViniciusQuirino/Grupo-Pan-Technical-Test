import axios from "axios";

const api = axios.create({
	//baseURL: "http://localhost:3333",
	baseURL: "http://localhost",
	timeout: 15000,
});

export default api;

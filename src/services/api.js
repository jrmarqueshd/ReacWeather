import dotenv from "dotenv";

import axios from "axios";

dotenv.config();

const api = axios.create({
	baseURL: `https://api.hgbrasil.com/weather?format=json-cors&key=${process.env.API_KEY}`
});

export default api;

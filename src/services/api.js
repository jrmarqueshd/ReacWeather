import dotenv from "dotenv";

import axios from "axios";
dotenv.config();

const api = axios.create({
	baseURL: `https://api.hgbrasil.com/weather?format=json-cors&key=33f71e3b&woeid=455857`
});

export default api;

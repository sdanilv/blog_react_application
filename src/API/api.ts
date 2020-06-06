import axios from "axios";

export const axiosInstance = axios.create({ baseURL: "https://bloggy-api.herokuapp.com/" });

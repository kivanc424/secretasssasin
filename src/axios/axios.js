import axios from "axios";

export const axiosInstance = axios.create({baseUrl: "http://localhost:8080/"})

import axios from "axios";

export const movieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_DB_URL,
  params: {
    language: "es-MX",
    api_key: process.env.EXPO_PUBLIC_API_KEY,
  },
});

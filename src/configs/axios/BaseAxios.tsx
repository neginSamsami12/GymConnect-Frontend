import axios, { AxiosInstance } from "axios"

import { BASE_URL, TOKEN_NAME } from "../api-config"

// Create an instance of Axios
const baseAxios: AxiosInstance = axios.create({
  baseURL: "/portal", // Replace with your API base URL
  // timeout: 10000, // Optional: Set request timeout
  headers: {
    "Content-Type": "application/json",
    // Add any default headers here
  },
})

// Optionally, add request interceptors
// baseAxios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(TOKEN_NAME)
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// Optionally, add response interceptors
baseAxios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default baseAxios

// File: src/services/searchService.js
import axios from "axios";
const API_URL = "http://localhost:5000/api/users";

// Naya search record backend par save karta hai
export const saveSearch = (searchData) => {
  return axios.post(API_URL, searchData);
};

// Ek user ki search history haasil karta hai
export const getSearchHistory = (userId) => {
  return axios.get(`${API_URL}/${userId}`);
};

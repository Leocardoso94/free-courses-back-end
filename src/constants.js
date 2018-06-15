import axios from 'axios';

export const { SHEETS_ID } = process.env;
export const { API_KEY } = process.env;
export const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_ID}`;

export const request = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});

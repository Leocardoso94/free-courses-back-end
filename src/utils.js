import axios from 'axios';
import { API_URL, API_KEY } from '../src/constants';

console.log(API_KEY);

const request = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});

export const getGSheetsValue = async params => (await request.get(`/values/${params}`)).data;

export const getGSheetsValueCategories = async () => (await getGSheetsValue('categories!A1:Z')).values;

export const getGSheetsValueCourses = async () => (await getGSheetsValue('courses!A1:Z')).values;

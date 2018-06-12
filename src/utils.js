import axios from 'axios';
import {
  API_URL,
  API_KEY,
} from '../src/constants';

const request = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});

export const getGSheetsValue = async params => (await request.get(`/values/${params}`)).data;

export const getGSheetsValueCategories = async () => (await getGSheetsValue('categories!A1:Z')).values;

export const getGSheetsValueCourses = async () => (await getGSheetsValue('courses!A1:Z')).values;

export const getKeys = arr => arr[0];

export const normalizeSheetsData = (sheetsData = []) => {
  const keys = sheetsData.shift();

  return sheetsData
    .map(values => values.map((value, index) => ({
      [keys[index]]: value,
    })));
};

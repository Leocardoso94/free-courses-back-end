import axios from 'axios';
import {
  API_URL,
  API_KEY,
} from '../src/constants';
import {
  isNumber,
} from 'util';

const request = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
});

export const normalizeSheetsData = (sheetsData = [], keys = []) => sheetsData
  .map(values => values
    .map((value, index) => ({
      [keys[index]]: value,
    }))
    .reduce((prev, obj) => Object.assign(prev, obj), {}));

export const getGSheetsValue = async params => (await request.get(`/values/${params}`)).data;

export const getGSheetsValueCategories = async (limit, offset) => {
  const sheetsData = (await getGSheetsValue('categories!A1:Z')).values;

  const keys = sheetsData.shift();

  if (isNumber(limit) &&
    isNumber(offset)) return normalizeSheetsData(sheetsData.slice(offset, limit), keys);

  return normalizeSheetsData(sheetsData, keys);
};

export const getGSheetsValueCourses = async () => (await getGSheetsValue('courses!A1:Z')).values;

export const getKeys = arr => arr[0];

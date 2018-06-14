import slugify from '@sindresorhus/slugify';
import { isNumber } from 'util';
import { request } from './constants';
import { arrayToAnObject } from './utils';

const normalizeSheetsData = (sheetsData = [], keys = []) =>
  sheetsData
    .map(values => values
      .map((value, index) => ({
        [keys[index]]: value,
      }))
      .reduce(arrayToAnObject, {}));

export const getGSheetsValue = async (params, { limit = null, offset = null }) => {
  const { data: { values } } = await request.get(`/values/${params}`);

  const keys = values.shift();

  if (isNumber(limit) &&
    isNumber(offset)) return normalizeSheetsData(values.slice(offset, limit), keys);

  return normalizeSheetsData(values, keys);
};

export const getCategories = async (options = {}) => getGSheetsValue('categories!A1:Z', options);

export const getCourses = async (options = {}) =>
  (await getGSheetsValue('courses!A1:I', options))
    .map(course => ({
      ...course,
      categories: course.categories.split(','),
      slug: slugify(course.title + course.author),
    }));

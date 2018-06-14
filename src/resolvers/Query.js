import {
  getGSheetsValueCategories,
} from '../utils';


export const categories = (parent, {
  limit = 10,
  offset = 0,
}) => getGSheetsValueCategories(limit, offset);


export const findCategoryById = async (parent, {
  id,
}) => {
  const categoriesData = await getGSheetsValueCategories();

  return categoriesData.find(category => category.id === id);
};

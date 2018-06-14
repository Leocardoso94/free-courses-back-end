import { getCourses, getCategories } from '../models';
import { findById, filterCoursesByCategoryTitle } from '../utils';

export const categories = (parent, {
  limit = 10,
  offset = 0,
}) => getCategories({ limit, offset });


export const findCategoryById = async (parent, {
  id,
}) => {
  const category = await getCategories();

  return category.find(ctg => findById(ctg, id));
};

export const courses = (parent, {
  limit = 10,
  offset = 0,
}) => getCourses({ limit, offset });


export const findCourseById = async (parent, {
  id,
}) => {
  const course = await getCourses();

  return course.find(crs => findById(crs, id));
};

export const filterByCategory = async (parent, {
  limit = 10,
  offset = 0,
  categoryTitle,
}) =>
  (await getCourses())
    .filter(course => filterCoursesByCategoryTitle(course, categoryTitle))
    .slice(offset, limit);

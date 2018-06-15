export const findById = (element, id) => element.id === id;

export const arrayToAnObject = (prev, current) => ({ ...prev, ...current });

const someCategoryIsEqual = (categoryOfCourse, categoryTitle) =>
  categoryOfCourse.toLowerCase() === categoryTitle.toLowerCase();

export const filterCoursesByCategoryTitle = ({ categories }, categoryTitle) =>
  categories.some(categoryOfCourse => someCategoryIsEqual(categoryOfCourse, categoryTitle));

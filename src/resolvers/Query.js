import {
  getGSheetsValueCategories,
  getGSheetsValueCourses,
  normalizeSheetsData,
} from '../utils';

// async function feed(parent, args, ctx, info) {
//   const { filter, first, skip } = args // destructure input arguments
//   const where = filter
//     ? { OR: [{ url_contains: filter }, { description_contains: filter }] }
//     : {}

//   const allLinks = await ctx.db.query.links({})
//   const count = allLinks.length

//   const queriedLinkes = await ctx.db.query.links({ first, skip, where })

//   return {
//     linkIds: queriedLinkes.map(link => link.id),
//     count
//   }
// }

export const info = async () => {
  const sheetsData = await getGSheetsValueCourses();

  const courses = normalizeSheetsData(sheetsData);

  console.log(courses[1]);

  return '';
};


export const categories = async () => {
  const data = await getGSheetsValueCategories();

  return '';
};

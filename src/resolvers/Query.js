import { getGSheetsValueCategories } from '../utils';

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
  try {
    const data = await getGSheetsValueCategories();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return '';
};


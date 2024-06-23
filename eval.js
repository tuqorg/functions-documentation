const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const allResults = await Promise.all(items.map(async (item) => {}));
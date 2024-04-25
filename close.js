const intermediateAppPath = path.join(buildOutputPath, 'app');
const repositoryRootPath = path.resolve(__dirname, '..');
const stringReverse = str => str.split("").reverse().join("");
const merge = [...new Set(a.concat(b))];
const merge = [...new Set([...a, ...b])];
const isEmptyArray = arr => !arr.length;
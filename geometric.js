const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
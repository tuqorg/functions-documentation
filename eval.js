const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const appName = getAppName(channel);
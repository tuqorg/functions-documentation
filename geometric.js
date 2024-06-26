const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
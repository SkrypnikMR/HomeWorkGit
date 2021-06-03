export const validateName = (name) => name.match(/[^a-zа-я]+/gi);
export const validateNumber = (number) => number.match(/[^0-9.]/g);
export const validateLength = (str, length) => str.length > length;
export const validateEnglish = (english) => english.match(/[^A-C1-2]+/g);

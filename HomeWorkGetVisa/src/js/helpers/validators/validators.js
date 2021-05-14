export const validateName = (name) => name.match(/[^a-zа-я]+/gi);
export const validateNumber = (number) => number.match(/^\d+$/);
export const validateLength = (str, length) => str.length > length;
export const validateEnglish = (english) => english.match(/[A-C][1-2]+/g);

export const getRndElement = (array) => {
  const rndNumber = Math.trunc(Math.random() * array.length);
  return array[rndNumber];
};

export const getRndBalance = () => {
  return Math.trunc(Math.random() * (Math.random() * 3000) * 5);
};

export const getRndAge = () => {
  return Math.trunc(5 + Math.random() * (100 + 1 - 5));
};

export const getRndDocuments = () => {
  const passport = Boolean(Math.trunc(0 + Math.random() * (1 + 1 - 0)));
  const insurance = Boolean(Math.trunc(0 + Math.random() * (1 + 1 - 0)));
  const photo = Boolean(Math.trunc(0 + Math.random() * (1 + 1 - 0)));
  return [passport, insurance, photo];
};


export const getRndNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
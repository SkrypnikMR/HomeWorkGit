export const checkBalance = (balance) => (balance >= 2500 ? true : false);

export const checkAge = (age) => (age >= 18 && age <= 60 ? true : false);
export const checkDocuments = (candidate) =>
  candidate.passport && candidate.insurance && candidate.photo ? true : false;
export const checkEnglish = (english) =>
  english === "B1" || english === "B2" || english === "C1" || english === "C2"
    ? true
    : false;

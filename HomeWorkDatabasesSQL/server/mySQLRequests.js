const residentsCount = `SELECT count(*) as count
FROM persons`;

const averageAge = `SELECT ROUND(AVG(AGE) ,0) as avg_AGE
FROM persons`;

const noRepeatListOfLastnames = `SELECT LASTNAME FROM persons
 group by LASTNAME 
 order by LASTNAME`;

const listWithRepeatedCount = `SELECT LASTNAME,count(LASTNAME) as REPEAT_COUNT FROM persons
group by LASTNAME 
order by LASTNAME`;

const letterBInCenter = `SELECT *  FROM persons 
WHERE SUBSTR(LASTNAME, LENGTH(LASTNAME)/4, 1) like 'б' OR  SUBSTR(LASTNAME, (LENGTH(LASTNAME)/4) + 1, 1) like 'б'`;

const withoutHomeBoys = `SELECT * FROM persons
WHERE ID_streets IS NULL`;

const underAgedFromTrue = `SELECT FIRSTNAME,LASTNAME,AGE,NAME FROM persons INNER JOIN streets ON persons.ID_streets = streets.ID WHERE AGE < 18 AND NAME like 'проспект Правды'`;

const alphabetStreetsWithResidentsCount = `SELECT NAME,count(persons.ID) as NUMBER_NAME 
FROM persons INNER JOIN streets 
ON persons.ID_streets = streets.ID 
GROUP BY NAME`;

const listOfstreetsLengthSix = `SELECT NAME FROM streets WHERE NAME LIKE '______'`;

const listOfstreetsResidentLessThree = `SELECT NAME,count(persons.ID) as NUMBER_NAME 
FROM persons INNER JOIN streets 
ON persons.ID_streets = streets.ID 
GROUP BY NAME HAVING count(persons.ID) < 3`;

module.exports = {
  residentsCount,
  averageAge,
  noRepeatListOfLastnames,
  listOfstreetsLengthSix,
  listWithRepeatedCount,
  letterBInCenter,
  withoutHomeBoys,
  underAgedFromTrue,
  alphabetStreetsWithResidentsCount,
  listOfstreetsResidentLessThree,
};

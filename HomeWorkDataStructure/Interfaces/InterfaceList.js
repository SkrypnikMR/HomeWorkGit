function IList() {}
IList.prototype.clear = function () {}; // очистка коллекции, size = 0
IList.prototype.getSize = function () {}; // возвращает размер коллекции, количество элементов коллекции, не undefined
IList.prototype.add = function (value) {}; // добавление элемента в коллекцию
IList.prototype.set = function (value, index) {}; // запись в коллекцию согласно переданному индексу, операция перезаписывания
IList.prototype.get = function (index) {}; // возвращает элемент коллекции по индексу
IList.prototype.remove = function (value) {}; // удаляет элемент из коллекции и возвращает его
IList.prototype.toArray = function () {}; // приведение данных коллекции в массив
IList.prototype.toString = function () {}; // представление коллекции в строковом виде
IList.prototype.contains = function (value) {}; // возвращает true || false, проверяя наличие элемента в коллекции
IList.prototype.minValue = function () {}; // возвращает максимальный элемент коллекции
IList.prototype.maxValue = function () {}; // возвращает минимальный элемент коллекции
IList.prototype.minIndex = function () {}; // возвращает индекс максимального элемента коллекции
IList.prototype.maxIndex = function () {}; // возвращает индекс минимального элемента коллекции
IList.prototype.reverse = function () {}; // выполняет реверс коллекции
IList.prototype.halfReverse = function () {}; // выполняет половинный реверс коллекции
IList.prototype.retainAll = function (array) {}; // оставляет все элементы в существующей коллекции на основании найденных совпадений в переданном массиве в качестве аргумента
IList.prototype.removeAll = function (array) {}; // удаляет все элементы в существующей коллекции на основании найденных совпадений в переданном массиве в качестве аргумента
IList.prototype.sort = function () {}; // рекурсивная сортировка на выбор (Quick or Merge)
IList.prototype.print = function () {}; // вывод в консоль каждого из элементов коллекции

module.exports = IList
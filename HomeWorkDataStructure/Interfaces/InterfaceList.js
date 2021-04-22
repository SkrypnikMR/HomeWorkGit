var InterfaceList = function () {}; // interface

InterfaceList.prototype.clear = function () {}; // очистка коллекции, size = 0
InterfaceList.prototype.getSize = function () {}; // возвращает размер коллекции, количество элементов коллекции, не undefined
InterfaceList.prototype.add = function (value) {}; // добавление элемента в коллекцию
InterfaceList.prototype.set = function (value, index) {}; // запись в коллекцию согласно переданному индексу, операция перезаписывания
InterfaceList.prototype.get = function (index) {}; // возвращает элемент коллекции по значению
InterfaceList.prototype.remove = function (value) {}; // удаляет элемент из коллекции и возвращает его
InterfaceList.prototype.toArray = function () {}; // приведение данных коллекции в массив
InterfaceList.prototype.toString = function () {}; // представление коллекции в строковом виде
InterfaceList.prototype.contains = function (value) {}; // возвращает true || false, проверяя наличие элемента в коллекции
InterfaceList.prototype.minValue = function () {}; // возвращает максимальный элемент коллекции
InterfaceList.prototype.maxValue = function () {}; // возвращает минимальный элемент коллекции
InterfaceList.prototype.minIndex = function () {}; // возвращает индекс максимального элемента коллекции
InterfaceList.prototype.maxIndex = function () {}; // возвращает индекс минимального элемента коллекции
InterfaceList.prototype.reverse = function () {}; // выполняет реверс коллекции
InterfaceList.prototype.halfReverse = function () {}; // выполняет половинный реверс коллекции
// [undef, undef, 5, undef, 7, 8, undef, undef, undef].toArray();
// [5, 7, 8] 10
InterfaceList.prototype.retainAll = function (array) {}; // оставляет все элементы в существующей коллекции на основании найденных совпадений в переданном массиве в качестве аргумента
InterfaceList.prototype.removeAll = function (array) {}; // удаляет все элементы в существующей коллекции на основании найденных совпадений в переданном массиве в качестве аргумента
InterfaceList.prototype.sort = function () {}; // рекурсивная сортировка на выбор (Quick or Merge)
InterfaceList.prototype.print = function () {}; // вывод в консоль каждого из элементов коллекции

module.exports = InterfaceList;

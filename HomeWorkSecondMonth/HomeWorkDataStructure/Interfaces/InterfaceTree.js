var InterfaceTree = function() {}; // function constructor (like interface)

InterfaceTree.prototype.init = function(array){}; // инициализация дерева на основании переданного массива данных
InterfaceTree.prototype.clear = function(){}; // удаление всех узлов дерева
InterfaceTree.prototype.size = function(){}; // возвращает количество узлов
InterfaceTree.prototype.insert = function(value){}; // вставка узла в дерево
InterfaceTree.prototype.print = function(type, callback){}; // обход в глубину дерева - тремя способами
InterfaceTree.prototype.toArray = function(){}; // представление дерева в виде массива данных
InterfaceTree.prototype.search = function(value){}; // возвращает узел согласно переданному значению
InterfaceTree.prototype.width = function(){}; // возвращает максимальную ширину дерева
InterfaceTree.prototype.height = function(){}; // возвращает высоту дерева
InterfaceTree.prototype.nodes = function(){}; // возвращает количество узлов в дереве
InterfaceTree.prototype.leaves = function(){}; // возвращает количество листьев в дереве
InterfaceTree.prototype.reverse = function(){}; // реверс дерева
InterfaceTree.prototype.minNode = function(){}; // возвращает узел с минимальным числом
InterfaceTree.prototype.maxNode = function(){}; // возвращает узел с максимальным числом
InterfaceTree.prototype.remove = function(value){}; // удаление узла согласно переданному числу

module.exports = InterfaceTree;
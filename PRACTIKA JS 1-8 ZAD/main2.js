//Задание 2.
// Дана переменная Х, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных Х выводит 
// в консоль сообщение вида: «X — число».
// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».


let x = prompt('Введите значение X');

if (typeof x === 'number') {
    alert(x + ' - число');
} else if (typeof x == 'string') {
    alert(x + ' - строка');
} else if (typeof x == 'boolean') {
    alert(x + 'Логический тип');
} else {
    alert(x + 'x не определен');
}

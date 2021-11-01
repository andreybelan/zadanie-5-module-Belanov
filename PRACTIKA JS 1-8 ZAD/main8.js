// Задание №8.
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.


let DollarScurrency = new Map ([
    ['Dollars', 'currency'],
    ['fire', 'flame'],
    ['language', 'russian']
]);
for (let [key, value] of DollarScurrency) {
    console.log(`Ключ - ${key}. Значение - ${value}`);
}

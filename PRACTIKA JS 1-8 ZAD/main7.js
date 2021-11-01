// Задание №7.
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.


let zeros=0;
let strs=0;
let countables=0;
let uncountables=0;
let nulls=0;

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 'dog', 'cat', 'beer'];
for (i = 0; i<array.length; i++) {
    
    if (typeof array[i] == 'string') {
        strs++;
    } else if (array[i]==null){
        nulls++;
    } else if (array[i]==0) {
        zeros++;
    } else if (array[i] % 2 === 0) {
        countables++;
    } else {
        uncountables++;
    }   
}

alert(`Нулей - ${zeros} \n Строк - ${strs} \n Нуллов - ${nulls} \n Четных - ${countables} \n Нечетных - ${uncountables}`)



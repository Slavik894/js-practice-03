// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(number => {
    sum += number;
});
console.log(sum);

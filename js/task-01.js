// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

const numbers = [1, 2, 3, 4, 5];
const numberSqr = numbers.map(number => number*number);
console.log(numberSqr); 

// for(const number of numbers){
//     newArray.push(number*number);
// }
// console.log(newArray); 
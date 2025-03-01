// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

const stringArray = ['banana', 'orange', 'apple', 'pear'];
const sortedArray = stringArray.toSorted((a, b)=> a.localeCompare(b));
console.log(sortedArray); 

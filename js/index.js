// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
console.log(1);

const firstAr =  [1, 2, 3];
const secondAr = [4, 5, 6]; 
const concatAr = firstAr.concat(secondAr);

console.log(concatAr);

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
console.log(2);

const array2 = [1, 2, 3];
const reverseArray = array2.reverse();

console.log(reverseArray);

// 3.  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
console.log(3);

const array3 = [1, 2, 3];
array3.push(4, 5, 6);

console.log(array3);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
console.log(4);

const array4 = [1, 2, 3];
array4.unshift(4, 5, 6);

console.log(array4);

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
console.log(5);

const array5 = ['js', 'css', 'jq'];
const shiftArray = array5.shift();

console.log(shiftArray);

// 6.  Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его .
console.log(6);

const array6 = ['js', 'css', 'jq'];
const popArray = array6.pop();

console.log(popArray);

//  7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
console.log(7);

const array7 = [1, 2, 3, 4, 5];
const sliceArray = array7.slice(0, 3);

console.log(sliceArray);
// 8.  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
console.log(8);

const array8 = [1, 2, 3, 4, 5];
const sliceArray8 = array8.slice(-2);

console.log(sliceArray8);
// 9.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
console.log(9);

const array9 = [1, 2, 3, 4, 5];
array9.splice(1, 2);

console.log(array9);
// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
console.log(10);

const array10 = [1, 2, 3, 4, 5];
const spliceArray10 = array10.splice(1, 3);

console.log(spliceArray10);
// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
console.log(11);

const array11 = [1, 2, 3, 4, 5];
array11.splice(3, 2, 'a', 'b', 'c', 4, 5);

console.log(array11);
// 12.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log(12);

const array12 = [1, 2, 3, 4, 5];
array12.splice(1,4,'a', 'b', 2, 3, 4, 'c', 5, 'e');

console.log(array12);

// 13.  Дан массив [3, 4, 1, 12, 7]. Отсортируйте его.
console.log(13);

const array13 = [3, 4, 1, 12, 7];
array13.sort(function(a, b) {
  return a -b;
});

console.log(array13);

// var numbers = [4, 2, 5, 1, 3];
// numbers.sort(function(a, b) {
//   return a - b;
// });
// console.log(numbers); // [1, 2, 3, 4, 5]

// 14. Дан массив со следующими объектами внутри:  					{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,} 		Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет”
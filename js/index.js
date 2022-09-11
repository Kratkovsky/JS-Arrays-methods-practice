// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const first =  [1, 2, 3],
second = [4, 5, 6]; 
const fused = first.concat(second);

console.log(fused);


// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const array = [1, 2, 3];
array.reverse();

console.log(array);


// 3.  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const startArray = [1, 2, 3]
startArray.push(4, 5, 6);

console.log(startArray);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const endArray = [1, 2, 3];
endArray.unshift(4, 5, 6);

console.log(endArray);

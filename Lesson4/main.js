// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function square (a,b){
    return a*b
}
console.log(square(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle (r){
    return r**2*Math.PI
}
console.log(circle(3));
console.log(circle(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cilinder (h,r){
    return (2*Math.PI*r**2) + (2*Math.PI*r*h)
}
console.log(cilinder(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
function array(arr){
    for (const item of arr) {
        console.log(item);
    }
}
array([1, 3, 5, 78, 90]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function par (text){
    document.write(`<p>${text}</p>`)
}
par(`asfdgfjhgj`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(a){
    document.write(`<ul>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`</ul>`)
}
list(`hello max`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list1(text, numb){
    for (let i = 0; i < numb; i++) {
        document.write(`<ul>`);
        document.write(`<li>${text}</li>`);
        document.write(`</ul>`)
    }
}
list1('lkjhgljhf', 4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function list2(arr){
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
list2([2, `coffee`, true, 15, 'milk']);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function doc (arr){
    for (const item of arr) {
        document.write(`<div>${item.id} :${item.name}, ${item.age}</div>`);
    }
}
doc([{id:1, name:'kolya', age:35}, {id:2, name:'petya', age:39}])

// - створити функцію яка повертає найменьше число з масиву
function numberMin (arr) {
    let min = arr [0];
    for (const minElement of arr) {
        if (minElement < min) {
            min = minElement
        }
    }
    return min;
}
console.log(numberMin([3, 58, 400, 10, 630]));;

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function summa (numbers) {
    let sum = 0;
    for (const item of numbers) {
        sum = sum + item;
    }
    return sum;
}
console.log(summa([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap (arr, index1,index2){
const Index1 = arr[index1]
    arr[index1]=arr[index2]
    arr[index2]=Index1
    return arr
}
console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(many, kurs, valuta){
    for (const item of kurs) {
        if(item.currency === valuta){
            return many/item.value
        }
    }
}
console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [100, 'hello', 200, 500, true, 'class', 20, false, 1, 'java']
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Book1',
    pageCount: 100,
    genre: 'drama'
}
let book2 = {
    title: 'Book2',
    pageCount: 200,
    genre: 'story'
}
let book3 = {
    title: 'Book3',
    pageCount: 300,
    genre: 'detective'
}
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'Book4',
    pageCount: 100,
    genre: 'drama',
    authors: [
        {
            name: 'Colin',
            age: 30
        },
        {
            name: 'Jon',
            age: 35
        }
    ]
}
let book5 = {
    title: 'Book5',
    pageCount: 200,
    genre: 'story',
    authors: [
        {
            name: 'Micael',
            age: 40
        },
        {
            name: 'Ben',
            age: 42
        }
    ]
}
let book6 = {
    title: 'Book6',
    pageCount: 300,
    genre: 'detective',
    authors: [
        {
            name: 'Jane',
            age: 45
        },
        {
            name: 'Sem',
            age: 35
        }
    ]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'vas', username: 'vas', password: 'asd'},
    {name: 'andrey', username: 'and', password: 'dfg'},
    {name: 'dasha', username: 'das', password: 'vbn'},
    {name: 'maria', username: 'mar', password: 'jkl'},
    {name: 'nic', username: 'nic', password: 'rty'},
    {name: 'jon', username: 'jon', password: 'lkj'},
    {name: 'vova', username: 'vov', password: 'dhk'},
    {name: 'lena', username: 'len', password: 'fty'},
    {name: 'katya', username: 'kat', password: 'ert'},
    {name: 'max', username: 'max', password: 'cnm'}
]
console.log(users[0])
console.log(users[1])
console.log(users[2])
console.log(users[3])
console.log(users[4])
console.log(users[5])
console.log(users[6])
console.log(users[7])
console.log(users[8])
console.log(users[9])

//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1;
if (x !== 0) {
    console.log('вірно');
} else {
    console.log('невірно');
}
let x1 = 0;
if (x1 !== 0) {
    console.log('вірно');
} else {
    console.log('невірно');
}
let x3 = -3;
if (x3 !== 0) {
    console.log('вірно');
} else {
    console.log('невірно');
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let numbers = prompt('введіть число');
if (numbers >= 1 && numbers <= 14) {
    console.log('1 чверть години')
} else if (numbers >= 15 && numbers <= 29) {
    console.log('2 чверть години')
} else if (numbers >= 30 && numbers <= 44) {
    console.log('3 чверть години')
} else if (numbers >= 45 && numbers <= 59) {
    console.log('4 чверть години')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 15;
if (day >= 0 && day <= 9) {
    console.log('перша декада')
} else if (day >= 10 && day <= 19) {
    console.log('друга декада')
} else if (day >= 20 && day <= 31) {
    console.log('третя декада')
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let week = '7';
switch (week) {
    case '1':
        console.log('Monday')
        break;
    case '2':
        console.log('Tuesday')
        break;
    case '3':
        console.log('Wednesday')
        break;
    case '4':
        console.log('Thursday')
        break;
    case '5':
        console.log('Friday')
        break;
    case '6':
        console.log('Saturday')
        break;
    case '7':
        console.log('Sunday')
        break;
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let numb1 = prompt('введіть перше число');
let numb2 = prompt('введіть друге число');
if (numb1 > numb2) {
    console.log(numb1)
} else if (numb2 > numb1) {
    console.log(numb2)
} else if (numb1 === numb2) {
    console.log(NaN)
}
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x4 = 0
if (x4 === 0 || x4 === undefined || x4 === ' ' || x4 === null) {
    x4 = 'default'
}
console.log(x4)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Cупер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Cупер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Cупер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Cупер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Cупер')
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log('Cупер')
}
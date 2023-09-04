// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a = 'hello world';
console.log(a.length);
let b = 'lorem ipsum';
console.log(b.length);
let c = 'javascript is cool';
console.log(c.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a1 = 'hello world';
console.log(a.toUpperCase());
let b1 = 'lorem ipsum';
console.log(b.toUpperCase());
let c1 = 'javascript is cool';
console.log(c.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let a2 = 'HELLO WORLD';
console.log(a.toLowerCase());
let b2 = 'LOREM IPSUM';
console.log(b.toLowerCase());
let c2 = 'JAVASCRIPT IS COOL';
console.log(c.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.replaceAll(' ', ''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let stringToarray = (str)=>{
    return str.split(' ')
}
let str1 = 'Ревуть воли як ясла повні';
let arr = stringToarray(str1);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
// let arr1 = [10,8,-7,55,987,-1011,0,1050,0];
// let string = arr1.map(value => !!!)
// console.log(string);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let sortNums = (arr, direction)=>{
    if (direction === 'ascending') return arr.sort((a,b) => a-b);
    if (direction === 'descending') return arr.sort((a,b) => b-a);
}
let nums = [11,21,3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((u1, u2) => u2.monthDuration - u1.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value => value.monthDuration> 5);
console.log(filter);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let map = coursesAndDurationArray.map(function (u){
    u.id = 1;
    return u;
});
console.log(map);

//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards =[
    {
        cardSuit:'spade',
        value: '6',
        color: 'black'
    },
    {
        cardSuit:'diamond',
        value: '6',
        color: 'black'
    },
    {
        cardSuit:'heart',
        value: '6',
        color: 'red'
    },
    {
        cardSuit:'clubs',
        value: '6',
        color: 'red'
    },
    {
        cardSuit:'spade',
        value: '7',
        color: 'black'
    },
    {
        cardSuit:'diamond',
        value: '7',
        color: 'black'
    },
    {
        cardSuit:'heart',
        value: '7',
        color: 'red'
    },
    {
        cardSuit:'clubs',
        value: '7',
        color: 'red'
    },
    {
        cardSuit:'spade',
        value: '8',
        color: 'black'
    },
    {
        cardSuit:'diamond',
        value: '8',
        color: 'black'
    },
    {
        cardSuit:'heart',
        value: '8',
        color: 'red'
    },
    {
        cardSuit:'clubs',
        value: '8',
        color: 'red'
    },
    {
        cardSuit:'spade',
        value: '9',
        color: 'black'
    },
    {
        cardSuit:'diamond',
        value: '9',
        color: 'black'
    },
    {
        cardSuit:'heart',
        value: '9',
        color: 'red'
    },
    {
        cardSuit:'clubs',
        value: '9',
        color: 'red'
    },
    {
        cardSuit:'spade',
        value: '10',
        color: 'black'
    },
    {
        cardSuit:'diamond',
        value: '10',
        color: 'black'
    },
    {
        cardSuit:'heart',
        value: '10',
        color: 'red'
    },
    {
        cardSuit:'clubs',
        value: '10',
        color: 'red'
    },
    {
        cardSuit:'spade',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit:'diamond',
        value: 'jack',
        color: 'black'
    },
    {
        cardSuit:'heart',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit:'clubs',
        value: 'jack',
        color: 'red'
    },
    {
        cardSuit:'spade',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit:'diamond',
        value: 'queen',
        color: 'black'
    },
    {
        cardSuit:'heart',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit:'clubs',
        value: 'queen',
        color: 'red'
    },
    {
        cardSuit:'spade',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit:'diamond',
        value: 'king',
        color: 'black'
    },
    {
        cardSuit:'heart',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit:'clubs',
        value: 'king',
        color: 'red'
    },
    {
        cardSuit:'spade',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit:'diamond',
        value: 'ace',
        color: 'black'
    },
    {
        cardSuit:'heart',
        value: 'ace',
        color: 'red'
    },
    {
        cardSuit:'clubs',
        value: 'ace',
        color: 'red'
    },
]
// - знайти піковий туз
let ace = cards.filter(x => x.value === 'ace' && x.cardSuit === 'spade');
console.log(ace);
// - всі шістки
let sixs = cards.filter(x => x.value === '6');
console.log(sixs);
// - всі червоні карти
let reds = cards.filter(x => x.color === 'red');
console.log(reds);
// - всі буби
let clubs = cards.filter(x => x.cardSuit === 'clubs');
console.log(clubs);
// - всі трефи від 9 та більше
let diamond = cards.filter(x => x.cardSuit === 'diamond' && x.value >= '9');
console.log(clubs);

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduce = cards.reduce(function (accumulator, u) {
    if (u.cardSuit === 'spade') {
        accumulator.spades.push(u);
    } else if (u.cardSuit === 'diamond'){
        accumulator.diamonds.push(u);
    } else if (u.cardSuit === 'heart'){
        accumulator.hearts.push(u);
    } else if (u.cardSuit === 'clubs'){
        accumulator.clubs.push(u);
    }
    return accumulator
}, {spades: [], diamonds: [], hearts:[], clubs:[] });
console.log(reduce);

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// // --написати пошук всіх об'єктів, в який в modules є sass
// let sass = coursesArray.filter(value => value.modules === 'sass');
// console.log(sass);
// --написати пошук всіх об'єктів, в який в modules є docker
// let docker = coursesArray.filter(value => value.modules === ['docker']);
// console.log(docker);

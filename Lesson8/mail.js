// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'vasya', 'ivanov', 'v@gmail', 31360),
    new User(2, 'petya', 'petrov', 'p@mail', 31230),
    new User(3, 'kolya', 'sidorov', 'k@mail', 31530),
    new User(4, 'petya', 'tihonov', 'p@mail', 31130),
    new User(5, 'vova', 'bykov', 'v@mail', 31220),
    new User(6, 'katya', 'petrova', 'c@mail', 31240),
    new User(7, 'sveta', 'ivanova', 's@mail', 31260),
    new User(8, 'masha', 'bykova', 'm@mail', 31270),
    new User(9, 'olya', 'orlova', 'o@mail', 31280),
    new User(10, 'lena', 'fedorova', 'l@mail', 31290)
];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = users.filter((item) => !(item.id % 2));
console.log(filterUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsers = users.sort((a, b) => b.id - a.id);
console.log(sortUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'vasya', 'ivanov', 'v@gmail', 31360, ['milk', 'coffee']),
    new Client(2, 'petya', 'petrov', 'p@mail', 31230, ['coffee', 'bread']),
    new Client(3, 'kolya', 'sidorov', 'k@mail', 31530, ['bread', 'milk']),
    new Client(4, 'petya', 'tihonov', 'p@mail', 31130, ['oil']),
    new Client(5, 'vova', 'bykov', 'v@mail', 31220, ['tomato']),
    new Client(6, 'katya', 'petrova', 'c@mail', 31240, ['oil', 'tomato']),
    new Client(7, 'sveta', 'ivanova', 's@mail', 31260, ['tea', 'coffee']),
    new Client(8, 'masha', 'bykova', 'm@mail', 31270, ['milk', 'tea']),
    new Client(9, 'olya', 'orlova', 'o@mail', 31280, ['bread', 'tea']),
    new Client(10, 'lena', 'fedorova', 'l@mail', 31290, ['coffee', 'milk', 'bread'])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, produce, year, maxspeed, volume) {
    this.model = model;
    this.produce = produce;
    this.year = year;
    this.maxspeed = maxspeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
    };
    this.info = function () {
        for (const item in this) {
            if (typeof this[item] !== 'function')
                console.log(`${item} - ${this[item]}`)
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let car = new Car('Hyundai', 'Korea', 2005, 230, 2.0);

car.drive();
car.info();
car.increaseMaxSpeed(20);
car.changeYear(2007);
car.drive('Vova');
console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, produce, year, maxspeed, volume) {
        this.model = model;
        this.produce = produce;
        this.year = year;
        this.maxspeed = maxspeed;
        this.volume = volume;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    }
    info () {
        for (const item in this) {
            if (typeof this[item] !== 'function')
                console.log(`${item} - ${this[item]}`)
        }
    }
    increaseMaxSpeed (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }
    changeYear  (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}
let cars = new Cars('Ford', 'USA', 2007, 210, 2.0)

cars.drive();
cars.info();
cars.increaseMaxSpeed(20);
cars.changeYear(2010);
console.log(cars);

class Driver {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
let driver = new Driver('Kolya', 2005)
cars.addDriver (driver);
cars.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let arrPopelushka = [
    new Popelushka('roza', 25, 36),
    new Popelushka('lera', 24, 37),
    new Popelushka('nika', 20, 35),
    new Popelushka('alla', 26, 36),
    new Popelushka('lena', 23, 37),
    new Popelushka('tina', 22, 38),
    new Popelushka('dina', 25, 37),
    new Popelushka('vika', 21, 36),
    new Popelushka('mira', 20, 36),
    new Popelushka('kira', 23, 38),
];
console.log(arrPopelushka);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princ {
    constructor(name, age, findSize) {
        this.name = name;
        this.age = age;
        this.findSize = findSize;
    }
}

let princ = new Princ('edvard', 36, 35);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let para = (arrPopelushka, Princ) => {
    for (const item of arrPopelushka) {
        if (item.size === princ.findSize) {
            return `popelushka: ${item.name}`
        }
    }
}
console.log(para(arrPopelushka, Princ));
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findPopelushka = arrPopelushka.find((item) => item.size === princ.findSize);
console.log(findPopelushka);
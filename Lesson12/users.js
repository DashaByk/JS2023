// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then((users) => {
        let ul = document.createElement('ul');
        for (const user of users) {
            let li = document.createElement('li');
            li.innerHTML = `<a href="user-details.html?id=${user.id}">${user.id} - ${user.name}</a>`;
            ul.appendChild(li);
        }
        document.body.appendChild(ul);
    })
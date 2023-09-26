let url = new URL(location.href);
let userJSON = url.searchParams.get('id');
let user = JSON.parse(userJSON);
console.log(user);
fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
    .then(value => value.json())
    .then((user) => {
            let print = function (user){
                for (const key in user) {
                    if(typeof user[key] !== 'object'){
                        let div = document.createElement('div');
                        div.innerText = `${key.toUpperCase()}: ${user[key]}`
                        document.body.appendChild(div);
                    } else {
                        let div1 = document.createElement('div');
                        div1.innerText = `${key.toUpperCase()}`;
                        document.body.appendChild(div1);
                        print(user[key]);
                    }
                }
            }
            print(user);
        }
    )
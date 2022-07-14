const API = "https://jsonplaceholder.typicode.com/users"
fetch(API)
    .then((resp) => resp.json())
    .then((users) => {
        users.forEach((user) => {
            console.log(user.name)
        })
    })
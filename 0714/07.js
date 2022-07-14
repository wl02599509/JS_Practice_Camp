const API = "https://jsonplaceholder.typicode.com/users"

async function getUser(){
    const response = await fetch(API);
    const users = await response.json();

    users.forEach((users)=>{
        console.log(users.name);
    })
}

getUser();
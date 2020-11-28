const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}
// delay(2000).then(()=> console.log("2 sec"))

const url = "https://jsonplaceholder.typicode.com/todos";

// function fetchToDos(){
//     console.log("Fetch to do started")
//     return delay(2000)
//         .then(()=>fetch(url))
//         .then(response=>response.json())
// }
//
// fetchToDos().then(data=>{
//     console.log(data)
// }).catch(err=>console.error(err))


//тоже самое что вверху


async function fetchAsyncTodos() {

    try {

        await delay(2000) //равносильно оброботки промиса
        // сюда не перейдем пока промис не зарезолвится
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    } catch (e) {
        console.error(e);
    }
    finally {
        //finally block
    }

    //все благодаря bable
}

fetchAsyncTodos();


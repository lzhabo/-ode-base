console.log("request data");

// setTimeout(
//     () => {
//         console.log("Preparing data");
//         const backendData = {
//             server: "",
//             status: "working",
//             port: 2000
//         }
//
//         setTimeout(()=>{
//             backendData.modified = true;
//             console.log("data received", backendData)
//         })
//     }, 2000
// )

//промисы помогают решать проблемы вложенности и упросить работу с асинк  операциями

//resolve and reject are also functions
// const p = new Promise((resolve, reject)=>{
//     //callback вызывается когда асинк операция окончена
//     setTimeout(()=>{
//         console.log("Preparing data");
//         const backendData = {
//             server: "",
//             status: "working",
//             port: 2000
//         }
//         resolve(backendData)
//     }, 200)
// })
//
// p.then((data)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             data.modified =true;
//             resolve(data);
//         }, 200)
//     })
// }).then(clientData=>{
//     console.log(clientData)
// }).catch(err=>console.error(err))
const sleep = ms => {
    return new Promise(resolve => setTimeout(() =>
        resolve(), ms
    ))
}

// sleep(2000).then(()=> console.log('after 2 sec'));

Promise.all([ sleep(2000),  sleep(3000)]) // передаем массив проммисов
.then(()=>{
    //выполнитсся когда выполняться все другие
    console.log("all promises")
})
Promise.race([ sleep(2000),  sleep(3000)]) // передаем массив проммисов
.then(()=>{
    //выполнитсся когда выполняться все другие
    console.log("race promises")
})

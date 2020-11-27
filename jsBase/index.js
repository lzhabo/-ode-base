// async
//event loop

//промисы
const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        })
    })
}

delay().then(() => {
        console.log("after 2 sec")
    })
    .catch(err => {
        console.log(err)
    })
    .finally(() => {
        console.log("finally")
    })

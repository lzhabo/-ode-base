function hello() {
    console.log("Hello", this);
}

const person = {
    name: "lida",
    age: 21,
    sayHelloMethod: hello,
    sayHelloWindow: hello.bind(this)
}

// person.logInfo.bind(lena, ...params)()
// person.logInfo.call(lena, ...params)
// person.logInfo.apply(lena, [...params])

const arr = [1, 2, 3, 4, 5];

// function multBy(array, n){
//     return array.map((i)=>{
//         return i*n;
//     })
// }
// const res = multBy(arr,5);
// console.log(res);

Array.prototype.multBy =function(n){
    return this.map((i) => {
        return i * n;
    })
}
arr.multBy(2);
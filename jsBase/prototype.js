const person = {
    name: "maxim",
    age: 25,
    greet() {
        console.log("greet");
    }

}
//у прототипа
//_proto_
//all things that we created in JS are objects
const person2 = new Object({
    name: "maxim",
    age: 25,
    greet() {
        console.log("greet");
    }

})

Object.prototype.sayHello = function (){
    console.log("hello!");
}





const lena = Object.create(person);// создаем новый объект типа person

//прототип идет сверху вниз
// таким образом вызывает tostring()
//если ничего не найдет, то происходит ошибка


// ПРОТОТИП - опред объект кот присутствует у объектов и он вызыв по цепочке сверху вниз
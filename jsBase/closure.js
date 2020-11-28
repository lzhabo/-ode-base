// замыкание - функция одной функции внутри другой

// function CreateCalcFunction(n){
//     return function (){
//         console.log(1000* n)
//     }
// }
// //перем n была замкнута
// const calc = CreateCalcFunction(3);
// calc();
//


// function createIncrementor(n){
//     return function (num){
//         return n+num;
//     }
// }
//
// const addOne = createIncrementor(1);
//  addOne(44);

// function urlGenerator(domain){
//     return function (url){
//         return`https://${url}.${domain}`
//     }
// }
//
// const comUrl= urlGenerator("com")
//
// console.log(comUrl('google'));

function bind(context, fn){
    return function (...args){
        fn.apply(context,args)
    }
}
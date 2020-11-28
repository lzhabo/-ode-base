const array:Array<number>=[1,1,2,3,5,8,13]
const arrayString:Array<string>=["",""]

function reverse<T>(array:T[]):T[]{
    return array.reverse();
}
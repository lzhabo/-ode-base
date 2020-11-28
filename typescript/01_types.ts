
//tuple
const contact:[string, number] = ["", 123];

let variable: any  = 22;

//-----

function SayMyNAme(name:string):void{
    console.log(name)
}
SayMyNAme("хайзенберг");

//never type
// указывать когда: 1)возвращ ошибку 2)действительно постоянно работает

function throwErr(str:string):never{
    throw new Error(str);
}

function infinite():never{
    while(true){}
}

type Login = string;
const login :Login = "sjsj";
//own types - aliases
type ID = string | number;
const id1:ID = 1234;
const id2:ID ="1234";


// null and undefiend also present
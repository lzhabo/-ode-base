
people= [
    {
        name:"",
        budget:200
    },{
        name:"",
        budget:200
    },{
        name:"",
        budget:200
    },
];
for(let person of people){
    //same as for(i;i<0;i++)
 }

people.forEach(person => console.log(person))


//Map можем создаваь новые массивы -! что-то должен возвращать
//служит для преобраз в новый массив
const newPpl = people.map(person=>person)

//Filter
const newArr = people.filter(p=>p.name>10);

//Reduce
//0 - значение по умолчанию
const amount = people.reduce((total, person)=>total+person.budget, 0);
console.log(amount)


//Find

people.find(p=>p.name==="name");

//find index of element in array
// people.Index(p=>p.name==="name");



let all = people
    .filter(p=>p.budget>=100)
    .map(p=>{
    return {
        info:"New format",
        budget: p.budget
    }
}).reduce((total,p)=>total+p.budget,0)

console.log(all)
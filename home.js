var name="Sabin"
var greet=`My name is $(name)`;
console.log(greet)
function add(x=5,y=6){
    return x+y
}
console.log(add())
console.log(add(10,20))
const arr1= [1,21,22]
const arr2= [4,5,6]
 const combined = [...arr1,...arr2]
 const combined2 =[arr1,arr2]
 console.log(combined)
 console.log(combined2)
 const person={
    name:"Sabin",
    cls:"Bachelor"

 }
 console.log(person.name,person.cls)

 
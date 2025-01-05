// //q1

// function car(brand,Model,number){
//     this.brand=brand;
//     this.Model=Model;
//     this.number=number;

//      this.getDetails = function (){
//         return "brand :"+ brand + "model :"+ Model+ "number :" + number ; 
//     }
// }

// const car1= new car("KIA","2002",1411602);
// const car2= new car("MITSUBISHI","2016",2742012);
// const car3= new car("AUDI","2022",4444);

// let arr=[car1,car2,car3];

// for(i=0;i<arr.length;i++){
// console.log(arr[i].getDetails());

// }




//q2
// const personsCreate = {
//     person1: {
//         firstName: "Belal" ,
//         LastName: "Kahaleh" ,
//         age: 24,
//         major: "softwareEngineer"
//     },
//     person2:{
//         firstName: "Faisal" ,
//         LastName: "AbuMarwan" ,
//         age: 23,
//         major: "CS"
//     },
//     person3:{
//         firstName: "Ramzi" ,
//         LastName: "Zamil" ,
//         age: 22,
//         major: "SE"
//     }
// }

// function Fname(persons){
//     const arr=[];
//     let index = 0;
//     for (const key in personsCreate) {
//         arr[index] = personsCreate[key].firstName;
//         index++;
//     }
//     return arr;
// }
// console.log(Fname(personsCreate));


//q3
const person = {firstName:"Moh", age:"24"};
function objectToArray(obj){
    const array=[];
    let index = 0;
    for (const key in obj) {
                array.push(key,obj[key]);
            }
return array;
}

console.log(objectToArray(person));

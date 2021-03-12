//This variable holds a string//
let firstName: string = "Sir";

//This variable holds a number//
const States: number = 50;

//This variable is the sum of 4 and 5//
let result: number = 5 + 4

//This function sends an alert that says Hello World
function sayHelloo(){
    alert("Hello World!");
}

//This function checks age for viewing a webpage
function checkAge( age: number, name: string) {
    if(age < 21){
        return("Sorry"+name+"you are not old enough to view this page.")
}

}
console.log(checkAge(21, "Charles"));
console.log(checkAge(27, "Abby"));
console.log(checkAge(18, "James"));
console.log(checkAge(17, "John"));



//This loop displays the elements of an array
let veg: string[] = ['carrots', 'peas', 'squah']

for(let i= 0; i<veg.length; i++){
    console.log(veg[i])
}


//This log prints an object to the console
let pet: {name: string, breed : string}= {
    name:"Kelly",
    breed:"Bull Terrier"}
console.log(pet.name, pet.breed);



//This is an array of objects
var people: person[]  = [
    {name:"Mark",
     age: 19
    },
    {name:"Alex",
     age:22
    },
    {name:"Jessica",
    age: 28
    },
    {name:"Chris",
     age: 24
    },
    {name:"Celena",
    age: 18
}
];

interface person {
    name:string
    age: number
}

console.log(' ');


function getLength(word: string): number | string {

    if (word.length % 2 == 0){
        return "The world is Nice and Even"

    } else {
        console.log("The World is an odd Place")
    };
};

let stringLength: string| number = getLength('Hello World');
getLength('HelloWorld');

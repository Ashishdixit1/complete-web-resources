//---------------------------------------------------Objjects-Literals-------------------------------------------------------------------
//used to store keyed collection & complex entities..

let delhi={
    latitude:"28.7041° N",
    longitude:"77.1025°E"
};

const item={
    price:100.50,
    discount: 50,
    colors:["red","black"]
};

//---------------task--create an obj literal for the properties of thread / twitter post which includes------
/*

Username
content
likes
repost
tags

*/

const post={
    username:"@Ashish",
    content:"hey this side ashish ",
    likes:45554,
    reposts:500,
    tags:["harshuu-bhau","anurag-mama","adarsh-bhau"]
};
    //--------------------Get-values-from obj-literals------

    post["username"]; //by key username
    post.content; //by . operator and key -content

//-Note-  js auttomatically converts objects keys to string , 
//  Even if we made the number as a key , the number will be converted to string . e.g

const obj={
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
};
/* 
 see here -> true , null , undefined are predefined keyword 
 but js converts them into string and output will be-

output :- {1: 'a', 2: 'b', true: 'c', null: 'd', undefined: 'e'}

*/

//-------------------------------------------Add-or-update-values-in-obj-literals-----------------------

    obj.true="g"; //updated-output--{1: 'a', 2: 'b', true: 'g', null: 'd', undefined: 'e'}
    obj.new="newkey"; //added-a-key-value pair-#output--{1: 'a', 2: 'b', true: 'g', null: 'd', undefined: 'e', new: 'newkey'}

//----------------------------------------------Delete-A-key-from-obj-literals-----------------------

    delete obj.new; //output - {1: 'a', 2: 'b', true: 'g', null: 'd', undefined: 'e'}

//---------------------------------------------Objects of Objects --in obj-literals----------------------------------------------------

const classInfo = {
    aman: {
        grade: "A+",
        city:"ujjain",
    },
    ashish:{
       grade:"O+",
       city:"Mumbai",
    },
    adarsh:{
       grade:"O+",
       city:"Lko",
    },
    Harsh:{
        grade:"O+",
        city:"Agra"
    }
};

//---------------------------------------------------Array-of-Objects-----------------------------------------------------------------------

const passengers=[
    {
        name:"vivek",
        from:"mirjapur",
        to:"new delhi",
        cost:500

    },
    {
        name:"Aditya",
        from:"gaziabad",
        to:"benguluru",
        cost:1000
    },
    {
        name:"harshit",
        from:"pune",
        to:"gujrat",
        cost:800
    }
]

//----------------------------------------------------------Math-Objects--------------------------------------------------------------------
/*

E
: 
2.718281828459045
LN2
: 
0.6931471805599453
LN10
: 
2.302585092994046
LOG2E
: 
1.4426950408889634
LOG10E
: 
0.4342944819032518
PI
: 
3.141592653589793
SQRT1_2
: 
0.7071067811865476
SQRT2
: 
1.4142135623730951
abs
: 
ƒ abs()
acos
: 
ƒ acos()
acosh
: 
ƒ acosh()
asin
: 
ƒ asin()
asinh
: 
ƒ asinh()
atan
: 
ƒ atan()
atan2
: 
ƒ atan2()
atanh
: 
ƒ atanh()
cbrt
: 
ƒ cbrt()
ceil
: 
ƒ ceil()
clz32
: 
ƒ clz32()
cos
: 
ƒ cos()
cosh
: 
ƒ cosh()
exp
: 
ƒ exp()
expm1
: 
ƒ expm1()
floor
: 
ƒ floor()
fround
: 
ƒ fround()
hypot
: 
ƒ hypot()
imul
: 
ƒ imul()
log
: 
ƒ log()
log1p
: 
ƒ log1p()
log2
: 
ƒ log2()
log10
: 
ƒ log10()
max
: 
ƒ max()
min
: 
ƒ min()
pow
: 
ƒ pow()
random
: 
ƒ random()
round
: 
ƒ round()
sign
: 
ƒ sign()
sin
: 
ƒ sin()
sinh
: 
ƒ sinh()
sqrt
: 
ƒ sqrt()
tan
: 
ƒ tan()
tanh
: 
ƒ tanh()
trunc
: 
ƒ trunc()

*/

Math.pow(2,8); //for power
Math.floor(90); //to round of smaller int value
Math.ceil(); // round of on larger int value
Math.random();// gives random value between 0 and 1 

// --------------------------------------------------Generate - randome -integer-------------------------------------------------------------

let step1 = Math.random();
let step2 = step1*10; //here 10 is range of number
let step3 = Math.floor(step2);
step3= step3+1;

// --------------it can also write as -----

let randomNum = Math.floor(Math.random()*10)+1; //for  range 10

let ranNum = Math.floor(Math.random()*100)+21; //for range 100 and generates from 21


//---------------------------------------------------Guessing-Number-Game------------------------------------------------------------------------------------

let max=prompt("Enter maximum number");
let ranNumber =Math.floor(Math.random()*max)+1;
let guess =prompt("Guess the Number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
if(guess==ranNumber){
    console.log("You guessed correct number");
    break;
}else{
    guess= prompt(" Wrong ! Guess again");
}
}

/* task -Create a program that generates a random number representing a dice roll.
[The number should be between 1 and 6]. */

let dice =Math.floor(Math.random()*6)+1;
console.log(dice);

/* Task - Create an object representing a car that stores the following properties for the
car: name, model, color.
Print the car’s name. */

let car ={
    name:"BMW",
    model:"Xyz",
    color:"black"
};
console.log(car.name);

/* Task - Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States */

let person = {
    name:"john",
    age:24,
    city:"moracco"
};
person.city="New york";
person.country="United State";
console.log(person);



//---------------------------------------------------------Topic-closed---------------------------------------------------------------------
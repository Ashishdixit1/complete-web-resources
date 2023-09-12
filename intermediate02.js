//-----------------------------------------Functions-In-Js-------------------------------------
//syntax---

function functionName(){
    //do something
}

function sum(a,b){ //function with 2 arguments..
    return a+b;
    }
console.log(sum(5,6)); //calling sum function 

function printName(){
    console.log("Ashish");
}
printName();

//---------------------------function to check adult-------------------------------

function isAdult(age){
    if(age<18){
        console.log("not adult");
    }
    else if (age>=18){
        console.log("adult");
    }

}isAdult(14); // output - not adult

//---------------------------Write-a-function-that-prints-a-poem--------------------------------------

function printPoem(){
    console.log("-------------------------------------------------");
    console.log("jhony jhony ");
    console.log("Yes papa");
    console.log("Eating Sugar");
    console.log("no papa");
    console.log("telling lie");
    console.log("no papa");
    console.log("open your mouth");
    console.log("ha ha ha..")
    console.log("----------------------------------------------------");
}

printPoem();

// ------------------Create a function to roll dice and display value of dice (1 to 6)-----------

function dice(){
let value= Math.floor(Math.random()*6)+1;
console.log(value);

}
dice();

//------------------------------Functions -with- arguments----------------------------------------
//  syntax---

function funcName(agg1,arg2,andSoOn){
    //do something..

}

function car(carName){
    console.log("car name is "+carName);

}

//---------------------------Function to print average of 3 Numbers---------------------------------

function avg(num1,num2,num3){
    console.log("-------Avg-------")
    let avgOfNums=(num1+num2+num3)/3;
    console.log(avgOfNums);
}
avg(12,13,14);

//----------------------------Function to print table-----------------------------------------------

function table(num){
    console.log("----------table-----")
    for(let i=1;i<=10;i++){
        console.log(i*num);
    }

}
table(232);

//-----------------------Function to return concatenation of all string in an array---------------

let str=["hi","bye","tye"];
function concat(str){
    let result;
    for(let i=0; i<str.length;i++){
        result+=str[i];
    }
    return result;
}

//-----------------------------------------Scope------------------------------------------------------------
/*
scope determines the accessibility of variables , objects and functions from different parts of the code

------------------#Function-scope-- variables defined inside a function are not accessible (visible)from outside the function.

let sum=54; //global  scope

function calSum(a,b){
sum=a+b;        //--function scope
console.log(sum);
}
*/

//-------------------------------------Block-Scope--------------------------------------------------
/*
variables decleard inside a block{} can not be accessed from outside the block.
{
    let a =20; //block scope
}
console.log(a); //thows error a is not defined 
for(let i=0;i<5;i++){
    console.log(i); //block scope
}
*/

//----------------------------------------Laxical-Scope---------------------------------------------
/* 
in laxical scope variables of outer fuction can be accessible by inner function but outer fuction can not access variales defined in inner function.
*/

function outerFunc(){
    let x=3;
    let y=4;
    function innerFunc(){ //function scope
        let a =12;
        console.log(x);
        console.log(y);

    }
    console.log(a); // will through error function not defined becuse outer func can't access inner fun

}

//-------------------------------------------------Function-Expression / Name-less -function-----------------------------------------------------------------------------

const varName=function(arg1,arg2){   //these type og function doesn't have an function name 
    //do something 
}

//----------------------------------------------------Higher-Order-Function----------------------------------------------------------------------------

function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet= function(){
    console.log("Ram-Ram Ashish Ji");
}
multipleGreet(greet,2);

//----------------------------------------------------Higher-Order-Function-----------------------------------------
 //Factory -Function--

 function oddEvenTest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        console.log("Wrong request")
    }
 }

 //------------------------------------------------------Methods-------------------------------------------

 const calculator={
    add: function (a,b){
        return a+b;
    },
    sub: function (a,b){
        return a-b;
    },
    mul: function (a,b){
        return a*b;
    }
 };

 //------------------------------------------------------------------Tasks--------------------------------------------------------

 //. Write a JavaScript function that returns array elements larger than a number

 function retrnArr(arr,lnum){
  for(let i=0;i<arr.length;i++){
    if(arr[i]>lnum){
        console.log(arr[i]);
    }
  }
 }

 /*Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh”
ans = “abcdefgh”
*/


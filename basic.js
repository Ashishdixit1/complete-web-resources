console.log("happy");
console.error("error");
console.warn("warning");
let pencil=10;
let eraser=5;
//--------------------------------template-literals-----------------------------------------------
let output=`the total price is : ${pencil+eraser} rupee.`; // this sign `` is calls tactic //template litrals
console.log(output);
if(pencil<=10){
    console.log("You can Afford pencil")
}else{
    console.log("you can't afford pencil")
}
if(eraser<=5){
    console.log("you can afford eraser")
}else if(eraser>5){
    console.log("can't afford eraser")
}else if(eraser=10){
    console.log("can't afford eraser")
}else{
    console.log("improve your budget")
}

//----------------------------------program to check the price of popcorn--------------------------------------------
let xl = 250;
let l = 200;
let m = 100;
let s = 50;
let size=prompt("please enter size of popcorn"); //prompt takes input from user
if(size=== "xl"){
    console.log("price is" +xl);
}else if(size==="l"){
    console.log("price is"+l);
}else if (size==="m"){
    console.log("price is"+m);
}else if(size==="s"){
    console.log("price is "+s);
}else{
    console.log("Invalid-size")
}

let color="red";
switch(color){
    case "red":
        console.log("Stop");
        break;
    case"yellow":
    console.log("slow down");
    break;
    case "green":
        console.log("go");
        break;
        default:
            console.log("Broken light");

}
//-------------------------------string in js---------------------------------------------

//strings are immutable in js
let msg ="   Hello    ";
msg.trim(); //removes spaces from start and end and create a new str but old one will not reflect 
console.log(msg)
console.log(msg.indexOf("o")); //returns index of the str's start char


//-------------------------------contatination in string -----------------------------------------------


let xth_student=["vivek","ashish","rajat","arun"];
let xiith_student=["ayush","aradhya","dev","sonakshi","sakshi"];

let tot_std= xiith_student.concat(xth_student);
console.log(tot_std); 

//------------------------------------------------Arrays in js------------------------------------------------------------------
//array are mutable --means it can be change.
//array-methods --push ---to add ,pop to remove element , umshift --adds elemnt in start , shift --delete from start and returns it
let servents=["raji","kalu"] //creation of Array
 
servents.push("ranveer","dheera");
servents.pop();
servents.unshift("bhanu","manu");
servents.shift();

//--------------------------------reverse an array & slice an array-----------------------------------------
//slice returns copy of original array
 console.log(xth_student.reverse());
 console.log(xth_student.slice(1,3)); //slicing from index 1 to index 3
 console.log(xth_student.slice(-2));// slices frome the end 

 //------------------------------splice used to remove/replace/add element in place----------------------------
 // spplice changes original array then return

 xth_student.splice(0,1,"abhinav","stuti"); //syntex->- splice(starting index ,how many elements wants to delete or replace ,"add new element/elements")
 console.log(xth_student);

 //---------------------------------Nested -Array-----------------------------------------------------------------

 let nums=[[1,2],[2,3],[4,5]]

let tic_tac_toe =[["x",null ,"o"], [null,"x",null ] ,["o",null,"x"]]

//-----------------------------------Loops-In-Js------------------------------------------------------------------

git config --global user.email "you@example.com"
git config --global user.name "Your Name"
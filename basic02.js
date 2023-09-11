//----------------------------------------------Loops--In-Js----------------------------------------------------------


// ---------------------------------------------For-Loop-----------------------------------------------------------------------


for(let i=0;i<=5;i++){ 
    //initialization;condition;updation
    // console.log(i);
}
//----------------print odd numbers with the help of for loop--------------
for(let i=1;i<=15;i++){
    if(i%2==0){
        console.log(i+1);
    }
}

//--------------------------------------------Infinte-loop--------------------------------------------

// if contion is always true it will run infinite time. e.g--



//---------------------------------------------Nested-loops-----------------------------------------------------

for(let i=0;i<3;i++){   //---------outer--loop---------
    //console-something if required
    for(let j=0;j<4;j++){  //----------Inner--loop------
        //console if req.....
    }
}  // -Note --- In nested loops we can create as many Inner loops as required Or we want to create



//----------------------------------------------While-Loop-----------------------------------------------------



let i=1;
while(i<=5){
    console.log(i)
    i++;
}

//----------------------------------For-Of-Loop---------------------------------------------------------------

//we use for of loop to work on collection of objects

let fruits=["mango","apple","banana","litchi","grapes","orange"];
for(fruit of fruits){
    console.log(fruit);
} 

//-------------------------------------------Nested-for-of-Loop----------------------------------------------------------
 let heroes=[["ironman","spiderman","thor"],["superman","wonder woman","flash"]];
 for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
 }

 //------------------------------To-Do-App-------------------------------------------------

 let todo=[];
 let req= prompt("please enter your choice");

 while(true){

    if(req=="quit"){
        console.log("quiting app");
        break;
    }

    if(req=="list"){
        console.log("----------------------------------------------------------------------")
        for(task of todo){
            console.log(task);
        }
        console.log("-----------------------------------------------------------------------------------")
    }else if(req=="add"){
        let task=prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task-added")
        req= prompt("please enter your choice");

    }

 }
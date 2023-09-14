//----------------------------------------This-In-Js--------------------------------------

const student={
    name:"Anshika",
    age:21,
    eng:79,
    math:90,
    phy:80,
    getAvg(){ //-Here-function can't Access objects directly.
        let avg =(this.eng + this.math + this.phy)/3; //so here we are using this keyword to access obj's variable.
        console.log(`${this.name} got avg marks= ${avg}`);

    }

};

//---------------------------------------Try-And-Catch------------------------------------------

try{
 console.log(a);
}catch(err){
    console.log(err);

};

//---------------------------------------Arrow-Function--------------------------------------------

const sum =(a,b)=>{  //these are nameless function we have to store it in a variale
    console.log(a+b);
}

const pow=(a,b)=>{
    return a**b;
};

//---------------------------------Implicit-return-In-Arrow_function--------------------------------

const mul =(a,b)=>a*b // no need to add {} for single value ,  and return statement it will we handle by implicitly mean by own..


//----------------------------------Set-Time-Out-Function--------------------------------------------

//                    it is an inbuilt function of window object  

/*
syntax-

setTimeout(callback/function , timeout/time in -miliseconds)

*/

console.log("hi");

setTimeout(()=>{
console.log("Tech-Navigators")

},4000);

console.log("Welcome to");

//------------------------------------Set-Interval----------------------------------------------

let id1 =setInterval(()=>{
    console.log("Tech-Navigators")
    
    },2000); //it will run again an again 

clearInterval(id1)

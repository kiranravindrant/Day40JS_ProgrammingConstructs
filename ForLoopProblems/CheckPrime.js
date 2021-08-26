
"use strict";
const prompt=require("prompt-sync")({sigint:true});


let n = parseInt(prompt("Enter the number: "))
let check;

for(let i=2 ; i <=n;  i++)
{

  check= n%i 
  
}

if (check==0)
    {
    console.log(" Number not prime")
    
    }
    else {
    
    console.log("Number is prime")
    }

if(n==2){


console.log("2 is the least prime number")
}
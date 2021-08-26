"use strict";
const prompt=require("prompt-sync")({sigint:true});

console.log("THINK A NUMBER B/W 1 TO 100")
let a=0
let b=100
let N=b-a
let mid=N/2;

while (N!= '1')
{
          let userinput=parseInt( prompt(`Is number greater than ${mid} (Y/N) ??` ));
        if ( userinput =='Y')
            {
            mid=mid+N/2
            a=mid
	        N=(b-a);
	        
            }
        else{
	        b=mid
	        N=((b-a))
	        mid=mid-N/2
            }
}

console.log(`Your number is ${b}`);
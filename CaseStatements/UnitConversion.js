

"use strict";
const prompt=require("prompt-sync")({sigint:true});



console.log("1.Feet to Inch\n2.Feet to Meter\n3.Inch to Feet\n4.Meter to Feet");
switch(parseInt(prompt('Enter the Choice')))
{
    case 1:
        let feet = parseInt(prompt('Enter the feet'));
        console.log(feet +' feets = ' + feet*12 +' inches');
        break;
    case 2:
        let feets = parseInt(prompt('Enter the feets?'));
        console.log(feets+'feets = ' +feets/0.3048 +' meter');
        break;
    case 3:
        let inch = parseInt(prompt('Enter the inches?'));
        console.log(inch +' inches = '+inch/12+' feets');
        break;
    case 4:
        let meter = parseInt(prompt('Enter the meter?'));
        console.log(meter +'meters = '+meter*0.3048+' feets');
        break;
    default:
        console.log("Invalid Operation");
        break;
}
"use strict";
const prompt=require("prompt-sync")({sigint:true});

const a = parseInt(prompt('Enter the number a '));
const b = parseInt(prompt('Enter the number b '));
const c = parseInt(prompt('Enter the number c '));

const oper1 = a+(b*c);
const oper2 = a%b+c;
const oper3 = c + (a/b);
const oper4 = (a*b) +c;

let max,min;

if(oper1>oper2 && oper1>oper3 && oper1>oper4)
    max = oper1;
else if(oper2>oper1 && oper2>oper3 && oper2>oper4)
    max = oper2;
else if(oper3>oper1 && oper3>oper2 && oper3>oper4)
    max=oper3;
else    
    max=oper4;

if(oper1<oper2 && oper1<oper3 && oper1<oper4)
    min = oper1;
else if(oper2<oper1 && oper2<oper3 && oper2<oper4)
    min = oper2;
else if(oper3<oper1 && oper3<oper2 && oper3<oper4)
    min=oper3;
else    
    min=oper4;

console.log('Maximum value after operation is: '+max +'\nMinimum value  is: '+min );
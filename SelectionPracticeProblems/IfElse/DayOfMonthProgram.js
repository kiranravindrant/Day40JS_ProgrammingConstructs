//id day between march 20 and june 20 is TRUE

let d=new Date();//creates a variable which will contain the current date
//let today="Month  is : " + (d.getMonth()+1 ) + " DAY is " + d.getDate() 

let Month=d.getMonth()+1
let date=d.getDate()
console.log("Month is " + Month + " Date is "+ date)

date=25
Month=6
if(Month>3 && Month < 6){

    console.log("Month is True")

    if(date>20 && date<31)
    {
        console.log(" Date is True")

    }
}else
{ console.log("False")

}



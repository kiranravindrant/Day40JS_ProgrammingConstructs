let n=5;
let sum=0;
for (let roll =1; roll<=n; roll++){
   let output=Math.floor(1+Math.random() * 6);
   console.log(output)
   sum=sum+output;
   
}

console.log("sum is "+sum);
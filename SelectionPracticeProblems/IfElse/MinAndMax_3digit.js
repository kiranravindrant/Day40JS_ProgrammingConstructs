let n=6;
let arr=[n]

for (let roll =1; roll<=n; roll++){
   let output=Math.floor(100+Math.random() *899);
   
   arr[roll]=output

   console.log(arr[roll])

   
   
}

let largest=arr[0]
let smallest=arr[1]
for(let i=0;i<=n;i++){

    if(arr[i]>=largest){

        largest=arr[i];
    }else if(arr[i]<=smallest){

        smallest=arr[i];
    }
}
console.log("largest is"+largest);
console.log("smallest is " +smallest);

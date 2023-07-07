function plusMinus(arr) {
    // Write your code here
let posRatio=0;
let negRatio=0;
let zeroRatio=0;
for(let num of arr){
    
  if(num<0){
      negRatio++;
      
  }
  else if(num>0){
      posRatio++;
  }
  else {
      zeroRatio++;
  }
}
console.log((posRatio/arr.length).toFixed(6));
console.log((negRatio/arr.length).toFixed(6));
console.log((zeroRatio/arr.length).toFixed(6));
}
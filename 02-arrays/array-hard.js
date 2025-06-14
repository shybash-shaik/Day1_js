
let scores=[25,80,45,95,60,75];

let sum=scores.reduce((acc,curr)=>acc+curr);
let len=scores.length;
let average=sum/len;
console.log(average);
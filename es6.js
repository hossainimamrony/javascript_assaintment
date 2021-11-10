let number = [1, 2, 3, 4, 5, 6, 9, 7];
let sum = 0;
for(let i of number){
    console.log(i);
}
        //rest parameters;
function restParameters(...rest){
    let sum = 0;
    for(let i of rest){
        sum = sum + i;
       
    }
    return sum;
}
let total = restParameters(1, 2, 3, 5, 6, 8, 45, 7, 6, 8);
console.log(total)
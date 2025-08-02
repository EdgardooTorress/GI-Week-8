/*Write a function that will allow you to calculate how many 
slices of pizza x each person y would get if they shared evenly. 
The function should return an interpolated string like 
Each person gets 4.00 slices of pizza; 
from our 8-slice pizza x being a decimal in case there is no way
 to split the pizza evenly.
*/

function slicesPerPerson (slices, people){
    const slicesSplit = slices / people;
    const roundedSlice = Math.round(slicesSplit * 100) / 100;

    return ` Each person  gets ${roundedSlice} slices of pizza; from our ${slices} slice pizza`

}

console.log(slicesPerPerson(8,2));
console.log(slicesPerPerson(8,3));
console.log(slicesPerPerson(21,20));
console.log(slicesPerPerson(10,3));
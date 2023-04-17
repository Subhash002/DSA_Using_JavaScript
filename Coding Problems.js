1. Topic ARRAY - 

1. Remove Duplicates
const arr1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDup = [];

for (let i = 0; i < arr1.length; i++) {
  if(i<arr1.length-1){
      if(arr1[i]!=arr1[i+1]){
          removeDup.push(arr1[i]);
      }
  } else{
      removeDup.push(arr1[i])
  }
}
console.log(removeDup);


2. Cloning and resizing array
const arrayN=[...arr1];
const arrayNN=arr1.slice();
const arrayNNN=[].concat(arr1);
const arrayNNNN=Array.from(arr1);
// Resizing -
arr1.length=20


3.
arr1 = [1, 2, 3, 4, 5];
val = 1;
count = 0;
var reduceLength = false;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != val) {
        arr1[count++] = arr1[i];
    } else {
        reduceLength = true;
    }
}
if (reduceLength) {
    arr1.length -= 1;
}
console.log(arr1);
3.Transpose of the Matix
var arr1 = [[1,2],[3,4]]
for (let i = 0; i < arr1.length; i++) {
for (let j = 0; i < arr1.length; j++) {
 const temp=arr[i][j];
  arr[i][j]=arr[j][i];
  arr[j][i]=temp;
}
  
}

console.log(arr1);



4. Finding missing value from sorted array
function subsMiss(arr) {
    let n=arr[arr.length-1]
    findSum = n*(n+1) / 2;
    arraySum = arr.reduce((accumulator,currentValue)=>accumulator + currentValue, 0);
    if(findSum-arraySum===0) return 'NO MISSING TERM'
    else return `Missting Term : ${findSum-arraySum}`;
}

5. Find max of array

function findMax(arr){
    let max = arrj[0];
    for(let i=1;i<arr.length;i++){
     if(arr[i] > max){
         max = arr[i];
     }   
    }
    return max;
}

7. Find min of array

function findMax(arr){
    let min = arrj[0];
    for(let i=1;i<arr.length;i++){
     if(arr[i] < max){
         min = arr[i];
     }   
    }
    return min;
}


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

8.
function runningArray(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i] + arr[i - 1];
        
    }
    return arr;
}

8. Objects
const product = {
    productName: "Computer",

    get prod(){
        return this.productName;
    },

    set prod(prod){
        this.productName = prod;
    },

    printProduct: function(){
        console.log(this.productName);
    }
};

product.printProduct();

9.
class transport{

    constructor(){
        this.typeName = "";
        this.wheels = 0;
        this.maxSpeed = 0;
    }
}

class car extends transport{
    constructor(){
        super();
        this.fuel = 0;
    }
}

var car1 = new car();
car1.wheels = 4;
car1.typeName = "car";
car1.maxSpeed = 200;
car1.fuel = 40;

console.log(car);

10.
PIVOT INDEX
var pivotIndex = function(nums) {
    const sumWithInitial = nums.reduce((accumulator, currentValue) => accumulator + currentValue,
  0
);
let leftSum=0;
let rightSum=sumWithInitial;
for(let i=0;i<nums.length;i++){
    rightSum=rightSum-nums[i];
    if(rightSum===leftSum) return i;
    leftSum+=nums[i] 

}
return -1;

};

11.

class Stack{
    constructor(){
        this.stack = [];
    }

    push(val){
        this.stack.push(val);
    }

    pop(){
        return this.stack.pop();
    }

    print(){
        console.log(this.stack);
    }

peek(){
        return this.stack[this.stack.length - 1];
    }
    isEmpty(){
        return this.stack.length == 0;
    }

    size(){
        return this.stack.length;
    }


}

var s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.print();
s.pop();
s.print();
s.pop();
s.print();

12.STACK USING NODE

13. Stack -GOOD STRING-
  In “Make The String Great” problem a string is given consists of lower and upper case letters. We have to make this string good by removing adjacent characters in the string which is making the string bad.
A good string is a string which doesn’t have two adjacent characters where both the characters are same but of different case. We can do this operation any number of times to make the string good.
  /**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(str) {
    const stack=[];
    for(const c of str){
      let last =stack.at(-1);
      if(last && c!==last && last.toLowerCase()===c.toLowerCase()) stack.pop();
      else stack.push(c);
  
    }
    return stack.join('');
};

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

2634. Filter Elements from Array
Easy
46
3
Companies
Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

Please solve it without the built-in Array.filter method.
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i], i)){
            result.push(arr[i]);
        }
    }
    return result;

};

2635. Apply Transform Over Each Element in Array
Easy
42
3
Companies
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        newArray.push(fn(arr[i], i))
    }
    return newArray;
};

1768. Merge Strings Alternately
Easy
1.3K
21
Companies
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  
    let results = [];
    let run = 0;
    let warray1 = word1.split('')
    let warray2 = word2.split('')
   
    while (warray1.length > run || warray2.length > run) {
        if (warray1[run]) {
            results.push(warray1[run]);
        }
        if (warray2[run]) {
            results.push(warray2[run]);
        }
        run++;
    }
    return results.join('');
};

Other Methods-
  function alternateNew2(word1, word2) {
    let results = [];
    let run = 0;
    let warray1 = word1.split('')
    let warray2 = word2.split('')
    while ((warray1.length > warray2.length) ? warray1.length : warray2.length > run) {
        for (var i = 0; i < warray2.length; i++) {
            results.push([warray1[i], warray2[i]]);
             run++;
        }

       
    }
    return results.flat().join('');
}

2620. Counter
Easy
116
3
Companies
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let x=n
    return function() {
         x+=1;
        return x-1;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

2621. Sleep
Easy
73
2
Companies
Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(millis)
        },millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

2619. Array Prototype Last
Easy
93
4
Companies
Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
 Array.prototype.last = function() {
   if(this.length===0){
       return -1;
   } else return this[this.length-1]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

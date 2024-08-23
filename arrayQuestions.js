// node arrayQuestions.js
// note:14,15,16 done:16

/*
1. **Sum All Elements in an Array**  
   - Task: Write a function that returns the sum of all numbers in an array.  
   - Test: `sumArray([1, 2, 3, 4, 5])`  
   - Expected Output: `15`
*/
function sumArray(array){
    var sum = 0;
    for(var i =0;i<array.length; i++){
        sum +=array[i]
    }
    console.log(sum)
}
sumArray([1,2,3,4,5])

/*2. **Find the Largest Number in an Array**  
   - Task: Write a function that returns the largest number in an array.  
   - Test: `findLargest([1, 5, 3, 9, 2])`  
   - Expected Output: `9*/
   function findLargest(array){
    let arrays = array.sort()
    console.log(arrays[arrays.length-1])
   }
findLargest([1,5,3,9,2])

/*3. **Find the Smallest Number in an Array**  
   - Task: Write a function that returns the smallest number in an array.  
   - Test: `findSmallest([1, 5, 3, 9, 2])`  
   - Expected Output: `1`
*/
function findSmallest(array){
    let arrays = array.sort()
    console.log(arrays[0])
   }
findSmallest([1,5,3,9,2])

/*4. **Sort an Array in Ascending Order**  
   - Task: Write a function that sorts an array in ascending order.  
   - Test: `sortArray([5, 2, 9, 1, 5, 6])`  
   - Expected Output: `[1, 2, 5, 5, 6, 9]`
*/
function sortArray(array){
    console.log(array.sort())
}
sortArray([5,2,9,1,5,6])

/*5. **Sort an Array in Descending Order**  
   - Task: Write a function that sorts an array in descending order.  
   - Test: `sortArrayDescending([5, 2, 9, 1, 5, 6])`  
   - Expected Output: `[9, 6, 5, 5, 2, 1]`
*/
function sortArrayDescending(array){
    let arrays = array.sort()
    console.log(arrays.reverse())
}
sortArrayDescending([5,2,9,1,5,6])

/*6. **Reverse an Array**  
   - Task: Write a function that reverses the elements of an array.  
   - Test: `reverseArray([1, 2, 3, 4, 5])`  
   - Expected Output: `[5, 4, 3, 2, 1]`
*/
function reverseArray(array){
    console.log(array.reverse())
}
reverseArray([1,2,3,4,5])

  /*help: copilot
  7. **Check if an Array Contains a Specific Element**  
   - Task: Write a function that checks if an array contains a specific element.  
   - Test: `containsElement([1, 2, 3, 4, 5], 3)`  
   - Expected Output: `true`*/

function containsElement(array, element) {
    
    console.log(array.includes(element))
}

containsElement([1, 2, 3, 4, 5],3)

/*8. **Find the Index of a Specific Element in an Array**  
   - Task: Write a function that returns the index of a specific element in an array. If the element is not found, return -1.  
   - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
   - Expected Output: `2`

   - Task: Write a function that returns the index of a specific element in an array. If the element is not found, return -1.  
   - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
   - Expected Output: `2`


   */
function findIndex(array,num){
   var count =0 ;
   for(var i =0;i<array.length;i++){
      if(array[i] != num){
         count+=1
      }else{break ;}
   }
console.log(count)
}
findIndex([1, 2, 3, 4, 5], 3)
/*
9. **Remove Duplicates from an Array**  
   - Task: Write a function that removes duplicate elements from an array.  
   - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
   - Expected Output: `[1, 2, 3, 4, 5]`
*/
function removeDuplicates(array){
   var arrays =[...new Set(array)];
   console.log(arrays)
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

/*10. **Merge Two Arrays**  
    - Task: Write a function that merges two arrays into one.  
    - Test: `mergeArrays([1, 2, 3], [4, 5, 6])`  
    - Expected Output: `[1, 2, 3, 4, 5, 6]`
  */
    function mergeArrays(arr1, arr2) {
      return [...arr1, ...arr2];
  }
  
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
  
/*11. **Find the Intersection of Two Arrays**  
    - Task: Write a function that returns the intersection of two arrays.  
    - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
    - Expected Output: `[2, 3]`
*/
function findIntersection(arr1,arr2){
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const Intersection = [...set1].filter(value => set2.has(value));
    console.log(Intersection)

}
findIntersection([1,2,3],[2,3,4]) 

/*12. **Find the Union of Two Arrays**  
    - Task: Write a function that returns the union of two arrays.  
    - Test: `findUnion([1, 2, 3], [2, 3, 4])`  
    - Expected Output: `[1, 2, 3, 4]`
*/

function findUnion(arr1, arr2) {
   return [...new Set([...arr1, ...arr2])];
}


console.log(findUnion([1, 2, 3], [2, 3, 4])); 

/*13. **Check if an Array is Sorted**  
    - Task: Write a function that checks if an array is sorted in ascending order.  
    - Test: `isSorted([1, 2, 3, 4, 5])`  
    - Expected Output: `true`
*/
function isSorted(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
       if (arr[i] > arr[i + 1]) {
           return false;
       }
   }
   return true;
}


console.log(isSorted([1, 2, 3, 4, 5])); 
console.log(isSorted([5, 3, 1, 4, 2])); 

/*14. **Find the Difference of Two Arrays**  
    - Task: Write a function that returns the difference of two arrays (elements in the first array that are not in the second array).  
    - Test: `findDifference([1, 2, 3], [2, 3, 4])`  
    - Expected Output: `[1]`
*/

function findDifference(arr1,arr2){
    var arr = [];
    for(var i =0;i<arr1.length;i++){
          var count = 0;
        for(var j = 0;j<arr2.length;j++){
            if(arr1[i]!= arr2[j]){
              count +=1
              
              if(count == arr2.length){ arr.push(arr1[i])}

            }
        }
    }
    console.log(arr)
}findDifference([1, 2, 3], [2, 3, 4])
/*15. **Rotate an Array by K Positions**  
    - Task: Write a function that rotates an array by `k` positions.  
    - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
    - Expected Output: `[4, 5, 1, 2, 3]`*/

/* 16. **Find the Maximum Difference Between Two Elements in an Array**  
    - Task: Write a function that finds the maximum difference between any two elements in an array.  
    - Test: `maxDifference([2, 3, 10, 6, 4, 8, 1])`  
    - Expected Output: `8`*/

/*17. **Find the Second Largest Element in an Array**  
    - Task: Write a function that returns the second largest element in an array.  
    - Test: `secondLargest([1, 2, 3, 4, 5])`  
    - Expected Output: `4`
*/
function secondLargest(array){
   var arrays = array.sort()
   console.log(arrays[arrays.length - 2])
}
secondLargest([1, 2, 3, 4, 5])

/*18. **Find the Pair of Elements with the Maximum Sum in an Array**  
    - Task: Write a function that finds the pair of elements with the maximum sum in an array.  
    - Test: `maxSumPair([1, 2, 3, 4, 5])`  
    - Expected Output: `[4, 5]`
*/
function maxSumPair(array){
     var arrays = array.sort()
     const arr = [arrays[arrays.length - 2],arrays[arrays.length - 1]]
console.log(arr)
   }
maxSumPair([1, 2, 3, 4, 5])

/*
19. **Find the Pair of Elements with the Minimum Sum in an Array**  
    - Task: Write a function that finds the pair of elements with the minimum sum in an array.  
    - Test: `minSumPair([1, 2, 3, 4, 5])`  
    - Expected Output: `[1, 2]`
*/
function minSumPair(array){
     var arrays = array.sort()
     const arr = [arrays[0],arrays[ 1]]
console.log(arr)
   }
minSumPair([1, 2, 3, 4, 5])
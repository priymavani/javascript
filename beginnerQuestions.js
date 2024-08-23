// node beginnerQuestions.js


// note:21,22,30,31 done :27

/* self:yes
help:
time:
*/

/* 1. **Print "Hello, World!"**  
   - Task: Write a function that prints "Hello, World!" to the console.
*/
function hello (){
    console.log("Hello World")
}
hello()

/*2. **Add Two Numbers**  
   - Task: Write a function that takes two numbers and returns their sum.  
   - Test: `sum(3, 5)`  
   - Expected Output: `8`
*/
function add(a,b){
    console.log(a+b)
}
add(3,5)

/*3. **Find the Largest Number**  
   - Task: Write a function that takes three numbers and returns the largest.  
   - Test: `findLargest(2, 8, 5)`  
   - Expected Output: `8`
*/
function largest(a,b,c){
    if(a==b && a>c){
        console.log(" both a and b are same and greater than c ",a)
    }
    else if (b == c && b>a){
        console.log(" both b and c are same and greater than a ",b)
    }
    else if(a> b && a >c){
        console.log(" a is greater",a)

    }
    else if(b> a && b >c){
        console.log(" b is greater",b)

    }
    else if(c> b && c >a){
        console.log(" c is greater",c)

    }
}
largest(2,8,5)

/* 

4. **Check if a Number is Even or Odd**  
   - Task: Write a function that checks if a number is even or odd.  
   - Test: `isEven(4)`  
   - Expected Output: `true`
*/
function iseven(a){
    if(a%2 == 0){
        
       console.log("true")
    }
    else{
        console.log("false")
      }
    }
iseven(4)

/* 
5. **Calculate the Factorial of a Number**  
   - Task: Write a function that returns the factorial of a number.  
   - Test: `factorial(5)`  
   - Expected Output: `120`
*/
function factorial(a){
    var sum = 1;
    for(var i =2;i<=a;i++){
        sum *=i 
    }
    console.log(sum)
}
factorial(5)

/*

help:https://www.geeksforgeeks.org/reverse-a-string-in-javascript/
6. **Reverse a String**  
   - Task: Write a function that takes a string and returns it reversed.  
   - Test: `reverseString('hello')`  
   - Expected Output: `'olleh'`
*/
function reversestring(str){
    // 1 method
   const strrev = [...str].reverse().join("");
   console.log(strrev)

    // 2 method
   var new_ = '';
   for(var i =str.length-1; i>=0;i--){
    
      new_ += (str[i])
   }
   console.log(new_)

}
reversestring("hello")

/*7. **Check for Palindrome**  
   - Task: Write a function that checks if a given string is a palindrome.  
   - Test: `isPalindrome('madam')`  
   - Expected Output: `true
*/

function palindrome(str){

    const strrev = [...str].reverse().join("");
         console.log(strrev)

         if(str == strrev){
            console.log("true")
         }
         else{console.log("false")}
    
}
palindrome('madam')

/*help:https://www.javatpoint.com/java-program-to-print-the-smallest-element-in-an-array
8. **Find the Minimum Number in an Array**  
   - Task: Write a function that takes an array and returns the smallest number.  
   - Test: `findMin([3, 1, 4, 1, 5])`  
   - Expected Output: `1`
*/
 function minimumarray(array){
    
var min = array[0]
    for(var i = 0;i<array.length;i++){
        if(array[i]<min)
            min = array[i]
    }
    console.log(min)

// var arrays = array.sort();
// console.log(arrays[0])

}
minimumarray([3,9,4,1,8])

/*
9. **Sort an Array**  
   - Task: Write a function that sorts an array of numbers in ascending order.  
   - Test: `sortArray([3, 1, 4, 1, 5])`  
   - Expected Output: `[1, 1, 3, 4, 5]`
*/
function ascending(array){
    var arrays = array.sort();
console.log(arrays)

}
ascending([1,3,1,4,5]);

/*
10. **Check if a String Contains a Substring**  
    - Task: Write a function that checks if a string contains another substring.  
    - Test: `containsSubstring('hello world', 'world')`  
    - Expected Output: `
*/
function substring(str,substr){
    
    console.log(str.includes(substr));
    return true;


}
substring("hello world","world")

/*11. **Sum All Elements in an Array**  
    - Task: Write a function that returns the sum of all numbers in an array.  
    - Test: `sumArray([1, 2, 3, 4, 5])`  
    - Expected Output: `15`
*/
function sumarray(array){
    var sum = 0;
    for(var i =0;i<array.length; i++){
        sum += array[i]
    }
    console.log(sum)
}
sumarray([1,2,3,4,5])

/*help:https://www.geeksforgeeks.org/how-to-calculate-the-fibonacci-series-in-javascript/
12. **Generate Fibonacci Sequence**  
    - Task: Write a function that generates the first `n` Fibonacci numbers.  
    - Test: `fibonacci(5)`  
    - Expected Output: `[0, 1, 1, 2, 3]`
*/
function fibinacci(n){
    

let series = new Array(n);
series.fill(0);
series[0] = 0;
series[1] = 1;
let i = 2;
while (i < n) {
    series[i] = series[i - 1] + series[i - 2];
    i++;
}
console.log(series);

}
fibinacci(5)

/*13. **Check if a Number is Prime**  
    - Task: Write a function that checks if a number is prime.  
    - Test: `isPrime(7)`  
    - Expected Output: `true`
*/
function isprime(a){
    var count = 0;
    for(var i =2;i< a;i++){
       if( a % i == 0){
        count+=1;}}
        console.log(count)
        if(count == 0){
            console.log("true")
        }else if(a == 2){
            console.log("true")
        }
        else{
            console.log("false")
        }
    }

isprime(53)

/*
14. **Count the Number of Vowels in a String**  
    - Task: Write a function that counts the number of vowels in a given string.  
    - Test: `countVowels('hello')`  
    - Expected Output: `2
*/
function vowels(str){
    var count = 0;
    for(var i =0;i<str.length;i++){
        let char = str[i]
     
            if(str[i] == 'a'||str[i] =='e'||str[i] =='i'||str[i] =='o'||str[i] =='u'){
            count =count +1
        }else{count +=0}
    }
    console.log(count)
}
vowels("priy")
/*
15. **Find the Index of an Element in an Array**  
    - Task: Write a function that returns the index of a given element in an array. If the element is not found, return -1.  
    - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
    - Expected Output: `2`

    */
   function length(array){
    var count = 0;
    for(var i =0;array[i]!=undefined;i++){
        count+=1;
    }
    if(count > 0){
        
        console.log(count)}
        else{
        console.log("-1")
    }
   }
   length([[1,2,3,4,5],5])

/*16. **Remove Duplicates from an Array**  
    - Task: Write a function that removes duplicate elements from an array.  
    - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
    - Expected Output: `[1, 2, 3, 4, 5]`
*/
function duplicates(array){
    var arrays = array.sort();
    var p = [...new Set(arrays)]

    console.log(p)
    // for(var i =0;i<arrays.length;i++){
    //     if(arrays[i]==arrays[i+1]){
    //         // arrays.splice[i,i+1]
         
    //             arrays.slice(i+1)
    //     }

    
    //}
}
duplicates([1,2,2,3,3,4,5])

/*17.help:chatgpt
 **Find the Intersection of Two Arrays**  
    - Task: Write a function that returns an array of the common elements in two arrays.  
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

/*
18. **Check if Two Strings are Anagrams**  
    - Task: Write a function that checks if two strings are anagrams of each other.  
    - Test: `areAnagrams('listen', 'silent')`  
    - Expected Output: `true`
*/
function areAnagrams(str1,str2){
    var count = 0;
    for(var i =0;i<str1.length;i++){
        for(var j =0;j<str2.length;j++){
            if(str1[i] == str2[j]){
                count+=1;
            }
        }

    }
    if(count == str1.length){
        console.log('true')
    }else{console.log("false")}
}
areAnagrams("listen","silent")

/*19. **Capitalize the First Letter of Each Word**  
    - Task: Write a function that capitalizes the first letter of each word in a string.  
    - Test: `capitalizeWords('hello world')`  
    - Expected Output: `'Hello World'`
*/
function capitalizeWords(str){
  var stri = str.split(" ");
  var new_str = "";
  for(var i =0;i<stri.length;i++){
    var string = stri[i] ;
    var one = string.replace(string[0],string[0].toUpperCase())
   
   new_str += one +" " 

  }
   console.log(new_str)
  
}  
capitalizeWords('hello world')

/*help:copilet
20. **Flatten a Nested Array**  
    - Task: Write a function that flattens a nested array (an array of arrays) into a single array.  
    - Test: `flattenArray([1, [2, 3], [4, [5, 6]]])`  
    - Expected Output: `[1, 2, 3, 4, 5, 6]`
*/
function flattenArray(array){
    console.log(array.flat(Infinity))
}
flattenArray([1,[2,3],[4,[5,6]]])

/*21. **Generate a Random Number within a Range**  
    - Task: Write a function that generates a random number between a given range.  
    - Test: `randomNumber(1, 10)`  
    - Expected Output: `A random number between 1 and 10`
*/


/*22. **Check if a String is a Valid Email**  
    - Task: Write a function that checks if a given string is a valid email address.  
    - Test: `isValidEmail('test@example.com')`  
    - Expected Output: `true`
 */

/* 23. **Convert Celsius to Fahrenheit**  
    - Task: Write a function that converts a temperature from Celsius to Fahrenheit.  
    - Test: `celsiusToFahrenheit(0)`  
    - Expected Output: `32`*/

    function celsiusToFahrenheit(a){
        var sum = (a * (9/5))+32
        console.log(sum)
    }
    celsiusToFahrenheit(0)

/*
help:copilot
 24. **Remove a Specific Element from an Array**  
    - Task: Write a function that removes a specific element from an array.  
    - Test: `removeElement([1, 2, 3, 4, 5], 3)`  
    - Expected Output: `[1, 2, 4, 5]`
    */
    function removeElement(arr, element) {
    return arr.filter(item => item !== element);
}


console.log(removeElement([1, 2, 3, 4, 5], 3)); 


/* 25. **Find the Second Largest Number in an Array**  
    - Task: Write a function that returns the second largest number in an array.  
    - Test: `secondLargest([1, 2, 3, 4, 5])`  
    - Expected Output: `4`*/
    function secondLargest(array){
        let arrays = array.sort()
        console.log(arrays[arrays.length - 2])
    }
    secondLargest([1,2,3,4,5])

/* 26. **Find the Longest Word in a String**  
    - Task: Write a function that returns the longest word in a string.  
    - Test: `longestWord('The quick brown fox jumped over the lazy dog')`  
    - Expected Output: `'jumped'`*/
    function longestWord(str){
        var stri = str.split(" ");
        var _ ;
        var count = 0;
        for(var i =0;i<stri.length;i++){
          var string = stri[i] ;
          if(string.length > count){
            count = string.length 
            _ = string
          }
         
         
      
        }
        console.log(_)
        
      }
      longestWord('The quick brown fox jumped over the lazy dog')
      
/* 27. **Find the Missing Number in an Array**  
    - Task: Write a function that finds the missing number in a sequence from 1 to n.  
    - Test: `findMissingNumber([1, 2, 4, 5, 6])`  
    - Expected Output: `3`*/
function findMissingNumber(array){
    var arrays = array.sort();
    for(var i =0;i<arrays.length-1;i++){
        if((arrays[i]+1) != arrays[i+1]){
            console.log(arrays[i]+1)
        }

    }
}
findMissingNumber([1,2,4,5,6])

/* 28. **Calculate the GCD of Two Numbers**  
    - Task: Write a function that calculates the greatest common divisor (GCD) of two numbers.  
    - Test: `gcd(12, 18)`  
    - Expected Output: `6`*/
    function gcd(num1,num2){
        var x = [];
        var y =[];
        var com = [];
        for(var i= 2;i<=num1;i++){
           if( num1%i ==0 ){
             x.push(i)
           }
           
        }
        for(var i= 2;i<=num2;i++){
           if( num2%i ==0 ){
             y.push(i)
           }
        }
           for(var i =0;i<x.length ; i++){
             for(var j = 0;j<y.length; j++){
               if(x[i] == y[j]){
                 com.push(x[i])
               }
             }
           }
         
         console.log(com[com.length -1])
        
      }
      gcd(4444,242)

// function gcd(a,b){
// if
// (a>b && a%b == 0){
//     console.log(b)
// }

// else if
//     (b>a && b%a  == 0){
//         console.log(a)
//     }
// else if (a>b ){
//     console.log(a%b)

// }else if (b>a){
//     console.log(b%a)
// }
// }gcd(12, 6)
    

/* 29. **Calculate the LCM of Two Numbers**  
    - Task: Write a function that calculates the least common multiple (LCM) of two numbers.  
    - Test: `lcm(4, 6)`  
    - Expected Output: `12`*/

    function lcm(num1,num2){
        var x = [];
        var y =[];
        var com = [];
        for(var i= 2;i<=num1;i++){
           if( num1%i ==0 ){
             x.push(i)
           }
           
        }
        for(var i= 2;i<=num2;i++){
           if( num2%i ==0 ){
             y.push(i)
           }
        }
           for(var i =0;i<x.length ; i++){
             for(var j = 0;j<y.length; j++){
               if(x[i] == y[j]){
                 com.push(x[i])
               }
             }
           }
         
         var p =(com[com.length -1])
         console.log((num1*num2)/p)
        
      }
      lcm(4,6)
      

/* 30. **Check for Balanced Parentheses**  
    - Task: Write a function that checks if a string has balanced parentheses.  
    - Test: `isBalanced('()')`  
    - Expected Output: `true`*/

/* 31. **Rotate an Array**  
    - Task: Write a function that rotates an array by k steps.  
    - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
    - Expected Output: `[4, 5, 1, 2, 3]`*/





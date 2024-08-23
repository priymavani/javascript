// node stringQuestions.js
// note :
// done:20
/*
1. **Reverse a String**
   - Task: Write a function that reverses a given string.
   - Test:
     ```javascript
     console.log(reverseString("hello"));
     ```
   - Expected Output: `"olleh"`
*/
function reversestring(str){
    console.log([...str].reverse().join(""))
}
reversestring("hello")

/*2. **Check if a String is a Palindrome**
   - Task: Write a function that checks if a given string is a palindrome (reads the same forward and backward).
   - Test:
     ```javascript
     console.log(isPalindrome("racecar"));
     console.log(isPalindrome("hello"));
     ```
   - Expected Output:
     ```javascript
     true
     false
     ```
*/
function isPalindrome (str){
    var newstring = [...str].reverse().join("")

    if(newstring == str){
        console.log(" true");}
        else{
            console.log("false");
        }
    }
isPalindrome("racecar")
isPalindrome("hello")

/*3. **Count the Number of Vowels in a String**
   - Task: Write a function that counts the number of vowels (`a, e, i, o, u`) in a given string.
   - Test:
     ```javascript
     console.log(countVowels("hello world"));
     ```
   - Expected Output: `3`
*/
function countVowels(string){
    var count = 0;
    let str = string.toLowerCase();
    for(var i =0;i<str.length;i++){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
    {
count+=1
    }
    }
    console.log(count)
    
}
countVowels("hello world")

/*4. **Find the First Non-Repeated Character in a String**
   - Task: Write a function that finds the first non-repeated character in a string.
   - Test:
     ```javascript
     console.log(firstNonRepeatedCharacter("swiss"));
     ```
   - Expected Output: `"w"`
*/
function firstNonRepeatedCharacter(str){
    for(var i =0;i<str.length;i++){
        var count = 0;
        for(var j =i+1;j<str.length;j++){
            if(str[i] == str[j]){
                count+=1;

            }
        }
        if(count == 0){
            console.log(str[i])
            break;
        }
    }
}
firstNonRepeatedCharacter("swiss")

/*
chate gpt
5. **Count the Number of Words in a String**
   - Task: Write a function that counts the number of words in a string. Assume words are separated by spaces.
   - Test:
     ```javascript
     console.log(countWords("This is a test string"));
     ```
   - Expected Output: `5`
*/
function countWords(str){
    let count = str.split(' ').length;
 /* str.split(' '): This splits the string str into an array of words using the space character as the delimiter.
.length: This gets the length of the resulting array, which corresponds to the number of words */
    console.log(count)
}
countWords("this is a test string")

/*6. **Check if Two Strings are Anagrams**
   - Task: Write a function that checks if two strings are anagrams (contain the same characters in different orders).
   - Test:
     ```javascript
     console.log(areAnagrams("listen", "silent"));
     console.log(areAnagrams("hello", "world"));
     ```
   - Expected Output:
     ```javascript
     true
     false
*/
function areAnagrams(str1,str2){
  var count = 0;
  for (var i =0; i<str1.length;i++){
    for (var j =0;j<str2.length;j++){
      if(str1[i] == str2[j]){
        count +=1
      }
    }
  }
  if(count == str1.length){
    console.log('true')

  }else{console.log('false')}
}
areAnagrams("listen","silent")
areAnagrams("hello","world")

/*7. **Replace All Spaces in a String with Hyphens**
   - Task: Write a function that replaces all spaces in a string with hyphens (`-`).
   - Test:
     ```javascript
     console.log(replaceSpaces("Hello World"));
     ```
   - Expected Output: `"Hello-World"`
*/
function replaceSpaces(str){
  let array = str.split(" ").join("-");
  console.log(array)
}
replaceSpaces("hello world")

/*8. **Convert a String to Title Case**
   - Task: Write a function that converts a string to title case (capitalizes the first letter of each word).
   - Test:
     ```javascript
     console.log(toTitleCase("this is a test string"));
     ```
   - Expected Output: `"This Is A Test String"`
*/ 
function toTitleCase(str){
  var stri = str.split(" ");
  var new_str = "";
  for(var i =0;i<stri.length;i++){
    var string = stri[i] ;
    var one = string.replace(string[0],string[0].toUpperCase())
   
   new_str += one +" " 

  }
   console.log(new_str)
  
}  toTitleCase("this is a test string")


/*9. **Check if a String Contains Only Digits**
   - Task: Write a function that checks if a string contains only numeric digits.
   - Test:
     ```javascript
     console.log(isNumeric("12345"));
     console.log(isNumeric("123a5"));
     ```
   - Expected Output:
     ```javascript
     true
     false
     ```
*/
function isNumeric(str){
  var count = 0;
  for(var i =0;i<str.length;i++){
    if(str[i] == "0"||str[i] == "1"||str[i] == "2"||str[i] == "3"||str[i] == "4"||str[i] == "5"||str[i] == "6"||str[i] == "7"||str[i] == "8"||str[i] == "9"){
      count+= 1
    }
}

if(count == str.length){
  console.log("true")
}else{console.log("false")}
}
isNumeric("12345")
isNumeric("123a5")


/*10. **Remove Duplicates Characters from a String**
    - Task: Write a function that removes duplicate characters from a string.
    - Test:
      ```javascript
      console.log(removeDuplicates("programming"));
      ```
    - Expected Output: `"progamin"`
*/
function removeDuplicates(str){
   var array =[...new Set(str)];
   console.log(array.join(''))
}
removeDuplicates("programming");

/*11. **Find the Longest Word in a String**
    - Task: Write a function that finds the longest word in a string.
    - Test:
      ```javascript
      console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
      ```
    - Expected Output: `"jumped"`
*/
findLongestWord("The quick brown fox jumped over the lazy dog")

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

/*
13. **Repeat a String N Times**
    - Task: Write a function that repeats a given string `n` times.
    - Test:
      ```javascript
      console.log(repeatString("abc", 3));
      ```
    - Expected Output: `"abcabcabc"`
*/
function repeatString (str,num){
  
console.log(str.repeat(num))
}
repeatString("abc",3)
/*15. **Convert a String to an Array of Words**
    - Task: Write a function that converts a string to an array of words.
    - Test:
      ```javascript
      console.log(stringToWords("This is a test"));
      ```
    - Expected Output: `["This", "is", "a", "test"]`
*/
// function stringToWords(str){

// }
function stringToWords(str){
var strgs = str.split(" ");
console.log(strgs)
}
stringToWords("This is a test")

/*16. **Truncate a String**
    - Task: Write a function that truncates a string to a specified length and adds "..." at the end.
    - Test:
      ```javascript
      console.log(truncateString("This is a long string", 10));
      ```
    - Expected Output: `"This is a..."`
*/
function truncateString(str,num){
  var array = str.split("")
  var stri = "";
  for(var i =0 ;i<num;i++){
    stri  += (array[i]);



  }
  stri += "..."
  console.log(stri)
}
  truncateString("This is a long string", 10)

/*17. **Check if a String Starts with a Specific Substring**
    - Task: Write a function that checks if a string starts with a given substring.
    - Test:
      ```javascript
      console.log(startsWith("hello world", "hello"));
      console.log(startsWith("hello world", "world"));
      ```
    - Expected Output:
      ```javascript
      true
      false
      ```
*/
function startsWith(str,substr){
    
       
       return str.startsWith(substr);
}
console.log(startsWith("hello world", "hello"));
console.log(startsWith("hello world", "world"));

/*18. **Check if a String Ends with a Specific Substring**
    - Task: Write a function that checks if a string ends with a given substring.
    - Test:
      ```javascript
      console.log(endsWith("hello world", "world"));
      console.log(endsWith("hello world", "hello"));
      ```
    - Expected Output:
      ```javascript
      true
      false
      ```
*/
function endsWith(str,substr){
  return str.endsWith(substr)
}

console.log(endsWith("hello world", "world"));
console.log(endsWith("hello world", "hello"));


/*19. **Insert a Substring at a Specific Position in a String**
    - Task: Write a function that inserts a substring at a specific position in a string.
    - Test:
      ```javascript
      console.log(insertSubstring("Hello World", "Beautiful ", 6));
      ```
    - Expected Output: `"Hello Beautiful World"`
    
*/
function insertSubstring(str,subStr,num){
  return (str.substr(0, num) + subStr + str.substr(num))
}
console.log(insertSubstring("Hello World", "Beautiful ", 6));

/*20. **Remove All Instances of a Substring**
    - Task: Write a function that removes all instances of a substring from a string.
    - Test:
      ```javascript
      console.log(removeSubstring("This is a test. This is only a test.", "test"));
      ```
    - Expected Output: `"This is a . This is only a ."`
*/
function removeSubstring(str,substr){
  return (str.replaceAll(substr,""))
}
 console.log(removeSubstring("This is a test. This is only a test.", "test"));


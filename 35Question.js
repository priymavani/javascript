// // 1. Hello World Program
// // Write a program to print "Hello, World!" on the screen.

// console.log("hello world!")

// // 2. Sum of Two Numbers
// // Write a program to find the sum of two numbers the user enters.

// var a =2,b=3;
// console.log(a+b);

// // 3. Largest of Two Numbers
// // Write a program to find the largest of two numbers.

// var a= 5,b = 6;
// if(a>b){
//     console.log("largest number is a",a);
// }
// else{
//     console.log("largest number is b",b);
// }

// // 4. Even or Odd
// // Write a program to check whether a given number is even or odd.

// var a = 45 ;
// if(a%2 == 0){
//     console.log("even");
// }else{
//     console.log("odd");
//}

// // 5. Factorial of a Number
// // Write a program to calculate the factorial of a given number.

// var mul = 1,i,num = 6;
// for(i = 1;i<=num;i++){
//      mul  *= i;
// }

// console.log(mul, " is factorial of ",num);

// // 6. Reverse a Number
// // Write a program to reverse a given integer.
// var ab = 123;

// console.log(bc)
// var cd = ' ';


// var reverse = 0;
// for(var i = bc.length-1;i>=0;i-- ){

//     cd += bc[i];

// }
// console.log(cd)

// // 7. Palindrome Check
// // Write a program to check whether a given number is a palindrome.
// var str = 'madam';
// var rstr = '';

// for(var i = str.length -1;i>=0;i--){
//     rstr += str[i];
// }
// if(str == rstr){
//     console.log("palidrome")
// }else{
//     console.log("not palidrome")  
// }

// // 8. Sum of Digits
// // Write a program to find the sum of digits of a given num

// var  num = 123;

// var sum=0;


// while(num != 0){
//     var digit = num%10;
//     num = (num-digit)/10
//     sum = sum + digit;

// }
// console.log(sum)

// // 9. Prime Number Check
// // Write a program to check whether a given number is prime
// var num = 2;
// var count = 0;
// for(var i = 2;i<num;i++){
// if(num%i ==0){
//     count++;
// }

// }
// if(count>0){
//     console.log("not prime")
// }else{
//     console.log("prime")
// }

// // 10. Fibonacci Sequence
// // Write a program to print the Fibonacci sequence up to a given number of terms.
// var giv_num= 5
// var first = 0;
// var sec = 1;
// var sum;
// for(var i =0;i<giv_num;i++){
//     sum =first +sec;

//     first = sec;
//     sec = sum;
// }
// console.log(sum)

// // 11. Swapping Two Numbers
// // Write a program to swap two numbers without using a third variable.
// var a = 9,b=7;

// a= a+b;
// b =a-b;
// a =a-b;
// console.log("a is ",a," b is ",b)

// // 12. Swap Two Numbers Using Third Variable
// // Write a program to swap two numbers using a third variable.

// var a= 3,b =8,temp;
// temp = a;
// a= b;
// b =temp;
// console.log("a is ",a," b is ",b)

// // 13. Leap Year Check
// // Write a program to check whether a given year is a leap year.
// var year = 1999;
// if(year%4 ==0 && year%100 != 0||year%400 == 0){
//     console.log(year," year is leap year")
// }else{
//     console.log(year," year is not leap year")
// }

// // 14. Simple Calculator
// // Write a program to create a simple calculator that can add, subtract, multiply, and divide two numbers.

// var a = 3,b =9;
// console.log("addition of",a," and ",b," is ",a+b);
// console.log("multiply of",a," and ",b," is ",a*b);
// console.log("division of",a," and ",b," is ",a/b);
// console.log("substraction of",a," and ",b," is ",a-b);

// // 15. Sum of Array Elements
// // Write a program to find the sum of all elements in an array.
// var arr = [1,5,3,2,6,8,9];
// var sum = 0;
// for(var i = 0; i<arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum);

// // 16. Largest Element in an Array
// // Write a program to find the largest element in an array.

// var arr = [2,4,6,2,40,6,7,7,8];
// var sort = arr.sort((a,b)=>a-b);
// console.log(sort)

// for (var i = 0; i<arr.length;i++){
//     for(var j = i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             var digit = arr[i];
//             arr[i]= arr[j];
//             arr[j] = digit;
            
//         }
//     }

// }
// console.log(arr)

// // 17. String Length
// // Write a program to find the length of a string without using the built-in strlen function
// var str ='abc';
// var len =0;
// for(var i =0;str[i] != undefined;i++){
//     len++
// }
// console.log(len);

// // 18. String Reverse
// // Write a program to reverse a string.
// var str = 'abc';
// var rstr = '';
// for (var i= str.length-1;i>=0;i--){
//     rstr += str[i]
// }
// console.log(rstr)




// // 19. GCD of Two Numbers
// // Write a program to find the greatest common divisor (GCD) of two numbers.
// var a = 9;
// var b = 27;
// var gcd;

// for(var i = 0;i<=a && i<=b;i++){
//     if(a%i ==0 && b%i == 0){
// gcd = i;

//     }
// }
// console.log(gcd)


// // 20. LCM of Two Numbers
// // Write a program to find the least common multiple (LCM) of two numbers.
// var a = 9;
// var b = 27;
// var gcd;

// for(var i = 0;i<=a && i<=b;i++){
//     if(a%i ==0 && b%i == 0){
// gcd = i;

//     }
// }
// console.log(a*b/gcd)

// // 21. ASCII Value of a Character
// // Write a program to find and print the ASCII value of a character.

// var char = 'A';
// console.log("the ascii value of",char," is ",char.charCodeAt())

// // 22. Convert Celsius to Fahrenheit
// // Write a program to convert temperature from Celsius to Fahrenheit.
// var c = 89;
// var f = (c*9/5)+32
// console.log(f)

// // 23. Convert Fahrenheit to Celsius
// // Write a program to convert temperature from Fahrenheit to Celsius.

// var f = 192.2;
// var c = (f-32)*5/9
// console.log(c)

// // 24. Sum of First N Natural Numbers
// // Write a program to calculate the sum of the first N natural numbers
// var num =10;
// var sum =0;
// for(var i=0;i<=num;i++){
//     sum +=i;

// }console.log(sum)

// sum2= num*(num+1)/2
// console.log(sum2)

// // 25. Check Vowel or Consonant
// // Write a program to check whether a given character is a vowel or consonant.
 
// var letter = 'A';
// var char = letter.toLowerCase();

// if(char == 'a'||char == 'e'||char == 'i'||char == 'o'||char == 'u'){
//     console.log(letter ," is vowel")
// }else{
//     console.log(letter ," is consonent ");
// }

// // 26. Check Alphabet, Digit, or Special Character
// // Write a program to check whether a character is an alphabet, digit, or special character.

// var letter ='8';
// var ascii = letter.charCodeAt();
// if((ascii>=65 &&ascii<=90)||(ascii>=97 && ascii<=122)){
//     console.log(letter," Is Alphabet")
// }else if((ascii>=48 && ascii<=57)){
//     console.log(letter," Is Digit")
// }else{
//     console.log(letter," Is Special Character")
// }

// // 27. Count the Number of Digits in an Integer
// // Write a program to count the number of digits in a given integer.

// var number = 12594.95;
// var numb =parseInt(number);
// var num = numb.toString()
// console.log(num.length)

// // 28. Reverse a String
// // Write a program to reverse a given string.

// var str ='abcd';
// var rstr = '';

// for(var i =str.length-1;i>=0;i--){
//     rstr = rstr + str[i];
// }
// console.log(rstr)

// // 29. Check the Alphabetic Order of Two Strings
// // Write a program to check whether two strings are in alphabetic order.

// var str1 = 'apple';
// var str2 = 'ball';
// var ascii1 = str1.charCodeAt();
// var ascii2 = str2.charCodeAt();
// if(ascii2 == ascii1+1){
//     console.log("Alphabetic Order of Two Strings")

// }else{
//     console.log("not Alphabetic Order of Two Strings");

// }


// // 30. Calculate the Power of a Number
// // Write a program to calculate the power of a number using a loop.
// var num = 3;
// var power = 2;
// var mul = 1;
// for(var i =1 ; i<=power;i++){
//     mul *=num; 
// }
// console.log(mul)


// // 31. Print All Prime Numbers Between Two Numbers
// // Write a program to print all prime numbers between two given numbers.

// var a= 3 ,b = 100;


// for(var i =a ;i<=b; i++){
//     var count = 0;
//     for(var j = 2 ; j< i ; j++){
//         if(i%j == 0){
//             count++
//         }

//     }
//     if(count == 0){
//         console.log("prime  ",i)
//     }

// }

// // 32. Check Armstrong Number
// // Write a program to check whether a given number is an Armstrong number.

// var  num = 153, num1 = num,len= num.toString().length;var sum = 0;


// while(num != 0){
//     var digit = num%10;
//     var mul = digit**len;
//     sum += mul;
//     num = (num-digit)/10;

// }
// if(sum == num1){
//     console.log("armstrong",sum)
// }else{
//     console.log("not armstrong ",num1)
// }


// // 33. Calculate the Average of Numbers in an Array
// // Write a program to calculate the average of all the numbers in an array.

// var array =[18,15,9,4,6];
// var sum = 0;

// var length = array.length
// for(var i = 0;i<length;i++){
// sum += array[i];

// }
// console.log("average is ",sum/length)

// // 34. Find the Second Largest Number in an Array
// // Write a program to find the second-largest number in an array.

// var array = [1,9,2,8,30,7,6,4,5];

// for(var i =0;i<array.length;i++){
//     for(var j =i+1;j<array.length;j++){
//         if(array[i]>array[j]){
//             var digit = array[i];
//             array[i] = array[j];
//             array[j]= digit
//         }
//     }
// }

// console.log(array[array.length-2])






// // 35. Check If a Number is a Perfect Square
// // Write a program to check if a given number is a perfect square. A perfect square is an integer that is the square of an integer. For example, 9 is a perfect square since it equals 3² and can be written as 3 × 3.

// var num = 7;

// var power = Math.sqrt(num)
// var pow = parseInt(power);
// if((pow*pow) == num){
//     console.log("power of ",num," is ", pow)
// }else{
//     console.log("not perfect squre")
// }
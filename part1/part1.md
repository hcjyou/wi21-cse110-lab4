Part 1 Intro to Javascript

1. The program will print the vallue of i because i is a var meaning it has global scope.

2. The program will print the "discountedPrice" which will be the last price in the array, prices, with the discount applied ( 1 - discount). discountedPrice is also a var, so just like i, it has global scope.

3. The program will print the finalPrice which is the discounted price. Its also able to be printed because it is a var with global scope, but also because it was declared outside the foor loop. 

4. It will print:

3
150
150 

in the console because it prints everything after the for loop has ended meaning the value of i, discountedPrice, and finalPrice would all be calculated based on the last value in the prices array. In this case, it was 300. i = 3 because it was the third value in the array, discounted prices was 150 because 300 * (1-.5) = 150, and finalprice was 150 because (150 * 100)/100 = 150.  

5. The programm will give an error because i was a let and declared only within the for loop, so it would not be visible outside the for loop. The error would probably say it is undefined.

6. The programm will give an error because discountedPrice was a let and declared only within the for loop, so it would not be visible outside the for loop. The error would probably say it is undefined.

7. The program will print the value of finalPrice since it was declared outside of the for loop but within the function. The for loop would assign it new values but its final value would carry on outside the for loop because of the previously mentioned "declaration outside of the for loop."

8. Like #4 (and assuming the previous parts of the code worked), it will print:

3
150
150

Because the console.log() functions are outside of the for loop meaning they will take whatever was the last value of prices[i] (along with i) which, in this case, was 300. 

9. i would show an error when accessed by console.log(i) because it is a let and within the scope of the for loop meaning it will not be visible/accessible outside of it. 

10. discountedPrice would show an error when accessed by console.log(i) because it is a const, which is pretty similar to a let in that, it is not visible outside of the code block it is in.

11. There would be an error because finalPrice is a const assigned with the value of 0. The for loop would try to change the value of the const which is not possible/supposed to happen. 

12. Assuming everything worked correctly, discountPrices([100,200,300],.5 would return the same as #8

3
150
150

For reasons already explained in 8 and 4. console.log() is outside the forloop and therefore does not print every i, discounted price, and final price, but rather of whatever was last in the prices array.

13a student.name (e.g. console.log(student.name))

13b. student['Grad Year']

13c. student.greeting();

13d. student['Favorite Teacher'].name

13e. student.courseLoad[0]

14a Output: 32
3 is a string and comes first while 2 is a number. The plus operator acts as a concatenator for strings. Therefore, the 2 is converted into a string and concatenated to 3. 

14b. Output: 1
In Javascript, there isn't a subtraction character that acts as the opposite of the "+" concatenating operator. It exists as an arithmetic operator between numbers. Therefore, since '3' happens to be a number in string form, it converts 3 to a number and subtracts 2 from it. 

14c. Output: 3
Null is considered 0 when used among number types.

14d. Output: 3null
Among strings, null is considered "null." Since '3' is a string, the + operator concatenates null in string form to 3.

14e. Output: 4
In this scenario, the + symbol acts as an arithmetic operator. True is converted to its numeric value, 1, and added to 3 to get 4.

14f. Output: 0
In this scenario, the + symbol acts as an arithmetic operator again. False is converted to its numeric value, 0, and null is converted to its numeric value, also 0.
0 + 0 = 0 hence the output.

14g. Output: 3undefined
In this scenario, the + symbol acts as a concatenator. "3" is a string and undefined is converted into its string form, "underfined." The two are combined and the result is 3undefined

14h. Output: NaN
In this scenario, the subtraction symbol acts as an arithmetic operator so it converts both 3 and undefined to strings. However, undefined's conversion to number becomes NaN (conversion failed) so the result is NaN.

15a. Output: true
2 is converted to a number and compared to 1. Since it is great than 1, the output is true.

15b. Output: false
Both of the numbers are strings. Lexicographically, 2 is greater than the 1 in 12. Therefore the answer is false.

15c. Output: True
When comparing different types, JavaScript converts values to numbers. '2' becomes 2 which is equal to 2, therefore true.

15d. Output: False
Since we are using a strict equlity operator and one value is a number while the other is a string (therefore not the same type), it immediately outputs false.

15e. Output false
Since we are comparing different types, JavaScript converts true to 1. 1 is not equal to 2 so therefore, the result is false. 

15f. Output: True
Any value within Boolean() that is not blank, 0, null, '', undefined, or false and is a valid type is true meaning Boolean(2) is true. Since we have two of the same types, the strict equality operator acts as a normal equality operator and true is equal to true. Therefore, the result is true. 

16. The === is a strict equality operator that acts exactly the same as a normal equality operator, except the two values being compared must be of the same type. Otherwise, it returns NaN. 

17. Output: How are you?

Any value that is not a 0, null, '', undefined, or false and is a valid type makes it true when converted to Boolean. In this case, the else if (2) line convertedthe 2 to true. Therefore, since this line is true, it would print 'How are you?'. It did not print the first if statement because 2 does not equal true (1). It did not print the else statement because the else if statement satisfied the condition.

18. (On part1-question18.js)

19. Output: [6,8,10]
We called the function, modifyArray([1,2,3],doSomething). This function has two callback functions. doSomething and function(x). During each iteration of the for loop, the function first runs doSomething on the value at array[i], then runs function with parameter x (x * 2) before pushing the final value into the new array. Therefore, at array[0], 2 is added to 1 which equals 3, and then multiplied by 2, which equals 6, then pushed onto the array. At array[1], 2 is added to 2 which equals 4, and then multiplied by 2 which equals 8, then pushed into newArr. At array[2], 2 us added to 3 which equals 5, and then multiplied by 2 which equals 10, then pushed onto the array. The resulting array is [6,8,10]. 

20. (On part1-question20.js)

21. Output: 1
            4
            3
            2


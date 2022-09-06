/*Week 3: JavaScript Functions
*/

var str= "ABCDEFGHIJXYZ";
console.log("The length of the str is "+ str.length);
/*return the length of the String value */

var a = str.charAt(2);
/*CharAt() is the method return the choose letter, 
The count of string is from 0, 
not from 1. 0, 1, 2, so charAt(2) 
is the 3rd letter "D". */
console.log("The third letter of the str is "+ a);

var b = str.includes("DU");
console.log(b);
/**Finds whether the string 
contains the specified character */

var c = str.replace("ABCDEFGHI","Hello, I am the new str value~~");
console.log(c);
/**Change the choose string value and replace it by new value,
 * in this one, change part of the str value to new value 
 * "Hello, I am the new str value"
*/


var d = str.startsWith("X")
console.log(d)
/**Detects whether the string begins with the specified substring. */


/**Pass Task 2 – JavaScript Number, Number Methods and Array Methods
 */
var week= new Array(7)
week[0] = "Monaday" ;
week[1] = "Tuesday" ;
week[2] = "Wednesday" ;
week[3] = "Thursday" ;
week[4] = "Friday" ;
week[5] = "Saturday" ;
week[6] = "Sunday" ;

var number = [1,2,3,4,5,6,7]

week.push("January");
for(var i in week){
    console.log("The number " + i +" in string array is " + week[i])
} 

/**Add a new element to the array */

week.pop();
for(var i in week){
    console.log("The number " + i +" in string array is " + week[i])
} 

/**Delete the last element in the array */

week.sort();
for(var i in week){
    console.log("The number " + i +" in string array is " + week[i])
} 
/**Randomly sort the data in the array */


var newnumber = number.slice(1,4)
for(var i in week){
    console.log(newnumber[i])
} 
/**This method can extract a part of a string 
 * and return the extracted part with a new array
 * the value from () to ()*/

function checkNumber(number){

    return number>=5;
}

console.log(number.some(checkNumber))

/**The some () method is used to detect whether the elements 
 * in the array meet the specified conditions 
 * (provided by the function). */

/** JavaScript Date API */
console.log("/** JavaScript Date API */")
var time = new Date();

var date = time.getDate()
console.log(date)
/**Get the date value from the time */

var timmy = time.getTime()
console.log(timmy)
/**Returns the number of milliseconds since January 1, 1970 */

var year = time.getFullYear()
console.log(year)
/**The getfullyear() method returns a 4-digit number representing the year. */

var gap = time.getTimezoneOffset()
console.log(gap)

/**Returns the time difference between Greenwich mean time and local time, in minutes */


time.setHours(10)
console.log(time)

/**Method is used to set the hour field of the specified time. */

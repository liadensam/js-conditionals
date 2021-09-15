//Uncomment these one by another ;)

//------------------------------------

//We use the CONDITIONALS in situations where we want the program to decide whether something is true or not. Based on this, the program can run in different ways. We use the if-else block to write the conditions. If there can be more situations to which we want to respond, a potentially unlimited number of else if blocks can be inserted between the if-block and the else-block.



//EXAMPLE1:
/*
let age = 18;

if(age >= 18){
  console.log("you are adult");
}
else {
  console.log("you are underaged");
}
*/






//EXAMPLE2: (this is a while loop, it knocks three times and than when the condition is met it says penny.)
/*
let count = 0;

while(count < 3) {

console.log("Knock");
count = count + 1;

}

console.log("Penny!");
*/




//EXAMPLE3: (pick a number and it will tell you where it stays)
/*
 let numberOfUser = Number(prompt("Number of the user"));

 if(numberOfUser > 100){

 console.log("Number is bigger than 100.");

 } else if (numberOfUser < 0) {

 console.log("Number is negative.");

 } else {

 console.log("Number is between 0 - 100.");

 }

 */




//EXAMPLE: (until you write the correct password - pswrd, it will says incorrect)
/*
 let pswrd = "magic";
 let logUser = prompt("write a password");

 if(pswrd == logUser){

 console.log("login was successful");

 } else {

 console.log("incorrect password");

 }

 */




//EXAMPLE6: (write your grades from three subjects with number 1-5 and it will count your average and than tells you where do you stand)

/*
 let num1 = Number(prompt("write your frist grade"));
 let num2 = Number(prompt("write your second grade"));
 let num3 = Number(prompt("write your third grade"));
 let average = Math.round((num1 + num2 + num3) / 3);

 if (average === 1) {
   console.log("excellent");
 }
 else if (average === 2) {
   console.log("commendable");
 }
 else if (average === 3) {
   console.log("good");
 }
 else if (average=== 4) {
   console.log("satisfactory");
 }
 else {
   console.log("insufficient");
 }
*/



//EXAMPLE 7: (this is just and example from the class just to keep it in my notes even though it is super weird :D )
/*
const isOldeEnoughToEnter =  44<48
const hasEightFingers = 8===8
if(isOldeEnoughToEnter&&hasEightFingers){ //curly bracket
    console.log("He gets a present");
}else if(isOldeEnoughToEnter&&!hasEightFingers){
    console.log("he can enter but does not get a present");
}else{
    console.log("send himm away");
}
*/








//------------------------------------

//The TERNARY OPERATOR is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.


// EXAMPLE: check the age to determine the eligibility to vote
//first without ternary operator
/*
let age = 16;
let result;

if (age >= 18) {
      result = "You are eligible to vote.";
} else {
      result = "You are not eligible to vote yet.";
}

console.log(result);
*/


// with ternary operator 
/*
let age = 15;
let result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);
*/



//------------------------------------
//SWITCH
//EXAMPLE1:
/*Using switch, we will send a message to the console each day of the week. The program will run in order from top to bottom looking for a match, and once one is found, the break command will halt the switch block from continuing to evaluate statements.

Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
*/

/*
const day = new Date().getDay();

switch (day) {
    case 0:
        console.log("It's Sunday, brunch time!");
        break;
    case 1:
        console.log("Monday, good start of the week!");
        break;
    case 2:
        console.log("It's Tuesday.");
        break;
    case 3:
        console.log("We are in the middle of the week.");
        break;
    case 4:
        console.log("Little friday.");
        break;
    case 5:
        console.log("Yay Friday!");
        break;
    case 6:
        console.log("Saturday, time for some hike!");
        break;
    default:
        console.log("Apocalyps...");
}
*/



//EXAMPLE2:
// Set the student's grade
/*
const grade = 62;

switch (true) {
    // If score is 90 or greater
    case grade >= 90:
        console.log("A");
        break;
    // If score is 80 or greater
    case grade >= 80:
        console.log("B");
        break;
    // If score is 70 or greater
    case grade >= 70:
        console.log("C");
        break;
    // If score is 60 or greater
    case grade >= 60:
        console.log("D");
        break;
    // Anything 59 or below is failing
    default:
        console.log("F");
}
*/





//------------------------------------

//EXERCISE:

/*
In the same file, making sure each person is represented by an object in an array:

Answer the following questions using if statements and console.log()
*/


/*
name,Date of birth,Children,Country,Knows how to program

Filmer O'Scanlan,3/4/1994,1,Indonesia,true
Mella Lippo,3/20/1996,3,France,false
Haskel Wonfor,5/5/1990,4,Philippines,false
Fran Tallyn,7/1/2001,1,Brazil,false
Davis Merryweather,5/31/2000,5,United States,false
*/

/*please, keep this uncommented all the time while you see and uncomment the results of the answers;) and also go one after another as const can be declared at once :) */


/*
const arrayOfPeople = [
    {
        name:"Filmer O'Scanlan",
        dateOfBirth:1990,
        children: 1,
        nationality: "Indonesian",
        programmer: true
    },
    {
        name:"Mella Lippo",
        dateOfBirth:1982,
        children: 3,
        nationality: "French",
        programmer: false
    },
    {
        name:"Haskel Wonfor",
        dateOfBirth:1978,
        children: 3,
        nationality: "Philippinese",
        programmer: false
    },
        {
        name:"Fran Tallyn",
        dateOfBirth:1988,
        children: 1,
        nationality: "Brazilian",
        programmer: false
    },
        {
        name:"Davis Merryweather",
        dateOfBirth:1970,
        children: 5,
        nationality: "American",
        programmer: false
    }

]

*/





//---------------------------------------------------
//it reads person on the position two and how many children has
/*
console.log(arrayOfPeople[1].children)
*/






//---------------------------------------------------
/*Is the first person older than the last person? this condition reveals the answer, I declared const for the age and then in the conditional I choose the las and first person, especially the last person through the length and -1 as it makes sure it is the las item in the arrayOfPeople.*/

/*
const age = 2021 - arrayOfPeople.dateOfBirth
if (arrayOfPeople[0].age > arrayOfPeople[arrayOfPeople.length-1].age) {
  console.log('the first person is older than the last person')
} else {
  console.log('the last person is older than the first person')
}
*/




//also other possibility of the console.log output with the names
/*
const age = 2021 - arrayOfPeople.dateOfBirth
if (arrayOfPeople[0].age > arrayOfPeople[arrayOfPeople.length-1].age) {
  console.log(arrayOfPeople[0].name + ' is older than' + arrayOfPeople[arrayOfPeople.length-1].name)
} else {
  console.log(arrayOfPeople[arrayOfPeople.length-1].name + ' is older than ' + arrayOfPeople[0].name)
}
*/





//---------------------------------------------------
/*Does the 2nd person have the same amount of kids as the 3rd? You can try to change the amount of the kids and see that it works. I added their names to the answers.*/

/*
if (arrayOfPeople[1].children === arrayOfPeople[2].children) {
  console.log(arrayOfPeople[1].name + ' has the same amount of kids as ' + arrayOfPeople[2].name)
  } else {
    console.log('They have different amount of kids.')
  }
*/







//---------------------------------------------------
/*Create a statement that checks the 2nd person in the array for their nationality. If the person’s country is Iceland, output “Hæ”, if he/she is from Spain output “Hola”, if he/she is from Korea output “여보세요”). If the country is none of the above, output “Hello”. 

Javascript array some() is an inbuilt method that tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
This is the most exact answer because, i.e., “check if something exists”, implying a bool result.*/


/*
if (arrayOfPeople.some(e => e.nationality === 'Iceland')) {
 console.log('Hæ')
  } else if 
    (arrayOfPeople.some(e => e.nationality === 'Spanish')) {
    console.log('Hola')
  } else if
    (arrayOfPeople.some(e => e.nationality === 'Korean')) {
    console.log('여보세요')
  } else {
    console.log('Hello')
  }
 */ 




//here you can test that it works if I instead of Spanish put French


/*
if (arrayOfPeople.some(e => e.nationality === 'Iceland')) {
 console.log('Hæ')
  } else if 
    (arrayOfPeople.some(e => e.nationality === 'French')) {
    console.log('Salut')
  } else if
    (arrayOfPeople.some(e => e.nationality === 'Korean')) {
    console.log('여보세요')
  } else {
    console.log('Hello')
  }
  
*/







//---------------------------------------------------
/*
Create a statement that checks if the 1st person and the 4th person in the array both know how to program. If yes, output “Yay!”, if not output “LMGTFY”.
*/

/*
const personFirst = arrayOfPeople[0].programmer
const personLast = arrayOfPeople[arrayOfPeople.length-1].programmer

if ( personFirst && personLast == true) {
  console.log('Yay!');
} else {
  console.log('LMGTFY')
}
*/




//---------------------------------------------------
/*
Use a ternary operator to output if the 2nd person’s name is longer than 5 characters.
*/


/*
const person = arrayOfPeople[1].name;

if (person.length > 5) {
  console.log(arrayOfPeople[1].name + ' has longer name more than 5 characters.')
}
*/



//ternary operator output
/*
let person = arrayOfPeople[1].name;
let result =
    (person.length > 5) ? arrayOfPeople[1].name + ' has longer name more than 5 characters' : arrayOfPeople[1].name + ' has too short name';
console.log(result);
*/
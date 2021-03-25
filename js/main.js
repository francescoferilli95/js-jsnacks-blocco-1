/**
 * 
 *  SNACK 2
 *  1. ASK TO INSERT A NUMBER
 *  2. IF THE NUMBER IS EVEN THEN PRINT IT
 *  3. IF THE NUMBER IS ODD THEN PRINT THE FOLLOWING ONE
 * 
/**/


// VARIABLES

var userNumber = parseInt( prompt('Please enter a Number here') );

// EVENTS

if(userNumber % 2 === 0) {
    console.log(userNumber);
} else {
    console.log(userNumber + 1);
}














































/**
 * 
 *  SNACK 1
 *  1. ASK 5 TIMES TO INSERT A NUMBER
 *  2. PRINT THE SUM OF ALL THE NUMBERS
 *  3. DO THIS TASK WITH "FOR" && "WHILE"
 * 
/**/

// FOR

// VARIABLES

/*
var userNumber;
var requestedNumbers = 5;
var sum = 0;

// EVENTS

for( var i = 1; i <= requestedNumbers; i++) {
    userNumber = parseInt( prompt('Please enter a Number ' + i + ' of ' + requestedNumbers) );
    console.log(userNumber);
    sum += userNumber;
}

// OUTPUT

console.log(sum);
*/

// WHILE

/*
// VARIABLES

var userNumber;
var requestedNumbers = 5;
var counter = 1;
var sum = 0;

// EVENTS

while( counter <= requestedNumbers) {
    userNumber = parseInt( prompt('Please enter a Number ' + counter + ' of ' + requestedNumbers) );
    console.log(userNumber);
    sum += userNumber;

    counter++;
}

console.log(sum);
*/
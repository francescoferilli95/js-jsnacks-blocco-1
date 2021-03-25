/**
 * 
 *  SNACK 5
 *  1. GENERATE TWO ARRAY FILLED WITH NUMBERS OF DIFFERENT LENGTH
 *  2. ADD ELEMENTS TO THE SHORTEST ONE UNTIL HE BECOMES EQUAL TO THE OTHER ONE
 * 
/**/


// VARIABLES

var container = [15, 59, 84, 20, 90];
console.log(container);
var numbers = [75, 99];
console.log(numbers);

//EVENTS

if( container.length > numbers.length){

    while(container.length > numbers.length) {
        numbers.push(Math.floor(Math.random() * 10));
    }

    console.log(numbers);
}  else if(container.length < numbers.length) {

    while(container.length < numbers.length) {
        container.push(Math.floor(Math.random() * 10));

        console.log(container);
}
}





/**
 * 
 *  SNACK 4
 *  1. GENERATE AN ARRAY OF INTEGERS
 *  2. SUM ALL OF THE ODD INDEX ELEMENTS AND PRINT IT
 * 
/**/

/*
// VARIABLES

var numbers = [5,20,85,90,7,100,77,9,42,19];
var sum = 0;

// OUTPUT NUMBERS
console.log(numbers);

// EVENTS

for( var i = 0; i < numbers.length; i++) {
    var oddIndexNumbers = numbers[++i];
    console.log(oddIndexNumbers);
    sum += oddIndexNumbers;
}

// OUTPUT SUM

console.log('Total: ' , sum);
*/





/**
 * 
 * SNACK 3
 * 
 *  1. GENERATE AN ARRAY OF NAMES
 *  2. GENERATE AN ARRAY OF SURNAMES
 *  3. GENERATE A RANDOM ARRAY OF FULL NAMES
 * 
/**/

/*
// VARIABLES

var names = ['filippo' , 'simona' , 'carlo'];
var surnames = ['bianchi' , 'rossi' , 'lontani'];
var requestedNames = 3;
var fullNames = [];

// EVENTS

for( var i = 0; i < requestedNames; i++) {
    var namesList = names[Math.floor(Math.random() * names.length)];
    var surnamesList = surnames[Math.floor(Math.random() * surnames.length)];
    var randomFullName = namesList + ' ' + surnamesList;
    fullNames.push(randomFullName);
}

// OUTPUTS

console.log(names);
console.log(surnames);
console.log(fullNames);
*/





/**
 * 
 *  SNACK 2
 *  1. ASK TO INSERT A NUMBER
 *  2. IF THE NUMBER IS EVEN THEN PRINT IT
 *  3. IF THE NUMBER IS ODD THEN PRINT THE FOLLOWING ONE
 * 
/**/

/*
// VARIABLES

var userNumber = parseInt( prompt('Please enter a Number here') );

// EVENTS

if(userNumber % 2 === 0) {
    console.log(userNumber);
} else {
    console.log(userNumber + 1);
}
*/





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
// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// declare function buildABear, name parameters
function buildABear(name, age, fur, clothes, specialPower) {
  //define variable greeting as string with interpolation of name argument
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //declare and define variable demographics as array
  var demographics = [name, age];
  // declaer and define variable powerSaying as string concatenated with parameter specialPower
  var powerSaying = "Did you know that I can " + specialPower + "?";
  // declare object builtBear
  var builtBear = {
    // add key value pair, key basicInfo assigned dynamic value demographics
    basicInfo: demographics,
    // add key value pair, key clothes assigned dynamic value clothes
    clothes: clothes,
    // add key value pair, key exterior assigned dynamic value fur
    exterior: fur,
    // add key value pair, key cost assigned static number value 49.99
    cost: 49.99,
    // add key value pair, key sayings assigned array with dynamic elements greeting and powerSaying and static string
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // add key value pair, key is isCuddly assigned static boolean value true
    isCuddly: true,
  };
 // return to console object builtBear
  return builtBear
}
// create object instance of BuildABear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// create object instance of BuildABear
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// declare function fizzBuzz with parameters num1,num2, range
function fizzBuzz(num1, num2, range) {
  //add for loop where iteration starts at 0, if i is less than or equal to value
  //of argument 'range', add 1 to i, run loop til false
  for (var i = 0; i <= range; i++) {
    //appply AND logical operator to;if modulo of iteration and argumument num1
    // is stricly equal to number 0, AND modulo of interation and argument num2
    //is strictly equal to zero is boolean true, run code, if false skip to next if statement
    if (i % num1 === 0 && i % num2 === 0) {
      //log to console string fizzBuzz
      console.log('fizzbuzz');
      //if statement, if modulo of iteration and argument num1 is strictly equal to number 0,is true, run code, if false skip
    } else if (i % num1 === 0) {
      // log to console string fizz
      console.log('fizz');
      // if statement, if modulo of iteration and argument num2 is strictly equal to number 0, is true run code, if false, skip
    } else if (i % num2 === 0) {
      //log to console string buzz
      console.log('buzz');
      // if statement, if last statement was false, run following code
    } else {
      //log to console iteration
      console.log(i);
    }
  }
}
// run arguments thru function fizzBuzz
fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);

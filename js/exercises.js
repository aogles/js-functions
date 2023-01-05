(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

function maxOfTwo(a, b){
 if (a > b) { return a; }
 
 else { return b; }
   }

   function max(num1, num2) {

    //console.log: can be used to check the value of variables

 maxOfTwo(2, 4)
 //1. input is two numbers
 //2. output is largest number
 //3. determines the largest number
 //4.defines largest number
 //parameter (a,b)
 // ask for max of two numbers
 //return largest number either a or b
 //5. expected result is 4
 //7. run results: results are 4

  // ---------------------
  // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  // ---------------------
 function maxOfThree(a, b, c){
  if ( a >= b && a >= c) { return a;}
  //logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.

  else if (b >= a && b >= c) {return b;}

  else {return c;}
  
   }

   maxOfThree(3,5,7)

   
   //3. determines the largest number
   //parameter (a,b,c)
   //5. expected result is 7
   //7. run results: results are 7
   // ---------------------
   // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
   // ---------------------
   function isVowel(char) {
    if(char === 'a' || char === 'e'||  char === 'i'||  char === 'o'||  char === 'u'||  
    return true;

    or return 'aeiou' .includes(char);
}

/* String.prototype.isVowel = function () {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(this.toLowerCase()) != -1; */

   
   // determines the vowels present
   //parameter (char)
   //return vowels as true
   // expected result vowels as true and constanants as false
   // results: SyntaxError: Unexpected identifier 'char'

  
/* var YOURTEXTHERE = 'b';

/check if it's vowel
if (/[a|e|i|o|u]/i.test(YOURTEXTHERE)) {
  console.log('vowel!');
}
else
  console.log('not vowel'); */


  // ---------------------
  // Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
  // ---------------------
 
  function rovarspraket(text) {
    for (let i=0; i < text.length; i++)
    if("bcdfghijklmnopqrstuvwxyz" .includes)
    text[i]= text[i] + o + text[i]
    return text.join("");
  }


   //doubles all present consonants
   //parameter (str)
   // expected results: doubled consonnts
   // results:  SyntaxError: Unexpected identifier 'translate'


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  function sum(arr) {
    (let sum = 0);
    for(let i=0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

return sum;

function multiply(arr) {
    (let product =1 );
    for(let i=0; i < arr.length; i++) {
        product = product * arr[i];
    }

return multiply;

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#try_it

 
   //retuns sum then multiplies
   //adds numbers together before multiplying
   //parameter (a,b,c)
   //expected results: 6 
  


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  function reverseString(str) {
    return str.split("").reverse().join("");
    }  
      reverseString("jag testar");

    //https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
    /
    //this function reverses the letters of a string
    //parameter: (str)
    // expected results:"ratset gaj"
    // results: "ratset gaj"

  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > length) {
        length = arr[i].length
    }
}
return length;
}

// Returns the longest word in a string
//identifies longest word
// parameter(str)
  //expected results: homework
  //results: 


  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
  function filterLongWords(arr,i) {
    return arr.filter(function(word) {
        word.length > i;
    });
}

//inout: any string
//output: any words greater than i
// Returns any words greater than i
//identifies any words greater than i
// parameter(str)
  //expected results: any words greater than i
  //results: 22

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq(str) {
    const freList = {};
    str.split("").forEach(function (char) {
        freqList[char] = freqList[char] + 1 || 1;
    })
return freqList;
}

    // compute frequencies of each value
   /* for(var i = 0; i < string.length;) {
        value = string[i];
        if(value in array_lengths) {
            array_lengths[value]; //The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment
        } else {
            array_lengths[value] = 1;
        }
    }
    return array_lengths; */
}
counter = charFreq("abbabcbdbabdbdbabababcbcbab"); 
//input: any string
//output:list of number of each character
//retuns number of ech character
//parameter: (var i = 0; i < string.length;)( string )
// expectd result: number of each character
result: NA

  ////////////////////////////////////////////////////////////////////////
  /////////////////////////DO NOT CHANGE CODE BELOW///////////////////////
  ////////////////////////////////////////////////////////////////////////

  console.assert(max(2, 4) === 4, 'function max error');

  console.assert(maxOfThree(1, 2, 3) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(2, 3, 1) === 3, 'ERROR funtion maxOfThree');

  console.assert(maxOfThree(3, 2, 1) === 3, 'ERROR maxOfThree');

  console.assert(isVowel('a') === true, 'ERROR function isVowel');

  console.assert(isVowel('b') == false, 'ERROR function isVowel');

  console.assert(rovarspraket("this is fun") === "tothohisos isos fofunon", 'ERROR function rovarspraket');

  console.assert(sum([1, 2, 3, 4]) === 10, 'ERROR function sum');

  console.assert(multiply([1, 2, 3, 4]) === 24, 'ERROR function multiply');

  console.assert(reverse('jag testar') === 'ratset gaj', 'ERROR function reverse');

  console.assert(findLongestWord(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is']) === 6, 'ERROR function findLongestWord');

  console.assert(filterLongWords(['hello', 'world', 'does','anyone', 'really', 'know', 'what', 'time', 'it', 'is'], 4).length === 4, 'ERROR function filterLongWords');

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').a === 7);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').b === 14);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').c === 3);

  console.assert(charFreq('abbabcbdbabdbdbabababcbcbab').d === 3);
})();

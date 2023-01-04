(function() {
  'use strict';

  // ---------------------
  // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
  // ---------------------

function maxOfTwo(a, b){
 if (a > b) { return a; }
 
 else { return b; }
   }

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

  else if (b >= a && b >= c) {return b;}

  else {return c;}
  
   }

   maxOfThree(3,5,7)

   //1. input is three numbers(a,b,c)
   //2. output is largest number (7)
   //3. determines the largest number
   //4.defines largest number
   //parameter (a,b,c)
   // ask for max of three numbers
   //return largest number either a or b or c
   //5. expected result is 7
   //7. run results: results are 7
   // ---------------------
   // Define a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
   // ---------------------
  function isVowel(char){
    if char=='a' or char == 'e' or char == 'i' or char == 'o' or char == 'u'
  {return true;} 
   else  {return false;} 

/* String.prototype.isVowel = function () {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(this.toLowerCase()) != -1; */
};
  }

  isVowel(amber oglesby)
   //1. input: NA
   //2. output are vowels-true
   //3. determines the vowels present
   //4.returns vowels as true
   //parameter (char)
   // takes characters and retunr true if vowels
   //return vowels as true
   //5. expected result vowels as true and constanants as false
   //7. results: SyntaxError: Unexpected identifier 'char'

  
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
 
 /* Answer found from countless google searches: 
 def translate(str):
    consonants='bcdfghjklmnpqrstvwxyz'
    print("".join(l+'o'+l if l in consonants else l for l in str))

string=input("Enter Any String: ")

translate(string) */

//1. input: any string
   //2. output: double consonants
   //3. doubles consonants
   //4.doubles all present consonants
   //parameter (str)
   // doubles the present consonants
   //
   //5. expected results: doubled consonnts
   //7. results:  SyntaxError: Unexpected identifier 'translate'


  // ---------------------
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
  // ---------------------

  function sum(num1, num2):
  total = num1 + num2 
  return total

  function Multiply(num1, num2):
  total = num1 * num2
  return total

 print(sum(2, 3))

 /* function sum(numbers) {
	var total = 0;
	for (var i = 0; i < numbers.length; i++) {
		total += numbers[i];
	}
	return total;
}

console.log(sum([1,2,3,4]));


function multiply(numbers) {
	var total = 1;
	for (var i = 0; i < numbers.length; i++) {
		total = (total * numbers[i]);
	}
	return total;
console.log(multiply([1,2,3,4]));
*/


  // ---------------------
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  // ---------------------
  function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("jag testar");


  // ---------------------
  // Define a function findLongestWord() that takes an array of words and returns the length of the longest one.
  // ---------------------
 function findLongestWord(str) {
   return str.length;

 }
findLongestWord("This homework was lowkey highkey hard");

  // ---------------------
  // Define a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  // ---------------------
 function filterLongWords(str){
  return str.length;
 }
filterLongWords("I hope this is working");

  // ---------------------
  // Define a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
  // ---------------------
  function charFreq( string ) {
    var array_lengths = {}; // object

    // compute frequencies of each value
    for(var i = 0; i < string.length; i++) {
        value = string[i];
        if(value in array_lengths) {
            array_lengths[value]++;
        } else {
            array_lengths[value] = 1;
        }
    }
    return array_lengths;
}
counter = charFreq("abbabcbdbabdbdbabababcbcbab");

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

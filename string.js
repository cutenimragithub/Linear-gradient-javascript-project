//string
// strings created with single or double quotes work with same.
//string properties
// length property:that returns the length of the string (number of characters).

const string = "hello  world!@"
console.log(string.length);
// output 14 (including spaces and all)
/*Escape Character: the backslah is used as an escape character .it allows you to include special character in a string */

let text = "My name is \"nimra\" \n i am a \'frontend\' developer";
console .log(text);
//string search methods:
/*IndexOf():this method returns the index position of the first occurance of a string in a string,or it returns
 -1 if the string is not found 
 the indexof() method is case sensitive */

let string1 = "Nimra Khan";
console.log(string1.indexOf("Khan"));

//example aik string ko array m convert krna ha aur us k index number nikalny hain?
let convertString ="Nimra";
let newString = Array.from(convertString);
console.log(newString);
let strMap = newString.map((curEle, index)=>{
return `${curEle} , ${index}`
});
console.log (strMap);

//Last indexOf():
let textIndex = "Hello javascript , welcome to our world best javascript course";
let stringIndex = textIndex.lastIndexOf("javascript",40);
console.log(stringIndex);

//Search Method:the search method searches a string for a string (or a regular expression ) and return the position of the match.
let searchText = "Hello javascript welcome to our world best javascript course ";
let searchResult = searchText.search(/javaScript/i);
console.log(searchResult);
//search k method k sath ap regular expression ko kr skty hain aur yeah case sensitive ko b khtam kr deta ha.
// the search method cannot take a second start position arguments.

/*match() method: Returns an array of the matched value or null if no match is found
here the js convert the normal text into regular expression text.match(/javascript/) without the g flag*/

let stringMatch = " Hello javascript welcome to our world best  javascript course ";
let resultMatch = stringMatch.match(/javaScript/ig);
console.log(resultMatch);

/*matchAll():Return an iterator of all matches , providing detail information about each match . Return
 an empty iterator if no match is found */

 let stringMatchall = "Hello javascript welcome to our world best  javascript course";
 let resultMatchall = string.matchAll("Javascript");
 console.log(resultMatchall);
 /* todo here the js converts the normal text into regular expression text.match(/javascript/g); also add the g flags at th end*/

 /* includes(): method returns true if the string contains the specified value , and also otherwise */
 let stringIncludes = "Hello javascript welcome to our world best  javascript course";
 let includesResult = stringIncludes.includes("javac");
 console.log(includesResult);  //output false
 //Note: includes() is a case sensitive language . includes is an Es6 features.


 //StartsWith(): method return true if a string begins with a specified value.otherwise it return false.

 let stringStarts = "Hello javascript welcome to our world best  javascript course";
 let resultStarts = stringStarts.startsWith("Hello");
 console.log(resultStarts); //output true

 //endWith():methods return true if a string ends with a specified value . otherwise it return false.
 let stringEnds = "Hello javascript welcome to our world best  javascript course";
 let resultEnds = stringStarts.endsWith("course");
 console.log(resultStarts); //output true

                                                  /*Extracting String parts */
//slice(): extracts  a part of a string and returns the extracted part in a new string.
//syntax:   slice(start,end) end waly index number ko include ni krta ha..
let stringSlice ="Hello javascript welcome to our world best  javascript course";
let resultSlice = stringSlice.slice(5,14);
console.log(resultSlice); // javascri

//substring():  is similar to slice().the differnece is that start and ebd value less than 0 are treated as 0 in substring()
// dono m similarity yeah h k end index ko include kr deta hai.

let stringSubstring ="Hello javascript welcome to our world best  javascript course";
let resultSubstring = stringSlice.substring(-8); 
console.log( resultSubstring); // Hello javascript welcome to our world best  javascript course 
// - m koi value dy gy tau substring m complete wo  output aa jay ge.

                       /* Extracting string characters */
//charAt():methods return the character at a specified at a specified index (position) in a string .
 let stringChar = "Hello javascript welcome to our world best  javascript course";
 let resultChar = stringChar.charAt(-6);
 console.log(resultChar); // is ke output empty string aye ge kyun k - m index  ha.

 // charcodeat():method returns the code of the character at a specified index in a string . the method returns a utf-16 code an
 // integer (an integar between 0 and 65535)
 let stringCharcode = "Hello Javascript welcome to our world best  javascript course";
 let resultCharcode = stringChar.charCodeAt(6);
 console.log(resultCharcode);

 //example: write a javascript function that prints the letter "a" through "z" in the console. you should use a loop to iterate 
 // through the letters and print each one on a new line?
 console.log("a".charCodeAt(0));
 console.log("z".charCodeAt(0));
 for(char=97 ; char<= 122; char++)
    {
    console.log(String.fromCharCode(char));
 }

 //example:write a function to check if all the vowels present in a string or note?
 const checkAllVowelPresentOrNot =(str)=>{
    const vowels = "aeiou";
    for(let char of vowels){
        if(!str.includes(char)){
            return false;
        }
    }
return true;
 }
 console.log (checkAllVowelPresentOrNot("My name is nimra how are you"));

 //example write a function to count the number of vowels in a string ?
 const countvowels =(strr)=>{
    const vowelsCount = "aeiou";
    let count = 0;
    for (let charr  of strr){
        console.log(charr);
    if(vowels.includes(charr)){
        count++;
    }
    }
return count;
 }
 console.log (checkAllVowelPresentOrNot("you are vowels a e i o u"));






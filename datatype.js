// datatype defines the type of value that a variable can hold.
// Number 
var my_favNumber = 7;
console.log(my_favNumber);

//string 
var myName = "Nimra";
console.log(myName);

//Boolean
 var isRaining = true;
 var areAwsome = false;
 console.log(isRaining);

 //undefined
  var nimra;
  console.log(nimra);

  // null
   var badMemories = null;
   console.log(badMemories);

   //bigint

   var bigNumber = 1234567997765446576789987n;
   console.log(bigNumber);

   // typeof

   var myName = "nimra";
   console.log(typeof myName);

   // nulltype of datatype
   var badMemories = null;
   console.log(badMemories);
   console.log( typeof badMemories);

   //convert a string to number
   var myFavNumber = "10";
   console.log (typeof +myFavNumber);
   console.log(typeof Number(myFavNumber));

   //convert a number into a string
    var str = 10;
    console.log (typeof String(str));
    console.log(typeof (str + ""));

    //truthy and falsy values
    var myName = "Nimra";
    if(myName)
        {
            console.log("this is a truthy value");

        }
        else{
            console.log("this is a falsy values");
        }

//ParseInt
var myString = "34";
var  convertNumber= parseInt(myString);
console.log (  convertNumber);
console.log (typeof convertNumber );

var deciNumber= "42.5"
 var conNumber = parseInt(deciNumber);
 console.log(conNumber);

//ParseFloat 
 const floatNumber = "34.56";
 const convertFlat = parseFloat(floatNumber);
 console.log(convertFlat);

 //isnan 
 console.log(isNaN("Nimra"));
 console.log(isNaN("19"));

// NaN == NaN Why is it false?
if(NaN == NaN){
    console.log("Both are equal");
}
else{
    console.log ("Both are not equal because values and origins are differnet");
}

//Concatenation

const conCat = "Nimra " + "KHAN";
console.log(conCat);

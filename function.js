// Write a function to find the sum of two numbers?
function sum(){
    var a=80, b=35;
    console.log(a+b);
}
sum();

//example 2
function nimra(name){
    console.log("hi " + name + " how are you i hope you are doing well" );
}
 nimra ("nimii");
 nimra ("nimoo");
 nimra ("noor");

 //example 2 write a function to find the sum of two numbers with parameters?
  
 function sum(x,y){
 console.log(   x + y);
 }
 sum(37,78);
 sum(90,90);
 
 //Template string
  let firstName = "Nimra";
  let lastName  = "khan";

  let fullName = `${firstName} ${lastName}`;
  console.log(fullName);
  
  //string interpolation 
  let myAgee= 22;
  let message = `i am ${myAgee} years old`;
  console.log(message);

  let multiLineString = ` hi how are you 
  why you are so sad `;
 console.log(multiLineString);


 //Default value:
function addition (a=12 , b=30){
    return a + b ;
}
console.log(addition());

// Calculator function:
 function calculator (num1 , num2 , operator){
    switch(operator)
    {
        case "+":
        return (num1 + num2);

        case "-":
        return (num1-num2);

        case "*":
            return(num1*num2);
            
          case "/":
            if(num2 === 0){
            return "0 is not allowed";

            }
            else{
                return(num1 / num2);
            }
          

    }
 }
 console.log(calculator(3, 8, '+'));
 console.log(calculator(9,9, '-'));
 console.log(calculator(9,9, '*'));
 console.log(calculator(10,0, '/'));



 // Write a function to reverse a given string without using built in reverse method?
 const isReverse = (str) =>{
   for(let char = 0 ; char <= str.length; char++);
   console.log(str);
 }

 isReverse("Nimra khan")


 const issReverse = (strr) =>{
    for(let charr = strr.length ; charr >=0 ;  charr-- );
    console.log(strr);
  }
 
  issReverse("Nimra khan")





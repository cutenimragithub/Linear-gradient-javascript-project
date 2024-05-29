var temperature = 25;
if(temperature>30){
    console.log("lets go on beach");
}
else{
    console.log("Rest at home");
}

//Write a program to check if a number is even or odd?
 
var num = 7;
 if(num% 2 ==0)
 {
    console.log("Number is Even");
 }
 else{
    console.log("number is odd");
 }

 // Write a  program to check if a number is positive,  negative or zero?

 var number = -23;
 if(number== 0){
    console.log("Number is zero");
 }
 else if(number>0){
    console.log("number is positive ");
 }
 else{
    console.log("number is negative");
 }

 //Switch Statement

 var day= "Monday";
  switch(day){
    case "Monday":
    console.log("Today is Office day");
    break;

    case "tuesday":
    console.log("Today is Tuesday");
    break;

    default:
    console.log("No condition match");

  }

//while loop
 var i = 1;

 while(i<=10){
    console.log(i);
    i++;
 }

 //Do while loop:
 var dowhile= 1;

 do{
    console.log(dowhile);
    dowhile++;
 }while(dowhile<10)
// Calculate the sum of number from 1 to 10;
var sum =0;
for(var num =1; num<=10; num++){
    sum= sum+num;
}
console.log(sum);
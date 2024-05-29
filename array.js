//filter method
 const numbers =[1,2,3,4,5,6,7,8,9];
  const results = numbers.filter((curElem)=>{
return curElem >4;
  });
  console.log(results);

  //lets say user want to delete value 6 
   let value= 6;
   const numberValues = [1, 2, 3 , 4 ,5 ,6, 7 ,8 , 9];
    let updateCart = numberValues.filter ((curElem)=>{
        return curElem !== value;

    });
    console.log(updateCart);

    // example 2 filtering product by price
    const products = [

        {name:"laptop" , price: 1200},
        {name:"phone" , price: 800},
        {name: "tablet" , price: 300},
        {name: "smartwatch", price:800},
    ];

    const filterProducts= products.filter((curElem)=>{
         return curElem.price<=500;
    });
    console.log(filterProducts);

    //using the map to sequare each number and create a new array ?
    const numm= [1,2,3,4,5];
     let result1 = numm.map((curElem)=>{
        return curElem*curElem;
     });
      console.log(result1);

      //using the map method, write a function that takes an array of strings and return a new array
      // where each string is captalized.

      const stringCaptilize =["apple" , "banana" , "orange" , "mango"];

      const words= stringCaptilize.map((curElem)=>{
        return curElem.toUpperCase();

      });
      console.log(words);

      //using the map method , write a function that takes an array of numbers and return a new array where each number is 
      // squared , but only if it's an even number?
      const evenNumbers = [1,2,3,4,5];
      let isEvenNumber =  evenNumbers.map((curElem)=>{
        if (curElem % 2 ==0 )
            {
                return curElem * curElem;
            }

      }).filter((curElem)=> curElem!==undefined);
      console.log(isEvenNumber);

      //using the map method, write a function that takes an array of names and return a new array where each name is prefixed with "Mr."
      const names = ["Daniyal" , "Abdullah" , "Ayan"];
      let updateNames = names.map((curElem)=>{
        return `Mr ${curElem}`});
        console.log(updateNames);


/*Reduce Method :jab b ap k pass multiple quantity ho yah multiple products houn agar data ap ko single unit m chaiye mtlub single value 
m chaiye tab ap reduce method ka use kro gy 
syantax:  */
/* write a javascript function that calculates the total price of items in a shopping cart . The function should take an array of item 
prices as input and return the total price . */
/*array.reduce(function callback (accumulator, currentValue, index, array ){

},initialValue);*/

const productPrice = [100, 200,300,400,500];
const totalPrice = productPrice.reduce((accum, curElem)=>{
     return accum+curElem;
},0);
console.log (totalPrice)

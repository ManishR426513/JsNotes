// variable let var const 
///  we can redevalre var and its value 
var score=34;
var score =25;      
console.log(score)


// we cannot use let more than one time but its value can be changed 
let points=23;
 points =27;
console.log(points)

//const  
// we cannot reintialize the value of const 

const value=10;
//value=15;
console.log(value)


//Data types 
//  7   data type



//Strings 






//Logical Opertors


  // And && ,or || ,not !

  // both conditions should be true 
  // in or operotr one conditions should be true 

let password="qwet@"

 if(password.length>5&& password.includes('@')){
    console.log("password is strong")
 }else{
    console.log("chnage your password length")
 }

 // Not operator !  true to false and false to true 


// Varibales and Block Scope
  // confusion 

  let strong="90"

  if(true){
    strong="30"
    console.log(strong)// Nearest value
  }
  console.log(strong)


  //Ternary Opertor

  let age=19;
  let ages=17;

  let result = age>18 ?"qualify":"Fail"
  let results = ages>18 ?"qualify":"Fail"
  console.log(result)
  console.log(results)


  let height=6
  let weight =54

  let qualify=height>5?weight>55 ?"qualify": "weightissue":"height issue"
  console.log(qualify)


  //Functions 
  

  

//Arrays

let color=["red","blue","green"]



// varuable and block scope


//Loops



//Functions 

/*
function nameofFunction(){
    console.log("Fdfd")
}

nameofFunction()
*/
//function expersion 

//function with retur value
let agecal=function(birtyear){
let age=2023-birtyear

return age;
//console.log(`your current age is ${age}`)
}

let agecalculation=agecal(2002)
console.log(`your current age is ${agecalculation}`)


//Arrow function 



//High order function 

 







//Objects

 let car={
    color:"black",
    model:"2015",
    company:"Honda"
 }

// console.log(car["color"])
//console.log(car.model)

  /*
  let propertyname="color"
  console.log(car[propertyname])
  */

  //Modify 
  /*
  car.model="jeep"
  console.log(car)*/

  //delete the properties of object

  /*
  let obj={
    prop1:"value1",
    prop2:"value2"
  }
    
  delete obj.prop1

  console.log(obj)
  */

  // THIS keyword 
  
  /*
  let person={
    fname:"ajay",
    lname:'singh',
    city:'delhi',
    profession:'developer',
    getFullSummary:function(){
        return `${this.fname} ${this.lname}is a ${this.profession} who lives in ${this.city} `
    }
  }
  console.log(person.getFullSummary())

*/
  
  // for each

    /*color.forEach(function(element){
        console.log(element)
    })*/


    // objects inside array
  
  /*  let blocklist=[{username:"jhon",reason:"abusive"},{username:"namit",reason:"privacy"}]

    console.log(blocklist)

    for(let i=0; i<blocklist.length; i++){
        console.log(`user ${blocklist[i].username}  was block due to ${blocklist[i].reason} reason `)
    }*/

    // call apply and bind

    let mainPlane={
        airline:"fly india",
        latcode:'FI',
        
    }
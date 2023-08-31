

// function getCheese (callback){

//     setTimeout(()=>{
//         const cheese="🧀"
//         console.log("here is cheese",cheese)
//         callback(cheese)
//     },2000)
// }


// function getDough(cheese,callback){

//     setTimeout(()=>{
//         const dough= cheese + "🍩"
//         console.log("here is dough",dough)
//         callback(dough)
//     },2000)
// }



// function getPizza (dough,callback){

//     setTimeout(()=>{
//         const pizza= dough + "🍕"
//         console.log("here is pizza",pizza)
//         callback(pizza)
//     },2000)
// }


// getCheese((cheese)=>{

//     getDough(cheese,(dough)=>{
//          getPizza(dough,(pizza)=>{
//               console.log("got my pizza",pizza)
//          })
//     })
// })



// my name



// function getName(callback){

//        setTimeout(()=>{
//               const name="yogi"
//               console.log("name aa gya",name)
//               callback(name)
//        },2000)
// }


// function getAge(name,callback){

//     setTimeout(()=>{
//            const age=name+"" +"24"
//            console.log("age aa gya",age)
//            callback(age)
//     },2000)
// }


// function getWork(age,callback){

//     setTimeout(()=>{
//            const work=age + "IT"
//            console.log("work aa gya",work)
//            callback(work)
//     },2000)
// }

// getName((name)=>{

//     getAge(name,(age)=>{

//            getWork(age,(work)=>{
//                       console.log(work)
//            })

//     })

// })

/*

  Callback hell, also known as the "Pyramid of Doom," 
  is a situation in JavaScript where multiple nested callbacks are used to handle asynchronous operations. 
  This nesting of callbacks creates deeply indented code structures that are hard to follow and can become error-prone. 
  Callback hell makes it challenging to maintain code, 
  introduces readability issues, and can lead to bugs. 
  It can be addressed by using techniques like Promises, 
  async/await, or modularization to flatten the code structure and improve code quality.

*/




function getName(){

    setTimeout(()=>{
           const name="yogi"
           console.log("name aa gya",name)
           return name
    },2000)
} 

const getName=(callback)=>{
      
     setTimeout(()=>{
        const name="yogi";
        console.log("got name",name)
          callback(name)
     },2000)

}

const getAge=(name,callback)=>{
      
    setTimeout(()=>{
       const age="24"+""+name;
       console.log("got age",age)
         callback(age)
    },2000)
    
}


const hello=(name)=>{

      console.log(name)
}

getName(hello)

// getName((name)=>{
       
//         getAge(name,(age)=>{
//             console.log("age",age)
//         })
//     //    console.log("name",name)
// })
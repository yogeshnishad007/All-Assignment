import { useState } from "react";


const HOC = (Child) => {
    const HocInner =()=>{

        const[count,setCount]=useState(0)
        const handleCount =()=>{
            setCount(count + 1)
        }
         return(
                 <Child count={count} handleCount={handleCount} />
         )
    }
  return HocInner
}

export default HOC;
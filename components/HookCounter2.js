import React, {useState} from 'react'

const HookCounterTwo = ()=>{

const initialCount = 0
const [ count, setCount] = useState(initialCount)

// update previos value

const incrementFive = ()=>{
  for(let i = 0; i < 5; i++){
    setCount(prevCount => prevCount +1)
  }
}
  return(
    <div>Hooks2
    Count: {count}
    <button onClick={()=> setCount(count + 5)}>increment: </button>
    <button onClick={()=> setCount(count - 1)}>decrement: </button>
    <button onClick={()=> setCount(initialCount)}>reset: </button>
    <button onClick={incrementFive}>incrementFive: </button>


    
    
    </div>
  )
}

export default HookCounterTwo
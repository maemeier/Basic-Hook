import React, {useState} from "react"

const HookCounter = ()=>{
  // callhook

  const [count, setCount ] = useState(0)

  return(
    <div>
    This is hook component
    <button onClick={()=>setCount(count + 1)}> count: {count} </button>
    </div>
  )
}

export default HookCounter
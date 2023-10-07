import { useState } from "react"

const Counter = () => {
const [count, setCount] = useState(0);

const increamentHandler =()=> setCount(count + 1);
const decrementHandler =()=> setCount(count - 1);
const resetHandler =()=> setCount(0);


  return (
    <>
      <h2>counter</h2>
      <h3>{count}</h3>
      <button onClick={increamentHandler}>Increament</button>
      <button onClick={decrementHandler}>Decreament</button>
      <button onClick={resetHandler}>Reset</button>
    </>
  )
}

export default Counter



import HOC from './HOC'

 const Counter1 = (props) => {
  return (
    <div>
         <h2>{props.count}</h2>
         <button onClick={props.handleCount}>Click</button>
    </div>
  )
}

export default HOC(Counter1)
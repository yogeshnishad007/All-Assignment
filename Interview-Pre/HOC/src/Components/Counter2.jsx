
import HOC from './HOc'

const Counter2 = ({count,handleCount}) => {
  return (
    <div>
        
        Counter2
         
         <h3>{count}</h3>
         <button onClick={handleCount}>count 2</button>

    </div>
  )
}
export default HOC(Counter2)

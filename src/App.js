import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <VignetteSelector/>
      <div className="bigtext">
        Counter
        <FancyMappedCounter/>
      </div>
    </div>
  );
}
function VignetteSelector() {
  return null
}
function Counter() {
  const [x, setX ] = useState(0)
  return (
    <div>
      <button onClick={() => setX(1 + x)}> 
        increment
      </button>
      {x}
    </div>
  )
}

function FancyCounter() {
  const { count, resetCount, decrement, increment } = useCounter(0)
  return (
    <div>
      <button onClick={resetCount}> 
        resetCount
      </button>
      <button onClick={increment}> 
        increment
      </button>
      <button onClick={decrement}> 
        decrement
      </button>
      <br/>
      <div>
        Count: {count}
      </div>
    </div>
  )
}
function useCounter(initialState) {
  const [count, setCount] = useState(initialState)
  const resetCount = () => setCount(0)
  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count + 1)

  return { 
    count,
    resetCount,
    decrement,
    increment
  }

}

function FancyMappedCounter() {
  const { count, resetCount, decrement, increment } = useCounter(0)
  return (
    <div>
      {
        [resetCount, decrement, increment].map( (f, i) => { // could this be collapsed as a one-line?
          return (
            <button onClick={f}>
              {f.name}
            </button>
          )
        })
      }
      <br/>
      <div>
        Count: {count}
      </div>
    </div>
  )

}

function FancyMappedCounterRefactored() {
  const { count, resetCount, decrement, increment } = useCounter(0)
  return (
    <div>
      {
        [resetCount, decrement, increment].map( f => <button onClick={f}> {f.name} </button> )
      }
      <br/>
      <div>
        Count: {count}
      </div>
    </div>
  )

}

export default App;

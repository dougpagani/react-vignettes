import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <VignetteSelector/>
      <div className="bigtext">
        Counter
        <CounterWithPrevious/>
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

// does this work with props as well as state?
function usePrevious(value) {
  const ref = useRef();
  useEffect( () => {
    ref.current = value
  })
  return ref.current

}

function CounterWithPrevious() {
  const [ count, setCount ] = useState(5);
  const prevCount = usePrevious(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        x
      </button>
      <br/>
      <div>
        Count: {count}
      </div>
      <div>
        Previous: {prevCount}
      </div>
    </div>
  )
}

function usePreviousCount(init) {
  const [ count, setCount ] = useState(init)
  const prevCountRef = useRef()
  useEffect(() => {
    prevCountRef.current = count
    // won't fire till after prevCount has been captured
    // ... and since it's a ref, and not a state, a re-render won't be triggered
  })
  const prevCount = prevCountRef.current;
  return {
    count,
    prevCount,
    setCount,
  }
}

function CounterWithPreviousCount() {
  const { count, prevCount, setCount } = usePreviousCount(9)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        x
      </button>
      <br/>
      <div>
        Count: {count}
      </div>
      <div>
        Previous: {prevCount}
      </div>
    </div>
  )
}

export default App;

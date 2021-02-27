import logo from './logo.svg';
import './App.css';
import { useState, useRef, useEffect, useMemo } from 'react';
import TicTacToe from './tic-tac-toe.js'

function App() {
  return (
    <div className="App">
      <VignetteSelector/>
      <BigTextAndPropRandomizer>
        <TicTacToe/>
      </BigTextAndPropRandomizer>
    </div>
  );
}
function VignetteSelector() {
  return null
}

function BigTextAndPropRandomizer({children}) {
  const [s, ss] = useState('stub')
  const randomizeState = () => { ss(Math.random()) }

  return (
    <div className="bigtext">
      Counter
      <button onClick={randomizeState}>
        randomize prop
      </button>
      {
        [1,2,3].map( (num) => ( <button onClick={() => {ss(num)}}>{num}</button> ) )
      }
      {children}
    </div>
  )
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

function CounterWithPrevious(prop) {
  const [ count, setCount ] = useState(prop.prop);
  const prevCount = usePrevious(count)
  const val = useMemo(() => { expensiveOperation(prop.prop); return count; }, [prop.prop])

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
      <div>
        prop: {prop.prop}
      </div>
      <div>
        VAL: {val}
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

function expensiveOperation() {
  let i = 0
  while (i < 3000000000) {
    i++
  }
}

export default App;


import {ResetButton} from './resetButton'
import {useCounter} from '../store/useCounter'
import shallow from 'zustand/shallow'

export const Counter = () => {
  const { count, increment, decrement } = useCounter(
    (store) => ({
      count: store.count,
      increment: store.increment,
      decrement: store.decrement,
    }),
    shallow
  )
  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <ResetButton/>
    </div>
  )
}


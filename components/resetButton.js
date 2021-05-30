import {useCounter} from '../store/useCounter'
import shallow from 'zustand/shallow'

export const ResetButton = () => {
  const { reset } = useCounter(
    (store) => ({
      reset: store.reset,
    }),
    shallow
  )
  return (
      <button onClick={reset}>Reset</button>
  )
}


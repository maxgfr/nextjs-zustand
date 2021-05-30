import {useCounter} from '../store/useCounter'

export const ResetButton = () => {
  const { reset } = useCounter(
    (store) => ({
      reset: store.reset,
    })
  )
  return (
      <button onClick={reset}>Reset</button>
  )
}


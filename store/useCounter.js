import create from "zustand";
import { combine } from "zustand/middleware";

export const useCounter = create(
  combine(
    {
      count: 0,
    },
    (set) => ({
      increment: () => {
        set(state => ({
          count: state.count + 1,
        }))
      },
      decrement: () => {
        set(state => ({
          count: state.count - 1,
        }))
      },
      reset: () => {
        set({
          count: 0,
        })
      },
    })
  )
);
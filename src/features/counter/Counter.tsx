import React  from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  selectCount,
} from './counterSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
      <div className={"flex flex-col justify-center items-center"}>
        <button
          className={"w-20 full-rounded py-2 px-2 my-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <span className={"text-lg font-extrabold my-10"}>{count}</span>
        <button
            className={"w-20 full-rounded py-2 px-2 my-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
      </div>
  );
}

import React from 'react';
import {
  decrement,
  increment,
  selectCount,
  incrementByAmount,
  incrementAsync,
} from '@/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/common/hooks/redux';

const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(incrementByAmount(2))}>
          +2
        </button>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(incrementAsync(2))}>
          Async +2
        </button>
      </div>
    </div>
  );
};

export default Counter;

import React from 'react';
import {
  decrement,
  increment,
  selectCount,
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
    </div>
  );
};

export default Counter;

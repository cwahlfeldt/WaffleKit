//
// Counter component

import React from 'react';
import MyNumber from '../MyNumber';
import Button from '../Button';

const Counter = ({onIncClick, onDecClick, number}) => (
  <div className="counter">
    <MyNumber number={number} />
    <Button onClick={onIncClick} text='Increment' />
    <Button onClick={onDecClick} text='Decrement' />
  </div>
);

export default Counter;

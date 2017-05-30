//
// fixed border nonsense

import React from 'react';
import './style.scss';

export default function FixedBorder(props) {
  return (
    <div>
      <div className="fixed-border left"></div>
      <div className="fixed-border right"></div>
      <div className="fixed-border top"></div>
      <div className="fixed-border bottom"></div>
    </div>
  );
}

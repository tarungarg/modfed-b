import React from 'lib/react';
import type { RateProps } from './types/RateProps';

const Rate = (props: RateProps) => {
  return (
    <div>
      A: {props.a}
      B: {props.b}
    </div>
  );
};

export default Rate;

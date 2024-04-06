import React from 'react';

export interface TarrifProps {
  a: string;
  b: string;
}
export const Tarrif = (props: TarrifProps) => {
  return (
    <div>
      A: {props.a}
      B: {props.b}
    </div>
  );
};

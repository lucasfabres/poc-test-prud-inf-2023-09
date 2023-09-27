import React, { forwardRef } from 'react';

import * as S from './styles';

type Props = {
  // Required
  children: React.ReactNode;

  // Optional
  trailing?: React.ReactNode;
  leading?: React.ReactNode;
  loading?: boolean;
} & S.ButtonProps &
  React.ComponentProps<typeof S.Button>;

export const Button = forwardRef<HTMLButtonElement | null, Props>(
  (props, ref) => {
    return (
      <S.Button ref={ref} {...props}>
        {props.leading}
        {props.children}
        {props.trailing}
      </S.Button>
    );
  }
);

export const X = (): JSX.Element => <Button as="a" />;

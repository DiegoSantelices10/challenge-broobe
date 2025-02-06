import React, { FC } from 'react';
import { Button as ButtonUI, ButtonText } from '../../ui/button';
import { cn } from '@/src/utils';
import { IButtonProps } from './types';

const Button: FC<IButtonProps> = (props) => {
  const {
    textButton,
    className,
    ...rest
  } = props;

  return (
    <ButtonUI
      size="xl"
      className={cn(className)}
      {...rest}
    >
      <ButtonText>{textButton}</ButtonText>
    </ButtonUI>
  );
};

export default Button;

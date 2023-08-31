import { Button, ButtonProps } from 'antd';
import React from 'react';

type LuckyButtonProps = ButtonProps;

const LuckyButton: React.FC<LuckyButtonProps> = (props) => {
  const { children, ...rest } = props;

  return <Button {...rest}>{children}</Button>;
};

export default LuckyButton;

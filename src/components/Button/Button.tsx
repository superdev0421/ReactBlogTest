// External Dependencies
import React, { FunctionComponent } from 'react';

// Internal Dependencies
import { StyledButton } from './Button.Styled';

interface Props {
  children?: string;
  handleClick: () => void;
}

const Button: FunctionComponent<Props> = ({ children, handleClick }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export default Button;

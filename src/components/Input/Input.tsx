// External Dependencies
import React, { FunctionComponent } from 'react';

// Internal Dependencies
import { StyledInput } from './Input.Styled';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<Props> = ({ handleChange }) => {
  return (
    <StyledInput
      placeholder="Search tournament..."
      onChange={handleChange}
    ></StyledInput>
  );
};

export default Input;

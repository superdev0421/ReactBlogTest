// External Dependencies
import React, { FunctionComponent } from 'react';
import { debounce } from 'lodash';

// Internal Dependencies
import H4 from '../H4';
import Input from '../Input/Input';
import Button from '../Button/Button';

import { StyledContainer, StyledFlexBox } from './Container.Styled';

interface Props {
  children?: JSX.Element;
}

const Container: FunctionComponent<Props> = ({ children }) => {
  // create a new tournament
  const handleCreate = () => {
    const name = prompt('Tournament Name:');

    if (name) {
      // dispatch create action
      // dispatch(addTournament(name));
    }
  };

  // query the tournaments
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch find action
    // dispatch(findTournaments(e.target.value));
  }, 300);

  return (
    <StyledContainer>
      <H4>FACEIT Tournaments</H4>
      <StyledFlexBox>
        <Input handleChange={handleChange}></Input>
        <Button handleClick={handleCreate}>CREATE ELEMENT</Button>
      </StyledFlexBox>
      {children}
    </StyledContainer>
  );
};

export default Container;

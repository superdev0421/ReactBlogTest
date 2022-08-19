/**
==========================================
 Title:  Customized Button
 Author: Edward
 Date:   18 August 2022
==========================================
 */

// External Dependencies
import React, { FunctionComponent } from 'react';
import { debounce } from 'lodash';

// Internal Dependencies
import H4 from '../H4';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { StyledContainer, StyledFlexBox } from './Container.Styled';

//Redux tookit Dependencies
import { createTournaments, findTournaments } from '../../reducers/tournamentReducer'
import { useAppDispatch } from '../../app/hooks';

interface Props {
  children?: JSX.Element;
}

const Container: FunctionComponent<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  // create a new tournament
  const handleCreate = () => {
    const name = prompt('Tournament Name:');
    if (name) {
      // dispatch create action
      dispatch(createTournaments(name));
    }
  };

  // query the tournaments
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch find action
    dispatch(findTournaments(String(e.target.value)))
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

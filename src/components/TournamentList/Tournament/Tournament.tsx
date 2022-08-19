/**
==========================================
 Title:  Tournament Item
 Author: Edward
 Date:   18 August 2022
==========================================
 */

// External Dependencies
import React from 'react';

// Internal Dependencies
import Button from '../../Button/Button';
import H6 from '../../H6';
import { StyledTournament, StyledButtonGroup } from './Tournament.Styled';
import { ITournaments } from '../../../interface/interfaces';

//Redux toolkit Dependencies
import { useAppDispatch } from '../../../app/hooks';
import { updateTournaments, deleteTournaments } from '../../../reducers/tournamentReducer';


export const Tournament: React.FC<ITournaments> = (tournament) => {
  const { id, game, name, organizer, participants, startDate } = tournament;
  const dispatch = useAppDispatch();

  // update the tournament
  const handleUpdate = () => {
    const newName = prompt('New Tournament Name:', name);
    if (newName !== name && newName) {
      // dispatch update action
      dispatch(updateTournaments({ id, newName }));
    }
  };

  // delete the tournament
  const handleDelete = () => {
    if (window.confirm('Do you really want to delete this tournament?')) {
      // dispatch delete action
      dispatch(deleteTournaments(id))
    }
  };

  return (
    <StyledTournament>
      <H6>{name}</H6>
      <div>Organizer:{organizer}</div>
      <div>Game:{game}</div>
      <div>Participants:{`${participants.current}/${participants.max}`} </div>
      <div>Start:{startDate}</div>
      <StyledButtonGroup>
        <Button handleClick={handleUpdate}>EDIT</Button>
        <Button handleClick={handleDelete}>DELETE</Button>
      </StyledButtonGroup>
    </StyledTournament>
  );
};

// External Dependencies
import React from 'react';

// Internal Dependencies
import Button from '../../Button/Button';
import H6 from '../../H6';
import { StyledTournament, StyledButtonGroup } from './Tournament.Styled';
import { ITournaments } from '../../../interface/interfaces';

export const Tournament: React.FC<ITournaments> = (tournament) => {
  const { id, game, name, organizer, participants, startDate } = tournament;

  // update the tournament
  const handleUpdate = () => {
    const newName = prompt('New Tournament Name:', name);
    if (newName !== name) {
      // dispatch update action
      // dispatch(updateTournament({...tournament, name: newName}));
    }
  };

  // delete the tournament
  const handleDelete = () => {
    if (window.confirm('Do you really want to delete this tournament?')) {
      // dispatch delete action
      // dispatch(deleteTournament(id));
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

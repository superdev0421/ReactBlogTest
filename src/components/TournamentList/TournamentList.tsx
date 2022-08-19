/**
==========================================
 Title:  Tournament Item
 Author: Edward
 Date:   18 August 2022
==========================================
 */

// External Dependencies
import React, { useEffect } from 'react';

// Internal Dependencies
import { Tournament } from './Tournament/Tournament';
import Button from '../Button/Button';
import { Container, StyledTournamentList, Text } from './TournamentList.Styled';

//type Dependencies
import { ITournaments } from '../../interface/interfaces';
import { fetchStatus } from '../../types/types';

//Redux toolkit Dependencies
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchTournaments } from '../../reducers/tournamentReducer';

export const TournamentList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tournaments, status } = useAppSelector((state) => state.users);

  // retry fetching the tournaments
  const handleRetry = () => {
    dispatch(fetchTournaments());
  };

  useEffect(() => {
    if (status === fetchStatus.IDLE) {
      dispatch(fetchTournaments());
    }
  }, []);

  let tournamentGroup = tournaments.map((tournament: ITournaments) => {
    return <Tournament {...tournament} key={tournament.id} />;
  });

  return status === fetchStatus.COMPLETED && tournaments.length > 0 ? (
    <StyledTournamentList>{tournamentGroup}</StyledTournamentList>
  ) : (
    <Container>
      {status === fetchStatus.LOADING ? (
        'Loading tournaments...'
      ) : status === fetchStatus.FAILED ? (
        <>
          <Text>Something went wrong.</Text>
          <Button handleClick={handleRetry}>Retry</Button>
        </>
      ) : tournaments.length === 0 ? (
        'No tournaments found.'
      ) : (
        <></>
      )}
    </Container>
  );
};

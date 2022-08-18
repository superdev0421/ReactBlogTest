// External Dependencies
import React, { useEffect } from 'react';

// Internal Dependencies
import { useAppSelector } from '../../app/hooks';
import { useAppDispatch } from '../../app/hooks';
import { ITournaments } from '../../interface/interfaces';
import { fetchTournaments } from '../../reducers/tournamentReducer';
import { fetchStatus } from '../../types/types';
import { Tournament } from './Tournament/Tournament';
import Button from '../Button/Button';
import { Container, StyledTournamentList, Text } from './TournamentList.Styled';

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

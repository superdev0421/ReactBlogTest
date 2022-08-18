import styled from 'styled-components';
import theme from '../../theme';

export const StyledTournamentList = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: ${theme.spacing(6)};
  padding: 0px;
  margin: 20px 0px;
  list-style: none;

  .loading {
    margin: auto;
  }
`;

export const Container = styled.div`
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center;
`;

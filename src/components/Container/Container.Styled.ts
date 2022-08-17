import styled from 'styled-components';
import theme from '../../theme';

export const  StyledContainer = styled.div`
  max-width: 960px;
  margin-top: ${theme.spacing(6)};
  margin-left: auto;
  margin-right: auto;
`;

export const StyledFlexBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
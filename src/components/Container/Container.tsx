import React, {FunctionComponent} from "react";
import H4 from '../H4';
import Input from '../Input/Input';
import Button from '../Button/Button';

import {
    StyledContainer,
    StyledFlexBox
} from './Container.Styled'

interface Props {
    children ?: JSX.Element[]
}

const Container: FunctionComponent<Props>= ({children}) => {
    return (
        <StyledContainer>
            <H4>FACEIT Tournaments</H4>
            <StyledFlexBox>
                <Input></Input>
                <Button></Button>
            </StyledFlexBox>
            {children}
        </StyledContainer>

    );
}

export default Container;


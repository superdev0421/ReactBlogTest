import React, {FunctionComponent} from "react";
import {
    StyledInput
} from './Input.Styled';


interface Props {

}

const Input:FunctionComponent<Props> = () => {

    return (
        <StyledInput placeholder="Search tournament...">
        </StyledInput>
    );
}

export default Input;
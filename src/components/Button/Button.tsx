import React, {FunctionComponent} from "react";
import { 
    StyledButton 
} from './Button.Styled'

interface Props {

}

const Button: FunctionComponent<Props> = () => {
    return (
        <StyledButton>
            CREATE TOURNAMENT
        </StyledButton>
    )
};

export default Button;
import React, {FunctionComponent} from "react";
import { 
    StyledButton 
} from './Button.Styled'

interface Props {
    children ?: string
}

const Button: FunctionComponent<Props> = ({children}) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
};

export default Button;
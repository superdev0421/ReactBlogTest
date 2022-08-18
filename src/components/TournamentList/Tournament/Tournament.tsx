import React from "react";

import Button from "../../Button/Button";
import H6 from '../../H6';
import { 
    StyledTournament,
    StyledButtonGroup
} from './Tournament.Styled'
import { ITournaments } from "../../../interface/interfaces";

export const Tournament:React.FC<ITournaments> = ({id, game, name, organizer, participants, startDate}) => {
    return (
        <StyledTournament>
            <H6>{name}</H6>
            <div>Organizer:{organizer}</div>
            <div>Game:{game}</div>
            <div>Participants:{`${participants.current}/${participants.max}`} </div>
            <div>Start:{startDate}</div>
            <StyledButtonGroup>
                <Button>EDIT</Button>
                <Button>DELETE</Button>
            </StyledButtonGroup>
        </StyledTournament>
    )
}
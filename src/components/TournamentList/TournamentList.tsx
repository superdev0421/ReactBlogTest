import React, {useEffect} from 'react';
import { useAppSelector } from '../../app/hooks';
import { useAppDispatch } from '../../app/hooks';
import { fetchTournaments } from '../../reducers/tournamentReducer';
import { fetchStatus } from '../../types/types';

import { Tournament } from './Tournament/Tournament'
import {
    StyledTournamentList
} from './TournamentList.Styled'

export const TournamentList: React.FC = () => {
    const dispatch = useAppDispatch();
    const {tournaments, status} = useAppSelector(state => state.users)


    useEffect(() => {
        if(status == fetchStatus.IDLE ){
            console.log("TournamentList useEffect OK")
            dispatch(fetchTournaments() );
        }
    },[])
    let tournamentGroup = tournaments.map(tournament => {
        return (
            <Tournament
                id={tournament.id}
                key={tournament.id}
                game={tournament.game}
                name={tournament.name}
                organizer={tournament.organizer}
                participants={tournament.participants}
                startDate={tournament.startDate}
                />
        )
    })
    return (
        <StyledTournamentList>
            {tournamentGroup}
        </StyledTournamentList>   
    )
}
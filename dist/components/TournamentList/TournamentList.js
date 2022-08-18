"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hooks_1 = require("../../app/hooks");
const hooks_2 = require("../../app/hooks");
const tournamentReducer_1 = require("../../reducers/tournamentReducer");
const types_1 = require("../../types/types");
const Tournament_1 = require("./Tournament/Tournament");
const TournamentList_Styled_1 = require("./TournamentList.Styled");
const TournamentList = () => {
    const dispatch = (0, hooks_2.useAppDispatch)();
    const { tournaments, status } = (0, hooks_1.useAppSelector)(state => state.users);
    (0, react_1.useEffect)(() => {
        if (status == types_1.fetchStatus.IDLE) {
            console.log("TournamentList useEffect OK");
            dispatch((0, tournamentReducer_1.fetchTournaments)());
        }
    }, []);
    let tournamentGroup = tournaments.map(tournament => {
        return ((0, jsx_runtime_1.jsx)(Tournament_1.Tournament, { id: tournament.id, game: tournament.game, name: tournament.name, organizer: tournament.organizer, participants: tournament.participants, startDate: tournament.startDate }, tournament.id));
    });
    return ((0, jsx_runtime_1.jsx)(TournamentList_Styled_1.StyledTournamentList, { children: tournamentGroup }));
};
exports.TournamentList = TournamentList;

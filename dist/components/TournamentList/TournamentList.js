"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamentList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// External Dependencies
const react_2 = require("react");
// Internal Dependencies
const hooks_1 = require("../../app/hooks");
const hooks_2 = require("../../app/hooks");
const tournamentReducer_1 = require("../../reducers/tournamentReducer");
const types_1 = require("../../types/types");
const Tournament_1 = require("./Tournament/Tournament");
const Button_1 = __importDefault(require("../Button/Button"));
const TournamentList_Styled_1 = require("./TournamentList.Styled");
const TournamentList = () => {
    const dispatch = (0, hooks_2.useAppDispatch)();
    const { tournaments, status } = (0, hooks_1.useAppSelector)((state) => state.users);
    // retry fetching the tournaments
    const handleRetry = () => {
        dispatch((0, tournamentReducer_1.fetchTournaments)());
    };
    (0, react_2.useEffect)(() => {
        if (status === types_1.fetchStatus.IDLE) {
            dispatch((0, tournamentReducer_1.fetchTournaments)());
        }
    }, []);
    let tournamentGroup = tournaments.map((tournament) => {
        return (0, react_1.createElement)(Tournament_1.Tournament, Object.assign({}, tournament, { key: tournament.id }));
    });
    return status === types_1.fetchStatus.COMPLETED && tournaments.length > 0 ? ((0, jsx_runtime_1.jsx)(TournamentList_Styled_1.StyledTournamentList, { children: tournamentGroup })) : ((0, jsx_runtime_1.jsx)(TournamentList_Styled_1.Container, { children: status === types_1.fetchStatus.LOADING ? ('Loading tournaments...') : status === types_1.fetchStatus.FAILED ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TournamentList_Styled_1.Text, { children: "Something went wrong." }), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ handleClick: handleRetry }, { children: "Retry" }))] })) : tournaments.length === 0 ? ('No tournaments found.') : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})) }));
};
exports.TournamentList = TournamentList;

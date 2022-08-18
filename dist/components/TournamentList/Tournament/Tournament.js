"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tournament = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// Internal Dependencies
const Button_1 = __importDefault(require("../../Button/Button"));
const H6_1 = __importDefault(require("../../H6"));
const Tournament_Styled_1 = require("./Tournament.Styled");
const Tournament = (tournament) => {
    const { id, game, name, organizer, participants, startDate } = tournament;
    // update the tournament
    const handleUpdate = () => {
        const newName = prompt('New Tournament Name:', name);
        if (newName !== name) {
            // dispatch update action
            // dispatch(updateTournament({...tournament, name: newName}));
        }
    };
    // delete the tournament
    const handleDelete = () => {
        if (window.confirm('Do you really want to delete this tournament?')) {
            // dispatch delete action
            // dispatch(deleteTournament(id));
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Tournament_Styled_1.StyledTournament, { children: [(0, jsx_runtime_1.jsx)(H6_1.default, { children: name }), (0, jsx_runtime_1.jsxs)("div", { children: ["Organizer:", organizer] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Game:", game] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Participants:", `${participants.current}/${participants.max}`, " "] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Start:", startDate] }), (0, jsx_runtime_1.jsxs)(Tournament_Styled_1.StyledButtonGroup, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ handleClick: handleUpdate }, { children: "EDIT" })), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ handleClick: handleDelete }, { children: "DELETE" }))] })] }));
};
exports.Tournament = Tournament;

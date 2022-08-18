"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const lodash_1 = require("lodash");
// Internal Dependencies
const H4_1 = __importDefault(require("../H4"));
const Input_1 = __importDefault(require("../Input/Input"));
const Button_1 = __importDefault(require("../Button/Button"));
const Container_Styled_1 = require("./Container.Styled");
const Container = ({ children }) => {
    // create a new tournament
    const handleCreate = () => {
        const name = prompt('Tournament Name:');
        if (name) {
            // dispatch create action
            // dispatch(addTournament(name));
        }
    };
    // query the tournaments
    const handleChange = (0, lodash_1.debounce)((e) => {
        // dispatch find action
        // dispatch(findTournaments(e.target.value));
    }, 300);
    return ((0, jsx_runtime_1.jsxs)(Container_Styled_1.StyledContainer, { children: [(0, jsx_runtime_1.jsx)(H4_1.default, { children: "FACEIT Tournaments" }), (0, jsx_runtime_1.jsxs)(Container_Styled_1.StyledFlexBox, { children: [(0, jsx_runtime_1.jsx)(Input_1.default, { handleChange: handleChange }), (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ handleClick: handleCreate }, { children: "CREATE ELEMENT" }))] }), children] }));
};
exports.default = Container;

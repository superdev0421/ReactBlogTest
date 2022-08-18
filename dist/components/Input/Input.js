"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// Internal Dependencies
const Input_Styled_1 = require("./Input.Styled");
const Input = ({ handleChange }) => {
    return ((0, jsx_runtime_1.jsx)(Input_Styled_1.StyledInput, { placeholder: "Search tournament...", onChange: handleChange }));
};
exports.default = Input;

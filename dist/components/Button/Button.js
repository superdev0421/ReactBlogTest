"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_Styled_1 = require("./Button.Styled");
const Button = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(Button_Styled_1.StyledButton, { children: children }));
};
exports.default = Button;

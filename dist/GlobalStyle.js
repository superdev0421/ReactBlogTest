"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const polished_1 = require("polished");
const theme_1 = __importDefault(require("./theme"));
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  ${polished_1.normalize};

  body {
    font-family: 'Play';
    background: ${theme_1.default.palette.background.body};
    color: ${theme_1.default.palette.text.primary};
    ${theme_1.default.typography.body};
  }
`;
exports.default = GlobalStyle;

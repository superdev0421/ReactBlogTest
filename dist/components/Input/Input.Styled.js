"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledInput = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = __importDefault(require("../../theme"));
exports.StyledInput = styled_components_1.default.input `
  background: ${theme_1.default.palette.background.base};
  padding: ${theme_1.default.spacing(2)};
  border: none;
  color: ${theme_1.default.palette.text.primary};
`;

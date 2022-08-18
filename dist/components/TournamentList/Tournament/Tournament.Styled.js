"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButtonGroup = exports.StyledTournament = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = __importDefault(require("../../../theme"));
exports.StyledTournament = styled_components_1.default.div `
  box-sizing: border-box;
  background: ${theme_1.default.palette.background.base};
  padding: ${theme_1.default.spacing(4)};
  width: calc(33.33% - 16px);
  border-radius: ${theme_1.default.spacing(1)};
  color: ${theme_1.default.palette.text.primary};
`;
exports.StyledButtonGroup = styled_components_1.default.div `
  display: flex;
  gap: ${theme_1.default.spacing(2)};
  margin: ${theme_1.default.spacing(2)} ${theme_1.default.spacing(2)} 0 0;
`;

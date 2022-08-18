"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.Container = exports.StyledTournamentList = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = __importDefault(require("../../theme"));
exports.StyledTournamentList = styled_components_1.default.div `
  display: flex;
  flex-flow: row wrap;
  gap: ${theme_1.default.spacing(6)};
  padding: 0px;
  margin: 20px 0px;
  list-style: none;

  .loading {
    margin: auto;
  }
`;
exports.Container = styled_components_1.default.div `
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
exports.Text = styled_components_1.default.p `
  text-align: center;
`;

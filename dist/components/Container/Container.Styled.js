"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledFlexBox = exports.StyledContainer = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = __importDefault(require("../../theme"));
exports.StyledContainer = styled_components_1.default.div `
  max-width: 960px;
  margin-top: ${theme_1.default.spacing(6)};
  margin-left: auto;
  margin-right: auto;
`;
exports.StyledFlexBox = styled_components_1.default.div `
display: flex;
flex-direction: row;
justify-content: space-between;
`;

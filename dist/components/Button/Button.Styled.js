"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledButton = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = __importDefault(require("../../theme"));
exports.StyledButton = styled_components_1.default.button `
  background: transparent;
  border: 1px solid ${theme_1.default.palette.secondary.main};
  border-radius: ${theme_1.default.borderRadius};
  color: ${theme_1.default.palette.primary.main};
  padding: ${theme_1.default.spacing(2)};
  ${theme_1.default.typography.button};
  margin-right:${theme_1.default.spacing(2)};

  &:hover {
    border: 1px solid ${theme_1.default.palette.secondary.light};
    color: ${theme_1.default.palette.primary.light};
  }

  &:active {
    border: 1px solid ${theme_1.default.palette.secondary.dark};
    color: ${theme_1.default.palette.primary.dark};
  }
`;

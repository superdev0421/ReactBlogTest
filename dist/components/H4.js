"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = __importDefault(require("../theme"));
const H4 = styled_components_1.default.h4 `
  ${theme_1.default.typography.h4};
  margin: 0;
  margin-bottom: ${theme_1.default.spacing(6)};
`;
exports.default = H4;

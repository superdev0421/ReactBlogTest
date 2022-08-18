"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = __importDefault(require("../theme"));
const H6 = styled_components_1.default.h6 `
  ${theme_1.default.typography.h6};
  margin: 0;
  margin-bottom: ${theme_1.default.spacing(4)};
`;
exports.default = H6;

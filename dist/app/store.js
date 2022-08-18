"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const tournamentReducer_1 = __importDefault(require("../reducers/tournamentReducer"));
// import loginReducer from '../reducers/loginReducer';
// import validateReducer from '../reducers/validateReducer';
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        users: tournamentReducer_1.default
    }
});

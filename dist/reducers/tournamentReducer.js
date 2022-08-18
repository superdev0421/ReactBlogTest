"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTournaments = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
const types_1 = require("../types/types");
const api_1 = require("../constants/api");
const initialState = {
    tournaments: [],
    status: types_1.fetchStatus.IDLE
};
exports.fetchTournaments = (0, toolkit_1.createAsyncThunk)('fetchTournaments', () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.get(api_1.API_TOURNAMENTS_URL);
    console.log(res.data);
    return res.data;
}));
const tournamentSlice = (0, toolkit_1.createSlice)({
    name: 'tournaments',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(exports.fetchTournaments.pending, state => {
            state.status = types_1.fetchStatus.LOADING;
        })
            .addCase(exports.fetchTournaments.fulfilled, (state, action) => {
            state.status = types_1.fetchStatus.COMPLETED;
            state.tournaments = state.tournaments.concat(action.payload.data);
        })
            .addCase(exports.fetchTournaments.rejected, state => {
            state.status = types_1.fetchStatus.FAILED;
        });
    }
});
_a = tournamentSlice.actions;
exports.default = tournamentSlice.reducer;

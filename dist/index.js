"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
const react_redux_1 = require("react-redux");
// Internal Dependencies
const GlobalStyle_1 = __importDefault(require("./GlobalStyle"));
const store_1 = require("./app/store");
const Container_1 = __importDefault(require("./components/Container/Container"));
const TournamentList_1 = require("./components/TournamentList/TournamentList");
const App = () => {
    return ((0, jsx_runtime_1.jsx)(Container_1.default, { children: (0, jsx_runtime_1.jsx)(TournamentList_1.TournamentList, {}) }));
};
const container = document.getElementById('root');
if (!container) {
    throw new Error('No container found');
}
const root = (0, client_1.createRoot)(container);
root.render((0, jsx_runtime_1.jsxs)(react_redux_1.Provider, Object.assign({ store: store_1.store }, { children: [(0, jsx_runtime_1.jsx)(GlobalStyle_1.default, {}), (0, jsx_runtime_1.jsx)(App, {})] })));

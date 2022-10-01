"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
var App_1 = __importDefault(require("./App"));
var react_router_dom_1 = require("react-router-dom");
var theme_1 = require("./theme");
var styled_components_1 = require("styled-components");
var client_2 = require("@apollo/client");
var react_redux_1 = require("react-redux");
var Store_1 = require("./components/Redux/Store");
var react_2 = require("redux-persist/integration/react");
var CartSlice_1 = require("./components/Redux/CartSlice");
var client = new client_2.ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new client_2.InMemoryCache(),
});
Store_1.store.dispatch((0, CartSlice_1.getTotal)());
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={Store_1.store}>
      <react_router_dom_1.BrowserRouter>
        <react_2.PersistGate persistor={Store_1.persist}>
          <client_2.ApolloProvider client={client}>
            <styled_components_1.ThemeProvider theme={theme_1.theme}>
              <App_1.default />
            </styled_components_1.ThemeProvider>
          </client_2.ApolloProvider>
        </react_2.PersistGate>
      </react_router_dom_1.BrowserRouter>
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
// basename = '/test-task-scandiweb/';

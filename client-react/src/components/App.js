import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import "./App.css";
import Catalog from "./Catalog";
import Details from "./Details";
import ProductForm from "./ProductForm";

import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

injectTapEventPlugin();

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <MuiThemeProvider>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Catalog} />
            <Route path="/product/:id" component={Details} />
            <Route path="/product-form" component={ProductForm} />
          </Switch>
        </div>
      </MuiThemeProvider>
    </Provider>
  </BrowserRouter>
);

export default App;

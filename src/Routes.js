import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import ProductList from "./containers/ProductList";

export default () => (
  <Switch>
    <Route path="/:pageNumber?" exact component={ProductList} />
    {/* Catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);

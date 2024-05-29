import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  Products,
  singleProduct,
  Cart,
  Checkout,
  Error,
  About,
  PrivateRoute,
} from "./pages";

function App() {
  return (
   <Router>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
    </Switch>
   </Router>
  );
}

export default App;

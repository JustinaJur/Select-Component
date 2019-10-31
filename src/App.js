import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Components.js/Navigation/Navigation";
import Example1 from "./pages/Example1/Example1";
import Example2 from "./pages/Example2/Example2";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/example2" component={Example2} />
          <Route path="/" exact component={Example1} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

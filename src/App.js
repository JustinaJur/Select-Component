import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./Components.js/Navigation";
import Select from "./Components.js/Select";
import Example1 from "./pages/Example1";
import Example2 from "./pages/Example2";

const cities = [];

class App extends React.Component {
  state = {};

  handleSubmit = () => {};

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Example1
                // searchedItem={searchedItem}
                // selectedItems={selectedItems}
                // addItem={this.addItem}
                // removeItem={this.removeItem}
                data={cities}
                {...props}
              />
            )}
          />
          <Route
            path="/example2"
            exact
            render={props => (
              <Example2
                // data={colors}
                {...props}
              />
            )}
          />
          {/* <Route path="/example2" component={Example2} />
          <Route path="/" exact component={Example1} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Lists from './Lists/Lists';
import Items from './Items/Items';
import { createGlobalStyle } from 'styled-components';
import Bar from './Bar/Bar';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Bar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/lists" />
        </Route>
        <Route exact component={Lists} path="/lists" />
        <Route exact component={Items} path="/lists/:listId" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

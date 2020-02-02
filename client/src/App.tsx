import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Lists from './Lists/Lists';
import Items from './Items/Items';
import { createGlobalStyle } from 'styled-components';
import Bar from './Bar/Bar';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Container from '@material-ui/core/Container';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Bar />
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/">
              <Redirect to="/lists" />
            </Route>
            <Route exact component={Lists} path="/lists" />
            <Route exact component={Items} path="/lists/:listId" />
          </Switch>
        </Container>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

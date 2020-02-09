import React, { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Lists from './Lists/Lists';
import List from './List/List';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Theme from './Theme/Theme';
import MainLayout from './Layout/MainLayout';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const App: FunctionComponent = () => {
  return (
    <Theme>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <MainLayout>
            <Switch>
              <Route exact path="/">
                <Redirect to="/lists" />
              </Route>
              <Route exact component={Lists} path="/lists" />
              <Route exact component={List} path="/lists/:listId" />
            </Switch>
          </MainLayout>
        </ApolloProvider>
      </BrowserRouter>
    </Theme>
  );
};

export default App;

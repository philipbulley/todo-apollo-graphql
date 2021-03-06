import React, { FunctionComponent } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListsItem from './ListsItem/ListsItem';
import Count from '../shared/Count/Count';
import CreateList from './CreateList/CreateList';
import { useListsQuery } from '../__generated__/graphql';

type ListsProps = {};

const Lists: FunctionComponent<ListsProps> = () => {
  const { loading, data, error } = useListsQuery();

  if (loading) {
    return <LinearProgress color="secondary" />;
  }

  if (error) {
    return (
      <>
        <Typography variant="h2">Oh no!</Typography>
        <Typography variant="body1">
          There was an error{' '}
          <span role="img" aria-label="Crying">
            😭
          </span>
        </Typography>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </>
    );
  }

  if (!data) {
    return <div>No data could be found!</div>;
  }

  return (
    <>
      <CreateList />
      <Grid container spacing={2}>
        {data.allTodoLists.edges.map(({ node }) => (
          <Grid item xs={12} sm={6} key={node.id}>
            <ListsItem list={node} />
          </Grid>
        ))}
      </Grid>
      <Count number={data.allTodoLists.edges.length} itemType="list" />
    </>
  );
};

export default Lists;

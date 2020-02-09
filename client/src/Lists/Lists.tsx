import React, { FunctionComponent } from 'react';
import { useListsQuery } from '../__generated__/graphql';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ListsItem from './ListsItem/ListsItem';
import styled from 'styled-components/macro';
import Count from '../shared/Count/Count';

type ListsProps = {};

const Lists: FunctionComponent<ListsProps> = () => {
  const { loading, data, error } = useListsQuery();

  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <>
        <Typography variant="h2">Oh no!</Typography>
        <Typography variant="body1">There was an error 😭</Typography>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </>
    );
  }

  if (!data) {
    return <div>No data could be found!</div>;
  }

  return (
    <>
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

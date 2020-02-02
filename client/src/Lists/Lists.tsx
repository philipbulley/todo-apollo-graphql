import React, { FunctionComponent } from 'react';
import { useListsQuery } from '../__generated__/graphql';
import { LinearProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

type ListsProps = {};

const Lists: FunctionComponent<ListsProps> = () => {
  const { loading, data, error } = useListsQuery();

  if (loading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <div>
        <Typography variant="h2">Oh no!</Typography>
        <Typography variant="body1">There was an error 😭</Typography>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  if (!data) {
    return <div>No data could be found!</div>;
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="baseline"
      >
        {data.allTodoLists.edges.map(({ node }) => (
          <Paper>
            <Card>
              <CardContent>
                <Typography variant="h5">{node.name}</Typography>
                <Typography color="textSecondary" gutterBottom>
                  Last updated: {node.updatedAt}
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        ))}
      </Grid>
      <Typography variant="body1">
        You have {data.allTodoLists.edges.length} lists.
      </Typography>
      {/*<pre>{JSON.stringify({ loading, data, error }, null, 2)}</pre>*/}
    </div>
  );
};

export default Lists;

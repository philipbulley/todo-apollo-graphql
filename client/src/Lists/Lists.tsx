import React, { FunctionComponent } from 'react';
import { useListsQuery } from '../__generated__/graphql';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

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
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h2">{node.name}</Typography>
                <Typography variant="caption" gutterBottom>
                  Last updated: {node.updatedAt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1">
        You have {data.allTodoLists.edges.length} lists.
      </Typography>
      {/*<pre>{JSON.stringify({ loading, data, error }, null, 2)}</pre>*/}
    </>
  );
};

export default Lists;

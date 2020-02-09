import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';
import { useListQuery } from '../__generated__/graphql';
import LinearProgress from '@material-ui/core/LinearProgress';
import MuiList from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ListItem from './ListItem/ListItem';

export type ListProps = {};
export type ListParams = {
  listId: string;
};

const List: FunctionComponent<ListProps> = () => {
  const { listId } = useParams<ListParams>();

  const { loading, data, error } = useListQuery({
    variables: {
      id: listId
    }
  });

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

  if (!data || !data.todoList) {
    return <div>No data could be found!</div>;
  }

  return (
    <>
      <Paper>
        <MuiList>
          {data.todoList.items.edges.map(edge => (
            <ListItem item={edge.node} key={edge.node.id}>
              {edge.node.name}
            </ListItem>
          ))}
          {!data.todoList.items.edges.length && (
            <Typography variant="body1" align="center">
              You haven't yet added any items.
            </Typography>
          )}
        </MuiList>
      </Paper>
    </>
  );
};

export default List;

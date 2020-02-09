import React, { FunctionComponent } from 'react';
import {
  TodoListItem,
  useUpdateListItemMutation
} from '../../__generated__/graphql';
import { Optional } from 'utility-types';
import MuiListItem from '@material-ui/core/ListItem';
import _ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import _CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components/macro';

type ListItemProps = {
  item: Optional<TodoListItem, 'listId'>;
};

const ListItem: FunctionComponent<ListItemProps> = ({ item }) => {
  const labelId = `checkbox-list-label-${item.name}`;

  const [updateListItem, { loading }] = useUpdateListItemMutation();

  return (
    <MuiListItem>
      <ListItemIcon>
        <>
          <Checkbox
            edge="start"
            checked={item.done}
            tabIndex={-1}
            inputProps={{ 'aria-labelledby': labelId }}
            disabled={loading}
            onClick={() =>
              updateListItem({
                variables: { id: item.id, fields: { done: !item.done } },
                optimisticResponse: {
                  __typename: 'Mutation',
                  updateTodoListItem: {
                    ...item,
                    done: !item.done
                  }
                }
              })
            }
          />
          {loading && <CircularProgress />}
        </>
      </ListItemIcon>
      <ListItemText id={labelId} primary={item.name} />
    </MuiListItem>
  );
};

export default ListItem;

const CircularProgress = styled(_CircularProgress).attrs({
  color: 'secondary'
})`
  position: absolute;
  left: -11px;
  top: 1px;
`;

const ListItemIcon = styled(_ListItemIcon)`
  position: relative;
`;

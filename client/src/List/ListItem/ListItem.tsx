import React, { FunctionComponent } from 'react';
import { TodoListItem } from '../../__generated__/graphql';
import { Optional } from 'utility-types';
import MuiListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

type ListItemProps = {
  item: Optional<TodoListItem, 'listId'>;
};

const ListItem: FunctionComponent<ListItemProps> = ({ item }) => {
  const labelId = `checkbox-list-label-${item.name}`;

  return (
    <MuiListItem>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={item.done}
          tabIndex={-1}
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={item.name} />
    </MuiListItem>
  );
};

export default ListItem;

import React, { FunctionComponent, useCallback, useMemo } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { TodoList } from '../../__generated__/graphql';
import { Optional } from 'utility-types';
import { formatDistance } from 'date-fns';
import ScheduleIcon from '@material-ui/icons/Schedule';
import styled from 'styled-components/macro';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory } from 'react-router-dom';

export type ListsItemProps = {
  list: Optional<TodoList, 'items'>;
};

const ListsItem: FunctionComponent<ListsItemProps> = ({ list }) => {
  const { push } = useHistory();
  const updatedAt = useMemo(
    () =>
      formatDistance(new Date(list.updatedAt), new Date().getTime(), {
        addSuffix: true
      }),
    [list.updatedAt]
  );
  const handleClick = useCallback(() => push(`/lists/${list.id}`), [
    push,
    list.id
  ]);

  return (
    <CardButtonBase onClick={handleClick}>
      <Card>
        <CardContent>
          <Name variant="h2">{list.name}</Name>
          <ScheduleIconStyled fontSize="small" />
          <Typography variant="caption">{updatedAt}</Typography>
        </CardContent>
      </Card>
    </CardButtonBase>
  );
};

export default ListsItem;

const ScheduleIconStyled = styled(ScheduleIcon)`
  margin-right: 4px;
  vertical-align: middle;
`;

const Name = styled(Typography).attrs({ variant: 'h2' })`
  margin-bottom: 40px;
`;

const CardButtonBase = styled(ButtonBase)`
  display: block;
  width: 100%;
  text-align: left;
  cursor: pointer;
`;

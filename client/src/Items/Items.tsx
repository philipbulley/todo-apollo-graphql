import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

type ItemsProps = {};

const Items: FunctionComponent<ItemsProps> = () => {
  const { listId } = useParams();
  return <div>Items for {listId}</div>;
};

export default Items;

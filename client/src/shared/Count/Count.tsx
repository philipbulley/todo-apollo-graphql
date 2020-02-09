import React, { FunctionComponent } from 'react';
import styled from 'styled-components/macro';
import Typography from '@material-ui/core/Typography';

type CountProps = {
  number: number;
  itemType: 'list' | 'item';
};

const Count: FunctionComponent<CountProps> = ({ number, itemType }) => (
  <CountStyled variant="body1" align="center">
    You have {number} {itemType}
    {number !== 1 && 's'}
  </CountStyled>
);

export default Count;

const CountStyled = styled(Typography)`
  margin-top: 40px;
`;

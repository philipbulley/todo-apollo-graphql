import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type BarProps = {};

const Bar: FunctionComponent<BarProps> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <LinkStyled to="/">
          <Typography variant="h6">Todo List</Typography>
        </LinkStyled>
      </Toolbar>
    </AppBar>
  );
};

export default Bar;

const LinkStyled = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

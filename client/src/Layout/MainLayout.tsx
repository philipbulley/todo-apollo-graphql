import React, { FunctionComponent, ReactNode } from 'react';
import Bar from '../Bar/Bar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: FunctionComponent<MainLayoutProps> = ({ children }) => (
  <>
    <Bar />
    <Container maxWidth="md">
      <Box m={2}>{children}</Box>
    </Container>
  </>
);

export default MainLayout;

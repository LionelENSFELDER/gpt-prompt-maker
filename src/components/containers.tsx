import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
interface FixedContainerProps {
  children: React.ReactNode
}
export const FixedContainer = ({ children }: FixedContainerProps) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='xl'>
        {children}
      </Container>
    </React.Fragment >
  );
}

export const MainContainer = ({ children }: FixedContainerProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      sx={{ mx: 0 }}
    >
      {children}
    </Box>
  )
}

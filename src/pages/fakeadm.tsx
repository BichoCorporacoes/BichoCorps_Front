import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const FakeAdmPage = () => {
  return (
    <Container  sx={{ mt: 4 }} maxWidth="sm">
      <Grid item>
        <Button variant="contained" color="primary">
          Button 1
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="secondary">
          Button 2
        </Button>
      </Grid>
    </Container>
  );
};

export default FakeAdmPage;

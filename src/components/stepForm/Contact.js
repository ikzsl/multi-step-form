import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;

  return (
    <Container maxWidth='xs'>
      <h3>Contact</h3>
      <TextField
        label='Phone'
        name='phone'
        value={phone}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />
      <TextField
        label='Email'
        name='email'
        value={email}
        onChange={setForm}
        margin='normal'
        variant='outlined'
        autoComplete='off'
        fullWidth
      />
      <div style={{ marginTop: '1rem' }}>
        <Button
          variant='contained'
          color='secondary'
          style={{ marginRight: '1rem' }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};

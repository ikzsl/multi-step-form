import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
  } = formData;

  return (
    <Container maxWidth='xs'>
      <h3>Review</h3>
      <RenderAccordeon
        summary='Names'
        go={go}
        details={[
          { 'First Name': firstName },
          { 'Last Name': lastName },
          { 'Nick Name': nickName },
        ]}
      />
      <RenderAccordeon
        summary='Address'
        go={go}
        details={[
          { Address: address },
          { City: city },
          { State: state },
          { Zip: zip },
        ]}
      />
      <RenderAccordeon
        summary='Contact'
        go={go}
        details={[{ Phone: phone }, { Email: email }]}
      />

      <Button
        variant='contained'
        color='primary'
        style={{ marginTop: '1.5rem' }}
        onClick={() => go('submit')}
      >
        Submit
      </Button>
    </Container>
  );
};

export const RenderAccordeon = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];
          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}
        <IconButton
          color='primary'
          onClick={() => go(`${summary.toLowerCase()}`)}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetails>
  </Accordion>
);

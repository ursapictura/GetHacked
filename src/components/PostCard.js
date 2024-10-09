import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export default function PostCard({ userObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userObj.picture.large} />
      <Card.Body>
        <Card.Title>
          {userObj.name.first} {userObj.name.last}
        </Card.Title>
        <Card.Text>{userObj.location.country}</Card.Text>
        <Button>Favorite</Button>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = {
  userObj: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    picture: PropTypes.shape({
      large: PropTypes.string,
    }),
    location: PropTypes.shape({
      country: PropTypes.string,
    }),
  }).isRequired,
};

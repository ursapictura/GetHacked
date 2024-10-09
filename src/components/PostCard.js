import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export default function PostCard({ userObj }) {
  const [favorited, setFavorited] = useState(false);
  const [details, setDetails] = useState(false);

  const handleFavoriteClick = () => {
    setFavorited((prev) => !prev);
  };

  const handleDetailsClick = () => {
    setDetails((prev) => !prev);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userObj.picture.large} />
      <Card.Body>
        <Card.Title>
          {userObj.name.first} {userObj.name.last}
        </Card.Title>
        <Card.Text>{userObj.location.country}</Card.Text>
        {details && (
          <div>
            <p>Email: {userObj.email}</p>
            <p>Phone: {userObj.phone}</p>
            <p>Age: {userObj.dob.age}</p>
          </div>
        )}
        <Button variant={favorited ? 'danger' : 'light'} onClick={handleFavoriteClick}>
          Favorite
        </Button>
        <Button variant="primary" onClick={handleDetailsClick}>
          Details
        </Button>
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
    email: PropTypes.string,
    phone: PropTypes.string,
    dob: PropTypes.shape({
      age: PropTypes.number,
    }),
  }).isRequired,
};
